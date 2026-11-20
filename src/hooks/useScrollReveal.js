import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for smooth scroll-triggered reveal animations using IntersectionObserver.
 * Supports bidirectional scrolling:
 * - When scrolling DOWN: elements reveal progressively as they enter the viewport.
 * - When scrolling UP: elements smoothly hide when leaving the viewport, and re-reveal progressively when scrolled into again.
 * - Deadband rootMargin and threshold eliminate boundary jitter/flicker.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.08,
    rootMargin = '40px 0px -40px 0px',
    triggerOnce = false,
  } = options
  const domRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(() => {
    // Graceful fallback for older environments or SSR
    return typeof window !== 'undefined' && !('IntersectionObserver' in window)
  })

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const currentElem = domRef.current
    if (!currentElem) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true)
        if (triggerOnce) {
          observer.unobserve(currentElem)
        }
      } else if (!triggerOnce) {
        setIsRevealed(false)
      }
    }, { threshold, rootMargin })

    observer.observe(currentElem)

    return () => {
      if (currentElem) observer.unobserve(currentElem)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [domRef, isRevealed]
}

export default useScrollReveal
