# Performance budget

| Métrica | Alvo |
|---|---|
| JS total (gzip) | ≤ 130 kB (React + GSAP + app) |
| CSS (gzip) | ≤ 15 kB |
| Assets binários | 0 |
| Fontes | 3 famílias, subsets latinos, `display=swap` |
| LCP | ≤ 2.0s em 4G (conteúdo do hero é texto + SVG inline) |
| CLS | ≈ 0 (nenhum asset sem dimensão; pin não desloca layout) |
| Long tasks no scroll | nenhuma > 50ms (animações só compositor-friendly) |

## Táticas

- SVG inline (sem request extra); sem imagens; sem vídeo.
- GSAP importado uma vez, ScrollTrigger registrado uma vez em `lib/gsap.ts`.
- Animações limitadas a transform/opacity/stroke; `will-change` só na cena pinada.
- Reveals com `once: true` (trigger morre após rodar).
- Build Vite com minificação padrão; sem dependências além de react/gsap.
