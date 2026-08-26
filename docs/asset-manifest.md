# Asset manifest

Decisão de direção técnica: **zero assets binários**. Toda a cena é SVG autoral
inline + CSS. Consequências: página leve, scrubbing reversível perfeito, nitidez
em qualquer DPI, sem pipeline de vídeo/imagem, sem custo de geração.

| Asset | Tipo | Origem | Uso |
|---|---|---|---|
| Cena do canteiro (terreno, escavação, fundação, grua, estrutura, fachada, vidro, luzes) | SVG inline em camadas | autoral, `BuildingScene.tsx` | seção pinada |
| Lote do hero (piquetes, cotas, contorno do lote) | SVG inline | autoral, dentro do Hero | hero |
| Fontes Big Shoulders / Archivo / IBM Plex Mono | woff2 | Google Fonts (`display=swap`) | tipografia |
| Favicon | SVG data URI | autoral | aba |

Sem vídeos, sem posters, sem imagens raster. Se no futuro entrarem renders reais
do empreendimento, entram como `<img loading="lazy">` abaixo da dobra, com
`aspect-ratio` reservado para evitar CLS.
