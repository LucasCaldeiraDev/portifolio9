# Direção visual — "Prancheta de engenharia"

A página é desenhada como uma prancha técnica que ganha vida: papel de projeto,
linework de cota, carimbo de prancha, e o laranja de sinalização de obra como
único acento quente.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `papel` | `#EDEAE3` | fundo claro (papel técnico envelhecido pelo canteiro) |
| `concreto` | `#C9C5BB` | superfícies, bordas, preenchimentos neutros |
| `grafite` | `#191C1F` | tinta principal, fundos escuros, texto |
| `projeto` | `#33566E` | azul de linework técnico, anotações, cotas |
| `obra` | `#F25C05` | laranja de sinalização — CTA, grua, destaques (uso disciplinado) |
| `ceu-alvorada` → `ceu-dia` | `#2B3A50` → `#B8CCD9` | gradiente do céu na cena, controlado pelo scroll |

## Tipografia

- **Display:** Big Shoulders (condensada industrial, pesos 600–800, caixa alta com
  tracking apertado) — voz de placa de obra e letreiro de máquina.
- **Corpo:** Archivo (400/500) — neutra, boa leitura em blocos curtos.
- **Utilitária:** IBM Plex Mono — cotas, medidas, HUD, carimbo de prancha, eyebrows.

## Sistema gráfico

- Eyebrows no formato de cota: `ETAPA 02 — ESTRUTURA` em Plex Mono com ticks `|—|`.
- Numeração de seções é justificada: as etapas SÃO uma sequência real de obra.
- Carimbo de prancha (title block) no hero e no footer: autor, data, escala, revisão.
- Linhas tracejadas finas de projeto como divisores; nada de cards com sombra difusa.
- Fita zebrada (laranja/grafite) como detalhe raro — apenas no HUD e no CTA final.

## Assinatura

A cena pinada do canteiro: o prédio em SVG que o scroll constrói, com céu que
clareia da alvorada ao dia conforme a obra avança, e o HUD "Diário de Obra"
com % real de progresso. Todo o resto da página fica quieto para essa cena brilhar.

## O que evitar

- Cream + serif + terracotta genérico; glassmorphism; gradientes decorativos.
- Sombras suaves de template; cards sem propósito; hero de "número grande + label".
