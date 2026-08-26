import { autor } from '../content/site'

function LotePlanta() {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Planta de situação do Lote 09: terreno de 24 por 30 metros com a projeção da futura torre"
      className="h-auto w-full max-w-md"
    >
      {/* cota horizontal */}
      <g stroke="var(--color-projeto)" strokeWidth="1">
        <line x1="70" y1="52" x2="350" y2="52" />
        <line x1="70" y1="46" x2="70" y2="58" />
        <line x1="350" y1="46" x2="350" y2="58" />
      </g>
      <text
        x="210"
        y="42"
        textAnchor="middle"
        fontSize="12"
        letterSpacing="2"
        className="font-mono"
        fill="var(--color-projeto)"
      >
        24,00 m
      </text>

      {/* cota vertical */}
      <g stroke="var(--color-projeto)" strokeWidth="1">
        <line x1="44" y1="80" x2="44" y2="380" />
        <line x1="38" y1="80" x2="50" y2="80" />
        <line x1="38" y1="380" x2="50" y2="380" />
      </g>
      <text
        x="32"
        y="230"
        transform="rotate(-90 32 230)"
        textAnchor="middle"
        fontSize="12"
        letterSpacing="2"
        className="font-mono"
        fill="var(--color-projeto)"
      >
        30,00 m
      </text>

      {/* norte */}
      <g transform="translate(374,84)">
        <circle r="16" fill="none" stroke="var(--color-projeto)" strokeWidth="1" />
        <polygon points="0,-11 5,7 0,3 -5,7" fill="var(--color-obra)" />
        <text
          y="30"
          textAnchor="middle"
          fontSize="10"
          className="font-mono"
          fill="var(--color-projeto)"
        >
          N
        </text>
      </g>

      {/* limite do lote */}
      <rect
        x="70"
        y="80"
        width="280"
        height="300"
        fill="none"
        stroke="var(--color-grafite)"
        strokeWidth="2"
        strokeDasharray="10 6"
      />

      {/* piquetes nos cantos */}
      {[
        [70, 80],
        [350, 80],
        [70, 380],
        [350, 380],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} stroke="var(--color-obra)" strokeWidth="2.5">
          <line x1={x - 6} y1={y - 6} x2={x + 6} y2={y + 6} />
          <line x1={x - 6} y1={y + 6} x2={x + 6} y2={y - 6} />
        </g>
      ))}

      {/* projeção da torre */}
      <rect
        x="118"
        y="140"
        width="184"
        height="180"
        fill="var(--color-projeto)"
        fillOpacity="0.08"
        stroke="var(--color-projeto)"
        strokeWidth="1.25"
        strokeDasharray="5 4"
      />
      <text
        x="210"
        y="222"
        textAnchor="middle"
        fontSize="11"
        letterSpacing="2"
        className="font-mono"
        fill="var(--color-projeto)"
      >
        PROJEÇÃO DA TORRE
      </text>
      <text
        x="210"
        y="240"
        textAnchor="middle"
        fontSize="11"
        letterSpacing="2"
        className="font-mono"
        fill="var(--color-projeto)"
      >
        12 PAV · 44 UN
      </text>

      <text
        x="210"
        y="360"
        textAnchor="middle"
        fontSize="13"
        letterSpacing="3"
        className="font-mono"
        fill="var(--color-grafite)"
      >
        LOTE 09 — 720 m²
      </text>
    </svg>
  )
}

function Carimbo() {
  const rows: Array<[string, string]> = [
    ['Obra', 'Edifício Vértice'],
    ['Prancha', '01/06 — Situação'],
    ['Resp.', autor.nome],
    ['Escala', '1:100'],
    ['Rev.', '2026-08'],
  ]
  return (
    <table className="w-full max-w-sm border-2 border-grafite font-mono text-[0.6875rem]">
      <caption className="sr-only">Carimbo da prancha</caption>
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k} className="border-b border-grafite/40 last:border-0">
            <th
              scope="row"
              className="w-24 border-r border-grafite/40 px-3 py-1.5 text-left font-normal uppercase tracking-[0.14em] text-grafite/60"
            >
              {k}
            </th>
            <td className="px-3 py-1.5 uppercase tracking-wide">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Hero() {
  return (
    <section id="terreno" className="mx-auto max-w-6xl px-4 pb-20 pt-28 md:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[5fr_6fr]">
        <div className="hero-rise order-2 lg:order-1" style={{ animationDelay: '0.25s' }}>
          <LotePlanta />
        </div>
        <div className="order-1 lg:order-2">
          <p className="cota hero-rise">Prancha 01 — O terreno · Lote 09</p>
          <h1 className="display hero-rise mt-4 text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '0.1s' }}>
            O terreno já sabe
            <br />o que vai ser.
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-grafite/80 md:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            O Edifício Vértice é um empreendimento fictício que se constrói no ritmo do seu
            scroll: fundação, estrutura, fachada e entrega — sem pular nenhuma etapa da obra.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-5" style={{ animationDelay: '0.3s' }}>
            <a href="#obra" className="btn-obra">
              Acompanhar a obra ↓
            </a>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-grafite/50">
              role para construir
            </span>
          </div>
          <div className="hero-rise mt-12" style={{ animationDelay: '0.4s' }}>
            <Carimbo />
          </div>
        </div>
      </div>
    </section>
  )
}
