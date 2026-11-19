import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const glowRef = useRef(null)
  const isVisibleRef = useRef(false)
  const [isSupported, setIsSupported] = useState(() => {
    if (typeof window === 'undefined') return false
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    return mediaQuery.matches && !reducedMotionQuery.matches
  })

  useEffect(() => {
    if (!isSupported) return

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleMediaChange = () => {
      setIsSupported(mediaQuery.matches && !reducedMotionQuery.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    reducedMotionQuery.addEventListener('change', handleMediaChange)

    let animationFrameId = null
    let targetX = -500
    let targetY = -500

    const updateGlowPosition = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }
      animationFrameId = null
    }

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY

      if (!isVisibleRef.current && glowRef.current) {
        isVisibleRef.current = true
        glowRef.current.style.opacity = '1'
      }

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateGlowPosition)
      }
    }

    const handleMouseEnter = () => {
      if (glowRef.current) {
        isVisibleRef.current = true
        glowRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        isVisibleRef.current = false
        glowRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      reducedMotionQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isSupported])

  if (!isSupported) return null

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-300 ease-out select-none will-change-transform"
      style={{
        // Approximately 2 inches (190px radius / 380px diameter) on standard desktop displays
        width: '380px',
        height: '380px',
        // Derived strictly from the authentic brand green #173F35 (RGB: 23, 63, 53)
        background:
          'radial-gradient(circle, rgba(23, 63, 53, 0.20) 0%, rgba(23, 63, 53, 0.12) 25%, rgba(23, 63, 53, 0.06) 50%, rgba(23, 63, 53, 0.02) 75%, rgba(23, 63, 53, 0) 100%)',
        filter: 'blur(20px)',
        opacity: 0,
        transform: 'translate3d(-500px, -500px, 0) translate(-50%, -50%)',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    />
  )
}
