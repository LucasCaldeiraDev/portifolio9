import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { stages } from '../content/site'
import { BuildingScene } from '../components/BuildingScene'
import { StageCard } from '../components/StageCard'
import { useReducedMotion } from '../hooks/useReducedMotion'

// Fronteiras das etapas na timeline (unidades 0–100), usadas pelo HUD.
const STAGE_BOUNDS = [0, 0.24, 0.54, 0.79]

export function Obra() {
  const reduced = useReducedMotion()
  return reduced ? <ObraStatic /> : <ObraAnimated />
}

function ObraStatic() {
  return (
    <section id="obra" aria-label="Etapas da obra" className="bg-grafite">
      <div className="bg-[linear-gradient(180deg,#b8ccd9_0%,#cfdde6_60%,#e5e2d8_100%)] py-10">
        <BuildingScene complete className="mx-auto block h-[60vh] w-full max-w-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {stages.map((s) => (
          <StageCard key={s.id} stage={s} />
        ))}
      </div>
    </section>
  )
}

function ObraAnimated() {
  const sectionRef = useRef<HTMLElement>(null)
  const hudStageRef = useRef<HTMLSpanElement>(null)
  const hudPctRef = useRef<HTMLSpanElement>(null)
  const hudBarRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)

      // Estados iniciais (o SVG é autorado no estado final)
      gsap.set(q('.floor'), { autoAlpha: 0, y: 26 })
      gsap.set(q('.panel'), { scaleX: 0, transformOrigin: 'left center' })
      gsap.set([q('.win'), q('.light'), '#g-terreo-entrada', '#g-cota-label'], { autoAlpha: 0 })
      gsap.set('#g-coroamento', { autoAlpha: 0, y: 12 })
      gsap.set('#g-grua', { autoAlpha: 0, scaleY: 0.55, transformOrigin: '50% 100%' })
      gsap.set('#g-escavacao', { scaleY: 0, transformOrigin: '50% 0%' })
      gsap.set(q('#g-estacas rect'), { y: -70, autoAlpha: 0 })
      gsap.set('#g-radier', { scaleX: 0, transformOrigin: 'left center' })
      gsap.set('#g-cota', { scaleY: 0, transformOrigin: '50% 100%' })
      gsap.set('#g-selo', { autoAlpha: 0, scale: 1.7, transformOrigin: '50% 50%' })
      gsap.set('#sky-day', { opacity: 0 })
      gsap.set(q('.stage-block'), { autoAlpha: 0, y: 24 })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => (window.innerWidth < 768 ? '+=320%' : '+=430%'),
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (st) => {
            const p = st.progress
            let i = STAGE_BOUNDS.length - 1
            while (i > 0 && p < STAGE_BOUNDS[i]) i--
            if (hudStageRef.current) {
              hudStageRef.current.textContent = `${stages[i].numero} · ${stages[i].nome.toUpperCase()}`
            }
            if (hudPctRef.current) {
              hudPctRef.current.textContent = `${Math.round(p * 100)}%`
            }
            if (hudBarRef.current) {
              hudBarRef.current.style.transform = `scaleX(${p})`
            }
          },
        },
      })

      const blocks = q('.stage-block')
      const showBlock = (i: number, at: number) =>
        tl.to(blocks[i], { autoAlpha: 1, y: 0, duration: 2.5, ease: 'power2.out' }, at)
      const hideBlock = (i: number, at: number) =>
        tl.to(blocks[i], { autoAlpha: 0, y: -18, duration: 2, ease: 'power2.in' }, at)

      // ETAPA 01 — FUNDAÇÃO (0–24)
      showBlock(0, 0)
      tl.to('#g-lote', { autoAlpha: 0, duration: 3 }, 0)
      tl.to('#g-escavacao', { scaleY: 1, duration: 5 }, 1)
      tl.to(q('#g-estacas rect'), { y: 0, autoAlpha: 1, duration: 4, stagger: 0.8 }, 5.5)
      tl.to('#g-radier', { scaleX: 1, duration: 5 }, 12)
      tl.to(['#g-escavacao', '#g-estacas'], { autoAlpha: 0, duration: 3 }, 17.5)
      hideBlock(0, 21)

      // ETAPA 02 — ESTRUTURA (24–54)
      showBlock(1, 24)
      tl.to('#g-grua', { autoAlpha: 1, scaleY: 1, duration: 4 }, 24)
      tl.to(q('.floor'), { autoAlpha: 1, y: 0, duration: 3, stagger: 2.2 }, 27)
      tl.to('#g-cota', { scaleY: 1, duration: 22 }, 27)
      tl.to('#g-cota-label', { autoAlpha: 1, duration: 2 }, 48)
      tl.to('#g-grua-jib', { rotation: -3.5, svgOrigin: '602 240', duration: 9 }, 29)
      tl.to('#g-grua-jib', { rotation: 2.5, svgOrigin: '602 240', duration: 9 }, 40)
      tl.to('#sky-day', { opacity: 0.45, duration: 22 }, 30)
      hideBlock(1, 51)

      // ETAPA 03 — FACHADA (54–79)
      showBlock(2, 54)
      tl.to('#g-grua-jib', { rotation: 0, svgOrigin: '602 240', duration: 8 }, 56)
      tl.to(q('.panel'), { scaleX: 1, duration: 2.5, stagger: 1.7 }, 54)
      tl.to(q('.win'), { autoAlpha: 1, duration: 2, stagger: 0.32 }, 58)
      tl.to('#g-terreo-entrada', { autoAlpha: 1, duration: 3 }, 72)
      hideBlock(2, 76)

      // ETAPA 04 — ENTREGA (79–100)
      showBlock(3, 79)
      tl.to('#g-grua', { autoAlpha: 0, x: 70, duration: 5 }, 79)
      tl.to('#g-coroamento', { autoAlpha: 1, y: 0, duration: 4 }, 81)
      tl.to('#sky-day', { opacity: 1, duration: 16 }, 80)
      tl.to(q('.light'), { autoAlpha: 0.95, duration: 2, stagger: { each: 0.16, from: 'random' } }, 84)
      tl.to('#g-selo', { autoAlpha: 1, scale: 1, duration: 4, ease: 'back.out(2)' }, 92)
      tl.to({}, { duration: 4 }) // respiro final antes de soltar o pin
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="obra"
      ref={sectionRef}
      aria-label="Etapas da obra"
      className="relative h-screen overflow-hidden"
    >
      {/* céu: alvorada → dia (crossfade controlado pela timeline) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#2b3a50_0%,#4c5a6e_52%,#8d7a68_84%,#3a3f45_100%)]"
      />
      <div
        id="sky-day"
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#b8ccd9_0%,#cfdde6_60%,#e5e2d8_100%)]"
      />

      {/* cena */}
      <div className="absolute inset-x-0 bottom-14 top-14 md:bottom-16 lg:right-[400px]">
        <BuildingScene className="h-full w-full will-change-transform" />
      </div>

      {/* blocos de texto por etapa */}
      <div className="absolute inset-x-4 bottom-20 z-10 md:inset-x-auto md:right-8 md:top-1/2 md:w-[360px] md:-translate-y-1/2 lg:right-16">
        <div className="relative">
          {stages.map((s) => (
            <div
              key={s.id}
              className="stage-block absolute inset-x-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
            >
              <StageCard stage={s} />
            </div>
          ))}
          {/* espaçador invisível para reservar altura no mobile */}
          <div className="invisible" aria-hidden="true">
            <StageCard stage={stages[1]} />
          </div>
        </div>
      </div>

      {/* HUD — Diário de Obra */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="zebra h-1.5" aria-hidden="true" />
        <div className="flex items-center gap-3 bg-grafite px-4 py-2.5 font-mono text-[0.6875rem] tracking-[0.14em] text-papel md:gap-6 md:px-8">
          <span className="hidden uppercase text-papel/60 md:inline">Diário de obra</span>
          <span ref={hudStageRef} className="uppercase text-obra">
            01 · FUNDAÇÃO
          </span>
          <div className="h-1 flex-1 overflow-hidden bg-papel/20">
            <div ref={hudBarRef} className="h-full origin-left scale-x-0 bg-obra" />
          </div>
          <span ref={hudPctRef} className="tabular-nums">
            0%
          </span>
        </div>
      </div>
    </section>
  )
}
