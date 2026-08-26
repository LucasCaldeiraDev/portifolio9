// Cena do canteiro em SVG autoral, em camadas nomeadas para o GSAP.
// O desenho é autorado no ESTADO FINAL (prédio entregue); a timeline de scroll
// define os estados iniciais em runtime. Elementos com a classe "tmp" existem
// só durante a obra (piquetes, escavação, estacas, grua) e são ocultados via
// CSS no modo `complete` (prefers-reduced-motion).

const FLOORS = 10
const FLOOR_H = 42
const BASE_Y = 686 // topo do radier; base do pavimento térreo
const LEFT = 200
const WIDTH = 320

const floorTop = (i: number) => BASE_Y - (i + 1) * FLOOR_H

interface Props {
  complete?: boolean
  className?: string
}

export function BuildingScene({ complete = false, className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 720 820"
      role="img"
      aria-label="Ilustração técnica do Edifício Vértice: torre de 12 pavimentos nascendo do terreno, com grua, fundação, estrutura e fachada"
      className={`${complete ? 'scene--complete' : ''} ${className}`}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* — contexto urbano distante — */}
      <g opacity="0.14" fill="var(--color-projeto)">
        <rect x="16" y="556" width="92" height="144" />
        <rect x="122" y="612" width="58" height="88" />
        <rect x="612" y="588" width="72" height="112" />
        <rect x="556" y="640" width="44" height="60" />
      </g>

      {/* — solo — */}
      <rect x="0" y="700" width="720" height="120" fill="var(--color-concreto)" opacity="0.35" />
      <line x1="0" y1="700" x2="720" y2="700" stroke="var(--color-grafite)" strokeWidth="2" />

      {/* — demarcação do lote (piquetes + linha) — */}
      <g id="g-lote" className="tmp">
        <rect x="183" y="668" width="5" height="32" fill="var(--color-grafite)" />
        <rect x="532" y="668" width="5" height="32" fill="var(--color-grafite)" />
        <polygon points="183,668 183,660 194,664" fill="var(--color-obra)" />
        <polygon points="537,668 537,660 526,664" fill="var(--color-obra)" />
        <line
          x1="188"
          y1="674"
          x2="532"
          y2="674"
          stroke="var(--color-obra)"
          strokeWidth="1.5"
          strokeDasharray="7 7"
        />
        <text
          x="360"
          y="660"
          textAnchor="middle"
          fontSize="15"
          letterSpacing="3"
          className="font-mono"
          fill="var(--color-grafite)"
        >
          LOTE 09
        </text>
      </g>

      {/* — escavação — */}
      <rect
        id="g-escavacao"
        className="tmp"
        x="205"
        y="700"
        width="310"
        height="62"
        fill="var(--color-grafite)"
        opacity="0.82"
      />

      {/* — estacas — */}
      <g id="g-estacas" className="tmp" fill="var(--color-projeto)">
        {[220, 272, 324, 376, 428, 480].map((x) => (
          <rect key={x} x={x} y="704" width="12" height="54" />
        ))}
      </g>

      {/* — radier / embasamento — */}
      <rect
        id="g-radier"
        x={LEFT}
        y={BASE_Y}
        width={WIDTH}
        height="16"
        fill="var(--color-concreto)"
        stroke="var(--color-grafite)"
        strokeWidth="1.5"
      />

      {/* — cota vertical de altura — */}
      <g id="g-cota" stroke="var(--color-projeto)" strokeWidth="1.5">
        <line x1="168" y1={BASE_Y} x2="168" y2={floorTop(FLOORS - 1)} />
        <line x1="161" y1={BASE_Y} x2="175" y2={BASE_Y} />
        <line x1="161" y1={floorTop(FLOORS - 1)} x2="175" y2={floorTop(FLOORS - 1)} />
      </g>
      <text
        id="g-cota-label"
        x="156"
        y="482"
        transform="rotate(-90 156 482)"
        textAnchor="middle"
        fontSize="14"
        letterSpacing="2"
        className="font-mono"
        fill="var(--color-projeto)"
      >
        34,80 m
      </text>

      {/* — estrutura: pilares + lajes, pavimento a pavimento — */}
      <g id="g-estrutura">
        {Array.from({ length: FLOORS }, (_, i) => {
          const top = floorTop(i)
          return (
            <g key={i} className="floor">
              <rect
                x="206"
                y={top + 9}
                width="10"
                height={FLOOR_H - 9}
                fill="var(--color-concreto)"
                stroke="var(--color-grafite)"
                strokeWidth="1"
              />
              <rect
                x="355"
                y={top + 9}
                width="10"
                height={FLOOR_H - 9}
                fill="var(--color-concreto)"
                stroke="var(--color-grafite)"
                strokeWidth="1"
              />
              <rect
                x="504"
                y={top + 9}
                width="10"
                height={FLOOR_H - 9}
                fill="var(--color-concreto)"
                stroke="var(--color-grafite)"
                strokeWidth="1"
              />
              <rect
                x={LEFT}
                y={top}
                width={WIDTH}
                height="9"
                fill="var(--color-concreto)"
                stroke="var(--color-grafite)"
                strokeWidth="1.25"
              />
            </g>
          )
        })}
      </g>

      {/* — fachada: painéis por pavimento — */}
      <g id="g-fachada">
        {Array.from({ length: FLOORS }, (_, i) => {
          const top = floorTop(i)
          return (
            <g key={i} className="panel">
              <rect
                x={LEFT}
                y={top + 9}
                width={WIDTH}
                height={FLOOR_H - 9}
                fill="var(--color-painel)"
                stroke="var(--color-grafite)"
                strokeWidth="0.75"
              />
              {[280, 360, 440].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={top + 9}
                  x2={x}
                  y2={top + FLOOR_H}
                  stroke="var(--color-grafite)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
            </g>
          )
        })}
      </g>

      {/* — esquadrias (pav. 1..9) + térreo ativo — */}
      <g id="g-esquadrias">
        {Array.from({ length: FLOORS - 1 }, (_, f) => {
          const top = floorTop(f + 1)
          return [219, 294, 369, 444].map((x) => (
            <rect
              key={`${f}-${x}`}
              className="win"
              x={x}
              y={top + 17}
              width="56"
              height="20"
              fill="var(--color-vidro)"
            />
          ))
        })}
        <rect className="win" x="212" y="655" width="100" height="26" fill="var(--color-vidro)" />
        <rect className="win" x="408" y="655" width="100" height="26" fill="var(--color-vidro)" />
      </g>

      {/* — luzes acesas (estado de entrega) — */}
      <g id="g-luzes">
        {Array.from({ length: FLOORS - 1 }, (_, f) => {
          const top = floorTop(f + 1)
          return [219, 294, 369, 444]
            .filter((_, j) => (f * 4 + j) % 3 !== 1)
            .map((x) => (
              <rect
                key={`${f}-${x}`}
                className="light"
                x={x}
                y={top + 17}
                width="56"
                height="20"
                fill="var(--color-luz)"
                opacity="0.95"
              />
            ))
        })}
      </g>

      {/* — entrada do térreo — */}
      <g id="g-terreo-entrada">
        <rect x="320" y="648" width="80" height="7" fill="var(--color-obra)" />
        <rect
          x="338"
          y="655"
          width="44"
          height="31"
          fill="var(--color-vidro)"
          stroke="var(--color-grafite)"
          strokeWidth="1"
        />
      </g>

      {/* — coroamento: platibanda, volume técnico, antena — */}
      <g id="g-coroamento">
        <rect x="196" y="252" width="328" height="14" fill="var(--color-grafite)" />
        <rect x="384" y="228" width="92" height="24" fill="var(--color-grafite)" />
        <line x1="430" y1="228" x2="430" y2="198" stroke="var(--color-grafite)" strokeWidth="2" />
        <circle cx="430" cy="195" r="3.5" fill="var(--color-obra)" />
      </g>

      {/* — grua — */}
      <g id="g-grua" className="tmp">
        <rect x="580" y="690" width="44" height="10" fill="var(--color-grafite)" />
        <rect
          x="596"
          y="240"
          width="12"
          height="450"
          fill="var(--color-obra)"
          stroke="var(--color-grafite)"
          strokeWidth="1"
        />
        <g id="g-grua-jib">
          <rect x="432" y="236" width="170" height="7" fill="var(--color-obra)" />
          <rect x="602" y="236" width="64" height="7" fill="var(--color-obra)" />
          <rect x="650" y="243" width="20" height="14" fill="var(--color-grafite)" />
          <line x1="602" y1="200" x2="440" y2="236" stroke="var(--color-grafite)" strokeWidth="1" />
          <line x1="602" y1="200" x2="660" y2="236" stroke="var(--color-grafite)" strokeWidth="1" />
          <line
            x1="470"
            y1="243"
            x2="470"
            y2="300"
            stroke="var(--color-grafite)"
            strokeWidth="1.5"
          />
          <rect x="464" y="300" width="12" height="10" fill="var(--color-grafite)" />
        </g>
        <rect x="588" y="224" width="28" height="18" fill="var(--color-obra)" />
        <polygon points="602,198 590,224 614,224" fill="var(--color-obra)" />
      </g>

      {/* — selo de entrega — */}
      <g id="g-selo">
        <g transform="rotate(-8 300 150)">
          <rect
            x="220"
            y="124"
            width="160"
            height="52"
            fill="var(--color-papel)"
            opacity="0.94"
            stroke="var(--color-obra)"
            strokeWidth="3"
          />
          <text
            x="300"
            y="160"
            textAnchor="middle"
            fontSize="30"
            letterSpacing="4"
            className="font-display"
            fontWeight="800"
            fill="var(--color-obra)"
          >
            ENTREGUE
          </text>
        </g>
      </g>
    </svg>
  )
}
