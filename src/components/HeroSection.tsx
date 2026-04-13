import profileImg from '../assets/cv/profile_img.png'
import { ShuffleText } from './ShuffleText'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-8 py-24 overflow-hidden"
    >
      {/* Parallax Background Layer */}
      <div className="parallax-layer parallax-bg absolute inset-0 iso-grid opacity-[0.05]" data-speed="0.1" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-20 stagger-container">
        <div className="lg:col-span-7">
          <div
            className="reveal reveal-left inline-block bg-tertiary border-4 border-slate-900 px-4 py-1 mb-6 font-bold uppercase tracking-widest text-sm shadow-retro-sm animate-float"
            style={{ '--stagger-index': 1 } as React.CSSProperties}
          >
            Software Engineer / Build No. 2026
          </div>
          <h1
            className="reveal reveal-left text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 uppercase italic"
            style={{ '--stagger-index': 2 } as React.CSSProperties}
          >
            <ShuffleText text="Chokpaisan" trigger="view" duration={4000} stagger={160} />
            <br />
            <ShuffleText text="Sripraiwan" trigger="view" duration={4000} stagger={160} />
          </h1>
          <p
            className="reveal reveal-left text-xl md:text-2xl text-slate-700 font-medium max-w-xl mb-12 border-l-8 border-primary pl-6 leading-relaxed"
            style={{ '--stagger-index': 3 } as React.CSSProperties}
          >
            Architecting resilient platforms with{' '}
            <span className="bg-primary text-white px-2">full-stack precision</span> — from
            blueprint to production, one system at a time.
          </p>
          <div
            className="reveal reveal-left flex flex-wrap gap-6"
            style={{ '--stagger-index': 4 } as React.CSSProperties}
          >
            <button className="btn-retro bg-primary text-white border-4 border-slate-900 px-10 py-5 font-bold text-xl shadow-retro uppercase hover:shadow-glow">
              Grab the CV
            </button>
            <div className="inline-block" id="portal-btn-container">
              <button
                className="btn-retro bg-white text-slate-900 border-4 border-slate-900 px-10 py-5 font-bold text-xl shadow-retro hover:bg-amber-400 transition-all uppercase"
                id="portal-btn"
                onClick={() => {
                  const target = document.getElementById('about')
                  if (!target) return
                  const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: Record<string, unknown>) => void } }).lenis
                  if (lenis) {
                    lenis.scrollTo(target, {
                      offset: -80,
                      duration: 2.5,
                      easing: (t: number) => 1 - Math.pow(1 - t, 3),
                    })
                  } else {
                    target.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Enter the Archive
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div
            className="reveal reveal-right relative group"
            style={{ '--stagger-index': 3 } as React.CSSProperties}
          >
            <div className="aspect-[4/5] bg-slate-900 border-4 border-slate-900 shadow-retro relative overflow-hidden animate-float-slow">
              <img
                alt="professional headshot"
                className="w-[640px] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                src={profileImg}
              />
            </div>
            {/* Parallax Foreground Elements */}
            <div
              className="parallax-layer parallax-fg absolute -bottom-12 -right-12 w-48 h-48 bg-primary border-4 border-slate-900 shadow-retro flex items-center justify-center p-4 text-center"
              data-speed="-0.15"
            >
              <span className="text-slate-900 font-black uppercase text-xl italic leading-none">
5+ Years<br />In the Field
              </span>
            </div>
            <div
              className="parallax-layer parallax-fg absolute -top-10 -left-10 w-16 h-16 bg-tertiary border-4 border-slate-900 animate-float"
              data-speed="0.2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
