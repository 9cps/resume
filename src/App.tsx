import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { TechMarquee } from './components/TechMarquee'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { PixelTrail } from './components/PixelTrail'

function App() {
  useEffect(() => {
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

    // Global Scroll Listener
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleParallax()
          handlePortalScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    handleParallax()
    handlePortalScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
    }
  }, [])

  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-white">
      {/* Pixel Trail Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
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

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
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
