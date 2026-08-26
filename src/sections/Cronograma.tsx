import { cronograma } from '../content/site'

export function Cronograma() {
  return (
    <section id="cronograma" className="border-t hairline bg-concreto/25">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <p className="cota" data-reveal>
          Prancha 05 — Cronograma
        </p>
        <h2 className="display mt-4 max-w-2xl text-5xl md:text-6xl" data-reveal>
          Da terraplanagem às chaves.
        </h2>
        <ol className="mt-14 max-w-2xl">
          {cronograma.map((m, i) => {
            const last = i === cronograma.length - 1
            return (
              <li key={m.data} className="relative flex gap-6 pb-10 last:pb-0" data-reveal>
                {/* trilho vertical */}
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[5px] top-4 h-full w-px bg-projeto/40"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={`relative mt-1.5 h-[11px] w-[11px] shrink-0 border-2 ${
                    last ? 'border-obra bg-obra' : 'border-projeto bg-papel'
                  }`}
                />
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-projeto">
                    {m.data}
                  </span>
                  <span
                    className={`display text-2xl md:text-3xl ${last ? 'text-obra' : ''}`}
                  >
                    {m.marco}
                  </span>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
