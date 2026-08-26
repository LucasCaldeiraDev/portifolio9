import { autor } from '../content/site'

const stack = ['React 19', 'TypeScript', 'GSAP ScrollTrigger', 'Tailwind 4', 'SVG autoral']

export function Autor() {
  return (
    <section id="contato" className="bg-grafite text-papel">
      <div className="zebra h-1.5" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-24" data-reveal>
        <p className="cota text-obra before:bg-obra/60 after:bg-obra/60">
          Prancha 06 — Quem assina
        </p>
        <h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">
          Projetado e construído por {autor.nome}.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-papel/75 md:text-lg">
          {autor.texto}
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-papel/50">
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-5">
          <a href={`mailto:${autor.email}`} className="btn-obra">
            Falar comigo
          </a>
          <a
            href={autor.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border-2 border-papel/40 px-6 py-3 font-display text-lg font-bold uppercase tracking-wide transition-colors hover:border-obra hover:text-obra"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
