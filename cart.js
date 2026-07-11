/* ══════════════════════════════════════════════
   NEXUS — cart.js
   Carrinho local (localStorage) + finalizar pedido no WhatsApp.
   Depende de produtos.js (WHATSAPP, formatPrice) já carregado antes.
══════════════════════════════════════════════ */

const CART_KEY = 'nx-cart';

function cartGet() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function cartSave(items) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {}
  renderCartDrawer();
}

function cartLineTotal(item) {
  return item.precoUnit * item.qtd;
}

function cartTotal() {
  return cartGet().reduce((sum, item) => sum + cartLineTotal(item), 0);
}

function cartCount() {
  return cartGet().reduce((sum, item) => sum + item.qtd, 0);
}

// item: { id, nome, imagem, precoUnit, qtd, faixaLabel }
// Para produtos 'faixas', cada faixa escolhida vira uma linha própria (chave = id + faixaLabel),
// assim dá pra ter o mesmo produto em duas faixas diferentes no carrinho.
function cartAdd(item) {
  const items = cartGet();
  const key = item.id + '::' + (item.faixaLabel || '');
  const existing = items.find(i => (i.id + '::' + (i.faixaLabel || '')) === key);
  if (existing) {
    existing.qtd += item.qtd;
  } else {
    items.push(item);
  }
  cartSave(items);
  openCartDrawer();
}

function cartRemove(index) {
  const items = cartGet();
  items.splice(index, 1);
  cartSave(items);
}

function cartSetQtd(index, qtd) {
  const items = cartGet();
  if (!items[index]) return;
  items[index].qtd = Math.max(1, qtd);
  cartSave(items);
}

function cartClear() {
  cartSave([]);
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (overlay) overlay.classList.add('open');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
}

function renderCartDrawer() {
  const items = cartGet();
  const count = cartCount();

  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.classList.toggle('hidden', count === 0);
  });

  const list = document.getElementById('cart-drawer-items');
  if (list) {
    if (!items.length) {
      list.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.<br>Adicione produtos para continuar.</div>';
    } else {
      list.innerHTML = items.map((item, i) => `
        <div class="cart-item">
          <div class="cart-item-img">
            ${item.imagem ? `<img src="${item.imagem}" alt="${item.nome}">` : (item.emoji || '🛍️')}
          </div>
          <div>
            <div class="cart-item-name">${item.nome}</div>
            <div class="cart-item-meta">${item.faixaLabel || formatPrice(item.precoUnit) + ' /un'}</div>
            <div class="cart-item-qty">
              <button type="button" onclick="cartSetQtd(${i}, ${item.qtd - 1})">−</button>
              <span>${item.qtd}</span>
              <button type="button" onclick="cartSetQtd(${i}, ${item.qtd + 1})">+</button>
            </div>
          </div>
          <div class="cart-item-right">
            <span class="cart-item-subtotal">${formatPrice(cartLineTotal(item))}</span>
            <button type="button" class="cart-item-remove" onclick="cartRemove(${i})"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `).join('');
    }
  }

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatPrice(cartTotal());

  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = items.length === 0;
}

function buildWhatsAppCartLink() {
  const items = cartGet();
  if (!items.length) return null;

  const linhas = items.map((item, i) =>
    `${i + 1}. *${item.nome}* — ${item.faixaLabel || item.qtd + ' un'} — ${formatPrice(cartLineTotal(item))}`
  );

  const msg =
    `Olá! Gostaria de fazer o seguinte pedido na Nexus:\n\n` +
    linhas.join('\n') +
    `\n\n*Total: ${formatPrice(cartTotal())}*\n\nPodem confirmar disponibilidade e forma de pagamento?`;

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function quickAddToCart(id) {
  const p = typeof getProductById === 'function' ? getProductById(id) : null;
  if (!p || p.precoTipo === 'faixas' || p.precoTipo === 'orcamento') return;
  cartAdd({
    id: p.id,
    nome: p.nome,
    imagem: p.imagem,
    emoji: p.emoji,
    precoUnit: p.preco,
    qtd: 1,
  });
}

function checkoutCart() {
  const link = buildWhatsAppCartLink();
  if (!link) return;
  window.open(link, '_blank');
  cartClear();
  closeCartDrawer();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCartDrawer();

  const openBtns = document.querySelectorAll('.cart-btn');
  openBtns.forEach(btn => btn.addEventListener('click', openCartDrawer));

  const closeBtn = document.getElementById('cart-drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);

  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCartDrawer);

  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutCart);
});
