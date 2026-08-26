import { useLayoutEffect } from 'react'
import { gsap } from './lib/gsap'
import { useReducedMotion } from './hooks/useReducedMotion'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Obra } from './sections/Obra'
import { Ficha } from './sections/Ficha'
import { Cronograma } from './sections/Cronograma'
import { Autor } from './sections/Autor'
import { Footer } from './sections/Footer'

export default function App() {
  const reduced = useReducedMotion()

  // Reveals únicos das seções abaixo da dobra (fora da cena pinada)
  useLayoutEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 18,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Obra />
        <Ficha />
        <Cronograma />
        <Autor />
      </main>
      <Footer />
    </>
  )
}
