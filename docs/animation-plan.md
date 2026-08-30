# Plano de animação

## Cena pinada (`#obra`) — GSAP ScrollTrigger, scrub: 0.6

> Decisão final com o cliente (2026-08-28, 2ª revisão): nem SVG esquemático,
> nem slideshow de fotos — o cliente quer a obra **contínua e real**. A cena é
> um vídeo timelapse (Wan 3.0, quadro inicial e final travados na mesma câmera)
> cujo TEMPO é controlado pelo scroll. O SVG permanece só na planta do hero.

Pin de 430% no desktop, 320% no mobile. `video.currentTime` persegue o alvo
(`progress × duração`) num loop de rAF com lerp 0.22 — suaviza seeks e funciona
nos dois sentidos. Vídeo re-encodado com keyframes densos para seek fluido;
`muted playsInline`, sem áudio, poster do terreno vazio, carregamento completo
disparado quando a seção se aproxima (`start: 'top 160%'`).

| Trecho | Etapa | Conteúdo do vídeo |
|---|---|---|
| 0.00–0.24 | 01 Fundação | terreno cercado → escavação e fundações |
| 0.24–0.54 | 02 Estrutura | esqueleto de concreto sobe com a grua |
| 0.54–0.79 | 03 Fachada | painéis e vidros fecham o prédio |
| 0.79–1.00 | 04 Entrega | grua sai, prédio pronto, luzes acesas |

Gradientes grafite no topo/rodapé protegem legibilidade de header, cards e HUD.
Blocos de texto: crossfade (só opacity/transform Y curto), nunca dois visíveis.

## Outras animações

- Hero: desenho das linhas de cota no load (uma vez, `stroke-dashoffset`, <1.2s).
- Seções abaixo: reveal único e curto (opacity + 16px Y) via ScrollTrigger `once`.
- Microinterações de hover em CTA e links: CSS puro (transform/curva rápida).

## Regras

- Só `transform` e `opacity` nas fotos (compositor-friendly).
- GSAP é dono exclusivo da cena; CSS cuida apenas de hovers (nunca a mesma propriedade).
- `prefers-reduced-motion`: sem pin e sem scrub — etapas viram cartões estáticos
  empilhados, cada um com sua foto. Reveals viram estado final.
- Pin liberado ao fim da narrativa; nada de scroll horizontal; sem scroll-jacking
  de velocidade (Lenis descartado — não agrega aqui).
- Cleanup completo dos ScrollTriggers no unmount (`gsap.context`).
