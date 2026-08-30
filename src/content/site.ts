// Todo o conteúdo comercial desta página é fictício — estudo de portfólio.

export interface StageDatum {
  label: string
  value: string
}

export interface Stage {
  id: string
  numero: string
  nome: string
  titulo: string
  texto: string
  dados: StageDatum[]
  img: string
  imgAlt: string
}

export const stages: Stage[] = [
  {
    id: 'fundacao',
    numero: '01',
    nome: 'Fundação',
    titulo: 'Antes de subir, a obra desce.',
    texto:
      'Estacas hélice contínua perfuram até encontrar solo firme. Sobre elas, o radier distribui o peso de tudo o que vem pela frente.',
    dados: [
      { label: 'Profundidade', value: '−12,0 m' },
      { label: 'Estacas', value: '48 un' },
      { label: 'Concreto', value: '900 m³' },
    ],
    img: '/images/vertice-fundacao.webp',
    imgAlt:
      'Canteiro de obras na alvorada: escavação aberta com armaduras de estacas expostas e barreiras laranja no perímetro do lote',
  },
  {
    id: 'estrutura',
    numero: '02',
    nome: 'Estrutura',
    titulo: 'Uma laje por semana.',
    texto:
      'Pilares e lajes em concreto armado sobem em ciclos de sete dias. A grua alimenta o canteiro enquanto o edifício ganha o céu.',
    dados: [
      { label: 'Pavimentos', value: '12' },
      { label: 'Pé-direito', value: '2,90 m' },
      { label: 'Ciclo de laje', value: '7 dias' },
    ],
    img: '/images/vertice-estrutura.webp',
    imgAlt:
      'Esqueleto de concreto armado de 12 pavimentos ao amanhecer, com fôrmas no topo e grua laranja ao lado',
  },
  {
    id: 'fachada',
    numero: '03',
    nome: 'Fachada',
    titulo: 'A pele do edifício.',
    texto:
      'Painéis de fachada ventilada e esquadrias de alumínio fecham o corpo do prédio, pavimento por pavimento, de baixo para cima.',
    dados: [
      { label: 'Painéis', value: '640 un' },
      { label: 'Esquadrias', value: '96 un' },
      { label: 'Desempenho', value: 'NBR 15575' },
    ],
    img: '/images/vertice-fachada.webp',
    imgAlt:
      'Torre com dois terços inferiores já fechados em painéis de fachada bege e o topo ainda em concreto aparente, com plataformas de fachada e grua',
  },
  {
    id: 'entrega',
    numero: '04',
    nome: 'Entrega',
    titulo: 'Chaves na mão, grua no caminhão.',
    texto:
      'Vidros instalados, luzes acesas, habite-se emitido. O terreno que você viu lá em cima agora é um endereço.',
    dados: [
      { label: 'Unidades', value: '44' },
      { label: 'Plantas', value: '62–118 m²' },
      { label: 'Habite-se', value: '2029' },
    ],
    img: '/images/vertice-entrega.webp',
    imgAlt:
      'Torre residencial concluída na golden hour, com fachada bege, janelas acesas e marquise laranja na entrada do térreo',
  },
]

export const avisoImagens =
  'Imagens ilustrativas geradas por IA (Higgsfield · Nano Banana 2) para este estudo de portfólio.'

export const ficha = {
  titulo: 'Ficha técnica',
  itens: [
    { label: 'Torre', value: 'Única, 12 pavimentos' },
    { label: 'Unidades', value: '44, de 62 a 118 m²' },
    { label: 'Subsolos', value: '2 níveis de garagem' },
    { label: 'Térreo', value: 'Ativo, com comércio' },
    { label: 'Rooftop', value: 'Solário e mirante' },
    { label: 'Sistema', value: 'Concreto armado + fachada ventilada' },
  ],
}

export const cronograma = [
  { data: '2026 · T3', marco: 'Terraplanagem e contenções' },
  { data: '2027 · T1', marco: 'Fundações concluídas' },
  { data: '2027 · T4', marco: 'Estrutura no último pavimento' },
  { data: '2028 · T3', marco: 'Fachada e esquadrias' },
  { data: '2029 · T2', marco: 'Acabamentos e paisagismo' },
  { data: '2029 · T4', marco: 'Entrega das chaves' },
]

export const autor = {
  nome: 'Lucas Caldeira Pires',
  papel: 'Desenvolvedor front-end',
  texto:
    'Esta página é um estudo de scroll-storytelling: React, TypeScript, GSAP ScrollTrigger, um SVG autoral que o scroll transforma em prédio e fotografia de obra gerada por IA com direção de consistência entre as etapas — tudo em menos de 500 kB de imagens.',
  email: 'fluxorahub.crm@gmail.com',
  // TODO: trocar pelo perfil real do GitHub
  github: 'https://github.com/',
}

export const avisoFicticio =
  'O Edifício Vértice é um empreendimento fictício. Nada nesta página constitui oferta real de imóvel — é um estudo de design e engenharia de front-end.'
