export function ContactSection() {
  return (
    <section id="contact" className="relative bg-primary py-40 px-8 border-t-8 border-slate-900 section-mask-top overflow-hidden">
      {/* Parallax Contact Elements */}
      <div
        className="parallax-layer parallax-bg absolute top-20 right-[10%] text-slate-900/10 text-[20rem] font-black pointer-events-none italic"
        data-speed="0.3"
      >
        HIRE
      </div>
      <div
        className="parallax-layer parallax-fg absolute bottom-0 left-[5%] w-64 h-64 bg-slate-900/5 rotate-45 border-[20px] border-slate-900/10"
        data-speed="-0.2"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center stagger-container">
          <div
            className="reveal reveal-left"
            style={{ '--stagger-index': 1 } as React.CSSProperties}
          >
            <h2 className="text-7xl font-black text-white uppercase leading-tight italic mb-8">
              Let's build <br /> the{' '}
              <span className="bg-slate-900 px-4 inline-block transform hover:rotate-2 transition-transform">
                next system
              </span>{' '}
              together.
            </h2>
            <p className="text-xl text-slate-900 font-bold uppercase tracking-wide mb-12 max-w-md">
              Got a hard problem, an empty repo, or a legacy beast that needs taming? Let's talk.
            </p>
            <div className="space-y-8">
              <a
                className="btn-retro inline-flex items-center gap-6 bg-slate-900 text-white p-6 border-4 border-slate-900 shadow-retro group hover:bg-white hover:text-slate-900 transition-colors"
                href="mailto:Chokpaisan.work@gmail.com"
              >
                <span className="material-symbols-outlined text-4xl text-primary group-hover:animate-bounce">
                  mail
                </span>
                <span className="text-2xl font-black uppercase tracking-tighter">
                  Chokpaisan.work@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div
            className="reveal reveal-right bg-white border-8 border-slate-900 p-10 shadow-retro"
            style={{ '--stagger-index': 2 } as React.CSSProperties}
          >
            <form className="space-y-10">
              <div className="relative group">
                <label className="block text-sm font-black uppercase tracking-widest text-slate-900 mb-4 group-focus-within:text-primary transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="ARTHUR MORGAN"
                  className="w-full bg-slate-50 border-4 border-slate-900 p-4 focus:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-primary/20 font-bold placeholder:text-slate-400"
                />
              </div>
              <div className="relative group">
                <label className="block text-sm font-black uppercase tracking-widest text-slate-900 mb-4 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="ARTHUR@OUTLAW.COM"
                  className="w-full bg-slate-50 border-4 border-slate-900 p-4 focus:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-primary/20 font-bold placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="btn-retro w-full bg-slate-900 text-white border-4 border-slate-900 py-6 text-xl font-black uppercase shadow-retro hover:bg-primary hover:text-slate-900 transition-all"
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
