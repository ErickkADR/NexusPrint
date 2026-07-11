/* ═══════════════════════════════════════════════════════
   NEXUS — Dados dos produtos
   Para adicionar imagens reais: coloque os arquivos em
   images/ e substitua o campo "imagens" com os caminhos.
═══════════════════════════════════════════════════════ */

// Número do WhatsApp (apenas dígitos: 55 + DDD + número)
const WHATSAPP = '5511994628664';

const PRODUCTS = [

  /* ──────────────────────── ADESIVOS ─────────────────────── */
  {
    id: 'ad-luffy-gear5',
    nome: 'Luffy Gear 5',
    imagem: 'images/luffy.png',
    categoria: 'adesivos',
    subcategoria: 'anime',
    serie: 'One Piece',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 78,
    estoque: 100,
    descricao: 'Adesivo recortado em vinil de alta qualidade do Monkey D. Luffy no Gear 5! Com acabamento fosco resistente à água e aos raios UV. Ideal para notebooks, skates, garrafas e capacetes. Fácil aplicação e sem deixar resíduo ao remover.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou Brilhante (escolha no pedido)', 'Resistente à água e UV', 'Tamanho: 10×10 cm (personalizável)', 'Fácil aplicação'],
    emoji: '🏴‍☠️', cor1: '#FF4500', cor2: '#FFD700',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'ad-naruto-rasengan',
    nome: 'Naruto Rasengan',
    imagem: 'images/narutostk.png',
    categoria: 'adesivos',
    subcategoria: 'anime',
    serie: 'Naruto',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 65,
    estoque: 100,
    descricao: 'Adesivo do Naruto Uzumaki com Rasengan em vinil de alta qualidade. Acabamento premium resistente à água e UV. Perfeito para personalizar seus pertences com a energia do ninja mais famoso do anime.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco ou Brilhante', 'Resistente à água e UV', 'Tamanho: 10×10 cm (personalizável)', 'Fácil aplicação'],
    emoji: '⚡', cor1: '#FF8C00', cor2: '#FFA500',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'ad-goku-ultra',
    nome: 'Goku Ultra Instinct',
    imagem: 'images/gokustk.png',
    categoria: 'adesivos',
    subcategoria: 'anime',
    serie: 'Dragon Ball',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 82,
    estoque: 100,
    descricao: 'Adesivo premium do Son Goku em Ultra Instinct! Em vinil de alta qualidade com acabamento especial que realça os detalhes da transformação mais poderosa de Dragon Ball.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 10×12 cm (personalizável)', 'Fácil aplicação'],
    emoji: '🐉', cor1: '#6366F1', cor2: '#A855F7',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'ad-demon-slayer',
    nome: 'Tanjiro Kamado',
    imagem: 'images/tanjirostk.png',
    categoria: 'adesivos',
    subcategoria: 'anime',
    serie: 'Demon Slayer',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 54,
    estoque: 100,
    descricao: 'Adesivo do Tanjiro Kamado de Demon Slayer em vinil de alta qualidade. Com os detalhes do kimono xadrez e a espada da respiração da água.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 10×10 cm', 'Fácil aplicação'],
    emoji: '🗡️', cor1: '#006994', cor2: '#008B8B',
    destaque: false, badge: '35% OFF'
  },
  {
    id: 'ad-breaking-bad',
    nome: 'Heisenberg',
    imagem: 'images/misterwhitestk.png',
    categoria: 'adesivos',
    subcategoria: 'series',
    serie: 'Breaking Bad',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 41,
    estoque: 100,
    descricao: 'Adesivo minimalista do Heisenberg (Walter White) de Breaking Bad. Estilo sombra em vinil de alta qualidade. Perfeito para fãs da série.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Fosco', 'Resistente à água e UV', 'Tamanho: 8×10 cm', 'Fácil aplicação'],
    emoji: '🎩', cor1: '#222222', cor2: '#555555',
    destaque: false, badge: '35% OFF'
  },
  {
    id: 'ad-stranger-things',
    nome: 'Stranger Things',
    imagem: 'images/elevenstk.png',
    categoria: 'adesivos',
    subcategoria: 'series',
    serie: 'Stranger Things',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 48,
    estoque: 100,
    descricao: 'Adesivo da logo de Stranger Things com efeito retrô anos 80. Em vinil de alta qualidade com acabamento brilhante especial.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 12×5 cm', 'Fácil aplicação'],
    emoji: '👾', cor1: '#8B0000', cor2: '#CC0000',
    destaque: false, badge: '35% OFF'
  },
  {
    id: 'ad-rick-morty',
    nome: 'Rick e Morty',
    imagem: 'images/rick.png',
    categoria: 'adesivos',
    subcategoria: 'desenhos',
    serie: 'Rick and Morty',
    preco: 12.90,
    precoOriginal: 19.90,
    desconto: 35,
    vendidos: 60,
    estoque: 100,
    descricao: 'Adesivo do duo mais hilário e científico da animação! Rick e Morty em vinil de alta qualidade com as cores vibrantes da série.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 10×10 cm', 'Fácil aplicação'],
    emoji: '🧪', cor1: '#00B4D8', cor2: '#90E0EF',
    destaque: false, badge: '35% OFF'
  },
  {
    id: 'ad-bob-esponja',
    nome: 'Bob Esponja',
    imagem: 'images/bobstk.png',
    categoria: 'adesivos',
    subcategoria: 'desenhos',
    serie: 'Bob Esponja',
    preco: 9.90,
    precoOriginal: 16.90,
    desconto: 41,
    vendidos: 73,
    estoque: 100,
    descricao: 'O personagem mais querido do fundo do mar em adesivo de vinil! Bob Esponja feliz e pronto para animar seu objeto favorito.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 8×10 cm', 'Fácil aplicação'],
    emoji: '🧽', cor1: '#FFD700', cor2: '#FFA500',
    destaque: false, badge: '41% OFF'
  },
  {
    id: 'ad-simpsons',
    nome: 'Homer Simpson',
    imagem: 'images/homerstk.png',
    categoria: 'adesivos',
    subcategoria: 'desenhos',
    serie: 'The Simpsons',
    preco: 9.90,
    precoOriginal: 16.90,
    desconto: 41,
    vendidos: 59,
    estoque: 100,
    descricao: 'Adesivo do Homer Simpson em vinil de alta qualidade. O clássico personagem da família mais famosa da TV americana, pronto para decorar seu espaço.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Brilhante', 'Resistente à água e UV', 'Tamanho: 9×10 cm', 'Fácil aplicação'],
    emoji: '🍩', cor1: '#FFD700', cor2: '#4169E1',
    destaque: false, badge: '41% OFF'
  },
  {
    id: 'ad-mandalorian',
    nome: 'The Mandalorian',
    imagem: 'images/mandalorianstk.png',
    categoria: 'adesivos',
    subcategoria: 'series',
    serie: 'Star Wars',
    preco: 14.90,
    precoOriginal: 22.90,
    desconto: 35,
    vendidos: 37,
    estoque: 100,
    descricao: 'Este é o Caminho. Adesivo do Mandalorian com acabamento metálico que simula a armadura de beskar. Um item imperdível para fãs de Star Wars.',
    specs: ['Material: Vinil de alta qualidade', 'Acabamento: Metálico', 'Resistente à água e UV', 'Tamanho: 8×12 cm', 'Fácil aplicação'],
    emoji: '🪖', cor1: '#708090', cor2: '#A0A0A0',
    destaque: false, badge: '35% OFF'
  },

  /* ─────────────────── ACTION FIGURES ──────────────────── */
  {
    id: 'af-goku-ssj4',
    nome: 'Goku Super Saiyajin 4',
    imagem: 'images/ssj4.jpg',
    categoria: 'action-figures',
    subcategoria: 'dragon-ball',
    serie: 'Dragon Ball',
    preco: 99.90,
    precoOriginal: 149.90,
    desconto: 33,
    vendidos: 45,
    estoque: 60,
    descricao: 'Figure 3D do Goku SSJ4 produzida em impressão 3D com PLA de alta qualidade pela Bambu Lab A1. Com pelo vermelho, cabelo preto longo e olhos amarelos penetrantes. Detalhes incríveis que capturam a essência dessa transformação icônica.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~16 cm', 'Pintura artesanal detalhada', 'Produto decorativo e colecionável'],
    emoji: '🐉', cor1: '#DC143C', cor2: '#FF4444',
    destaque: true, badge: '33% OFF'
  },
  {
    id: 'af-vegeta-ssj',
    nome: 'Vegeta Super Saiyajin',
    imagem: 'images/vegeta.jpg',
    categoria: 'action-figures',
    subcategoria: 'dragon-ball',
    serie: 'Dragon Ball',
    preco: 94.90,
    precoOriginal: 139.90,
    desconto: 32,
    vendidos: 38,
    estoque: 60,
    descricao: 'Figure 3D do Príncipe dos Saiyajins em impressão 3D! Vegeta no modo Super Saiyajin com pose de batalha e cabelo loiro característico. Produzido com PLA de alta qualidade pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~15 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '⚡', cor1: '#4169E1', cor2: '#6495ED',
    destaque: false, badge: '32% OFF'
  },
  {
    id: 'af-piccolo',
    nome: 'Piccolo Namekuseijin',
    imagem: 'images/picolo.jpg',
    categoria: 'action-figures',
    subcategoria: 'dragon-ball',
    serie: 'Dragon Ball',
    preco: 89.90,
    precoOriginal: 129.90,
    desconto: 31,
    vendidos: 29,
    estoque: 60,
    descricao: 'Figure 3D do Piccolo em pose meditativa. O guerreiro Namekuseijin em toda sua majestade, produzido com PLA de alta qualidade pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~18 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '👁️', cor1: '#228B22', cor2: '#32CD32',
    destaque: false, badge: '31% OFF'
  },
  {
    id: 'af-freezer',
    nome: 'Freeza Forma Final',
    imagem: 'images/freeza.jpg',
    categoria: 'action-figures',
    subcategoria: 'dragon-ball',
    serie: 'Dragon Ball',
    preco: 94.90,
    precoOriginal: 139.90,
    desconto: 32,
    vendidos: 34,
    estoque: 60,
    descricao: 'Figure 3D do Freeza em sua forma final, o vilão mais icônico de Dragon Ball Z! Produzido com PLA de alta qualidade pela Bambu Lab A1 com detalhes perfeitos.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~14 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '🏳️', cor1: '#FFFFFF', cor2: '#9B59B6',
    destaque: false, badge: '32% OFF'
  },
  {
    id: 'af-luffy-gear5',
    nome: 'Luffy Gear 5',
    imagem: 'images/luffy5.jpg',
    categoria: 'action-figures',
    subcategoria: 'one-piece',
    serie: 'One Piece',
    preco: 109.90,
    precoOriginal: 159.90,
    desconto: 31,
    vendidos: 52,
    estoque: 60,
    descricao: 'A Figure 3D Luffy Gear Five é uma peça exclusiva, desenvolvida para fãs de One Piece que buscam um item diferenciado para coleção ou decoração.\n\nProduzida em impressão 3D com PLA, a figure apresenta excelente nível de detalhes, com volumes bem definidos, acabamento preciso e estrutura resistente. O modelo retrata o Luffy em sua forma Gear Five, com pose dinâmica e expressão marcante, transmitindo toda a energia e liberdade dessa transformação.\n\nO material PLA garante leveza, durabilidade e ótima definição, sendo ideal tanto para exposição quanto para pintura personalizada.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~20 cm', 'Acabamento preciso', 'Produto decorativo e colecionável'],
    emoji: '🏴‍☠️', cor1: '#FF4500', cor2: '#FFD700',
    destaque: true, badge: '31% OFF'
  },
  {
    id: 'af-zoro',
    nome: 'Roronoa Zoro',
    imagem: 'images/zoro.png',
    categoria: 'action-figures',
    subcategoria: 'one-piece',
    serie: 'One Piece',
    preco: 99.90,
    precoOriginal: 149.90,
    desconto: 33,
    vendidos: 41,
    estoque: 60,
    descricao: 'Figure 3D do mestre das três espadas! Zoro em pose de ataque com suas três katanas. Produzido com PLA de alta qualidade pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~17 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '⚔️', cor1: '#2E8B57', cor2: '#3CB371',
    destaque: false, badge: '33% OFF'
  },
  {
    id: 'af-elden-malenia',
    nome: 'Malenia, Deusa da Podridão',
    imagem: 'images/malenia.jpg',
    categoria: 'action-figures',
    subcategoria: 'elden-ring',
    serie: 'Elden Ring',
    preco: 119.90,
    precoOriginal: 179.90,
    desconto: 33,
    vendidos: 28,
    estoque: 40,
    descricao: 'Figure 3D da Malenia de Elden Ring, uma das figuras mais desafiadoras e majestosas do jogo. Impressão 3D com PLA de alta resolução pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~22 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '🌸', cor1: '#C0392B', cor2: '#E74C3C',
    destaque: false, badge: '33% OFF'
  },
  {
    id: 'af-elden-ranni',
    nome: 'Ranni, a Bruxa',
    imagem: 'images/rani.jpg',
    categoria: 'action-figures',
    subcategoria: 'elden-ring',
    serie: 'Elden Ring',
    preco: 109.90,
    precoOriginal: 159.90,
    desconto: 31,
    vendidos: 22,
    estoque: 40,
    descricao: 'Figure 3D da Ranni de Elden Ring, a Bruxa da Lua com seus quatro braços e vestido de estrelas. Impressão 3D com PLA de alta qualidade.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~18 cm', 'Pintura artesanal', 'Produto decorativo e colecionável'],
    emoji: '🌙', cor1: '#2C3E50', cor2: '#3498DB',
    destaque: false, badge: '31% OFF'
  },

  /* ──────────────────── FUNKO POP ──────────────────────── */
  {
    id: 'fp-spider-nwh',
    nome: 'Spider-Man No Way Home',
    imagem: 'images/spidermanfp.png',
    categoria: 'funko-pop',
    subcategoria: 'marvel',
    serie: 'Marvel',
    preco: 79.90,
    precoOriginal: 119.90,
    desconto: 33,
    vendidos: 67,
    estoque: 80,
    descricao: 'Funko Pop estilo do Spider-Man de No Way Home em impressão 3D com PLA! Com detalhes do traje integrado e pose de lançamento de teia. Produzido pela Bambu Lab A1 com pintura artesanal.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~12 cm (estilo Funko)', 'Pintura artesanal', 'Produto decorativo'],
    emoji: '🕷️', cor1: '#DC143C', cor2: '#00008B',
    destaque: true, badge: '33% OFF'
  },
  {
    id: 'fp-naruto-rasengan',
    nome: 'Naruto com Rasengan',
    imagem: 'images/narutofp.png',
    categoria: 'funko-pop',
    subcategoria: 'anime',
    serie: 'Naruto',
    preco: 72.90,
    precoOriginal: 109.90,
    desconto: 34,
    vendidos: 58,
    estoque: 80,
    descricao: 'Funko Pop estilo do Naruto Uzumaki com o Rasengan! Cabeça grande no estilo Funko com detalhes do uniforme laranja e o chakra azul do Rasengan. Impressão 3D Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~12 cm (estilo Funko)', 'Efeito de chakra incluso', 'Produto decorativo'],
    emoji: '⚡', cor1: '#FF8C00', cor2: '#4169E1',
    destaque: true, badge: '34% OFF'
  },
  {
    id: 'fp-luffy-gear5',
    nome: 'Luffy Gear 5',
    imagem: 'images/luffyfp.png',
    categoria: 'funko-pop',
    subcategoria: 'anime',
    serie: 'One Piece',
    preco: 75.90,
    precoOriginal: 114.90,
    desconto: 34,
    vendidos: 72,
    estoque: 80,
    descricao: 'Funko Pop do Luffy Gear 5 com a expressão caótica e os cabelos brancos icônicos! No estilo Funko Pop em impressão 3D com PLA pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~12 cm (estilo Funko)', 'Cabelo branco detalhado', 'Produto decorativo'],
    emoji: '🏴‍☠️', cor1: '#FF4500', cor2: '#FFD700',
    destaque: true, badge: '34% OFF'
  },
  {
    id: 'fp-batman',
    nome: 'Batman Dark Knight',
    imagem: 'images/batmanfp.png',
    categoria: 'funko-pop',
    subcategoria: 'dc',
    serie: 'DC Comics',
    preco: 69.90,
    precoOriginal: 104.90,
    desconto: 33,
    vendidos: 44,
    estoque: 80,
    descricao: 'Funko Pop do Batman com o traje do Dark Knight em impressão 3D com PLA! Com manto e capuz detalhados e pose de vigilante. Produzido pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~12 cm (estilo Funko)', 'Acabamento preto fosco', 'Produto decorativo'],
    emoji: '🦇', cor1: '#1a1a2e', cor2: '#16213e',
    destaque: false, badge: '33% OFF'
  },
  {
    id: 'fp-goku-ssj',
    nome: 'Goku Super Saiyajin',
    imagem: 'images/gokusjfp.png',
    categoria: 'funko-pop',
    subcategoria: 'anime',
    serie: 'Dragon Ball',
    preco: 72.90,
    precoOriginal: 109.90,
    desconto: 34,
    vendidos: 61,
    estoque: 80,
    descricao: 'Funko Pop estilo do Goku Super Saiyajin com cabelo loiro e olhos azuis! Em impressão 3D com PLA de alta qualidade pela Bambu Lab A1.\n\nMaterial: PLA\nProcesso: Impressão 3D\nProduto decorativo e colecionável',
    specs: ['Material: PLA de alta qualidade', 'Processo: Impressão 3D Bambu Lab A1', 'Altura: ~12 cm (estilo Funko)', 'Cabelo loiro detalhado', 'Produto decorativo'],
    emoji: '🐉', cor1: '#FFD700', cor2: '#4169E1',
    destaque: false, badge: '34% OFF'
  },

  /* ─────────────────── TOPO DE BOLO ────────────────────── */
  {
    id: 'tb-anime',
    nome: 'Topo Anime Personalizado',
    imagem: 'images/animetopo.png',
    categoria: 'topo-de-bolo',
    subcategoria: 'anime',
    serie: 'Anime',
    preco: 35.90,
    precoOriginal: 54.90,
    desconto: 35,
    vendidos: 89,
    estoque: 100,
    descricao: 'Topo de bolo personalizado com o personagem de anime favorito do aniversariante! Produzido na Silhouette Cameo 5 com EVA de alta qualidade. Inclui o nome da pessoa e a idade.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis após aprovação do arte',
    specs: ['Material: EVA de alta qualidade', 'Corte: Silhouette Cameo 5', 'Altura: ~15 cm', 'Nome e idade inclusos', 'Prazo: 5 a 7 dias úteis'],
    emoji: '🎂', cor1: '#FF6B6B', cor2: '#FF8E53',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'tb-futebol',
    nome: 'Topo Futebol com Escudo',
    imagem: 'images/futetopo.png',
    categoria: 'topo-de-bolo',
    subcategoria: 'esportes',
    serie: 'Futebol',
    preco: 30.90,
    precoOriginal: 47.90,
    desconto: 35,
    vendidos: 76,
    estoque: 100,
    descricao: 'Topo de bolo temático de futebol com o escudo do time favorito! Produzido com precisão pela Silhouette Cameo 5. Ideal para aniversários e comemorações esportivas.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis',
    specs: ['Material: EVA de alta qualidade', 'Corte: Silhouette Cameo 5', 'Altura: ~15 cm', 'Escolha o time favorito', 'Nome e número incluso'],
    emoji: '⚽', cor1: '#2ECC71', cor2: '#27AE60',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'tb-princesa',
    nome: 'Topo Princesa Encantada',
    imagem: 'images/princesatopo.png',
    categoria: 'topo-de-bolo',
    subcategoria: 'infantil',
    serie: 'Infantil',
    preco: 30.90,
    precoOriginal: 47.90,
    desconto: 35,
    vendidos: 94,
    estoque: 100,
    descricao: 'Topo de bolo encantado no tema Princesa! Com coroa, varinha e laços para deixar o bolo da pequena ainda mais especial. Produzido com EVA glitterizado pela Silhouette Cameo 5.\n\nMaterial: EVA glitterizado\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis',
    specs: ['Material: EVA glitterizado premium', 'Corte: Silhouette Cameo 5', 'Altura: ~20 cm', 'Nome da aniversariante incluso', 'Cores personalizáveis'],
    emoji: '👑', cor1: '#FFB6C1', cor2: '#FF69B4',
    destaque: true, badge: '35% OFF'
  },
  {
    id: 'tb-dinossauro',
    nome: 'Topo Dinossauro',
    imagem: 'images/dinotopo.png',
    categoria: 'topo-de-bolo',
    subcategoria: 'infantil',
    serie: 'Infantil',
    preco: 30.90,
    precoOriginal: 47.90,
    desconto: 35,
    vendidos: 62,
    estoque: 100,
    descricao: 'RAWR! Topo de bolo no tema Dinossauro para os pequenos aventureiros! Com detalhes em EVA de alta qualidade e escamas realistas. Personalize com o nome e a idade.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis',
    specs: ['Material: EVA de alta qualidade', 'Corte: Silhouette Cameo 5', 'Altura: ~18 cm', 'Nome e idade incluso', 'Cores verde/laranja disponíveis'],
    emoji: '🦕', cor1: '#228B22', cor2: '#32CD32',
    destaque: false, badge: '35% OFF'
  },
  {
    id: 'tb-super-heroi',
    nome: 'Topo Super-Herói',
    imagem: 'images/supertopo.png',
    categoria: 'topo-de-bolo',
    subcategoria: 'infantil',
    serie: 'Super-Heróis',
    preco: 32.90,
    precoOriginal: 49.90,
    desconto: 34,
    vendidos: 71,
    estoque: 100,
    descricao: 'Topo de bolo no tema Super-Herói! Disponível com Batman, Spider-Man, Super-Homem, Capitão América e mais. Produzido pela Silhouette Cameo 5.\n\nMaterial: EVA de alta qualidade\nProcesso: Silhouette Cameo 5\nPrazo: 5 a 7 dias úteis',
    specs: ['Material: EVA de alta qualidade', 'Corte: Silhouette Cameo 5', 'Altura: ~18 cm', 'Escolha o herói', 'Nome incluso'],
    emoji: '🦸', cor1: '#DC143C', cor2: '#00008B',
    destaque: false, badge: '34% OFF'
  },

  /* ──────────────────── CAIXAS MILK ────────────────────── */
  {
    id: 'cm-one-piece',
    nome: 'Caixa Milk One Piece',
    imagem: 'images/opcaixa.png',
    imagens: ['images/opcaixa.png', 'images/foto2.jpg', 'images/foto3.jpg'],
    categoria: 'caixas-milk',
    subcategoria: 'anime',
    serie: 'One Piece',
    preco: 4.90,
    precoOriginal: 7.90,
    desconto: 38,
    vendidos: 312,
    estoque: 500,
    descricao: 'Caixa milk temática de One Piece impressa em papel couché de alta qualidade com a Epson L3250 e recortada com precisão pela Silhouette Cameo 5. Perfeita para lembrancinhas e festas temáticas.\n\nPedido mínimo: 10 unidades. Personalize com o nome do aniversariante!\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5',
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Pedido mínimo: 10 unidades'],
    emoji: '🏴‍☠️', cor1: '#FF4500', cor2: '#FFD700',
    destaque: true, badge: '38% OFF'
  },
  {
    id: 'cm-princesa',
    nome: 'Caixa Milk Princesa',
    imagem: 'images/princesacaixa.png',
    categoria: 'caixas-milk',
    subcategoria: 'infantil',
    serie: 'Princesa',
    preco: 4.50,
    precoOriginal: 7.50,
    desconto: 40,
    vendidos: 284,
    estoque: 500,
    descricao: 'Caixa milk no tema Princesa para lembrancinha de festa infantil! Impressa com cores vibrantes na Epson L3250 e recortada com a Silhouette Cameo 5. Personalize com o nome da aniversariante.\n\nPedido mínimo: 10 unidades.\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5',
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Pedido mínimo: 10 unidades'],
    emoji: '👑', cor1: '#FFB6C1', cor2: '#FF69B4',
    destaque: true, badge: '40% OFF'
  },
  {
    id: 'cm-super-herois',
    nome: 'Caixa Milk Super-Heróis',
    imagem: 'images/hulkcaixa.png',
    categoria: 'caixas-milk',
    subcategoria: 'super-herois',
    serie: 'Marvel / DC',
    preco: 4.90,
    precoOriginal: 7.90,
    desconto: 38,
    vendidos: 198,
    estoque: 500,
    descricao: 'Caixas milk temáticas de Super-Heróis! Disponível com Spider-Man, Capitão América, Batman, Super-Homem e mais. Impressão vibrante na Epson L3250.\n\nPedido mínimo: 10 unidades.\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5',
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Escolha o herói'],
    emoji: '🦸', cor1: '#DC143C', cor2: '#00008B',
    destaque: true, badge: '38% OFF'
  },
  {
    id: 'cm-futebol',
    nome: 'Caixa Milk Futebol',
    imagem: 'images/corinthians-caixa.png',
    categoria: 'caixas-milk',
    subcategoria: 'esportes',
    serie: 'Futebol',
    preco: 4.50,
    precoOriginal: 7.50,
    desconto: 40,
    vendidos: 176,
    estoque: 500,
    descricao: 'Caixa milk temática de futebol com as cores do time do coração! Impressão de alta qualidade com a Epson L3250. Perfeita para festas de aniversário.\n\nPedido mínimo: 10 unidades.\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5',
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Escolha o time'],
    emoji: '⚽', cor1: '#2ECC71', cor2: '#1ABC9C',
    destaque: false, badge: '40% OFF'
  },
  {
    id: 'cm-naruto',
    nome: 'Caixa Milk Naruto',
    imagem: 'images/narutocaixa.png',
    categoria: 'caixas-milk',
    subcategoria: 'anime',
    serie: 'Naruto',
    preco: 4.90,
    precoOriginal: 7.90,
    desconto: 38,
    vendidos: 143,
    estoque: 500,
    descricao: 'Caixa milk temática de Naruto! Com os personagens favoritos da turma de Konoha. Impressão de alta qualidade com a Epson L3250 e corte pela Silhouette Cameo 5.\n\nPedido mínimo: 10 unidades.\n\nMaterial: Papel couché 300g\nProcesso: Impressão Epson L3250 + Corte Silhouette Cameo 5',
    specs: ['Dimensões: 5,5×9,5×4 cm', 'Material: Papel couché 300g', 'Impressora Epson L3250', 'Corte: Silhouette Cameo 5', 'Pedido mínimo: 10 unidades'],
    emoji: '⚡', cor1: '#FF8C00', cor2: '#4169E1',
    destaque: false, badge: '38% OFF'
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
  return PRODUCTS.filter(p => p.categoria === cat)
    .sort((a, b) => b.vendidos - a.vendidos)
    .slice(0, limit);
}

function getMaisVendidos(limit = 5) {
  const priority = PRODUCTS.filter(p => p.destaque && (p.categoria === 'funko-pop' || p.categoria === 'adesivos'))
    .sort((a, b) => b.vendidos - a.vendidos);
  const others = PRODUCTS.filter(p => p.destaque && p.categoria !== 'funko-pop' && p.categoria !== 'adesivos')
    .sort((a, b) => b.vendidos - a.vendidos);
  return [...priority, ...others].slice(0, limit);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function formatPrice(val) {
  return 'R$ ' + val.toFixed(2).replace('.', ',');
}

function getSoldPercent(p) {
  return Math.round((p.vendidos / p.estoque) * 100);
}

function buildWhatsAppLink(product) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no produto: *${product.nome}*.\nPoderia me dar mais informações?`
  );
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

function renderProductCard(product) {
  const sold = getSoldPercent(product);
  const imageHtml = product.imagem
    ? `<img src="${product.imagem}" alt="${product.nome}" loading="lazy"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const placeholderStyle = product.imagem ? 'display:none' : '';
  return `
    <a href="produto.html?id=${product.id}" class="product-card">
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-image">
        ${imageHtml}
        <div class="product-emoji-placeholder" style="--c1:${product.cor1};--c2:${product.cor2};${placeholderStyle}">
          ${product.emoji}
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat">${product.serie}</div>
        <div class="product-name">${product.nome}</div>
        <div class="product-pricing">
          <span class="product-price">${formatPrice(product.preco)}</span>
          <span class="product-original">${formatPrice(product.precoOriginal)}</span>
        </div>
        <div class="product-progress-wrap">
          <div class="product-progress-bar">
            <div class="product-progress-fill" style="width:${Math.min(sold,100)}%"></div>
          </div>
          <div class="product-sold-text">${sold}% vendido</div>
        </div>
      </div>
    </a>`;
}
