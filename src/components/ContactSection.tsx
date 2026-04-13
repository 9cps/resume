export function ContactSection() {
  return (
    <section id="contact" className="relative bg-primary py-20 sm:py-32 lg:py-40 px-4 sm:px-8 border-t-8 border-slate-900 section-mask-top overflow-hidden">
      {/* Parallax Contact Elements */}
      <div
        className="parallax-layer parallax-bg absolute top-20 right-[10%] text-slate-900/10 text-[20rem] font-black pointer-events-none italic hidden sm:block"
        data-speed="0.3"
      >
        HIRE
      </div>
      <div
        className="parallax-layer parallax-fg absolute bottom-0 left-[5%] w-32 sm:w-64 h-32 sm:h-64 bg-slate-900/5 rotate-45 border-[10px] sm:border-[20px] border-slate-900/10"
        data-speed="-0.2"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center stagger-container">
          <div
            className="reveal reveal-left"
            style={{ '--stagger-index': 1 } as React.CSSProperties}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase leading-tight italic mb-6 sm:mb-8">
              Let's build <br /> the{' '}
              <span className="bg-slate-900 px-2 sm:px-4 inline-block transform hover:rotate-2 transition-transform">
                next system
              </span>{' '}
              together.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-900 font-bold uppercase tracking-wide mb-8 sm:mb-12 max-w-md">
              Got a hard problem, an empty repo, or a legacy beast that needs taming? Let's talk.
            </p>
            <div className="space-y-6 sm:space-y-8">
              <a
                className="btn-retro inline-flex items-center gap-3 sm:gap-6 bg-slate-900 text-white p-4 sm:p-6 border-4 border-slate-900 shadow-retro group hover:bg-white hover:text-slate-900 transition-colors"
                href="mailto:Chokpaisan.work@gmail.com"
              >
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary group-hover:animate-bounce">
                  mail
                </span>
                <span className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tighter">
                  Chokpaisan.work@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div
            className="reveal reveal-right bg-white border-4 sm:border-8 border-slate-900 p-6 sm:p-8 lg:p-10 shadow-retro"
            style={{ '--stagger-index': 2 } as React.CSSProperties}
          >
            <form className="space-y-6 sm:space-y-10">
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-black uppercase tracking-widest text-slate-900 mb-2 sm:mb-4 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="ARTHUR MORGAN"
                  className="w-full bg-slate-50 border-4 border-slate-900 p-3 sm:p-4 focus:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-primary/20 font-bold placeholder:text-slate-400 text-sm sm:text-base"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-black uppercase tracking-widest text-slate-900 mb-2 sm:mb-4 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ARTHUR@OUTLAW.COM"
                  className="w-full bg-slate-50 border-4 border-slate-900 p-3 sm:p-4 focus:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-primary/20 font-bold placeholder:text-slate-400 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="btn-retro w-full bg-slate-900 text-white border-4 border-slate-900 py-4 sm:py-6 text-base sm:text-xl font-black uppercase shadow-retro hover:bg-primary hover:text-slate-900 transition-all"
              >
                Transmit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
