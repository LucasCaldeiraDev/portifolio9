# Plano de animação

## Cena pinada (`#obra`) — GSAP ScrollTrigger, scrub: true

Pin de 400vh no desktop, 300vh no mobile. Uma única timeline com labels por etapa.
Progresso da timeline alimenta o HUD (% e nome da etapa).

| Trecho | Etapa | O que acontece na cena | Texto lateral |
|---|---|---|---|
| 0.00–0.25 | 01 Fundação | piquetes saem, escavação abre, estacas descem em stagger, sapata/radier desenha | bloco 01 entra |
| 0.25–0.55 | 02 Estrutura | grua sobe e gira, pavimentos empilham em stagger (8 lajes), céu começa a clarear | bloco 02 |
| 0.55–0.80 | 03 Fachada | painéis varrem cada pavimento, esquadrias aparecem, grua recua | bloco 03 |
| 0.80–1.00 | 04 Entrega | grua sai, coroamento + vidro, céu chega ao dia, janelas acendem, selo ENTREGUE | bloco 04 |

Blocos de texto: crossfade (só opacity/transform Y curto), nunca dois visíveis.

## Outras animações

- Hero: desenho das linhas de cota no load (uma vez, `stroke-dashoffset`, <1.2s).
- Seções abaixo: reveal único e curto (opacity + 16px Y) via ScrollTrigger `once`.
- Microinterações de hover em CTA e links: CSS puro (transform/curva rápida).

## Regras

- Só `transform`, `opacity`, `stroke-dashoffset` e cor de céu (background do wrapper).
- GSAP é dono exclusivo da cena; CSS cuida apenas de hovers (nunca a mesma propriedade).
- `prefers-reduced-motion`: sem pin e sem scrub — cena renderiza o prédio pronto,
  etapas viram cartões estáticos empilhados. Reveals viram estado final.
- Pin liberado ao fim da narrativa; nada de scroll horizontal; sem scroll-jacking
  de velocidade (Lenis descartado — não agrega aqui).
- Cleanup completo dos ScrollTriggers no unmount (`gsap.context`).
