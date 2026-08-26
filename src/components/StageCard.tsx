import type { Stage } from '../content/site'

export function StageCard({ stage }: { stage: Stage }) {
  return (
    <article className="border-2 border-grafite bg-papel p-6 md:p-8">
      <p className="cota">
        Etapa {stage.numero} — {stage.nome}
      </p>
      <h3 className="display mt-3 text-3xl md:text-4xl">{stage.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-grafite/80 md:text-base">{stage.texto}</p>
      <dl className="mt-5 font-mono text-xs">
        {stage.dados.map((d) => (
          <div
            key={d.label}
            className="flex items-baseline justify-between border-t border-dashed border-projeto/40 py-2"
          >
            <dt className="uppercase tracking-[0.14em] text-grafite/60">{d.label}</dt>
            <dd className="text-sm font-medium text-projeto">{d.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
