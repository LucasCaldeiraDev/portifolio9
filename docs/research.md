# Research — padrões e referências

## Padrões do mercado imobiliário (landing pages reais)

- Hero com render 3D do prédio + formulário de lead imediato.
- Seções: conceito, localização, plantas/tipologias, andamento da obra, contato.
- "Andamento da obra" quase sempre é uma barra de % estática — aqui vira o
  mecanismo central da página (scroll = progresso da obra).

## Padrões de scroll-storytelling avaliados

| Técnica | Prós | Contras | Decisão |
|---|---|---|---|
| Vídeo scrubbed | foto-realismo | seek impreciso em mobile, asset pesado, difícil reverter | descartado |
| Sequência de frames | controle por frame | centenas de imagens, peso, pipeline de asset | descartado |
| SVG em camadas + GSAP scrub | leve (~kb), reversível perfeito, nítido em qualquer DPI, mostra craft de código | exige desenho manual do SVG | **escolhido** |

## Vernáculo visual do assunto (construção civil)

Fontes de linguagem visual: prancheta de engenharia, carimbo de prancha (title block),
cotas e linhas de chamada, piquetes de topografia, placa de obra, fita zebrada,
diário de obra, grua. Esses elementos viram o sistema gráfico da página em vez de
decoração genérica.
