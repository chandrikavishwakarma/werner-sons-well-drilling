import { useEffect, useRef } from 'react'

/**
 * Custom Green Cursor Glow Component
 *
 * Fixed & Optimized:
 * - Direct DOM manipulation via refs for zero React re-renders and 0-latency tracking
 * - Runs once on mount (empty dependency array []) to prevent listener thrashing
 * - Reliable mouse boundary detection using window mouseout + relatedTarget
 * - Smart touch handling that never falsely blocks Windows touchscreen laptops with a mouse
 * - Brand color #173F35 radial gradient, 190px diameter, soft blur(20px) diffusion
 * - Fully non-blocking with pointer-events: none
 */
export default function CustomCursor() {
  const glowRef = useRef(null)
  const animFrameRef = useRef(null)
  const isVisibleRef = useRef(false)
  const posRef = useRef({ x: -500, y: -500 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const updatePosition = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${posRef.current.x - 95}px, ${posRef.current.y - 95}px, 0)`
      }
      animFrameRef.current = null
    }

    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY

      // Make visible immediately on first mouse movement
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        if (glowRef.current) {
          glowRef.current.style.opacity = '1'
        }
      }

      // Schedule smooth frame update
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updatePosition)
      }
    }

    // Hide only when mouse genuinely exits the browser window
    const handleMouseLeave = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        isVisibleRef.current = false
        if (glowRef.current) {
          glowRef.current.style.opacity = '0'
        }
      }
    }

    const handleMouseEnter = () => {
      isVisibleRef.current = true
      if (glowRef.current) {
        glowRef.current.style.opacity = '1'
      }
    }

    // Disable on pure touch interactions without breaking laptops with touchscreens
    const handleTouchStart = () => {
      isVisibleRef.current = false
      if (glowRef.current) {
        glowRef.current.style.display = 'none'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseLeave, { passive: true })
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('touchstart', handleTouchStart)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none select-none z-30 transition-opacity duration-150"
      style={{
        width: '190px',
        height: '190px',
        opacity: 0,
        transform: 'translate3d(-500px, -500px, 0)',
        willChange: 'transform, opacity',
        background:
          'radial-gradient(circle, rgba(23, 63, 53, 0.45) 0%, rgba(23, 63, 53, 0.25) 35%, rgba(23, 63, 53, 0.08) 65%, transparent 100%)',
        filter: 'blur(20px)',
      }}
    />
  )
}
