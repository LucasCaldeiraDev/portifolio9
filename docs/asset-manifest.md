# Asset manifest

Direção técnica (decisão final com o cliente): a cena pinada é um **vídeo
timelapse contínuo** da obra (Wan 3.0, 10s, 1080p, 55 créditos) com quadro
inicial (terreno vazio) e final (prédio entregue) travados na mesma câmera,
scrubbed pelo scroll. As 4 fotos de etapa permanecem na Ficha e no fallback de
`prefers-reduced-motion`. Tudo sinalizado como IA na ficha e no rodapé.

| Vídeo | Job | Uso | Arquivo |
|---|---|---|---|
| Timelapse terreno → entrega (10s) | `31551279…` | cena pinada (1920w e 960w, keyframes densos) | `public/videos/vertice-obra-{1920,960}.mp4` |
| Quadro inicial / poster | `5e1c86aa…` | poster do vídeo | `public/images/vertice-terreno-poster.webp` |

## Estratégia de consistência (custo: 4 gerações, 0 retakes)

1. Imagem-mestre do prédio entregue gerada primeiro (16:9, 2k) e aprovada.
2. As 3 etapas anteriores geradas com a mestre como `image_reference` — mesma
   esquina, mesmos vizinhos, mesma câmera; luz progride alvorada → golden hour,
   ecoando o céu da cena pinada.
3. O card "Entrega" reutiliza a própria mestre (sem geração extra).

| Asset | Job | Uso | Arquivo |
|---|---|---|---|
| Entrega / mestre (golden hour, 1920w webp, 193 kB) | `a0663274…` | cena etapa 04 + Ficha (destaque) | `public/images/vertice-entrega.webp` |
| Fundação (alvorada, 1920w webp, 174 kB) | `ab64b9d1…` | cena etapa 01 | `public/images/vertice-fundacao.webp` |
| Estrutura (manhã, 1920w webp, 141 kB) | `1fe225d4…` | cena etapa 02 | `public/images/vertice-estrutura.webp` |
| Fachada (meio-dia, 1920w webp, 185 kB) | `9b1e5b21…` | cena etapa 03 | `public/images/vertice-fachada.webp` |

Cena: 2 primeiras `eager`, 2 últimas `lazy`; `width/height` declarados (CLS 0);
fotos da cena são decorativas (`alt=""` + `aria-hidden`) — o conteúdo está nos
cards HTML. Total: 693 kB.

| Demais assets | Tipo | Origem |
|---|---|---|
| Cena do canteiro + lote do hero | SVG inline autoral | `BuildingScene.tsx` / Hero |
| Fontes Big Shoulders / Archivo / IBM Plex Mono | woff2 | Google Fonts (`display=swap`) |
| Favicon | SVG data URI | autoral |
