import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 w-full z-[60] bg-slate-900 border-b-8 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] h-20">
      <nav className="flex justify-between items-stretch max-w-full h-full">
        <div className="flex items-center">
          <div className="text-2xl font-black text-white px-8 bg-primary h-full flex items-center border-r-8 border-slate-950 group cursor-pointer">
            <span className="uppercase tracking-tighter">9CPS's</span>
          </div>
          <div className="hidden md:flex items-stretch h-full font-headline uppercase tracking-tighter">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              const isHome = link.href === '#home'
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    if (isHome) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      history.replaceState(null, '', ' ')
                      return
                    }
                    const el = document.getElementById(link.href.slice(1))
                    if (!el) return
                    const navH = 80
                    const top = el.getBoundingClientRect().top + window.scrollY - navH
                    window.scrollTo({ top, behavior: 'smooth' })
                    history.replaceState(null, '', link.href)
                  }}
                  className={
                    isActive
                      ? 'text-slate-900 bg-primary border-b-8 border-orange-600 flex items-center px-8 font-bold transition-all'
                      : 'text-slate-200 bg-slate-800 border-b-8 border-slate-900 flex items-center px-8 hover:bg-slate-700 hover:text-white hover:border-primary transition-all'
                  }
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
        <div className="flex items-center px-8">
          <button className="btn-retro bg-tertiary text-slate-900 border-4 border-slate-950 px-6 py-2 font-black shadow-retro-sm uppercase text-sm hover:bg-white hover:-translate-y-1 transition-all">
            Hire Me
          </button>
        </div>
      </nav>
    </header>
  )
}
