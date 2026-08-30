import { autor, avisoFicticio, avisoImagens } from '../content/site'

export function Footer() {
  return (
    <footer className="border-t border-papel/15 bg-grafite text-papel">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl font-mono text-[0.6875rem] leading-relaxed tracking-wide text-papel/45">
          {avisoFicticio} {avisoImagens}
        </p>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-papel/45">
          © 2026 {autor.nome} · Rev. 2026-08
        </p>
      </div>
    </footer>
  )
}
