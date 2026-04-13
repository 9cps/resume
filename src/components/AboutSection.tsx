import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import towerImg from '../assets/tower.png'
import { ScrollReveal } from './ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const towerRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = towerRef.current
    const section = sectionRef.current
    if (!el || !section) return

    const tween = gsap.fromTo(
      el,
      { yPercent: 60, filter: 'grayscale(100%)' },
      {
        yPercent: 0,
        filter: 'grayscale(0%)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 25%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <ScrollReveal
      baseOpacity={0.1}
      enableBlur
      baseRotation={0}
      blurStrength={10}
      rotationEnd="top center"
      wordAnimationEnd="top center"
    >
      <section ref={sectionRef} id="about" className="relative bg-amber-50 py-16 sm:py-24 lg:py-32 border-y-4 border-slate-900 overflow-hidden">
        {/* Parallax Background */}
        <div
          className="parallax-layer parallax-bg absolute top-0 left-0 w-full h-full opacity-[0.03] text-[30vw] font-black text-slate-900 select-none"
          data-speed="0.05"
        >
          SYSTEM
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10 stagger-container">
          <div className="lg:col-span-4">
            <div
              className="lg:sticky lg:top-12 reveal reveal-left"
              style={{ '--stagger-index': 1 } as React.CSSProperties}
            >
              <div className="mb-4 lg:mb-6 -mt-12 lg:-mt-12">
                <img
                  ref={towerRef}
                  alt="The Narrative Building"
                  className="w-48 sm:w-64 lg:w-full h-auto block mx-auto lg:mx-0"
                  src={towerImg}
                  style={{ transformOrigin: 'center center', willChange: 'transform' }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* THE_NARRATIVE.EXE Window */}
            <div
              className="reveal reveal-scale bg-white border-4 border-slate-900 shadow-retro overflow-hidden mb-8 lg:mb-10"
              style={{ '--stagger-index': 3 } as React.CSSProperties}
            >
              <div className="window-header">
                <span className="text-white text-xs font-black tracking-tighter uppercase">THE_NARRATIVE.EXE</span>
                <div className="flex gap-1">
                  <div className="window-dot bg-white" />
                  <div className="window-dot bg-tertiary" />
                  <div className="window-dot bg-primary" />
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-900">
                  Five years deep into building full-stack systems that power banks, feed factories, and government services. My craft lives at the intersection of scalable architecture, automated pipelines, and the unglamorous discipline of shipping software that survives Monday morning.
                <div
                  className="bg-slate-50 border-l-4 sm:border-l-8 border-primary p-4 sm:p-6 reveal"
                  style={{ '--stagger-index': 5 } as React.CSSProperties}
                >
                  <p className="italic text-sm sm:text-base lg:text-lg">
                    "Code should read like a blueprint — honest, deliberate, and built to outlast
                    the person who wrote it. Whether I'm rescuing a legacy monolith or laying the
                    first brick of something new, I bring the same pragmatic mindset to the table."
                  </p>
                </div>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-6 lg:pt-8 border-t-4 border-slate-900 reveal"
                  style={{ '--stagger-index': 6 } as React.CSSProperties}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                      Location
                    </span>
                    <p className="text-xl sm:text-2xl font-black uppercase italic">Bangkok, Thailand</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                      Focus
                    </span>
                    <p className="text-xl sm:text-2xl font-black uppercase italic">Full-Stack Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
