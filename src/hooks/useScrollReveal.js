import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for smooth scroll-triggered reveal animations using IntersectionObserver.
 * Adheres to Section 2:
 * - Uses IntersectionObserver for scroll-triggered animations.
 * - Animate only when elements enter the viewport.
 * - Graceful fallback: Avoid hiding important content if JavaScript is delayed or IntersectionObserver is unsupported.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options
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
