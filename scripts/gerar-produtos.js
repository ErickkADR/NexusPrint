/*
  Gera produtos.js a partir das fotos reais em D:\NEXUS\PRODUTOS + tabela de
  preços do flyer Nexus Print. Rode com: node scripts/gerar-produtos.js
  Não edite produtos.js à mão para mudanças de catálogo — mude aqui e re-rode.
*/
const fs = require('fs');
const path = require('path');

const SRC = 'D:/NEXUS/PRODUTOS';
const SITE_ROOT = path.resolve(__dirname, '..');
const IMG_DEST_ROOT = path.join(SITE_ROOT, 'images/produtos');
const OUT_FILE = path.join(SITE_ROOT, 'produtos.js');

// Limpa a pasta de imagens geradas antes de copiar de novo, pra nunca sobrar
// arquivo órfão de uma categorização antiga (ex.: produto que mudou de categoria).
fs.rmSync(IMG_DEST_ROOT, { recursive: true, force: true });

/* ─── utils ─────────────────────────────────────────────── */
function slugify(str) {
  let out = '';
  for (const ch of str.normalize('NFD')) {
    const code = ch.codePointAt(0);
    if (code >= 0x0300 && code <= 0x036f) continue; // marca diacrítica combinante
    out += ch;
  }
  return out
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
function naturalSort(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}
const IMG_EXTS = ['.png', '.jpg', '.jpeg'];
// Lista as imagens de uma pasta (png/jpg/jpeg). Um arquivo com "-thumb" no
// nome vem sempre primeiro (é a foto de capa escolhida à mão); o resto segue
// em ordem natural.
function listImages(dir) {
  const files = naturalSort(fs.readdirSync(dir).filter(f => IMG_EXTS.includes(path.extname(f).toLowerCase())));
  const thumbs = files.filter(f => /-thumb\./i.test(f));
  const rest = files.filter(f => !/-thumb\./i.test(f));
  return [...thumbs, ...rest];
}
function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function copyInto(srcFile, destDir) {
  ensureDir(destDir);
  const dest = path.join(destDir, path.basename(srcFile));
  fs.copyFileSync(srcFile, dest);
  return dest;
}
function toSiteRelative(absPath) {
  return path.relative(SITE_ROOT, absPath).split(path.sep).join('/');
}
function jsStr(s) { return JSON.stringify(s); }

const counts = {}; // categoria/subcategoria -> n
function bump(cat, sub) {
  const key = `${cat} / ${sub}`;
  counts[key] = (counts[key] || 0) + 1;
}

/* ─── estilo de fallback (emoji) por categoria ─────────────── */
const STYLE = {
  'adesivos':        { emoji: '🎨', cor1: '#FF6600', cor2: '#FF8533' },
  'action-figures':  { emoji: '🗿', cor1: '#6366F1', cor2: '#A855F7' },
  'funko-pop':       { emoji: '🧸', cor1: '#FF4500', cor2: '#FFD700' },
  'topo-de-bolo':    { emoji: '🎂', cor1: '#FF6B6B', cor2: '#FF8E53' },
  'caixas-milk':     { emoji: '📦', cor1: '#2ECC71', cor2: '#27AE60' },
  'cartoes':         { emoji: '🪪', cor1: '#2C3E50', cor2: '#3498DB' },
  'figurinhas-copa': { emoji: '⚽', cor1: '#FFD700', cor2: '#FF8C00' },
};

/* ─── dicionários de nomes reconhecíveis ───────────────────── */
const ANIME_NAMES = {
  asta: 'Asta', edwardelric: 'Edward Elric', endo: 'Endeavor', goku: 'Goku',
  gon: 'Gon Freecss', ichigoi: 'Ichigo Kurosaki', itadori: 'Itadori Yuji',
  kira: 'Yoshikage Kira', luffy: 'Luffy', midoriya: 'Midoriya',
  naruto: 'Naruto', saitama: 'Saitama', seiya: 'Seiya de Pégaso',
  sungjinwoo: 'Sung Jin-Woo', tanjiro: 'Tanjiro', thorfinn: 'Thorfinn',
};
const BLUELOCK_NAMES = {
  aiku: 'Aiku', bachira: 'Bachira', barou: 'Barou', 'bunny-extras': 'Bunny',
  'charles-extras': 'Charles', chigiri: 'Chigiri', gagamaru: 'Gagamaru',
  hiori: 'Hiori', 'hugo-extras': 'Hugo', isagi: 'Isagi',
  itoshisae: 'Itoshi Sae', 'kaiser-extras': 'Kaiser', karasu: 'Karasu',
  kunigami: 'Kunigami', kurona: 'Kurona', 'loki-extras': 'Loki', nagi: 'Nagi',
  'ness-extras': 'Ness', niko: 'Niko', otoya: 'Otoya', raichi: 'Raichi',
  reo: 'Reo', rin: 'Rin Itoshi', shidou: 'Shidou',
};

/* ─── serializador ──────────────────────────────────────────── */
function productToJs(p) {
  const l = [];
  l.push(`  {`);
  l.push(`    id: ${jsStr(p.id)},`);
  l.push(`    nome: ${jsStr(p.nome)},`);
  if (p.imagem) l.push(`    imagem: ${jsStr(p.imagem)},`);
  if (p.imagens && p.imagens.length > 1) l.push(`    imagens: [${p.imagens.map(jsStr).join(', ')}],`);
  l.push(`    categoria: ${jsStr(p.categoria)},`);
  l.push(`    subcategoria: ${jsStr(p.subcategoria)},`);
  l.push(`    serie: ${jsStr(p.serie)},`);
  l.push(`    precoTipo: ${jsStr(p.precoTipo)},`);
  if (p.precoTipo === 'faixas') {
    l.push(`    faixas: ${p.faixasConst},`);
    if (p.faixaUnidade) l.push(`    faixaUnidade: ${jsStr(p.faixaUnidade)},`);
  } else if (p.precoTipo !== 'orcamento') {
    l.push(`    preco: ${p.precoConst || p.preco},`);
  }
  l.push(`    descricao: ${jsStr(p.descricao)},`);
  l.push(`    specs: [${p.specs.map(jsStr).join(', ')}],`);
  l.push(`    emoji: ${jsStr(p.emoji)}, cor1: ${jsStr(p.cor1)}, cor2: ${jsStr(p.cor2)},`);
  l.push(`    destaque: ${p.destaque ? 'true' : 'false'}`);
  l.push(`  }`);
  return l.join('\n');
}

const PRODUCTS = [];
let usedIds = new Set();
function addProduct(p) {
  let id = p.id, n = 2;
  while (usedIds.has(id)) { id = `${p.id}-${n++}`; }
  usedIds.add(id);
  p.id = id;
  PRODUCTS.push(p);
  bump(p.categoria, p.subcategoria);
}

/* ═══════════════════ ADESIVOS ═══════════════════ */
(function adesivos() {
  const st = STYLE['adesivos'];

  // Autorais: autoral-1..11
  const autoraisDir = path.join(SRC, 'ADESIVOS/Autorais');
  const destAutorais = path.join(IMG_DEST_ROOT, 'adesivos/autorais');
  listImages(autoraisDir).forEach(file => {
    const n = file.match(/(\d+)/)?.[1] || '';
    const dest = copyInto(path.join(autoraisDir, file), destAutorais);
    addProduct({
      id: `ad-autoral-${n}`,
      nome: `Adesivo Autoral Nº${n}`,
      imagem: toSiteRelative(dest),
      categoria: 'adesivos', subcategoria: 'autorais', serie: 'Adesivo Autoral',
      precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
      descricao: 'Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).',
      specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou brilhante (a combinar)', 'Resistente à água e UV', 'Tamanho aproximado: 8×8 cm (personalizável)', 'Vendido por unidade'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  });

  // Personalizados: autoral-12/13 (continuam a numeração), casamento (galeria), gaviria (cartela), holográfico, transparente
  const persDir = path.join(SRC, 'ADESIVOS/Personalizados');
  const destPers = path.join(IMG_DEST_ROOT, 'adesivos/personalizados');

  ['autoral-12.png', 'autoral-13.png'].forEach(file => {
    const n = file.match(/(\d+)/)?.[1] || '';
    const dest = copyInto(path.join(persDir, file), destAutorais);
    addProduct({
      id: `ad-autoral-${n}`,
      nome: `Adesivo Autoral Nº${n}`,
      imagem: toSiteRelative(dest),
      categoria: 'adesivos', subcategoria: 'autorais', serie: 'Adesivo Autoral',
      precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
      descricao: 'Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).',
      specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou brilhante (a combinar)', 'Resistente à água e UV', 'Tamanho aproximado: 8×8 cm (personalizável)', 'Vendido por unidade'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  });

  const casamentoFiles = ['casamento-1.png', 'casamento-1.2.png', 'casamento-1.3.png'];
  const casamentoImgs = casamentoFiles.map(f => toSiteRelative(copyInto(path.join(persDir, f), destPers)));
  addProduct({
    id: 'ad-casamento-personalizado', nome: 'Adesivo Casamento Personalizado',
    imagem: casamentoImgs[0], imagens: casamentoImgs,
    categoria: 'adesivos', subcategoria: 'personalizados', serie: 'Adesivo Personalizado',
    precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
    descricao: 'Envie sua foto e entre em contato para criarmos juntos!\n\nAdesivo personalizado para lembrancinha de casamento, com nome e data do casal. Vinil de alta qualidade, resistente à água e UV. Vendido avulso — para grandes quantidades (lembrancinhas de festa), peça a cotação em cartela pelo WhatsApp.',
    specs: ['Material: Vinil de alta qualidade', 'Personalização: nomes e data', 'Resistente à água e UV', 'Tamanho aproximado: 6×6 cm', 'Vendido por unidade'],
    emoji: st.emoji, cor1: '#D4AF37', cor2: '#F5E6C8', destaque: false,
  });

  const gaviriaFiles = ['tattoo-gaviria.png', 'gaviria-1.png', 'gaviria-2.png'];
  const gaviriaImgs = gaviriaFiles.map(f => toSiteRelative(copyInto(path.join(persDir, f), destPers)));
  addProduct({
    id: 'ad-cartela-personalizados', nome: 'Cartela de Adesivos Personalizados',
    imagem: gaviriaImgs[0], imagens: gaviriaImgs,
    categoria: 'adesivos', subcategoria: 'personalizados', serie: 'Cartela de Adesivos',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_CARTELA_PADRAO', faixaUnidade: 'cartela',
    descricao: 'Envie sua foto e entre em contato para criarmos juntos!\n\nCartela de adesivos com sua marca, logo ou arte personalizada — como no exemplo da Gaviria Supplies. Corte de precisão e vinil de alta qualidade. Cada cartela vem com 24 adesivos.',
    specs: [`24 adesivos por cartela`, 'Material: Vinil de alta qualidade', 'Arte enviada pelo cliente ou criada pela Nexus', 'Resistente à água e UV', 'Preço por faixa de quantidade de cartelas'],
    emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: true,
  });

  const holoImg = toSiteRelative(copyInto(path.join(persDir, 'gaviria-holografico-1.png'), destPers));
  addProduct({
    id: 'ad-holografico-personalizado', nome: 'Adesivo Holográfico Personalizado',
    imagem: holoImg,
    categoria: 'adesivos', subcategoria: 'personalizados', serie: 'Cartela Holográfica',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_CARTELA_HOLOGRAFICO', faixaUnidade: 'cartela',
    descricao: 'Envie sua foto e entre em contato para criarmos juntos!\n\nAdesivo personalizado com efeito holográfico premium — sua arte com brilho e reflexo em arco-íris. Corte de precisão em vinil holográfico de alta qualidade. Cada cartela vem com 24 adesivos.',
    specs: [`24 adesivos por cartela`, 'Material: Vinil holográfico', 'Efeito arco-íris premium', 'Resistente à água e UV', 'Preço por faixa de quantidade de cartelas'],
    emoji: st.emoji, cor1: '#A855F7', cor2: '#6366F1', destaque: true,
  });

  const transpImg = toSiteRelative(copyInto(path.join(persDir, 'transparente-personalizado-1.png'), destPers));
  addProduct({
    id: 'ad-transparente-personalizado', nome: 'Adesivo Transparente Personalizado',
    imagem: transpImg,
    categoria: 'adesivos', subcategoria: 'personalizados', serie: 'Cartela Transparente',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_CARTELA_TRANSPARENTE', faixaUnidade: 'cartela',
    descricao: 'Entre em contato para criarmos juntos!\n\nAdesivo personalizado em vinil transparente — só a sua arte fica visível, sem fundo branco. Ideal para um acabamento premium em potes, embalagens e vidros. Cada cartela vem com 24 adesivos.',
    specs: [`24 adesivos por cartela`, 'Material: Vinil transparente', 'Sem fundo branco aparente', 'Resistente à água e UV', 'Preço por faixa de quantidade de cartelas'],
    emoji: st.emoji, cor1: '#00B4D8', cor2: '#90E0EF', destaque: false,
  });

  // Temáticos: aelin-1, elie-1, hollowknight-1/2/3, jake-1, majin-1, rimuru-1
  const temDir = path.join(SRC, 'ADESIVOS/Tematicos');
  const destTem = path.join(IMG_DEST_ROOT, 'adesivos/tematicos');
  const TEM_NAMES = {
    'aelin-1': 'Adesivo Aelin', 'elie-1': 'Adesivo Elie', 'jake-1': 'Adesivo Jake',
    'majin-1': 'Adesivo Majin Boo', 'rimuru-1': 'Adesivo Rimuru',
    'hollowknight-1': 'Adesivo Hollow Knight Nº1', 'hollowknight-2': 'Adesivo Hollow Knight Nº2', 'hollowknight-3': 'Adesivo Hollow Knight Nº3',
  };
  listImages(temDir).forEach(file => {
    const key = file.replace(/\.png$/i, '');
    const nome = TEM_NAMES[key] || `Adesivo ${key}`;
    const dest = copyInto(path.join(temDir, file), destTem);
    addProduct({
      id: `ad-tem-${slugify(key)}`, nome,
      imagem: toSiteRelative(dest),
      categoria: 'adesivos', subcategoria: 'tematicos', serie: 'Adesivo Temático',
      precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
      descricao: `${nome} em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.`,
      specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou brilhante (a combinar)', 'Resistente à água e UV', 'Tamanho aproximado: 8×8 cm', 'Vendido por unidade'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  });

  // Adesivos "clássicos" do site (arte própria Nexus, já existentes em images/) —
  // mantidos junto dos novos, conforme pedido do dono.
  const LEGACY = [
    { id: 'ad-luffy-gear5', nome: 'Luffy Gear 5', imagem: 'images/luffy.png', serie: 'One Piece', cor1: '#FF4500', cor2: '#FFD700', emoji: '🏴‍☠️', destaque: true,
      descricao: 'Adesivo recortado em vinil de alta qualidade do Monkey D. Luffy no Gear 5! Acabamento resistente à água e aos raios UV. Ideal para notebooks, skates, garrafas e capacetes.' },
    { id: 'ad-naruto-rasengan', nome: 'Naruto Rasengan', imagem: 'images/narutostk.png', serie: 'Naruto', cor1: '#FF8C00', cor2: '#FFA500', emoji: '⚡', destaque: true,
      descricao: 'Adesivo do Naruto Uzumaki com Rasengan em vinil de alta qualidade. Acabamento premium resistente à água e UV.' },
    { id: 'ad-goku-ultra', nome: 'Goku Ultra Instinct', imagem: 'images/gokustk.png', serie: 'Dragon Ball', cor1: '#6366F1', cor2: '#A855F7', emoji: '🐉', destaque: true,
      descricao: 'Adesivo premium do Son Goku em Ultra Instinct! Vinil de alta qualidade com acabamento especial que realça os detalhes da transformação.' },
    { id: 'ad-demon-slayer', nome: 'Tanjiro Kamado', imagem: 'images/tanjirostk.png', serie: 'Demon Slayer', cor1: '#006994', cor2: '#008B8B', emoji: '🗡️', destaque: false,
      descricao: 'Adesivo do Tanjiro Kamado de Demon Slayer em vinil de alta qualidade, com os detalhes do kimono xadrez e a espada da respiração da água.' },
    { id: 'ad-breaking-bad', nome: 'Heisenberg', imagem: 'images/misterwhitestk.png', serie: 'Breaking Bad', cor1: '#222222', cor2: '#555555', emoji: '🎩', destaque: false,
      descricao: 'Adesivo minimalista do Heisenberg (Walter White) de Breaking Bad, estilo sombra, em vinil de alta qualidade.' },
    { id: 'ad-stranger-things', nome: 'Stranger Things', imagem: 'images/elevenstk.png', serie: 'Stranger Things', cor1: '#8B0000', cor2: '#CC0000', emoji: '👾', destaque: false,
      descricao: 'Adesivo da logo de Stranger Things com efeito retrô anos 80, em vinil de alta qualidade com acabamento brilhante.' },
    { id: 'ad-rick-morty', nome: 'Rick e Morty', imagem: 'images/rick.png', serie: 'Rick and Morty', cor1: '#00B4D8', cor2: '#90E0EF', emoji: '🧪', destaque: false,
      descricao: 'Adesivo do duo mais hilário e científico da animação! Rick e Morty em vinil de alta qualidade com cores vibrantes.' },
    { id: 'ad-bob-esponja', nome: 'Bob Esponja', imagem: 'images/bobstk.png', serie: 'Bob Esponja', cor1: '#FFD700', cor2: '#FFA500', emoji: '🧽', destaque: false,
      descricao: 'O personagem mais querido do fundo do mar em adesivo de vinil! Bob Esponja feliz e pronto para animar seu objeto favorito.' },
    { id: 'ad-simpsons', nome: 'Homer Simpson', imagem: 'images/homerstk.png', serie: 'The Simpsons', cor1: '#FFD700', cor2: '#4169E1', emoji: '🍩', destaque: false,
      descricao: 'Adesivo do Homer Simpson em vinil de alta qualidade, o clássico personagem da família mais famosa da TV americana.' },
    { id: 'ad-mandalorian', nome: 'The Mandalorian', imagem: 'images/mandalorianstk.png', serie: 'Star Wars', cor1: '#708090', cor2: '#A0A0A0', emoji: '🪖', destaque: false,
      descricao: 'Este é o Caminho. Adesivo do Mandalorian com acabamento que simula a armadura de beskar, para fãs de Star Wars.' },
  ];
  LEGACY.forEach(p => addProduct({
    id: p.id, nome: p.nome, imagem: p.imagem,
    categoria: 'adesivos', subcategoria: 'tematicos', serie: p.serie,
    precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
    descricao: `${p.descricao} Vendido avulso.`,
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou brilhante (a combinar)', 'Resistente à água e UV', 'Tamanho aproximado: 10×10 cm (personalizável)', 'Vendido por unidade'],
    emoji: p.emoji, cor1: p.cor1, cor2: p.cor2, destaque: p.destaque,
  }));

  // Serviços: cartela pronta com 24 adesivos temáticos + criação de logo vetorizada
  addProduct({
    id: 'ad-cartela-24-tematicos', nome: 'Cartela com 24 Adesivos Temáticos',
    categoria: 'adesivos', subcategoria: 'servicos', serie: 'Cartela Pronta',
    precoTipo: 'unico', precoConst: 'PRECO_CARTELA_24_TEMATICOS',
    descricao: 'Cartela pronta com 24 adesivos temáticos sortidos (animes, séries e desenhos), prontos para pronta-entrega. Ótimo custo-benefício para quem quer variedade sem encomendar um desenho específico.',
    specs: ['24 adesivos sortidos por cartela', 'Material: Vinil de alta qualidade', 'Resistente à água e UV', 'Temas variados — animes, séries e desenhos'],
    emoji: '🗂️', cor1: st.cor1, cor2: st.cor2, destaque: true,
  });
  addProduct({
    id: 'ad-criacao-logo', nome: 'Criação de Logo Vetorizada',
    categoria: 'adesivos', subcategoria: 'servicos', serie: 'Serviço de Design',
    precoTipo: 'unico', precoConst: 'PRECO_LOGO_VETORIZADA',
    descricao: 'Criação da sua logo em arte vetorizada, pronta para impressão em adesivos, cartões, caixinhas e qualquer material Nexus — ou para uso próprio (redes sociais, embalagens, etc).',
    specs: ['Arquivo vetorial (SVG/PDF) + PNG em alta resolução', 'Até 3 rodadas de ajuste', 'Ideal antes de fechar pedido de adesivos/cartões personalizados', 'Prazo: 2 a 4 dias úteis'],
    emoji: '🖌️', cor1: st.cor1, cor2: st.cor2, destaque: false,
  });
})();

/* ═══════════════════ ACTION FIGURES (3D, sob orçamento) ═══════════════════ */
(function actionFigures() {
  const st = STYLE['action-figures'];
  const baseDir = path.join(SRC, '3D/Action Figures');
  const folders = naturalSort(fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory()))
    .filter(f => f !== 'Cerberus'); // Cerberus é um Funko Pop, ver função funkoPop()
  const ACESSORIOS = new Set(['Suporte Controle Hollow Knight']);
  folders.forEach(folder => {
    const slug = slugify(folder);
    const srcDir = path.join(baseDir, folder);
    const destDir = path.join(IMG_DEST_ROOT, 'action-figures', slug);
    const imgs = listImages(srcDir).map(f => toSiteRelative(copyInto(path.join(srcDir, f), destDir)));
    const sub = ACESSORIOS.has(folder) ? 'acessorios' : 'personagens';
    addProduct({
      id: `af-${slug}`, nome: folder,
      imagem: imgs[0], imagens: imgs,
      categoria: 'action-figures', subcategoria: sub, serie: 'Action Figure 3D',
      precoTipo: 'orcamento',
      descricao: `Figure 3D de ${folder}, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável`,
      specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Pintura artesanal detalhada', 'Produto decorativo e colecionável', 'Preço sob orçamento — fale conosco pelo WhatsApp'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  });
})();

/* ═══════════════════ FUNKO POP (3D, preço único) ═══════════════════ */
(function funkoPop() {
  const st = STYLE['funko-pop'];
  const baseDir = path.join(SRC, '3D/Funko Pop');
  const folders = naturalSort(fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory()));
  // "Casal" = produtos com duas pessoas na mesma peça (preço maior). Noiva/Noivo
  // sozinhos continuam com o preço individual normal.
  const CASAL = new Set(['Casamento', 'Casal Fantasiados']);
  const CASAMENTO_SUB = new Set(['Casamento', 'Noiva', 'Noivo', 'Casal Fantasiados']);
  const FAMOSOS = new Set(['Beyonce', 'Neymar', 'Neymar Santos', 'Tyler The Creator', 'Jogadora Tenis']);
  folders.forEach(folder => {
    const slug = slugify(folder);
    const srcDir = path.join(baseDir, folder);
    const destDir = path.join(IMG_DEST_ROOT, 'funko-pop', slug);
    const imgs = listImages(srcDir).map(f => toSiteRelative(copyInto(path.join(srcDir, f), destDir)));
    const sub = CASAMENTO_SUB.has(folder) ? 'casamento' : FAMOSOS.has(folder) ? 'famosos' : 'personagens';
    const isCasal = CASAL.has(folder);
    addProduct({
      id: `fp-${slug}`, nome: folder,
      imagem: imgs[0], imagens: imgs,
      categoria: 'funko-pop', subcategoria: sub, serie: 'Funko Pop 3D',
      precoTipo: 'unico', precoConst: isCasal ? 'PRECO_FUNKO_CASAL' : 'PRECO_FUNKO_PERSONALIZADO',
      descricao: `Funko Pop estilo ${folder}, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.${isCasal ? ' Peça com duas figuras (casal).' : ''}\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável`,
      specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura aproximada: ~12 cm (estilo Funko)', 'Pintura artesanal', 'Produto decorativo'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  });

  // Cerberus vem da pasta de Action Figures, mas é um Funko Pop
  const cerbSrcDir = path.join(SRC, '3D/Action Figures/Cerberus');
  const cerbDestDir = path.join(IMG_DEST_ROOT, 'funko-pop/cerberus');
  const cerbImgs = listImages(cerbSrcDir).map(f => toSiteRelative(copyInto(path.join(cerbSrcDir, f), cerbDestDir)));
  addProduct({
    id: 'fp-cerberus', nome: 'Cerberus',
    imagem: cerbImgs[0], imagens: cerbImgs,
    categoria: 'funko-pop', subcategoria: 'personagens', serie: 'Funko Pop 3D',
    precoTipo: 'unico', preco: 100.00,
    descricao: 'Funko Pop estilo Cerberus, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura aproximada: ~12 cm (estilo Funko)', 'Pintura artesanal', 'Produto decorativo'],
    emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
  });
})();

/* ═══════════════════ CARTÕES DE VISITA (dado usado na página Personalizados) ═══════════════════ */
(function cartoes() {
  const st = STYLE['cartoes'];
  const srcDir = path.join(SRC, 'CARTÕES/Personalizados');
  const destDir = path.join(IMG_DEST_ROOT, 'cartoes/personalizados');
  const img = toSiteRelative(copyInto(path.join(srcDir, 'cartao-personalizado-1.png'), destDir));
  addProduct({
    id: 'ct-cartao-personalizado', nome: 'Cartão de Visita Personalizado',
    imagem: img,
    categoria: 'cartoes', subcategoria: 'personalizados', serie: 'Cartão de Visita',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_CARTAO_VISITA',
    descricao: 'Entre em contato para criarmos juntos!\n\nCartão de visita personalizado com a identidade do seu negócio — acabamento fosco ou brilhante, papel de alta gramatura. Preço por quantidade de unidades.',
    specs: ['Papel de alta gramatura', 'Acabamento fosco ou brilhante', 'Arte enviada pelo cliente ou criada pela Nexus', 'Preço por faixa de quantidade'],
    emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: true,
  });
})();

/* ═══════════════════ SERVIÇOS PERSONALIZADOS (só aparecem na página Personalizados) ═══════════════════ */
(function personalizadosServicos() {
  // Funko Pop Personalizado — serviço genérico (os funkos individuais continuam
  // listados em Funko Pop; aqui é só o card de "encomende o seu").
  const fpSt = STYLE['funko-pop'];
  const fpExemplos = ['fp-aelin', 'fp-beyonce', 'fp-bruxinha']
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean)
    .map(p => p.imagem);
  addProduct({
    id: 'pz-funko-personalizado', nome: 'Funko Pop Personalizado',
    imagem: fpExemplos[0],
    imagens: fpExemplos,
    categoria: 'funko-pop', subcategoria: 'servico', serie: 'Funko Pop 3D',
    precoTipo: 'unico', precoConst: 'PRECO_FUNKO_PERSONALIZADO',
    descricao: 'Envie sua foto e transformamos em funko pop!\n\nFunko Pop personalizado impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1), com pintura artesanal, no clássico estilo cabeça grande. Casais: consulte o valor.',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura aproximada: ~12 cm (estilo Funko)', 'Pintura artesanal', 'Produto decorativo'],
    emoji: fpSt.emoji, cor1: fpSt.cor1, cor2: fpSt.cor2, destaque: true,
  });

  // Caixa Milk Personalizada — serviço sob orçamento (não tem foto própria ainda)
  const cmSt = STYLE['caixas-milk'];
  addProduct({
    id: 'pz-caixa-milk-personalizada', nome: 'Caixa Milk Personalizada',
    imagem: 'images/hulkcaixa.png',
    categoria: 'caixas-milk', subcategoria: 'personalizada', serie: 'Caixa Milk',
    precoTipo: 'orcamento',
    descricao: 'Entre em contato!\n\nCaixa milk no tema que você quiser, com a arte e as cores do seu evento. Impressão em papel couché de alta qualidade (Epson L3250) e corte de precisão (Silhouette Cameo 5).',
    specs: ['Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Arte 100% personalizável', 'Preço sob orçamento — fale conosco pelo WhatsApp'],
    emoji: '🎁', cor1: cmSt.cor1, cor2: cmSt.cor2, destaque: false,
  });
})();

/* ═══════════════════ FIGURINHAS COPA (subcategoria dentro de Adesivos) ═══════════════════ */
(function figurinhasCopa() {
  const st = STYLE['figurinhas-copa'];
  const base = path.join(SRC, 'FIGURINHAS COPA');

  // categoria fica 'adesivos' — a subcategoria separa os grupos de figurinhas
  // (anime / blue lock / one piece / personalizadas), todos ainda "Figurinhas
  // Copa" (mesma seção na página de Adesivos, só com sub-blocos por grupo).
  function addFigurinha(id, nome, imgs, grupo, serie, descricaoOverride) {
    addProduct({
      id, nome, imagem: imgs[0], imagens: imgs,
      categoria: 'adesivos', subcategoria: `figurinhas-${grupo}`, serie,
      precoTipo: 'unidade', precoConst: 'STICKER_UNITARIO',
      descricao: descricaoOverride || `Figurinha ${nome} estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.`,
      specs: ['Impressão de alta qualidade', 'Corte de precisão', 'Vendida por unidade', 'Ideal para álbuns e trocas'],
      emoji: st.emoji, cor1: st.cor1, cor2: st.cor2, destaque: false,
    });
  }

  // Anime
  const animeDir = path.join(base, 'Anime');
  const destAnime = path.join(IMG_DEST_ROOT, 'figurinhas-copa/anime');
  listImages(animeDir).forEach(file => {
    const key = file.replace(/\.png$/i, '');
    const nome = ANIME_NAMES[key] || key;
    const dest = toSiteRelative(copyInto(path.join(animeDir, file), destAnime));
    addFigurinha(`fc-anime-${slugify(key)}`, nome, [dest], 'anime', 'Figurinha Anime');
  });

  // Blue Lock
  const blDir = path.join(base, 'Blue Lock');
  const destBl = path.join(IMG_DEST_ROOT, 'figurinhas-copa/blue-lock');
  listImages(blDir).forEach(file => {
    const key = file.replace(/\.png$/i, '');
    const nome = BLUELOCK_NAMES[key] || key;
    const dest = toSiteRelative(copyInto(path.join(blDir, file), destBl));
    addFigurinha(`fc-bluelock-${slugify(key)}`, nome, [dest], 'bluelock', 'Figurinha Blue Lock');
  });

  // One Piece (numeradas, sem nome de personagem identificado)
  const opDir = path.join(base, 'One Piece');
  const destOp = path.join(IMG_DEST_ROOT, 'figurinhas-copa/one-piece');
  listImages(opDir).forEach(file => {
    const n = file.match(/(\d+)/)?.[1] || '';
    const dest = toSiteRelative(copyInto(path.join(opDir, file), destOp));
    addFigurinha(`fc-op-${n}`, `Figurinha One Piece Nº${n}`, [dest], 'onepiece', 'Figurinha One Piece');
  });

  // Personalizadas: um único produto consolidado com todos os exemplos (neymar + genéricas)
  const persDir = path.join(base, 'Personalizadas');
  const destPersFc = path.join(IMG_DEST_ROOT, 'figurinhas-copa/personalizadas');
  const personalizadaImgs = [
    'personalizada-1.png', 'personalizada-2.png', 'personalizada-3.png', 'personalizada-4.png',
    'neymar-1.png', 'neymar-2.png', 'neymar-3.png',
  ].map(f => toSiteRelative(copyInto(path.join(persDir, f), destPersFc)));
  addFigurinha(
    'fc-personalizada', 'Figurinha da Copa Personalizada', personalizadaImgs, 'personalizadas', 'Figurinha Personalizada',
    'Envie sua foto e entre em contato para criarmos juntos!\n\nFigurinha personalizada estilo álbum de copa, com a sua foto ou de quem você quiser. Impressão de alta qualidade e corte de precisão.'
  );

  // Pets Personalizados (galeria única — exemplos do serviço)
  const petsDir = path.join(base, 'Pets Personalizados');
  const destPets = path.join(IMG_DEST_ROOT, 'figurinhas-copa/pets');
  const petsImgs = listImages(petsDir).map(f => toSiteRelative(copyInto(path.join(petsDir, f), destPets)));
  addFigurinha(
    'fc-pet-personalizado', 'Figurinha da Copa com seu Pet Personalizada', petsImgs, 'personalizadas', 'Figurinha Personalizada',
    'Envie sua foto e entre em contato para criarmos juntos!\n\nFigurinha personalizada estilo álbum de copa com a foto do seu pet. Impressão de alta qualidade e corte de precisão.'
  );
})();

/* ═══════════════════ TOPO DE BOLO (mantém fotos atuais, preço do flyer) ═══════════════════ */
(function topoDeBolo() {
  const st = STYLE['topo-de-bolo'];
  const existentes = [
    { id: 'tb-anime', nome: 'Topo Anime Personalizado', imagem: 'images/animetopo.png', subcategoria: 'anime', serie: 'Anime', emoji: '🎂', cor1: '#FF6B6B', cor2: '#FF8E53', destaque: true },
    { id: 'tb-futebol', nome: 'Topo Futebol com Escudo', imagem: 'images/futetopo.png', subcategoria: 'esportes', serie: 'Futebol', emoji: '⚽', cor1: '#2ECC71', cor2: '#27AE60', destaque: true },
    { id: 'tb-princesa', nome: 'Topo Princesa Encantada', imagem: 'images/princesatopo.png', subcategoria: 'infantil', serie: 'Infantil', emoji: '👑', cor1: '#FFB6C1', cor2: '#FF69B4', destaque: true },
    { id: 'tb-dinossauro', nome: 'Topo Dinossauro', imagem: 'images/dinotopo.png', subcategoria: 'infantil', serie: 'Infantil', emoji: '🦕', cor1: '#228B22', cor2: '#32CD32', destaque: false },
    { id: 'tb-super-heroi', nome: 'Topo Super-Herói', imagem: 'images/supertopo.png', subcategoria: 'infantil', serie: 'Super-Heróis', emoji: '🦸', cor1: '#DC143C', cor2: '#00008B', destaque: false },
  ];
  existentes.forEach(p => addProduct({
    ...p, categoria: 'topo-de-bolo', precoTipo: 'unico', precoConst: 'PRECO_TOPO_BOLO',
    descricao: `Topo de bolo personalizado no tema ${p.serie.toLowerCase()}, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte`,
    specs: ['Material: EVA de alta qualidade', 'Corte: Silhouette Cameo 5', 'Altura aproximada: 15-20 cm', 'Nome e idade inclusos', 'Prazo: 5 a 7 dias úteis'],
  }));

  addProduct({
    id: 'tb-tags-topper-doces', nome: 'Tags Topper de Doces', categoria: 'topo-de-bolo', subcategoria: 'toppers', serie: 'Topper de Doces',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_TAGS_TOPPER',
    descricao: 'Tags topper personalizadas para docinhos e guloseimas da festa — combine com o tema do bolo. Preço por quantidade de unidades.',
    specs: ['Papel de alta gramatura', 'Corte de precisão', 'Arte personalizável com o tema da festa', 'Preço por faixa de quantidade'],
    emoji: '🏷️', cor1: st.cor1, cor2: st.cor2, destaque: false,
  });
})();

/* ═══════════════════ CAIXAS MILK (mantém fotos e preços atuais) ═══════════════════ */
(function caixasMilk() {
  const st = STYLE['caixas-milk'];
  const existentes = [
    { id: 'cm-one-piece', nome: 'Caixa Milk One Piece', imagem: 'images/opcaixa.png', subcategoria: 'anime', serie: 'One Piece', preco: 4.90, emoji: '🏴‍☠️', cor1: '#FF4500', cor2: '#FFD700', destaque: true },
    { id: 'cm-princesa', nome: 'Caixa Milk Princesa', imagem: 'images/princesacaixa.png', subcategoria: 'infantil', serie: 'Princesa', preco: 4.50, emoji: '👑', cor1: '#FFB6C1', cor2: '#FF69B4', destaque: true },
    { id: 'cm-super-herois', nome: 'Caixa Milk Super-Heróis', imagem: 'images/hulkcaixa.png', subcategoria: 'super-herois', serie: 'Marvel / DC', preco: 4.90, emoji: '🦸', cor1: '#DC143C', cor2: '#00008B', destaque: true },
    { id: 'cm-futebol', nome: 'Caixa Milk Futebol', imagem: 'images/corinthians-caixa.png', subcategoria: 'esportes', serie: 'Futebol', preco: 4.50, emoji: '⚽', cor1: '#2ECC71', cor2: '#1ABC9C', destaque: false },
    { id: 'cm-naruto', nome: 'Caixa Milk Naruto', imagem: 'images/narutocaixa.png', subcategoria: 'anime', serie: 'Naruto', preco: 4.90, emoji: '⚡', cor1: '#FF8C00', cor2: '#4169E1', destaque: false },
  ];
  existentes.forEach(p => addProduct({
    ...p, categoria: 'caixas-milk', precoTipo: 'unico',
    descricao: `Caixa milk temática de ${p.serie}, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5`,
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Pedido mínimo: 10 unidades'],
  }));

  addProduct({
    id: 'cm-kit-caixinhas-decorativas', nome: 'Kit 10 Caixinhas Decorativas', categoria: 'caixas-milk', subcategoria: 'kits', serie: 'Kit Decorativo',
    precoTipo: 'faixas', faixasConst: 'FAIXAS_CAIXINHAS',
    descricao: 'Kit de caixinhas decorativas para doces e lembrancinhas, no tema da sua escolha. Preço por quantidade de caixinhas.',
    specs: ['Papel couché de alta qualidade', 'Corte de precisão', 'Temas variados', 'Preço por faixa de quantidade'],
    emoji: '🎁', cor1: st.cor1, cor2: st.cor2, destaque: false,
  });
})();

/* ─── escreve produtos.js ────────────────────────────────────── */
const header = `/* ═══════════════════════════════════════════════════════
   NEXUS — Dados dos produtos
   Gerado automaticamente por scripts/gerar-produtos.js a partir de
   D:\\NEXUS\\PRODUTOS + tabela de preços do flyer Nexus Print.
   Para atualizar o catálogo: mude o script e rode "node scripts/gerar-produtos.js"
   de novo — não edite o array PRODUCTS aqui à mão.
═══════════════════════════════════════════════════════ */

// Número do WhatsApp (apenas dígitos: 55 + DDD + número)
const WHATSAPP = '5511994628664';

/* Tabelas de preço por faixa de quantidade (flyer Nexus Print) */
const FAIXAS_CARTELA_PADRAO = [ {qtd:1,preco:13.90}, {qtd:5,preco:65}, {qtd:10,preco:120}, {qtd:25,preco:275}, {qtd:50,preco:500} ];
const FAIXAS_CARTELA_TRANSPARENTE = [ {qtd:1,preco:17.90}, {qtd:5,preco:85}, {qtd:10,preco:160}, {qtd:25,preco:365}, {qtd:50,preco:670} ];
const FAIXAS_CARTELA_HOLOGRAFICO = [ {qtd:1,preco:19.90}, {qtd:5,preco:95}, {qtd:10,preco:180}, {qtd:25,preco:410}, {qtd:50,preco:750} ];
const FAIXAS_CARTAO_VISITA = [ {qtd:10,preco:25}, {qtd:25,preco:50}, {qtd:50,preco:90}, {qtd:100,preco:150}, {qtd:250,preco:250} ];
const FAIXAS_CAIXINHAS = [ {qtd:10,preco:24.90}, {qtd:50,preco:115}, {qtd:100,preco:210}, {qtd:250,preco:480}, {qtd:500,preco:875} ];
const FAIXAS_TAGS_TOPPER = [ {qtd:50,preco:20}, {qtd:100,preco:35}, {qtd:200,preco:65}, {qtd:500,preco:140}, {qtd:1000,preco:250} ];

const STICKER_UNITARIO = 2.00;
const STICKERS_POR_CARTELA = 24;
const PRECO_TOPO_BOLO = 29.90;
const PRECO_CARTELA_24_TEMATICOS = 13.90;
const PRECO_LOGO_VETORIZADA = 24.90;
const PRECO_FUNKO_PERSONALIZADO = 79.90;
const PRECO_FUNKO_CASAL = 160.00;

const PRODUCTS = [
`;

const footer = `];

/* ─── Helpers ─────────────────────────────────────────────── */
function getProductsByCategory(cat) {
  return PRODUCTS.filter(p => p.categoria === cat);
}

function getProductsBySubcategory(cat, sub) {
  return PRODUCTS.filter(p => p.categoria === cat && p.subcategoria === sub);
}

function getDestaquesByCategory(cat, limit = 5) {
  return PRODUCTS.filter(p => p.categoria === cat && p.destaque).slice(0, limit);
}

// Produtos "sob encomenda" que aparecem na página Personalizados não devem
// aparecer nas prévias de categoria da home (index.html).
function getPersonalizadosIds() {
  return new Set([
    ...getCartoesPersonalizados(),
    ...getFunkosPersonalizados(),
    ...getAdesivosPersonalizados(),
    ...getFigurinhasPersonalizadas(),
    ...getCaixaMilkPersonalizada(),
  ].map(p => p.id));
}

function getTopByCategory(cat, limit = 5) {
  const personalizadosIds = getPersonalizadosIds();
  const pool = PRODUCTS.filter(p => p.categoria === cat && !personalizadosIds.has(p.id));
  const dest = pool.filter(p => p.destaque);
  const rest = pool.filter(p => !p.destaque);
  return [...dest, ...rest].slice(0, limit);
}

// Home — "Mais vendidos": lista curada à mão (não é cálculo automático).
const HOME_MAIS_VENDIDOS_IDS = ['ad-autoral-1', 'ad-autoral-2', 'fp-d-va', 'ad-tem-majin-1', 'af-vecna'];
function getMaisVendidos() {
  return HOME_MAIS_VENDIDOS_IDS.map(id => getProductById(id)).filter(Boolean);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/* Página "Personalizados" — lista curada de produtos sob encomenda */
function getCartoesPersonalizados() {
  return PRODUCTS.filter(p => p.categoria === 'cartoes');
}
function getFunkosPersonalizados() {
  return PRODUCTS.filter(p => p.id === 'pz-funko-personalizado');
}
function getAdesivosPersonalizados() {
  return getProductsBySubcategory('adesivos', 'personalizados');
}
function getFigurinhasPersonalizadas() {
  return PRODUCTS.filter(p => p.id.indexOf('fc-personalizada') === 0 || p.id.indexOf('fc-pet') === 0);
}
function getCaixaMilkPersonalizada() {
  return PRODUCTS.filter(p => p.categoria === 'caixas-milk' && p.subcategoria === 'personalizada');
}

function formatPrice(val) {
  return 'R$ ' + val.toFixed(2).replace('.', ',');
}

function getPrecoInicial(p) {
  if (p.precoTipo === 'faixas') return p.faixas[0].preco;
  if (p.precoTipo === 'orcamento') return null;
  return p.preco;
}

function buildWhatsAppLink(product) {
  const msg = encodeURIComponent(
    \`Olá! Tenho interesse no produto: *\${product.nome}*.\\nPoderia me dar mais informações?\`
  );
  return \`https://wa.me/\${WHATSAPP}?text=\${msg}\`;
}

function renderPriceHtml(p) {
  if (p.precoTipo === 'orcamento') {
    return '<span class="product-price product-price-orcamento">Sob orçamento</span>';
  }
  if (p.precoTipo === 'faixas') {
    return \`<span class="product-price-from">a partir de</span> <span class="product-price">\${formatPrice(p.faixas[0].preco)}</span>\`;
  }
  if (p.precoTipo === 'unidade') {
    return \`<span class="product-price">\${formatPrice(p.preco)}</span><span class="product-price-suffix">/un</span>\`;
  }
  return \`<span class="product-price">\${formatPrice(p.preco)}</span>\`;
}

function renderProductCard(product) {
  const imageHtml = product.imagem
    ? \`<img src="\${product.imagem}" alt="\${product.nome}" loading="lazy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\`
    : '';
  const placeholderStyle = product.imagem ? 'display:none' : '';
  const quickAddHtml = (product.precoTipo === 'unidade' || product.precoTipo === 'unico')
    ? \`<button type="button" class="product-card-add-cart" aria-label="Adicionar ao carrinho"
         onclick="event.preventDefault();event.stopPropagation();quickAddToCart('\${product.id}')">
         <i class="fa-solid fa-cart-plus"></i>
       </button>\`
    : '';
  return \`
    <a href="produto.html?id=\${product.id}" class="product-card">
      <div class="product-image">
        \${imageHtml}
        <div class="product-emoji-placeholder" style="--c1:\${product.cor1};--c2:\${product.cor2};\${placeholderStyle}">
          \${product.emoji}
        </div>
        \${quickAddHtml}
      </div>
      <div class="product-body">
        <div class="product-cat">\${product.serie}</div>
        <div class="product-name">\${product.nome}</div>
        <div class="product-pricing">\${renderPriceHtml(product)}</div>
      </div>
    </a>\`;
}
`;

const body = PRODUCTS.map(productToJs).join(',\n\n');
fs.writeFileSync(OUT_FILE, header + body + '\n' + footer, 'utf8');

console.log(`\nGerado produtos.js com ${PRODUCTS.length} produtos.\n`);
console.log('Contagem por categoria / subcategoria:');
Object.keys(counts).sort().forEach(k => console.log(`  ${k}: ${counts[k]}`));
