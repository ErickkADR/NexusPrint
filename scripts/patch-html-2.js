/* Patch: troca os links de Cartões + Figurinhas Copa (removidos) por um único
   link "Personalizados", tanto na categories-row quanto no footer.
   Rode uma vez com: node scripts/patch-html-2.js */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FILES = [
  'index.html', 'adesivos.html', 'action-figures.html', 'funko-pop.html',
  'topo-de-bolo.html', 'caixas-milk.html', 'produto.html', 'sobre.html',
];

const OLD_CATEGORIES_BLOCK = `      <a href="cartoes.html" class="category-item">
        <div class="category-circle">
          <i class="fa-solid fa-id-card" style="font-size:22px;color:var(--text-2);"></i>
        </div>
        <span class="category-label">Cartões</span>
      </a>
      <a href="figurinhas.html" class="category-item">
        <div class="category-circle">
          <i class="fa-solid fa-futbol" style="font-size:22px;color:var(--text-2);"></i>
        </div>
        <span class="category-label">Figurinhas Copa</span>
      </a>`;

const NEW_CATEGORIES_BLOCK = `      <a href="personalizados.html" class="category-item">
        <div class="category-circle">
          <i class="fa-solid fa-star" style="font-size:22px;color:var(--text-2);"></i>
        </div>
        <span class="category-label">Personalizados</span>
      </a>`;

const OLD_FOOTER_LINKS = `        <a href="cartoes.html">Cartões de Visita</a>
        <a href="figurinhas.html">Figurinhas Copa</a>`;

const NEW_FOOTER_LINKS = `        <a href="personalizados.html">Personalizados</a>`;

let changed = 0;
FILES.forEach(file => {
  const fp = path.join(ROOT, file);
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;

  if (html.includes(OLD_CATEGORIES_BLOCK)) {
    html = html.replace(OLD_CATEGORIES_BLOCK, NEW_CATEGORIES_BLOCK);
  }
  if (html.includes(OLD_FOOTER_LINKS)) {
    html = html.replace(OLD_FOOTER_LINKS, NEW_FOOTER_LINKS);
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
