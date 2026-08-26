import { ficha } from '../content/site'

export function Ficha() {
  return (
    <section id="empreendimento" className="mx-auto max-w-6xl px-4 py-24" data-reveal>
      <p className="cota">Prancha 04 — {ficha.titulo}</p>
      <h2 className="display mt-4 max-w-2xl text-5xl md:text-6xl">
        44 endereços sobre o mesmo alicerce.
      </h2>
      <dl className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {ficha.itens.map((item) => (
          <div key={item.label} className="border-t-2 border-grafite py-5">
            <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-grafite/60">
              {item.label}
            </dt>
            <dd className="display mt-2 text-2xl md:text-3xl">{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-grafite/45">
        * Dados ilustrativos — projeto fictício de portfólio
      </p>
    </section>
  )
}
