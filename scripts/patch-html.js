/* Patch único: adiciona botão/drawer de carrinho, include de cart.js e os
   2 links novos (Cartões, Figurinhas Copa) em todas as páginas HTML.
   Rode uma vez com: node scripts/patch-html.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FILES = [
  'index.html', 'adesivos.html', 'action-figures.html', 'funko-pop.html',
  'topo-de-bolo.html', 'caixas-milk.html', 'produto.html', 'sobre.html',
];

const CART_BTN = `      <button class="cart-btn" id="cart-open-btn" aria-label="Carrinho">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-badge hidden">0</span>
      </button>
      <button class="theme-toggle" id="theme-toggle" aria-label="Mudar tema">`;

const CART_DRAWER = `<!-- CARRINHO -->
<div class="cart-overlay" id="cart-overlay"></div>
<aside class="cart-drawer" id="cart-drawer">
  <div class="cart-drawer-header">
    <h3>Seu carrinho</h3>
    <button type="button" class="cart-drawer-close" id="cart-drawer-close" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="cart-drawer-items" id="cart-drawer-items"></div>
  <div class="cart-drawer-footer">
    <div class="cart-total-row"><span>Total</span><span id="cart-total">R$ 0,00</span></div>
    <button type="button" class="btn-whatsapp" id="cart-checkout-btn">
      <i class="fa-brands fa-whatsapp"></i> Finalizar pedido no WhatsApp
    </button>
  </div>
</aside>

<script src="produtos.js"></script>`;

const CATEGORIES_EXTRA = (activeSlug) => `      <a href="cartoes.html" class="category-item">
        <div class="category-circle"${activeSlug === 'cartoes' ? ' style="border-color: var(--primary);"' : ''}>
          <i class="fa-solid fa-id-card" style="font-size:22px;color:${activeSlug === 'cartoes' ? 'var(--primary)' : 'var(--text-2)'};"></i>
        </div>
        <span class="category-label"${activeSlug === 'cartoes' ? ' style="color: var(--primary);"' : ''}>Cartões</span>
      </a>
      <a href="figurinhas.html" class="category-item">
        <div class="category-circle"${activeSlug === 'figurinhas-copa' ? ' style="border-color: var(--primary);"' : ''}>
          <i class="fa-solid fa-futbol" style="font-size:22px;color:${activeSlug === 'figurinhas-copa' ? 'var(--primary)' : 'var(--text-2)'};"></i>
        </div>
        <span class="category-label"${activeSlug === 'figurinhas-copa' ? ' style="color: var(--primary);"' : ''}>Figurinhas Copa</span>
      </a>
    </div>
  </div>
</section>`;

const FOOTER_EXTRA = `        <a href="caixas-milk.html">Caixas Milk</a>
        <a href="cartoes.html">Cartões de Visita</a>
        <a href="figurinhas.html">Figurinhas Copa</a>`;

let changed = 0;
FILES.forEach(file => {
  const fp = path.join(ROOT, file);
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;

  // 1) botão de carrinho no header
  if (!html.includes('id="cart-open-btn"')) {
    html = html.replace(
      `      <button class="theme-toggle" id="theme-toggle" aria-label="Mudar tema">`,
      CART_BTN
    );
  }

  // 2) drawer do carrinho + <script src="produtos.js">
  if (!html.includes('id="cart-drawer"')) {
    html = html.replace(`<script src="produtos.js"></script>`, CART_DRAWER);
  }

  // 3) cart.js entre produtos.js e script.js
  if (!html.includes('cart.js')) {
    html = html.replace(
      `<script src="produtos.js"></script>\n<script src="script.js"></script>`,
      `<script src="produtos.js"></script>\n<script src="cart.js"></script>\n<script src="script.js"></script>`
    );
  }

  // 4) categorias novas na categories-row (só quando a página já tem essa seção)
  if (html.includes('class="categories-row"') && !html.includes('href="cartoes.html" class="category-item"')) {
    html = html.replace(`    </div>\n  </div>\n</section>\n\n<div class="container">`, (m) => m); // no-op guard
    html = html.replace(
      /(      <a href="caixas-milk\.html" class="category-item">[\s\S]*?<\/a>\n)(    <\/div>\n  <\/div>\n<\/section>)/,
      (full, lastItem, tail) => `${lastItem}${CATEGORIES_EXTRA(null)}`
    );
  }

  // 5) links novos no footer "Produtos"
  if (!html.includes('href="cartoes.html">Cartões de Visita</a>')) {
    html = html.replace(`        <a href="caixas-milk.html">Caixas Milk</a>`, FOOTER_EXTRA);
  }

  if (html !== before) {
    fs.writeFileSync(fp, html, 'utf8');
    changed++;
    console.log('patched:', file);
  } else {
    console.log('sem mudanças:', file);
  }
});

console.log(`\n${changed} arquivo(s) alterado(s).`);
