import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { stages } from '../content/site'
import { StageCard } from '../components/StageCard'
import { useReducedMotion } from '../hooks/useReducedMotion'

// Fronteiras das etapas no progresso do pin (0–1), usadas pelo HUD e pelos cards.
const STAGE_BOUNDS = [0, 0.24, 0.54, 0.79]

export function Obra() {
  const reduced = useReducedMotion()
  return reduced ? <ObraStatic /> : <ObraAnimated />
}

function ObraStatic() {
  return (
    <section id="obra" aria-label="Etapas da obra" className="bg-grafite">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {stages.map((s) => (
          <StageCard key={s.id} stage={s} withImage />
        ))}
      </div>
    </section>
  )
}

function ObraAnimated() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hudStageRef = useRef<HTMLSpanElement>(null)
  const hudPctRef = useRef<HTMLSpanElement>(null)
  const hudBarRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    // O scroll define o tempo-alvo; um loop de rAF persegue o alvo com lerp
    // para suavizar os seeks do vídeo (que são discretos por natureza).
    let targetTime = 0
    let rafId = 0
    let running = false

    const tick = () => {
      const dur = video.duration
      if (dur && Number.isFinite(dur)) {
        const diff = targetTime - video.currentTime
        if (Math.abs(diff) > 0.001) {
          video.currentTime = video.currentTime + diff * 0.22
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    const startLoop = () => {
      if (!running) {
        running = true
        rafId = requestAnimationFrame(tick)
      }
    }
    const stopLoop = () => {
      running = false
      cancelAnimationFrame(rafId)
    }

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)
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
          onToggle: (st) => (st.isActive ? startLoop() : stopLoop()),
          onUpdate: (st) => {
            const p = st.progress
            const dur = video.duration
            if (dur && Number.isFinite(dur)) targetTime = p * (dur - 0.05)

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

      // etapas: 0–24 · 24–54 · 54–79 · 79–100 (unidades da timeline)
      showBlock(0, 0)
      hideBlock(0, 20)
      showBlock(1, 26)
      hideBlock(1, 50)
      showBlock(2, 56)
      hideBlock(2, 75)
      showBlock(3, 81)
      tl.to({}, { duration: 19 }) // estende a timeline até 100
    }, section)

    // dispara o carregamento completo quando a seção se aproxima
    const warm = () => {
      video.preload = 'auto'
      video.load()
    }
    const warmTrigger = gsap.context(() => {
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 160%',
            once: true,
            onEnter: warm,
          },
        },
      )
    })

    return () => {
      stopLoop()
      warmTrigger.revert()
      ctx.revert()
    }
  }, [])

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="obra"
      ref={sectionRef}
      aria-label="Etapas da obra"
      className="relative h-screen overflow-hidden bg-grafite"
    >
      {/* timelapse da obra: o scroll controla o tempo do vídeo */}
      <div aria-hidden="true" className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={isMobile ? '/videos/vertice-obra-960.mp4' : '/videos/vertice-obra-1920.mp4'}
          poster="/images/vertice-terreno-poster.webp"
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
        />
        {/* proteção de legibilidade nas bordas */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-grafite/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-grafite/50 to-transparent" />
      </div>

      {/* blocos de texto por etapa */}
      <div className="absolute inset-x-4 bottom-16 z-10 md:inset-x-auto md:right-8 md:top-1/2 md:w-[360px] md:-translate-y-1/2 lg:right-16">
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
