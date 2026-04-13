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
      <section ref={sectionRef} id="about" className="relative bg-amber-50 py-32 border-y-4 border-slate-900 overflow-hidden">
        {/* Parallax Background */}
        <div
          className="parallax-layer parallax-bg absolute top-0 left-0 w-full h-full opacity-[0.03] text-[30vw] font-black text-slate-900 select-none"
          data-speed="0.05"
        >
          SYSTEM
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 stagger-container">
          <div className="lg:col-span-4">
            <div
              className="sticky top-32 reveal reveal-left"
              style={{ '--stagger-index': 1 } as React.CSSProperties}
            >
              <div className="mb-6 -mt-12">
                <img
                  ref={towerRef}
                  alt="The Narrative Building"
                  className="w-full h-auto block"
                  src={towerImg}
                  style={{ transformOrigin: 'center center', willChange: 'transform' }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {/* THE_NARRATIVE.EXE Window */}
            <div
              className="reveal reveal-scale bg-white border-4 border-slate-900 shadow-retro overflow-hidden mb-10"
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
              <div className="p-10 space-y-8 text-xl font-medium leading-relaxed text-slate-900">
                  Five years deep into building full-stack systems that power banks, feed factories, and government services. My craft lives at the intersection of scalable architecture, automated pipelines, and the unglamorous discipline of shipping software that survives Monday morning.
                <div
                  className="bg-slate-50 border-l-8 border-primary p-6 reveal"
                  style={{ '--stagger-index': 5 } as React.CSSProperties}
                >
                  <p className="italic">
                    "Code should read like a blueprint — honest, deliberate, and built to outlast
                    the person who wrote it. Whether I'm rescuing a legacy monolith or laying the
                    first brick of something new, I bring the same pragmatic mindset to the table."
                  </p>
                </div>
                <div
                  className="grid grid-cols-2 gap-8 pt-8 border-t-4 border-slate-900 reveal"
                  style={{ '--stagger-index': 6 } as React.CSSProperties}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                      Location
                    </span>
                    <p className="text-2xl font-black uppercase italic">Bangkok, Thailand</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
                      Focus
                    </span>
                    <p className="text-2xl font-black uppercase italic">Full-Stack Engineering</p>
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
