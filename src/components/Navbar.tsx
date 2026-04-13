import { useEffect, useState, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const handleNavClick = (href: string, isHome: boolean) => {
    setMobileMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      history.replaceState(null, '', ' ')
      return
    }
    const el = document.getElementById(href.slice(1))
    if (!el) return
    const navH = 80
    const top = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', href)
  }

  return (
    <header className="fixed top-0 w-full z-[60] bg-slate-900 border-b-8 border-slate-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] h-20">
      <nav className="flex justify-between items-stretch max-w-full h-full">
        <div className="flex items-center">
          <div className="text-lg sm:text-2xl font-black text-white px-4 sm:px-8 bg-primary h-full flex items-center border-r-4 sm:border-r-8 border-slate-950 group cursor-pointer">
            <span className="uppercase tracking-tighter">9CPS's</span>
          </div>
          <div className="hidden lg:flex items-stretch h-full font-headline uppercase tracking-tighter">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              const isHome = link.href === '#home'
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href, isHome)
                  }}
                  className={
                    isActive
                      ? 'text-slate-900 bg-primary border-b-8 border-orange-600 flex items-center px-6 lg:px-8 font-bold transition-all'
                      : 'text-slate-200 bg-slate-800 border-b-8 border-slate-900 flex items-center px-6 lg:px-8 hover:bg-slate-700 hover:text-white hover:border-primary transition-all'
                  }
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
        <div className="flex items-center px-4 sm:px-8">
          <button className="btn-retro bg-tertiary text-slate-900 border-4 border-slate-950 px-4 sm:px-6 py-2 font-black shadow-retro-sm uppercase text-xs sm:text-sm hover:bg-white hover:-translate-y-1 transition-all hidden sm:block">
            Hire Me
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 border-4 border-slate-950 bg-tertiary"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-1 bg-slate-900 mb-1 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
            <span className={`block w-6 h-1 bg-slate-900 mb-1 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-1 bg-slate-900 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
          </button>
        </div>
      </nav>

      <div ref={menuRef} className={`lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b-8 border-slate-950 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1)
            const isHome = link.href === '#home'
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href, isHome)
                }}
                className={
                  isActive
                    ? 'text-slate-900 bg-primary border-b-4 border-orange-600 px-8 py-4 font-black uppercase tracking-wide text-left'
                    : 'text-slate-200 border-b-4 border-slate-800 px-8 py-4 font-bold uppercase tracking-wide hover:bg-slate-800 hover:text-white transition-colors text-left'
                }
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="mailto:Chokpaisan.work@gmail.com"
            className="bg-tertiary text-slate-900 px-8 py-4 font-black uppercase tracking-wide text-center hover:bg-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
