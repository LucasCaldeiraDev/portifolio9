# Wireframe (desktop)

```
┌────────────────────────────────────────────┐
│ VÉRTICE          obra · ficha · contato  ▓ │  header fixo, fino
├────────────────────────────────────────────┤
│  ETAPA 00 — TERRENO                        │
│  ┌──────────────┐   O TERRENO JÁ           │
│  │ lote em SVG  │   SABE O QUE VAI         │
│  │ (piquetes,   │   SER.                   │
│  │  cotas)      │   sub + CTA scroll ↓     │
│  └──────────────┘   [carimbo de prancha]   │
├────────────────────────────────────────────┤
│  SEÇÃO PINADA (≈400vh de scroll)           │
│  ┌───────────────────┬──────────────────┐  │
│  │                   │ ETAPA 01         │  │
│  │   CENA SVG        │ FUNDAÇÃO         │  │
│  │   (prédio         │ texto da etapa   │  │
│  │    nascendo)      │ dados técnicos   │  │
│  │                   │                  │  │
│  └───────────────────┴──────────────────┘  │
│  [HUD: DIÁRIO DE OBRA · etapa · ████ 42%]  │
├────────────────────────────────────────────┤
│  FICHA TÉCNICA   (grade 2×3 de dados)      │
├────────────────────────────────────────────┤
│  CRONOGRAMA      (timeline vertical)       │
├────────────────────────────────────────────┤
│  AUTOR  foto/monograma + GitHub + e-mail   │
├────────────────────────────────────────────┤
│  footer: aviso fictício + créditos         │
└────────────────────────────────────────────┘
```

## Mobile

- Cena SVG ocupa a metade superior do viewport pinado; texto da etapa entra como
  cartão na parte inferior, um por vez.
- Pin reduzido (≈300vh). HUD encolhe para uma linha.
- Ficha técnica vira grade 1×N; timeline permanece vertical.
