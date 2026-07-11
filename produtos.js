/* ═══════════════════════════════════════════════════════
   NEXUS — Dados dos produtos
   Gerado automaticamente por scripts/gerar-produtos.js a partir de
   D:\NEXUS\PRODUTOS + tabela de preços do flyer Nexus Print.
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
const PRECO_TOPO_BOLO = 29.90;
const PRECO_CARTELA_24_TEMATICOS = 13.90;
const PRECO_LOGO_VETORIZADA = 24.90;
const PRECO_FUNKO_PERSONALIZADO = 79.90;

const PRODUCTS = [
  {
    id: "ad-autoral-1",
    nome: "Adesivo Autoral Nº1",
    imagem: "images/produtos/adesivos/autorais/autoral-1.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-2",
    nome: "Adesivo Autoral Nº2",
    imagem: "images/produtos/adesivos/autorais/autoral-2.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-3",
    nome: "Adesivo Autoral Nº3",
    imagem: "images/produtos/adesivos/autorais/autoral-3.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-4",
    nome: "Adesivo Autoral Nº4",
    imagem: "images/produtos/adesivos/autorais/autoral-4.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-5",
    nome: "Adesivo Autoral Nº5",
    imagem: "images/produtos/adesivos/autorais/autoral-5.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-6",
    nome: "Adesivo Autoral Nº6",
    imagem: "images/produtos/adesivos/autorais/autoral-6.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-7",
    nome: "Adesivo Autoral Nº7",
    imagem: "images/produtos/adesivos/autorais/autoral-7.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-8",
    nome: "Adesivo Autoral Nº8",
    imagem: "images/produtos/adesivos/autorais/autoral-8.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-9",
    nome: "Adesivo Autoral Nº9",
    imagem: "images/produtos/adesivos/autorais/autoral-9.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-10",
    nome: "Adesivo Autoral Nº10",
    imagem: "images/produtos/adesivos/autorais/autoral-10.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-11",
    nome: "Adesivo Autoral Nº11",
    imagem: "images/produtos/adesivos/autorais/autoral-11.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-12",
    nome: "Adesivo Autoral Nº12",
    imagem: "images/produtos/adesivos/autorais/autoral-12.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-autoral-13",
    nome: "Adesivo Autoral Nº13",
    imagem: "images/produtos/adesivos/autorais/autoral-13.png",
    categoria: "adesivos",
    subcategoria: "autorais",
    serie: "Adesivo Autoral",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo com arte autoral exclusiva Nexus, recortado em vinil de alta qualidade. Acabamento resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso — também disponível em cartela promocional (consulte no WhatsApp).",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm (personalizável)", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-casamento-personalizado",
    nome: "Adesivo Casamento Personalizado",
    imagem: "images/produtos/adesivos/personalizados/casamento-1.png",
    imagens: ["images/produtos/adesivos/personalizados/casamento-1.png", "images/produtos/adesivos/personalizados/casamento-1.2.png", "images/produtos/adesivos/personalizados/casamento-1.3.png"],
    categoria: "adesivos",
    subcategoria: "personalizados",
    serie: "Adesivo Personalizado",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo personalizado para lembrancinha de casamento, com nome e data do casal. Vinil de alta qualidade, resistente à água e UV. Vendido avulso — para grandes quantidades (lembrancinhas de festa), peça a cotação em cartela pelo WhatsApp.",
    specs: ["Material: Vinil de alta qualidade", "Personalização: nomes e data", "Resistente à água e UV", "Tamanho aproximado: 6×6 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#D4AF37", cor2: "#F5E6C8",
    destaque: false
  },

  {
    id: "ad-cartela-personalizados",
    nome: "Cartela de Adesivos Personalizados",
    imagem: "images/produtos/adesivos/personalizados/gaviria-1.png",
    imagens: ["images/produtos/adesivos/personalizados/gaviria-1.png", "images/produtos/adesivos/personalizados/gaviria-2.png", "images/produtos/adesivos/personalizados/tattoo-gaviria.png"],
    categoria: "adesivos",
    subcategoria: "personalizados",
    serie: "Cartela de Adesivos",
    precoTipo: "faixas",
    faixas: FAIXAS_CARTELA_PADRAO,
    descricao: "Cartela de adesivos com sua marca, logo ou arte personalizada — como no exemplo da Gaviria Supplies. Corte de precisão e vinil de alta qualidade. Preço por quantidade de cartelas.",
    specs: ["Material: Vinil de alta qualidade", "Arte enviada pelo cliente ou criada pela Nexus", "Resistente à água e UV", "Preço por faixa de quantidade de cartelas"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: true
  },

  {
    id: "ad-holografico-personalizado",
    nome: "Adesivo Holográfico Personalizado",
    imagem: "images/produtos/adesivos/personalizados/gaviria-holografico-1.png",
    categoria: "adesivos",
    subcategoria: "personalizados",
    serie: "Cartela Holográfica",
    precoTipo: "faixas",
    faixas: FAIXAS_CARTELA_HOLOGRAFICO,
    descricao: "Adesivo personalizado com efeito holográfico premium — sua arte com brilho e reflexo em arco-íris. Corte de precisão em vinil holográfico de alta qualidade. Preço por quantidade de cartelas.",
    specs: ["Material: Vinil holográfico", "Efeito arco-íris premium", "Resistente à água e UV", "Preço por faixa de quantidade de cartelas"],
    emoji: "🎨", cor1: "#A855F7", cor2: "#6366F1",
    destaque: true
  },

  {
    id: "ad-transparente-personalizado",
    nome: "Adesivo Transparente Personalizado",
    imagem: "images/produtos/adesivos/personalizados/transparente-personalizado-1.png",
    categoria: "adesivos",
    subcategoria: "personalizados",
    serie: "Cartela Transparente",
    precoTipo: "faixas",
    faixas: FAIXAS_CARTELA_TRANSPARENTE,
    descricao: "Adesivo personalizado em vinil transparente — só a sua arte fica visível, sem fundo branco. Ideal para um acabamento premium em potes, embalagens e vidros. Preço por quantidade de cartelas.",
    specs: ["Material: Vinil transparente", "Sem fundo branco aparente", "Resistente à água e UV", "Preço por faixa de quantidade de cartelas"],
    emoji: "🎨", cor1: "#00B4D8", cor2: "#90E0EF",
    destaque: false
  },

  {
    id: "ad-tem-aelin-1",
    nome: "Adesivo Aelin",
    imagem: "images/produtos/adesivos/tematicos/aelin-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Aelin em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-elie-1",
    nome: "Adesivo Elie",
    imagem: "images/produtos/adesivos/tematicos/elie-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Elie em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-hollowknight-1",
    nome: "Adesivo Hollow Knight Nº1",
    imagem: "images/produtos/adesivos/tematicos/hollowknight-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Hollow Knight Nº1 em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-hollowknight-2",
    nome: "Adesivo Hollow Knight Nº2",
    imagem: "images/produtos/adesivos/tematicos/hollowknight-2.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Hollow Knight Nº2 em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-hollowknight-3",
    nome: "Adesivo Hollow Knight Nº3",
    imagem: "images/produtos/adesivos/tematicos/hollowknight-3.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Hollow Knight Nº3 em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-jake-1",
    nome: "Adesivo Jake",
    imagem: "images/produtos/adesivos/tematicos/jake-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Jake em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-majin-1",
    nome: "Adesivo Majin Boo",
    imagem: "images/produtos/adesivos/tematicos/majin-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Majin Boo em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-tem-rimuru-1",
    nome: "Adesivo Rimuru",
    imagem: "images/produtos/adesivos/tematicos/rimuru-1.png",
    categoria: "adesivos",
    subcategoria: "tematicos",
    serie: "Adesivo Temático",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Adesivo Rimuru em vinil de alta qualidade, corte contornado. Resistente à água e aos raios UV, fácil aplicação e sem deixar resíduo ao remover. Vendido avulso.",
    specs: ["Material: Vinil de alta qualidade", "Acabamento: Fosco ou brilhante (a combinar)", "Resistente à água e UV", "Tamanho aproximado: 8×8 cm", "Vendido por unidade"],
    emoji: "🎨", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "ad-cartela-24-tematicos",
    nome: "Cartela com 24 Adesivos Temáticos",
    categoria: "adesivos",
    subcategoria: "servicos",
    serie: "Cartela Pronta",
    precoTipo: "unico",
    preco: PRECO_CARTELA_24_TEMATICOS,
    descricao: "Cartela pronta com 24 adesivos temáticos sortidos (animes, séries e desenhos), prontos para pronta-entrega. Ótimo custo-benefício para quem quer variedade sem encomendar um desenho específico.",
    specs: ["24 adesivos sortidos por cartela", "Material: Vinil de alta qualidade", "Resistente à água e UV", "Temas variados — animes, séries e desenhos"],
    emoji: "🗂️", cor1: "#FF6600", cor2: "#FF8533",
    destaque: true
  },

  {
    id: "ad-criacao-logo",
    nome: "Criação de Logo Vetorizada",
    categoria: "adesivos",
    subcategoria: "servicos",
    serie: "Serviço de Design",
    precoTipo: "unico",
    preco: PRECO_LOGO_VETORIZADA,
    descricao: "Criação da sua logo em arte vetorizada, pronta para impressão em adesivos, cartões, caixinhas e qualquer material Nexus — ou para uso próprio (redes sociais, embalagens, etc).",
    specs: ["Arquivo vetorial (SVG/PDF) + PNG em alta resolução", "Até 3 rodadas de ajuste", "Ideal antes de fechar pedido de adesivos/cartões personalizados", "Prazo: 2 a 4 dias úteis"],
    emoji: "🖌️", cor1: "#FF6600", cor2: "#FF8533",
    destaque: false
  },

  {
    id: "af-cerberus",
    nome: "Cerberus",
    imagem: "images/produtos/action-figures/cerberus/cerberus-1.png",
    imagens: ["images/produtos/action-figures/cerberus/cerberus-1.png", "images/produtos/action-figures/cerberus/cerberus-2.png", "images/produtos/action-figures/cerberus/cerberus-3.png", "images/produtos/action-figures/cerberus/cerberus-4.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Cerberus, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-deadpool",
    nome: "Deadpool",
    imagem: "images/produtos/action-figures/deadpool/deadpool-1.png",
    imagens: ["images/produtos/action-figures/deadpool/deadpool-1.png", "images/produtos/action-figures/deadpool/deadpool-2.png", "images/produtos/action-figures/deadpool/deadpool-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Deadpool, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-elie",
    nome: "Elie",
    imagem: "images/produtos/action-figures/elie/elie-1.png",
    imagens: ["images/produtos/action-figures/elie/elie-1.png", "images/produtos/action-figures/elie/elie-2.png", "images/produtos/action-figures/elie/elie-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Elie, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-estatua-caes",
    nome: "Estatua Caes",
    imagem: "images/produtos/action-figures/estatua-caes/estatua-caes-1.png",
    imagens: ["images/produtos/action-figures/estatua-caes/estatua-caes-1.png", "images/produtos/action-figures/estatua-caes/estatua-caes-2.png", "images/produtos/action-figures/estatua-caes/estatua-caes-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Estatua Caes, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-gavioes-da-fiel",
    nome: "Gavioes da Fiel",
    imagem: "images/produtos/action-figures/gavioes-da-fiel/gavioes-da-fiel-1.png",
    imagens: ["images/produtos/action-figures/gavioes-da-fiel/gavioes-da-fiel-1.png", "images/produtos/action-figures/gavioes-da-fiel/gavioes-da-fiel-2.png", "images/produtos/action-figures/gavioes-da-fiel/gavioes-da-fiel-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Gavioes da Fiel, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-hollow-knight",
    nome: "Hollow Knight",
    imagem: "images/produtos/action-figures/hollow-knight/hollow-knight-1.png",
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Hollow Knight, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-hornet",
    nome: "Hornet",
    imagem: "images/produtos/action-figures/hornet/hornet-1.png",
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Hornet, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-jake-adventure-time",
    nome: "Jake Adventure Time",
    imagem: "images/produtos/action-figures/jake-adventure-time/jake-1.png",
    imagens: ["images/produtos/action-figures/jake-adventure-time/jake-1.png", "images/produtos/action-figures/jake-adventure-time/jake-2.png", "images/produtos/action-figures/jake-adventure-time/jake-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Jake Adventure Time, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-majin-boo",
    nome: "Majin Boo",
    imagem: "images/produtos/action-figures/majin-boo/majin-boo-1.png",
    imagens: ["images/produtos/action-figures/majin-boo/majin-boo-1.png", "images/produtos/action-figures/majin-boo/majin-boo-2.png", "images/produtos/action-figures/majin-boo/majin-boo-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Majin Boo, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-pale-king",
    nome: "Pale King",
    imagem: "images/produtos/action-figures/pale-king/pale-king-1.png",
    imagens: ["images/produtos/action-figures/pale-king/pale-king-1.png", "images/produtos/action-figures/pale-king/pale-king-2.png", "images/produtos/action-figures/pale-king/pale-king-3.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Pale King, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-rimuru",
    nome: "Rimuru",
    imagem: "images/produtos/action-figures/rimuru/rimuru-1.png",
    imagens: ["images/produtos/action-figures/rimuru/rimuru-1.png", "images/produtos/action-figures/rimuru/rimuru-2.png", "images/produtos/action-figures/rimuru/rimuru-3.png", "images/produtos/action-figures/rimuru/rimuru-4.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Rimuru, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-suporte-controle-hollow-knight",
    nome: "Suporte Controle Hollow Knight",
    imagem: "images/produtos/action-figures/suporte-controle-hollow-knight/suporte-controle-hk-1.png",
    imagens: ["images/produtos/action-figures/suporte-controle-hollow-knight/suporte-controle-hk-1.png", "images/produtos/action-figures/suporte-controle-hollow-knight/suporte-controle-hk-2.png"],
    categoria: "action-figures",
    subcategoria: "acessorios",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Suporte Controle Hollow Knight, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "af-vecna",
    nome: "Vecna",
    imagem: "images/produtos/action-figures/vecna/vecna-1.png",
    imagens: ["images/produtos/action-figures/vecna/vecna-1.png", "images/produtos/action-figures/vecna/vecna-2.png", "images/produtos/action-figures/vecna/vecna-3.png", "images/produtos/action-figures/vecna/vecna-4.png", "images/produtos/action-figures/vecna/vecna-5.png", "images/produtos/action-figures/vecna/vecna-6.png"],
    categoria: "action-figures",
    subcategoria: "personagens",
    serie: "Action Figure 3D",
    precoTipo: "orcamento",
    descricao: "Figure 3D de Vecna, impressa sob encomenda em PLA de alta qualidade (Bambu Lab A1) com acabamento e pintura artesanal. Cada peça é produzida sob medida — tamanho e nível de detalhe combinados no orçamento.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Pintura artesanal detalhada", "Produto decorativo e colecionável", "Preço sob orçamento — fale conosco pelo WhatsApp"],
    emoji: "🗿", cor1: "#6366F1", cor2: "#A855F7",
    destaque: false
  },

  {
    id: "fp-aelin",
    nome: "Aelin",
    imagem: "images/produtos/funko-pop/aelin/aelin-1.png",
    imagens: ["images/produtos/funko-pop/aelin/aelin-1.png", "images/produtos/funko-pop/aelin/aelin-2.png", "images/produtos/funko-pop/aelin/aelin-3.png", "images/produtos/funko-pop/aelin/aelin-4.png", "images/produtos/funko-pop/aelin/aelin-5.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Aelin, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-beyonce",
    nome: "Beyonce",
    imagem: "images/produtos/funko-pop/beyonce/beyonce-1.png",
    imagens: ["images/produtos/funko-pop/beyonce/beyonce-1.png", "images/produtos/funko-pop/beyonce/beyonce-2.png", "images/produtos/funko-pop/beyonce/beyonce-3.png"],
    categoria: "funko-pop",
    subcategoria: "famosos",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Beyonce, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-bruxinha",
    nome: "Bruxinha",
    imagem: "images/produtos/funko-pop/bruxinha/bruxinha-1.png",
    imagens: ["images/produtos/funko-pop/bruxinha/bruxinha-1.png", "images/produtos/funko-pop/bruxinha/bruxinha-2.png", "images/produtos/funko-pop/bruxinha/bruxinha-3.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Bruxinha, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-casal-fantasiados",
    nome: "Casal Fantasiados",
    imagem: "images/produtos/funko-pop/casal-fantasiados/casal-fantasiados-1.png",
    imagens: ["images/produtos/funko-pop/casal-fantasiados/casal-fantasiados-1.png", "images/produtos/funko-pop/casal-fantasiados/casal-fantasiados-2.png"],
    categoria: "funko-pop",
    subcategoria: "casamento",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Casal Fantasiados, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-casamento",
    nome: "Casamento",
    imagem: "images/produtos/funko-pop/casamento/casamento-1.png",
    imagens: ["images/produtos/funko-pop/casamento/casamento-1.png", "images/produtos/funko-pop/casamento/casamento-2.png", "images/produtos/funko-pop/casamento/casamento-3.png", "images/produtos/funko-pop/casamento/casamento-4.png", "images/produtos/funko-pop/casamento/casamento-5.png"],
    categoria: "funko-pop",
    subcategoria: "casamento",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Casamento, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-d-va",
    nome: "D.Va",
    imagem: "images/produtos/funko-pop/d-va/dva-1.png",
    imagens: ["images/produtos/funko-pop/d-va/dva-1.png", "images/produtos/funko-pop/d-va/dva-2.png", "images/produtos/funko-pop/d-va/dva-3.png", "images/produtos/funko-pop/d-va/dva-4.png", "images/produtos/funko-pop/d-va/dva-5.png", "images/produtos/funko-pop/d-va/dva-6.png", "images/produtos/funko-pop/d-va/dva-7.png", "images/produtos/funko-pop/d-va/dva-8.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo D.Va, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-fantasia-batgirl",
    nome: "Fantasia Batgirl",
    imagem: "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-1.png",
    imagens: ["images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-1.png", "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-2.png", "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-3.png", "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-4.png", "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-5.png", "images/produtos/funko-pop/fantasia-batgirl/fantasia-batgirl-6.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Fantasia Batgirl, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-fantasia-batman",
    nome: "Fantasia Batman",
    imagem: "images/produtos/funko-pop/fantasia-batman/fantasia-batman-1.png",
    imagens: ["images/produtos/funko-pop/fantasia-batman/fantasia-batman-1.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-2.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-3.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-4.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-5.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-6.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-7.png", "images/produtos/funko-pop/fantasia-batman/fantasia-batman-8.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Fantasia Batman, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-jogadora-tenis",
    nome: "Jogadora Tenis",
    imagem: "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-1.png",
    imagens: ["images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-1.png", "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-2.png", "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-3.png", "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-4.png", "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-5.png", "images/produtos/funko-pop/jogadora-tenis/jogadora-tenis-6.png"],
    categoria: "funko-pop",
    subcategoria: "famosos",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Jogadora Tenis, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-katness",
    nome: "Katness",
    imagem: "images/produtos/funko-pop/katness/katness-1.png",
    imagens: ["images/produtos/funko-pop/katness/katness-1.png", "images/produtos/funko-pop/katness/katness-2.png", "images/produtos/funko-pop/katness/katness-3.png", "images/produtos/funko-pop/katness/katness-4.png", "images/produtos/funko-pop/katness/katness-5.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Katness, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-neymar",
    nome: "Neymar",
    imagem: "images/produtos/funko-pop/neymar/neymar-1.png",
    imagens: ["images/produtos/funko-pop/neymar/neymar-1.png", "images/produtos/funko-pop/neymar/neymar-2.png", "images/produtos/funko-pop/neymar/neymar-3.png", "images/produtos/funko-pop/neymar/neymar-4.png", "images/produtos/funko-pop/neymar/neymar-5.png"],
    categoria: "funko-pop",
    subcategoria: "famosos",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Neymar, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-neymar-santos",
    nome: "Neymar Santos",
    imagem: "images/produtos/funko-pop/neymar-santos/neymar-santos-1.png",
    imagens: ["images/produtos/funko-pop/neymar-santos/neymar-santos-1.png", "images/produtos/funko-pop/neymar-santos/neymar-santos-2.png", "images/produtos/funko-pop/neymar-santos/neymar-santos-3.png", "images/produtos/funko-pop/neymar-santos/neymar-santos-4.png", "images/produtos/funko-pop/neymar-santos/neymar-santos-5.png"],
    categoria: "funko-pop",
    subcategoria: "famosos",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Neymar Santos, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-noiva",
    nome: "Noiva",
    imagem: "images/produtos/funko-pop/noiva/noiva-1.png",
    imagens: ["images/produtos/funko-pop/noiva/noiva-1.png", "images/produtos/funko-pop/noiva/noiva-2.png", "images/produtos/funko-pop/noiva/noiva-3.png", "images/produtos/funko-pop/noiva/noiva-4.png"],
    categoria: "funko-pop",
    subcategoria: "casamento",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Noiva, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-noivo",
    nome: "Noivo",
    imagem: "images/produtos/funko-pop/noivo/noivo-1.png",
    imagens: ["images/produtos/funko-pop/noivo/noivo-1.png", "images/produtos/funko-pop/noivo/noivo-2.png", "images/produtos/funko-pop/noivo/noivo-3.png", "images/produtos/funko-pop/noivo/noivo-4.png"],
    categoria: "funko-pop",
    subcategoria: "casamento",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Noivo, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-princesa",
    nome: "Princesa",
    imagem: "images/produtos/funko-pop/princesa/princesa-1.png",
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Princesa, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-principe",
    nome: "Principe",
    imagem: "images/produtos/funko-pop/principe/principe-1.png",
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Principe, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-ronie",
    nome: "Ronie",
    imagem: "images/produtos/funko-pop/ronie/ronie-1.png",
    imagens: ["images/produtos/funko-pop/ronie/ronie-1.png", "images/produtos/funko-pop/ronie/ronie-2.png", "images/produtos/funko-pop/ronie/ronie-3.png", "images/produtos/funko-pop/ronie/ronie-4.png", "images/produtos/funko-pop/ronie/ronie-5.png"],
    categoria: "funko-pop",
    subcategoria: "personagens",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Ronie, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "fp-tyler-the-creator",
    nome: "Tyler The Creator",
    imagem: "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-1.png",
    imagens: ["images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-1.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-2.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-3.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-4.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-5.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-6.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-7.png", "images/produtos/funko-pop/tyler-the-creator/tyler-the-creator-8.png"],
    categoria: "funko-pop",
    subcategoria: "famosos",
    serie: "Funko Pop 3D",
    precoTipo: "unico",
    preco: PRECO_FUNKO_PERSONALIZADO,
    descricao: "Funko Pop estilo Tyler The Creator, impresso sob encomenda em PLA de alta qualidade (Bambu Lab A1) com pintura artesanal, no clássico estilo cabeça grande.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável",
    specs: ["Material: PLA de alta qualidade", "Processo: Impressão 3D Bambu Lab A1", "Altura aproximada: ~12 cm (estilo Funko)", "Pintura artesanal", "Produto decorativo"],
    emoji: "🧸", cor1: "#FF4500", cor2: "#FFD700",
    destaque: false
  },

  {
    id: "ct-cartao-personalizado",
    nome: "Cartão de Visita Personalizado",
    imagem: "images/produtos/cartoes/personalizados/cartao-personalizado-1.png",
    categoria: "cartoes",
    subcategoria: "personalizados",
    serie: "Cartão de Visita",
    precoTipo: "faixas",
    faixas: FAIXAS_CARTAO_VISITA,
    descricao: "Cartão de visita personalizado com a identidade do seu negócio — acabamento fosco ou brilhante, papel de alta gramatura. Preço por quantidade de unidades.",
    specs: ["Papel de alta gramatura", "Acabamento fosco ou brilhante", "Arte enviada pelo cliente ou criada pela Nexus", "Preço por faixa de quantidade"],
    emoji: "🪪", cor1: "#2C3E50", cor2: "#3498DB",
    destaque: true
  },

  {
    id: "fc-anime-asta",
    nome: "Asta",
    imagem: "images/produtos/figurinhas-copa/anime/asta.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Asta estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-edwardelric",
    nome: "Edward Elric",
    imagem: "images/produtos/figurinhas-copa/anime/edwardelric.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Edward Elric estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-endo",
    nome: "Endeavor",
    imagem: "images/produtos/figurinhas-copa/anime/endo.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Endeavor estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-goku",
    nome: "Goku",
    imagem: "images/produtos/figurinhas-copa/anime/goku.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Goku estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-gon",
    nome: "Gon Freecss",
    imagem: "images/produtos/figurinhas-copa/anime/gon.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Gon Freecss estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-ichigoi",
    nome: "Ichigo Kurosaki",
    imagem: "images/produtos/figurinhas-copa/anime/ichigoi.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Ichigo Kurosaki estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-itadori",
    nome: "Itadori Yuji",
    imagem: "images/produtos/figurinhas-copa/anime/itadori.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Itadori Yuji estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-kira",
    nome: "Yoshikage Kira",
    imagem: "images/produtos/figurinhas-copa/anime/kira.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Yoshikage Kira estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-luffy",
    nome: "Luffy",
    imagem: "images/produtos/figurinhas-copa/anime/luffy.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Luffy estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-midoriya",
    nome: "Midoriya",
    imagem: "images/produtos/figurinhas-copa/anime/midoriya.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Midoriya estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-naruto",
    nome: "Naruto",
    imagem: "images/produtos/figurinhas-copa/anime/naruto.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Naruto estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-saitama",
    nome: "Saitama",
    imagem: "images/produtos/figurinhas-copa/anime/saitama.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Saitama estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-seiya",
    nome: "Seiya de Pégaso",
    imagem: "images/produtos/figurinhas-copa/anime/seiya.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Seiya de Pégaso estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-sungjinwoo",
    nome: "Sung Jin-Woo",
    imagem: "images/produtos/figurinhas-copa/anime/sungjinwoo.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Sung Jin-Woo estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-tanjiro",
    nome: "Tanjiro",
    imagem: "images/produtos/figurinhas-copa/anime/tanjiro.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Tanjiro estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-anime-thorfinn",
    nome: "Thorfinn",
    imagem: "images/produtos/figurinhas-copa/anime/thorfinn.png",
    categoria: "figurinhas-copa",
    subcategoria: "anime",
    serie: "Figurinha Anime",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Thorfinn estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-aiku",
    nome: "Aiku",
    imagem: "images/produtos/figurinhas-copa/blue-lock/aiku.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Aiku estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-bachira",
    nome: "Bachira",
    imagem: "images/produtos/figurinhas-copa/blue-lock/bachira.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Bachira estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-barou",
    nome: "Barou",
    imagem: "images/produtos/figurinhas-copa/blue-lock/barou.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Barou estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-bunny-extras",
    nome: "Bunny",
    imagem: "images/produtos/figurinhas-copa/blue-lock/bunny-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Bunny estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-charles-extras",
    nome: "Charles",
    imagem: "images/produtos/figurinhas-copa/blue-lock/charles-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Charles estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-chigiri",
    nome: "Chigiri",
    imagem: "images/produtos/figurinhas-copa/blue-lock/chigiri.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Chigiri estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-gagamaru",
    nome: "Gagamaru",
    imagem: "images/produtos/figurinhas-copa/blue-lock/gagamaru.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Gagamaru estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-hiori",
    nome: "Hiori",
    imagem: "images/produtos/figurinhas-copa/blue-lock/hiori.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Hiori estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-hugo-extras",
    nome: "Hugo",
    imagem: "images/produtos/figurinhas-copa/blue-lock/hugo-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Hugo estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-isagi",
    nome: "Isagi",
    imagem: "images/produtos/figurinhas-copa/blue-lock/isagi.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Isagi estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-itoshisae",
    nome: "Itoshi Sae",
    imagem: "images/produtos/figurinhas-copa/blue-lock/itoshisae.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Itoshi Sae estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-kaiser-extras",
    nome: "Kaiser",
    imagem: "images/produtos/figurinhas-copa/blue-lock/kaiser-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Kaiser estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-karasu",
    nome: "Karasu",
    imagem: "images/produtos/figurinhas-copa/blue-lock/karasu.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Karasu estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-kunigami",
    nome: "Kunigami",
    imagem: "images/produtos/figurinhas-copa/blue-lock/kunigami.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Kunigami estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-kurona",
    nome: "Kurona",
    imagem: "images/produtos/figurinhas-copa/blue-lock/kurona.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Kurona estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-loki-extras",
    nome: "Loki",
    imagem: "images/produtos/figurinhas-copa/blue-lock/loki-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Loki estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-nagi",
    nome: "Nagi",
    imagem: "images/produtos/figurinhas-copa/blue-lock/nagi.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Nagi estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-ness-extras",
    nome: "Ness",
    imagem: "images/produtos/figurinhas-copa/blue-lock/ness-extras.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Ness estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-niko",
    nome: "Niko",
    imagem: "images/produtos/figurinhas-copa/blue-lock/niko.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Niko estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-otoya",
    nome: "Otoya",
    imagem: "images/produtos/figurinhas-copa/blue-lock/otoya.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Otoya estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-raichi",
    nome: "Raichi",
    imagem: "images/produtos/figurinhas-copa/blue-lock/raichi.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Raichi estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-reo",
    nome: "Reo",
    imagem: "images/produtos/figurinhas-copa/blue-lock/reo.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Reo estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-rin",
    nome: "Rin Itoshi",
    imagem: "images/produtos/figurinhas-copa/blue-lock/rin.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Rin Itoshi estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-bluelock-shidou",
    nome: "Shidou",
    imagem: "images/produtos/figurinhas-copa/blue-lock/shidou.png",
    categoria: "figurinhas-copa",
    subcategoria: "blue-lock",
    serie: "Figurinha Blue Lock",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Shidou estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-1",
    nome: "Figurinha One Piece Nº1",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-1.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº1 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-2",
    nome: "Figurinha One Piece Nº2",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-2.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº2 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-3",
    nome: "Figurinha One Piece Nº3",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-3.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº3 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-4",
    nome: "Figurinha One Piece Nº4",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-4.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº4 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-5",
    nome: "Figurinha One Piece Nº5",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-5.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº5 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-6",
    nome: "Figurinha One Piece Nº6",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-6.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº6 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-7",
    nome: "Figurinha One Piece Nº7",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-7.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº7 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-8",
    nome: "Figurinha One Piece Nº8",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-8.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº8 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-9",
    nome: "Figurinha One Piece Nº9",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-9.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº9 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-op-10",
    nome: "Figurinha One Piece Nº10",
    imagem: "images/produtos/figurinhas-copa/one-piece/one-piece-10.png",
    categoria: "figurinhas-copa",
    subcategoria: "one-piece",
    serie: "Figurinha One Piece",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha One Piece Nº10 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-personalizada-neymar",
    nome: "Figurinha Neymar Personalizada",
    imagem: "images/produtos/figurinhas-copa/personalizadas/neymar-1.png",
    imagens: ["images/produtos/figurinhas-copa/personalizadas/neymar-1.png", "images/produtos/figurinhas-copa/personalizadas/neymar-2.png", "images/produtos/figurinhas-copa/personalizadas/neymar-3.png"],
    categoria: "figurinhas-copa",
    subcategoria: "personalizadas",
    serie: "Figurinha Personalizada",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Neymar Personalizada estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-personalizada-1",
    nome: "Figurinha Personalizada Nº1",
    imagem: "images/produtos/figurinhas-copa/personalizadas/personalizada-1.png",
    categoria: "figurinhas-copa",
    subcategoria: "personalizadas",
    serie: "Figurinha Personalizada",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Personalizada Nº1 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-personalizada-2",
    nome: "Figurinha Personalizada Nº2",
    imagem: "images/produtos/figurinhas-copa/personalizadas/personalizada-2.png",
    categoria: "figurinhas-copa",
    subcategoria: "personalizadas",
    serie: "Figurinha Personalizada",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Personalizada Nº2 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-personalizada-3",
    nome: "Figurinha Personalizada Nº3",
    imagem: "images/produtos/figurinhas-copa/personalizadas/personalizada-3.png",
    categoria: "figurinhas-copa",
    subcategoria: "personalizadas",
    serie: "Figurinha Personalizada",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Personalizada Nº3 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-personalizada-4",
    nome: "Figurinha Personalizada Nº4",
    imagem: "images/produtos/figurinhas-copa/personalizadas/personalizada-4.png",
    categoria: "figurinhas-copa",
    subcategoria: "personalizadas",
    serie: "Figurinha Personalizada",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Personalizada Nº4 estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "fc-pet-personalizado",
    nome: "Figurinha Pet Personalizado",
    imagem: "images/produtos/figurinhas-copa/pets/pet-personalizado-1.png",
    imagens: ["images/produtos/figurinhas-copa/pets/pet-personalizado-1.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-2.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-3.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-4.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-5.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-6.png", "images/produtos/figurinhas-copa/pets/pet-personalizado-7.png"],
    categoria: "figurinhas-copa",
    subcategoria: "pets",
    serie: "Figurinha Pet",
    precoTipo: "unidade",
    preco: STICKER_UNITARIO,
    descricao: "Figurinha Figurinha Pet Personalizado estilo álbum, impressão de alta qualidade e corte de precisão. Vendida avulsa — ótima para álbuns temáticos, troca com amigos ou lembrancinha de festa.",
    specs: ["Impressão de alta qualidade", "Corte de precisão", "Vendida por unidade", "Ideal para álbuns e trocas"],
    emoji: "⚽", cor1: "#FFD700", cor2: "#FF8C00",
    destaque: false
  },

  {
    id: "tb-anime",
    nome: "Topo Anime Personalizado",
    imagem: "images/animetopo.png",
    categoria: "topo-de-bolo",
    subcategoria: "anime",
    serie: "Anime",
    precoTipo: "unico",
    preco: PRECO_TOPO_BOLO,
    descricao: "Topo de bolo personalizado no tema anime, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte",
    specs: ["Material: EVA de alta qualidade", "Corte: Silhouette Cameo 5", "Altura aproximada: 15-20 cm", "Nome e idade inclusos", "Prazo: 5 a 7 dias úteis"],
    emoji: "🎂", cor1: "#FF6B6B", cor2: "#FF8E53",
    destaque: true
  },

  {
    id: "tb-futebol",
    nome: "Topo Futebol com Escudo",
    imagem: "images/futetopo.png",
    categoria: "topo-de-bolo",
    subcategoria: "esportes",
    serie: "Futebol",
    precoTipo: "unico",
    preco: PRECO_TOPO_BOLO,
    descricao: "Topo de bolo personalizado no tema futebol, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte",
    specs: ["Material: EVA de alta qualidade", "Corte: Silhouette Cameo 5", "Altura aproximada: 15-20 cm", "Nome e idade inclusos", "Prazo: 5 a 7 dias úteis"],
    emoji: "⚽", cor1: "#2ECC71", cor2: "#27AE60",
    destaque: true
  },

  {
    id: "tb-princesa",
    nome: "Topo Princesa Encantada",
    imagem: "images/princesatopo.png",
    categoria: "topo-de-bolo",
    subcategoria: "infantil",
    serie: "Infantil",
    precoTipo: "unico",
    preco: PRECO_TOPO_BOLO,
    descricao: "Topo de bolo personalizado no tema infantil, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte",
    specs: ["Material: EVA de alta qualidade", "Corte: Silhouette Cameo 5", "Altura aproximada: 15-20 cm", "Nome e idade inclusos", "Prazo: 5 a 7 dias úteis"],
    emoji: "👑", cor1: "#FFB6C1", cor2: "#FF69B4",
    destaque: true
  },

  {
    id: "tb-dinossauro",
    nome: "Topo Dinossauro",
    imagem: "images/dinotopo.png",
    categoria: "topo-de-bolo",
    subcategoria: "infantil",
    serie: "Infantil",
    precoTipo: "unico",
    preco: PRECO_TOPO_BOLO,
    descricao: "Topo de bolo personalizado no tema infantil, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte",
    specs: ["Material: EVA de alta qualidade", "Corte: Silhouette Cameo 5", "Altura aproximada: 15-20 cm", "Nome e idade inclusos", "Prazo: 5 a 7 dias úteis"],
    emoji: "🦕", cor1: "#228B22", cor2: "#32CD32",
    destaque: false
  },

  {
    id: "tb-super-heroi",
    nome: "Topo Super-Herói",
    imagem: "images/supertopo.png",
    categoria: "topo-de-bolo",
    subcategoria: "infantil",
    serie: "Super-Heróis",
    precoTipo: "unico",
    preco: PRECO_TOPO_BOLO,
    descricao: "Topo de bolo personalizado no tema super-heróis, produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui nome e idade do aniversariante.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação da arte",
    specs: ["Material: EVA de alta qualidade", "Corte: Silhouette Cameo 5", "Altura aproximada: 15-20 cm", "Nome e idade inclusos", "Prazo: 5 a 7 dias úteis"],
    emoji: "🦸", cor1: "#DC143C", cor2: "#00008B",
    destaque: false
  },

  {
    id: "tb-tags-topper-doces",
    nome: "Tags Topper de Doces",
    categoria: "topo-de-bolo",
    subcategoria: "toppers",
    serie: "Topper de Doces",
    precoTipo: "faixas",
    faixas: FAIXAS_TAGS_TOPPER,
    descricao: "Tags topper personalizadas para docinhos e guloseimas da festa — combine com o tema do bolo. Preço por quantidade de unidades.",
    specs: ["Papel de alta gramatura", "Corte de precisão", "Arte personalizável com o tema da festa", "Preço por faixa de quantidade"],
    emoji: "🏷️", cor1: "#FF6B6B", cor2: "#FF8E53",
    destaque: false
  },

  {
    id: "cm-one-piece",
    nome: "Caixa Milk One Piece",
    imagem: "images/opcaixa.png",
    imagens: ["images/opcaixa.png", "images/foto2.jpg", "images/foto3.jpg"],
    categoria: "caixas-milk",
    subcategoria: "anime",
    serie: "One Piece",
    precoTipo: "unico",
    preco: 4.9,
    descricao: "Caixa milk temática de One Piece, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5",
    specs: ["Dimensões: 5,5×9,5×4 cm", "Material: Papel couché 300g", "Impressora Epson L3250", "Corte: Silhouette Cameo 5", "Pedido mínimo: 10 unidades"],
    emoji: "🏴‍☠️", cor1: "#FF4500", cor2: "#FFD700",
    destaque: true
  },

  {
    id: "cm-princesa",
    nome: "Caixa Milk Princesa",
    imagem: "images/princesacaixa.png",
    categoria: "caixas-milk",
    subcategoria: "infantil",
    serie: "Princesa",
    precoTipo: "unico",
    preco: 4.5,
    descricao: "Caixa milk temática de Princesa, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5",
    specs: ["Dimensões: 5,5×9,5×4 cm", "Material: Papel couché 300g", "Impressora Epson L3250", "Corte: Silhouette Cameo 5", "Pedido mínimo: 10 unidades"],
    emoji: "👑", cor1: "#FFB6C1", cor2: "#FF69B4",
    destaque: true
  },

  {
    id: "cm-super-herois",
    nome: "Caixa Milk Super-Heróis",
    imagem: "images/hulkcaixa.png",
    categoria: "caixas-milk",
    subcategoria: "super-herois",
    serie: "Marvel / DC",
    precoTipo: "unico",
    preco: 4.9,
    descricao: "Caixa milk temática de Marvel / DC, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5",
    specs: ["Dimensões: 5,5×9,5×4 cm", "Material: Papel couché 300g", "Impressora Epson L3250", "Corte: Silhouette Cameo 5", "Pedido mínimo: 10 unidades"],
    emoji: "🦸", cor1: "#DC143C", cor2: "#00008B",
    destaque: true
  },

  {
    id: "cm-futebol",
    nome: "Caixa Milk Futebol",
    imagem: "images/corinthians-caixa.png",
    categoria: "caixas-milk",
    subcategoria: "esportes",
    serie: "Futebol",
    precoTipo: "unico",
    preco: 4.5,
    descricao: "Caixa milk temática de Futebol, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5",
    specs: ["Dimensões: 5,5×9,5×4 cm", "Material: Papel couché 300g", "Impressora Epson L3250", "Corte: Silhouette Cameo 5", "Pedido mínimo: 10 unidades"],
    emoji: "⚽", cor1: "#2ECC71", cor2: "#1ABC9C",
    destaque: false
  },

  {
    id: "cm-naruto",
    nome: "Caixa Milk Naruto",
    imagem: "images/narutocaixa.png",
    categoria: "caixas-milk",
    subcategoria: "anime",
    serie: "Naruto",
    precoTipo: "unico",
    preco: 4.9,
    descricao: "Caixa milk temática de Naruto, impressa em papel couché de alta qualidade (Epson L3250) e recortada com precisão (Silhouette Cameo 5). Pedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5",
    specs: ["Dimensões: 5,5×9,5×4 cm", "Material: Papel couché 300g", "Impressora Epson L3250", "Corte: Silhouette Cameo 5", "Pedido mínimo: 10 unidades"],
    emoji: "⚡", cor1: "#FF8C00", cor2: "#4169E1",
    destaque: false
  },

  {
    id: "cm-kit-caixinhas-decorativas",
    nome: "Kit 10 Caixinhas Decorativas",
    categoria: "caixas-milk",
    subcategoria: "kits",
    serie: "Kit Decorativo",
    precoTipo: "faixas",
    faixas: FAIXAS_CAIXINHAS,
    descricao: "Kit de caixinhas decorativas para doces e lembrancinhas, no tema da sua escolha. Preço por quantidade de caixinhas.",
    specs: ["Papel couché de alta qualidade", "Corte de precisão", "Temas variados", "Preço por faixa de quantidade"],
    emoji: "🎁", cor1: "#2ECC71", cor2: "#27AE60",
    destaque: false
  }
];

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

function getTopByCategory(cat, limit = 5) {
  const dest = PRODUCTS.filter(p => p.categoria === cat && p.destaque);
  const rest = PRODUCTS.filter(p => p.categoria === cat && !p.destaque);
  return [...dest, ...rest].slice(0, limit);
}

function getMaisVendidos(limit = 5) {
  const priority = PRODUCTS.filter(p => p.destaque && (p.categoria === 'funko-pop' || p.categoria === 'adesivos'));
  const others = PRODUCTS.filter(p => p.destaque && p.categoria !== 'funko-pop' && p.categoria !== 'adesivos');
  return [...priority, ...others].slice(0, limit);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
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
    `Olá! Tenho interesse no produto: *${product.nome}*.\nPoderia me dar mais informações?`
  );
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

function renderPriceHtml(p) {
  if (p.precoTipo === 'orcamento') {
    return '<span class="product-price product-price-orcamento">Sob orçamento</span>';
  }
  if (p.precoTipo === 'faixas') {
    return `<span class="product-price-from">a partir de</span> <span class="product-price">${formatPrice(p.faixas[0].preco)}</span>`;
  }
  if (p.precoTipo === 'unidade') {
    return `<span class="product-price">${formatPrice(p.preco)}</span><span class="product-price-suffix">/un</span>`;
  }
  return `<span class="product-price">${formatPrice(p.preco)}</span>`;
}

function renderProductCard(product) {
  const imageHtml = product.imagem
    ? `<img src="${product.imagem}" alt="${product.nome}" loading="lazy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const placeholderStyle = product.imagem ? 'display:none' : '';
  return `
    <a href="produto.html?id=${product.id}" class="product-card">
      <div class="product-image">
        ${imageHtml}
        <div class="product-emoji-placeholder" style="--c1:${product.cor1};--c2:${product.cor2};${placeholderStyle}">
          ${product.emoji}
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat">${product.serie}</div>
        <div class="product-name">${product.nome}</div>
        <div class="product-pricing">${renderPriceHtml(product)}</div>
      </div>
    </a>`;
}
