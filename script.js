/* ══════════════════════════════════════════════
   NEXUS — script.js
══════════════════════════════════════════════ */

// ─── TEMA ──────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

function safeStorage(op, key, val) {
  try {
    if (op === 'get') return localStorage.getItem(key);
    if (op === 'set') localStorage.setItem(key, val);
  } catch (e) { return null; }
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  safeStorage('set', 'nx-theme', theme);
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
  }
}

(function () {
  const saved = safeStorage('get', 'nx-theme') || 'light';
  html.setAttribute('data-theme', saved);
})();

if (toggleBtn) {
  applyTheme(safeStorage('get', 'nx-theme') || 'light');
  toggleBtn.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

// ─── FADE-UP AO SCROLL ─────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => obs.observe(el));
}

// ─── ACTIVE NAV ────────────────────────────────
(function () {
  const links = document.querySelectorAll('.header-nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
})();

// ─── GALERIA PRODUTO ───────────────────────────
// Mostra só as imagens reais do produto (1 a N) — nunca completa com emoji.
function renderGallery(p) {
  const galleryCol = document.querySelector('.gallery-col');
  const thumbsWrap = document.getElementById('gallery-thumbs-v');
  const mainImg = document.getElementById('gallery-main-img');
  const mainEmoji = document.getElementById('gallery-main-emoji');
  if (!thumbsWrap || !mainImg || !mainEmoji) return;

  const imgs = (p.imagens && p.imagens.length) ? p.imagens : (p.imagem ? [p.imagem] : []);

  if (!imgs.length) {
    thumbsWrap.innerHTML = '';
    thumbsWrap.style.display = 'none';
    if (galleryCol) galleryCol.classList.add('no-thumbs');
    mainImg.style.display = 'none';
    mainEmoji.style.setProperty('--c1', p.cor1);
    mainEmoji.style.setProperty('--c2', p.cor2);
    mainEmoji.textContent = p.emoji;
    mainEmoji.style.display = 'flex';
    return;
  }

  mainEmoji.style.display = 'none';
  mainImg.style.display = 'block';
  mainImg.src = imgs[0];

  if (imgs.length === 1) {
    thumbsWrap.innerHTML = '';
    thumbsWrap.style.display = 'none';
    if (galleryCol) galleryCol.classList.add('no-thumbs');
    return;
  }

  if (galleryCol) galleryCol.classList.remove('no-thumbs');
  thumbsWrap.style.display = 'flex';
  thumbsWrap.innerHTML = imgs.map((src, i) => `
    <div class="gallery-thumb-v${i === 0 ? ' active' : ''}" data-img="${src}">
      <img src="${src}" alt="${p.nome}">
    </div>`).join('');

  thumbsWrap.querySelectorAll('.gallery-thumb-v').forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbsWrap.querySelectorAll('.gallery-thumb-v').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.dataset.img;
    });
  });
}

// ─── INICIALIZAÇÃO HOME ────────────────────────
function initHome() {
  const sections = [
    { id: 'grid-mais-vendidos', fn: () => getMaisVendidos(5) },
    { id: 'grid-adesivos',      fn: () => getTopByCategory('adesivos', 5) },
    { id: 'grid-funko-pop',     fn: () => getTopByCategory('funko-pop', 5) },
    { id: 'grid-action-figures',fn: () => getTopByCategory('action-figures', 5) },
    { id: 'grid-topo-bolo',     fn: () => getTopByCategory('topo-de-bolo', 5) },
    { id: 'grid-caixas-milk',   fn: () => getTopByCategory('caixas-milk', 5) },
  ];

  sections.forEach(({ id, fn }) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = fn().map(renderProductCard).join('');
  });
}

// ─── ÁREA DE COMPRA (preço + faixas/quantidade/orçamento) ──
function renderPurchaseArea(p) {
  const priceWrap = document.getElementById('product-pricing-wrap');
  const purchaseArea = document.getElementById('product-purchase-area');
  const waBtn = document.getElementById('whatsapp-btn');
  if (!priceWrap || !purchaseArea) return;

  if (p.precoTipo === 'orcamento') {
    priceWrap.innerHTML = `<span class="product-detail-price product-price-orcamento">Sob orçamento</span>`;
    purchaseArea.innerHTML = `<div class="product-orcamento-note"><i class="fa-solid fa-circle-info"></i> Cada peça é feita sob encomenda — chame no WhatsApp com os detalhes (tamanho, cores, referências) para receber o valor.</div>`;
    if (waBtn) { waBtn.classList.remove('btn-secondary'); waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Pedir orçamento'; }
    return;
  }

  if (waBtn) { waBtn.classList.add('btn-secondary'); waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Comprar Agora'; }

  if (p.precoTipo === 'faixas') {
    const isCartela = p.faixaUnidade === 'cartela';
    const qtdLabel = f => isCartela
      ? `${f.qtd} ${f.qtd === 1 ? 'cartela' : 'cartelas'}`
      : `${f.qtd} ${f.qtd === 1 ? 'unidade' : 'unidades'}`;
    const priceLineLabel = f => {
      const porCartela = formatPrice(f.preco / f.qtd);
      if (!isCartela) return `${porCartela} /un`;
      const porAdesivo = formatPrice((f.preco / f.qtd) / STICKERS_POR_CARTELA);
      return `${porCartela} /cartela · ${porAdesivo} /adesivo`;
    };

    priceWrap.innerHTML = `<span class="product-price-from">${isCartela ? 'a cartela, a partir de' : 'a partir de'}</span> <span class="product-detail-price">${formatPrice(p.faixas[0].preco)}</span>`;
    let selected = 0;
    const renderTiers = () => {
      purchaseArea.innerHTML = `
        ${isCartela ? `<div class="product-detail-total" style="margin-bottom:12px;">Cada cartela vem com <strong>${STICKERS_POR_CARTELA} adesivos</strong>.</div>` : ''}
        <div class="price-tier-table">
          ${p.faixas.map((f, i) => `
            <div class="price-tier-row ${i === selected ? 'active' : ''}" data-i="${i}">
              <span class="price-tier-qtd">${qtdLabel(f)}</span>
              <span class="price-tier-unit">${priceLineLabel(f)}</span>
              <span class="price-tier-total">${formatPrice(f.preco)}</span>
            </div>`).join('')}
        </div>
        <button type="button" class="btn-whatsapp" id="add-cart-btn">
          <i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho
        </button>`;
      purchaseArea.querySelectorAll('.price-tier-row').forEach(row => {
        row.addEventListener('click', () => { selected = Number(row.dataset.i); renderTiers(); });
      });
      document.getElementById('add-cart-btn').addEventListener('click', () => {
        const f = p.faixas[selected];
        cartAdd({ id: p.id, nome: p.nome, imagem: p.imagem, emoji: p.emoji, precoUnit: f.preco, qtd: 1, faixaLabel: qtdLabel(f) });
      });
    };
    renderTiers();
    return;
  }

  // unidade | unico
  priceWrap.innerHTML = `<span class="product-detail-price">${formatPrice(p.preco)}</span>${p.precoTipo === 'unidade' ? '<span class="product-price-suffix">/un</span>' : ''}`;
  let qty = 1;
  const renderQty = () => {
    purchaseArea.innerHTML = `
      <div class="product-qty-row">
        <span class="product-qty-label">Quantidade</span>
        <div class="qty-stepper">
          <button type="button" id="qty-minus">−</button>
          <input type="number" id="qty-input" min="1" value="${qty}">
          <button type="button" id="qty-plus">+</button>
        </div>
      </div>
      <div class="product-detail-total">Total: <strong>${formatPrice(p.preco * qty)}</strong></div>
      <button type="button" class="btn-whatsapp" id="add-cart-btn">
        <i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho
      </button>`;
    document.getElementById('qty-minus').addEventListener('click', () => { qty = Math.max(1, qty - 1); renderQty(); });
    document.getElementById('qty-plus').addEventListener('click', () => { qty = qty + 1; renderQty(); });
    document.getElementById('qty-input').addEventListener('change', e => { qty = Math.max(1, parseInt(e.target.value, 10) || 1); renderQty(); });
    document.getElementById('add-cart-btn').addEventListener('click', () => {
      cartAdd({ id: p.id, nome: p.nome, imagem: p.imagem, emoji: p.emoji, precoUnit: p.preco, qtd });
    });
  };
  renderQty();
}

// ─── INICIALIZAÇÃO PÁGINA PRODUTO ──────────────
function initProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (!id || typeof PRODUCTS === 'undefined') return;

  const p = getProductById(id);
  if (!p) { document.querySelector('.product-page').innerHTML = '<p>Produto não encontrado.</p>'; return; }

  document.title = p.nome + ' — Nexus';

  // Category label
  const catEl = document.getElementById('product-cat');
  if (catEl) catEl.textContent = p.serie;

  // Title
  const titleEl = document.getElementById('product-title');
  if (titleEl) titleEl.textContent = p.nome;

  // Preço + faixas/quantidade/orçamento
  renderPurchaseArea(p);

  // Descrição
  const descEl = document.getElementById('product-desc');
  if (descEl) descEl.innerHTML = p.descricao.split('\n').map(line => `<p>${line}</p>`).join('');

  // Specs
  const specsEl = document.getElementById('product-specs');
  if (specsEl) specsEl.innerHTML = p.specs.map(s => `<li><i class="fa-solid fa-check"></i>${s}</li>`).join('');

  // Galeria: só as imagens reais do produto
  renderGallery(p);

  // Page category title
  const pageCat = {
    'adesivos': 'Adesivos',
    'action-figures': 'Action Figures',
    'funko-pop': 'Funko Pop',
    'topo-de-bolo': 'Topo de Bolo',
    'caixas-milk': 'Caixa Milk',
    'cartoes': 'Cartões de Visita',
  };
  const pageCatEl = document.getElementById('page-category-title');
  if (pageCatEl) pageCatEl.textContent = pageCat[p.categoria] || p.categoria;

  // WhatsApp link
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) waBtn.href = buildWhatsAppLink(p);
}

// ─── INICIALIZAÇÃO POR SUBSECTION ─────────────
function renderSubsections() {
  document.querySelectorAll('[data-subsection]').forEach(grid => {
    const cat = grid.dataset.cat;
    const sub = grid.dataset.subsection;
    const products = getProductsBySubcategory(cat, sub);
    grid.innerHTML = products.map(renderProductCard).join('');
  });
}

// ─── INICIALIZAÇÃO PERSONALIZADOS ─────────────
function initPersonalizadosPage() {
  const grid = document.getElementById('grid-personalizados');
  if (!grid) return;
  const produtos = [
    ...getCartoesPersonalizados(),
    ...getFunkosPersonalizados(),
    ...getAdesivosPersonalizados(),
    ...getFigurinhasPersonalizadas(),
    ...getCaixaMilkPersonalizada(),
  ];
  grid.innerHTML = produtos.map(renderProductCard).join('');
}

// ─── BOOT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') initHome();
  else if (page === 'produto.html') initProductPage();
  else if (page === 'personalizados.html') initPersonalizadosPage();
  else if (['adesivos.html', 'action-figures.html', 'funko-pop.html', 'topo-de-bolo.html', 'caixas-milk.html'].includes(page)) {
    renderSubsections();
  }

  // Fade up trigger for statically rendered elements
  document.querySelectorAll('.fade-up').forEach(el => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('show'); io.disconnect(); }
    }, { threshold: 0.08 });
    io.observe(el);
  });

  // Fallback: force-show all fade-up elements after 1.5s (catches mobile IntersectionObserver failures)
  setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.show)').forEach(el => el.classList.add('show'));
  }, 1500);
});
