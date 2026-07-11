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
function initGallery() {
  const thumbs = document.querySelectorAll('.gallery-thumb-v');
  const mainImg = document.getElementById('gallery-main-img');
  const mainEmoji = document.getElementById('gallery-main-emoji');

  if (!thumbs.length) return;

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const imgSrc = thumb.dataset.img;
      const emoji = thumb.dataset.emoji;
      const c1 = thumb.dataset.c1;
      const c2 = thumb.dataset.c2;

      if (imgSrc && mainImg) {
        mainImg.src = imgSrc;
        mainImg.style.display = 'block';
        if (mainEmoji) mainEmoji.style.display = 'none';
      } else if (mainEmoji) {
        mainEmoji.style.setProperty('--c1', c1);
        mainEmoji.style.setProperty('--c2', c2);
        mainEmoji.textContent = emoji;
        mainEmoji.style.display = 'flex';
        if (mainImg) mainImg.style.display = 'none';
      }
    });
  });
}

// ─── FILTER TABS ───────────────────────────────
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      renderCategoryFilter(filter);
    });
  });
}

function renderCategoryFilter(filter) {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRODUCTS === 'undefined') return;
  const cat = grid.dataset.cat;
  const products = filter === 'all'
    ? getProductsByCategory(cat)
    : getProductsBySubcategory(cat, filter);
  grid.innerHTML = products.map(renderProductCard).join('');
  requestAnimationFrame(() => {
    grid.querySelectorAll('.product-card').forEach((el, i) => {
      setTimeout(() => el.style.opacity = '1', i * 40);
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

  if (waBtn) { waBtn.classList.add('btn-secondary'); waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Tirar dúvidas'; }

  if (p.precoTipo === 'faixas') {
    priceWrap.innerHTML = `<span class="product-price-from">a partir de</span> <span class="product-detail-price">${formatPrice(p.faixas[0].preco)}</span>`;
    let selected = 0;
    const renderTiers = () => {
      purchaseArea.innerHTML = `
        <div class="price-tier-table">
          ${p.faixas.map((f, i) => `
            <div class="price-tier-row ${i === selected ? 'active' : ''}" data-i="${i}">
              <span class="price-tier-qtd">${f.qtd} ${f.qtd === 1 ? 'unidade' : 'unidades'}</span>
              <span class="price-tier-unit">${formatPrice(f.preco / f.qtd)} /un</span>
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
        cartAdd({ id: p.id, nome: p.nome, imagem: p.imagem, emoji: p.emoji, precoUnit: f.preco, qtd: 1, faixaLabel: `${f.qtd} ${f.qtd === 1 ? 'unidade' : 'unidades'}` });
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

  // Galeria: usa array imagens se existir, senão repete imagem 3x como placeholder
  const imgs = (p.imagens && p.imagens.length) ? p.imagens : [p.imagem, p.imagem, p.imagem];

  const mainImg = document.getElementById('gallery-main-img');
  const mainEmoji = document.getElementById('gallery-main-emoji');

  if (imgs[0] && mainImg) {
    mainImg.src = imgs[0];
    mainImg.style.display = 'block';
    if (mainEmoji) mainEmoji.style.display = 'none';
  } else if (mainEmoji) {
    mainEmoji.style.setProperty('--c1', p.cor1);
    mainEmoji.style.setProperty('--c2', p.cor2);
    mainEmoji.textContent = p.emoji;
  }

  const thumbEls = document.querySelectorAll('.gallery-thumb-v');
  const angles = ['135deg', '225deg', '315deg'];

  thumbEls.forEach((thumb, i) => {
    const imgSrc = imgs[i];
    thumb.dataset.img = imgSrc || '';
    thumb.dataset.emoji = p.emoji;
    thumb.dataset.c1 = p.cor1;
    thumb.dataset.c2 = p.cor2;
    if (imgSrc) {
      thumb.innerHTML = `<img src="${imgSrc}" alt="${p.nome}">`;
    } else {
      const inner = thumb.querySelector('.product-emoji-placeholder');
      if (inner) {
        inner.textContent = p.emoji;
        inner.style.background = `linear-gradient(${angles[i] || '135deg'}, ${p.cor1}, ${p.cor2})`;
        inner.style.height = '100%';
        inner.style.fontSize = '30px';
        inner.style.borderRadius = '0';
      }
    }
    if (i === 0) thumb.classList.add('active');
  });

  // Page category title
  const pageCat = {
    'adesivos': 'Adesivos',
    'action-figures': 'Figures',
    'funko-pop': 'Funko Pop',
    'topo-de-bolo': 'Topo de Bolo',
    'caixas-milk': 'Caixa Milk',
    'cartoes': 'Cartões de Visita',
    'figurinhas-copa': 'Figurinhas Copa'
  };
  const pageCatEl = document.getElementById('page-category-title');
  if (pageCatEl) pageCatEl.textContent = pageCat[p.categoria] || p.categoria;

  // WhatsApp link
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) waBtn.href = buildWhatsAppLink(p);

  initGallery();
}

// ─── INICIALIZAÇÃO CATEGORIA ───────────────────
function initCategoryPage() {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRODUCTS === 'undefined') return;
  renderCategoryFilter('all');
  initFilterTabs();
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

// ─── BOOT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') initHome();
  else if (page === 'produto.html') initProductPage();
  else if (['action-figures.html', 'funko-pop.html'].includes(page)) initCategoryPage();
  else if (['adesivos.html', 'topo-de-bolo.html', 'caixas-milk.html', 'cartoes.html', 'figurinhas.html'].includes(page)) {
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
