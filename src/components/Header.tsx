const links = [
  { href: '#obra', label: 'A obra' },
  { href: '#empreendimento', label: 'Ficha' },
  { href: '#cronograma', label: 'Cronograma' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-grafite/20 bg-papel/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#terreno" className="font-display text-2xl font-extrabold uppercase tracking-tight">
          Vértice<span className="text-obra">.</span>
        </a>
        <nav aria-label="Seções da página" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-grafite/70 transition-colors hover:text-obra"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="bg-grafite px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-papel transition-colors hover:bg-obra"
        >
          Contato
        </a>
      </div>
    </header>
  )
}
