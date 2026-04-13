import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let raf = 0
    let current = 0
    const tick = () => {
      const remaining = 100 - current
      const step = Math.max(0.4, remaining * 0.025)
      current = Math.min(100, current + step)
      setProgress(current)
      if (current < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setExiting(true), 350)
        setTimeout(() => {
          setHidden(true)
          onComplete()
        }, 1450)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  if (hidden) return null

  const display = Math.floor(progress)

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden font-['Space_Grotesk']"
      aria-hidden={exiting}
    >
      {/* Top panel */}
      <div
        className="absolute left-0 right-0 top-0 h-1/2 bg-slate-900 border-b-4 border-primary transition-transform duration-[900ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
        style={{ transform: exiting ? 'translateY(-101%)' : 'translateY(0)' }}
      />
      {/* Bottom panel */}
      <div
        className="absolute left-0 right-0 bottom-0 h-1/2 bg-slate-900 border-t-4 border-primary transition-transform duration-[900ms] ease-[cubic-bezier(0.85,0,0.15,1)]"
        style={{ transform: exiting ? 'translateY(101%)' : 'translateY(0)' }}
      />

      {/* Center content */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: exiting ? 0 : 1 }}
      >
        <div className="w-[min(640px,86vw)] px-6">
          {/* Label row */}
          <div className="flex items-end justify-between mb-6">
            <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">
              [ Booting Workspace ]
            </span>
            <span className="text-white font-black uppercase tracking-widest text-xs sm:text-sm hidden sm:inline">
              SYS / v1.0
            </span>
          </div>

          {/* Big counter */}
          <div className="flex items-baseline gap-4 mb-8">
            <span
              className="text-white font-black italic leading-none"
              style={{ fontSize: 'clamp(80px, 18vw, 200px)' }}
            >
              {String(display).padStart(3, '0')}
            </span>
            <span className="text-primary font-black uppercase text-2xl sm:text-4xl">%</span>
          </div>

          {/* Progress bar */}
          <div className="relative bg-slate-800 border-4 border-primary h-6 sm:h-8 shadow-[8px_8px_0px_0px_#F1A13C]">
            <div
              className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Tick marks */}
            <div className="absolute inset-0 flex justify-between pointer-events-none">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="w-[2px] h-full bg-slate-900/40" />
              ))}
            </div>
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
              {progress < 30
                ? 'Loading Assets...'
                : progress < 60
                ? 'Compiling Pixels...'
                : progress < 95
                ? 'Stacking Blocks...'
                : 'Ready'}
            </span>
            <div className="flex gap-2">
              <span className="block w-3 h-3 bg-primary animate-pulse" />
              <span className="block w-3 h-3 bg-amber-400 animate-pulse [animation-delay:120ms]" />
              <span className="block w-3 h-3 bg-white animate-pulse [animation-delay:240ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
