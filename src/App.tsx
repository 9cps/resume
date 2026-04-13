import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { TechMarquee } from './components/TechMarquee'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { PixelTrail } from './components/PixelTrail'
import { LoadingScreen } from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis
    if (loading) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
      lenis?.stop()
    } else {
      document.body.style.overflow = ''
      window.scrollTo(0, 0)
      lenis?.start()
    }
  }, [loading])

  useEffect(() => {
    // Smooth scroll via Lenis, synced with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      anchors: {
        offset: -80,
      },
    })

    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    const parallaxLayers = document.querySelectorAll<HTMLElement>('.parallax-layer')
    const revealElements = document.querySelectorAll('.reveal')
    const portalBtn = document.getElementById('portal-btn')

    // Parallax Logic
    const handleParallax = () => {
      const scrollY = window.pageYOffset
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0')
        const offset = scrollY * speed
        layer.style.transform = `translateY(${offset}px)`
      })
    }

    // Scroll Portal Effect Logic
    const handlePortalScroll = () => {
      if (!portalBtn) return
      const scrollY = window.pageYOffset
      const viewportHeight = window.innerHeight
      const progress = Math.min(scrollY / (viewportHeight * 0.8), 1)

      if (progress >= 0 && progress <= 1) {
        const scale = 1 + progress * 15
        const opacity = 1 - progress * 1.2
        portalBtn.style.transform = `scale(${scale})`
        portalBtn.style.opacity = String(Math.max(opacity, 0))
      } else {
        portalBtn.style.opacity = '0'
      }
    }

    // Cinematic Intersection Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    lenis.on('scroll', () => {
      handleParallax()
      handlePortalScroll()
    })

    handleParallax()
    handlePortalScroll()

    return () => {
      revealObserver.disconnect()
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [])

  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-white">
      {loading && (
        <LoadingScreen
          onComplete={() => {
            setLoading(false)
            requestAnimationFrame(() => setRevealed(true))
          }}
        />
      )}

      {/* Pixel Trail Background — kept outside the reveal wrapper so `fixed` works */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-out"
        style={{ zIndex: 1, opacity: revealed ? 1 : 0 }}
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.08}
          maxAge={300}
          interpolate={5}
          color="#F1A13C"
        />
      </div>

      {/* CRT Overlay */}
      <div className="crt-overlay" />
      <div className="scan-line" />

      <div
        className="transition-opacity duration-1000 ease-out"
        style={{
          position: 'relative',
          zIndex: 60,
          opacity: revealed ? 1 : 0,
        }}
      >
        <Navbar />
      </div>

      <div
        className="relative transition-all duration-1000 ease-out"
        style={{
          zIndex: 2,
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <main className="pt-20">
          <HeroSection />
          <AboutSection />
          <TechMarquee />
          <ExperienceTimeline />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
