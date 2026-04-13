import { useEffect, useRef, useState } from 'react'

interface ShuffleTextProps {
  text: string
  className?: string
  duration?: number
  stagger?: number
  iterations?: number
  trigger?: 'mount' | 'view' | 'hover'
  charset?: string
}

const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*<>/?'

export function ShuffleText({
  text,
  className = '',
  duration = 900,
  stagger = 40,
  iterations = 12,
  trigger = 'view',
  charset = DEFAULT_CHARSET,
}: ShuffleTextProps) {
  const [display, setDisplay] = useState<string[]>(() => text.split(''))
  const ref = useRef<HTMLSpanElement>(null)
  const playedRef = useRef(false)

  const play = () => {
    const chars = text.split('')
    const total = chars.length
    const startTimes = chars.map((_, i) => i * stagger)
    const tickMs = Math.max(20, Math.floor(duration / iterations))
    const startedAt = performance.now()

    let raf = 0
    const tick = () => {
      const now = performance.now()
      const next = chars.map((finalChar, i) => {
        if (finalChar === ' ' || finalChar === '\n') return finalChar
        const elapsed = now - startedAt - startTimes[i]
        if (elapsed <= 0) return charset[Math.floor(Math.random() * charset.length)]
        const progress = elapsed / duration
        if (progress >= 1) return finalChar
        return charset[Math.floor(Math.random() * charset.length)]
      })
      setDisplay(next)
      const allDone = now - startedAt > duration + total * stagger
      if (allDone) {
        setDisplay(chars)
        cancelAnimationFrame(raf)
        return
      }
      // throttle a bit
      setTimeout(() => {
        raf = requestAnimationFrame(tick)
      }, tickMs)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }

  useEffect(() => {
    if (trigger === 'mount') {
      play()
      return
    }
    if (trigger === 'view') {
      const el = ref.current
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !playedRef.current) {
              playedRef.current = true
              play()
            }
          })
        },
        { threshold: 0.4 },
      )
      obs.observe(el)
      return () => obs.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, trigger])

  const handleHover = () => {
    if (trigger === 'hover') play()
  }

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={handleHover}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
    >
      {display.map((c, i) =>
        c === '\n' ? <br key={i} /> : <span key={i}>{c}</span>,
      )}
    </span>
  )
}

export default ShuffleText
