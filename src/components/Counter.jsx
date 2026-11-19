import { useState, useEffect, useRef } from 'react'

/**
 * Animated number counter component that counts from 0 to target value when visible.
 * Adheres to Section 6:
 * - Animates genuine existing business statistics when visible.
 * - Counts numbers from zero to their actual values.
 * - Does not invent business statistics.
 */
export default function Counter({
  end,
  duration = 1200,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(() => {
    return typeof window !== 'undefined' && !('IntersectionObserver' in window) ? end : 0
  })
  const counterRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const currentElem = counterRef.current
    if (!currentElem) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          observer.unobserve(currentElem)

          const endVal = typeof end === 'number' ? end : parseFloat(end) || 0
          const startTime = performance.now()

          const timer = setInterval(() => {
            const elapsed = performance.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.round(endVal * easeOut)
            setCount(currentVal)

            if (progress >= 1) {
              clearInterval(timer)
              setCount(endVal)
            }
          }, 20)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
    )

    observer.observe(currentElem)

    return () => {
      if (currentElem) observer.unobserve(currentElem)
    }
  }, [end, duration])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
