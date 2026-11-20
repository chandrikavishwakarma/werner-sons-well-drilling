import { useState, useEffect, useRef, useCallback } from 'react'
import { employeeItems } from '../data/employeeData'

/**
 * High-craft 3D CircularCarousel component inspired by React Bits.
 * Renders an interactive 3D cylinder ring of media cards with momentum dragging,
 * depth-of-field fading, and smooth auto-drift.
 */
export default function CircularCarousel({
  items = employeeItems,
  preset = 'cylinder',
  intro = 'rise',
  cardWidth = 220,
  aspectRatio = 1,
  speed = 14,
  gap = 25,
  tilt = -5,
  curve = 1,
  perspective = 2500,
  autoplay = 'drift',
  direction = 'left',
  momentum = 0.6,
  snap = true,
  pauseOnHover = true,
  focusOnClick = true,
  draggable = true,
  parallax = 0.3,
  fadeColor = '#F8FAFC',
  depthFade = 0.55,
  innerShade = 0.6,
  cornerRadius = 12,
  className = '',
  onChange,
  onItemClick,
  ...restProps
}) {
  const containerRef = useRef(null)
  const cylinderRef = useRef(null)
  const cardRefs = useRef([])
  const overlayRefs = useRef([])
  const shadeRefs = useRef([])

  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [introScale, setIntroScale] = useState(intro === 'rise' ? 0 : 1)

  const rotationRef = useRef(0)
  const velocityRef = useRef(0)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const lastPointerXRef = useRef(0)
  const lastPointerTimeRef = useRef(0)
  const hasDraggedRef = useRef(false)
  const targetRotationRef = useRef(null)
  const rafIdRef = useRef(null)

  const count = items.length
  const angleStep = 360 / Math.max(count, 1)

  // Calculate cylinder radius based on card width and gap
  const halfAngleRad = Math.PI / Math.max(count, 1)
  const baseRadius = (cardWidth + gap) / (2 * Math.sin(halfAngleRad))
  const radius = Math.max(baseRadius * (curve || 1), 260)
  const cardHeight = cardWidth / (aspectRatio || 1)

  // Intro animation on mount
  useEffect(() => {
    if (intro === 'rise') {
      const startTime = performance.now()
      const duration = 750

      const animateIntro = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Smooth cubic-bezier ease out
        const ease = 1 - Math.pow(1 - progress, 3)
        setIntroScale(ease)

        if (progress < 1) {
          requestAnimationFrame(animateIntro)
        }
      }

      requestAnimationFrame(animateIntro)
    }
  }, [intro])

  // Update card 3D transforms, depth fade and z-indexes directly in DOM for 120fps performance
  const updateCards = useCallback((currentRotation) => {
    if (!cylinderRef.current) return

    cylinderRef.current.style.transform = `rotateX(${tilt}deg) rotateY(${currentRotation}deg)`

    for (let i = 0; i < count; i++) {
      const cardEl = cardRefs.current[i]
      const overlayEl = overlayRefs.current[i]
      const shadeEl = shadeRefs.current[i]

      if (!cardEl) continue

      // Calculate card's current angle relative to camera
      const baseAngle = i * angleStep
      const totalAngle = (baseAngle + currentRotation) % 360
      const normalizedAngle = ((totalAngle % 360 + 540) % 360) - 180
      const rad = (normalizedAngle * Math.PI) / 180

      const cosVal = Math.cos(rad) // 1 at front (closest), -1 at back (farthest)
      const sinVal = Math.sin(rad)

      // Depth is 0 at front, 1 at back
      const depth = (1 - cosVal) / 2
      const zIndex = Math.round((cosVal + 1) * 100)
      cardEl.style.zIndex = `${zIndex}`

      // Depth fade overlay to fadeColor
      if (overlayEl) {
        const fadeOpacity = Math.min(Math.max(depth * depthFade, 0), 0.96)
        overlayEl.style.opacity = `${fadeOpacity}`
      }

      // Backside inner shading
      if (shadeEl) {
        const shadeOpacity = cosVal < 0 ? Math.abs(cosVal) * (innerShade || 0.6) : 0
        shadeEl.style.opacity = `${shadeOpacity}`
      }

      // Parallax image shift
      if (parallax && parallax > 0) {
        const imgEl = cardEl.querySelector('img')
        if (imgEl) {
          const shift = -sinVal * (parallax * 25)
          imgEl.style.transform = `translateX(${shift}px) scale(1.08)`
        }
      }
    }
  }, [angleStep, count, depthFade, innerShade, parallax, tilt])

  // Center / focus a specific card index
  const focusCard = useCallback((targetIndex) => {
    const targetBaseAngle = targetIndex * angleStep
    const currentRot = rotationRef.current
    const totalAngle = (targetBaseAngle + currentRot) % 360
    const normalized = ((totalAngle % 360 + 540) % 360) - 180
    targetRotationRef.current = currentRot - normalized
    velocityRef.current = 0

    if (onChange) onChange(targetIndex)
  }, [angleStep, onChange])

  // Main animation / physics loop
  useEffect(() => {
    let lastTimestamp = performance.now()
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const loop = (now) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1)
      lastTimestamp = now

      if (!isDraggingRef.current) {
        if (targetRotationRef.current !== null) {
          // Smoothly animate towards focused card
          const diff = targetRotationRef.current - rotationRef.current
          if (Math.abs(diff) > 0.05) {
            rotationRef.current += diff * Math.min(dt * 8, 0.25)
          } else {
            rotationRef.current = targetRotationRef.current
            targetRotationRef.current = null
          }
        } else if (Math.abs(velocityRef.current) > 0.05) {
          // Coast with momentum
          rotationRef.current += velocityRef.current * dt * 60
          velocityRef.current *= Math.pow(0.92, dt * 60)
        } else {
          velocityRef.current = 0

          // Autoplay drift if not hovered and not reduced motion
          if (autoplay === 'drift' && (!pauseOnHover || !isHovered) && !isReducedMotion) {
            const dirMultiplier = direction === 'right' ? 1 : -1
            rotationRef.current += dirMultiplier * (speed * dt)
          } else if (snap && Math.abs(velocityRef.current) < 0.05 && targetRotationRef.current === null) {
            // Snap to nearest card when stopped
            const nearestIndex = Math.round(rotationRef.current / angleStep)
            const snapTarget = nearestIndex * angleStep
            const diff = snapTarget - rotationRef.current
            if (Math.abs(diff) > 0.05) {
              rotationRef.current += diff * 0.1
            }
          }
        }
      }

      updateCards(rotationRef.current)
      rafIdRef.current = requestAnimationFrame(loop)
    }

    rafIdRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [angleStep, autoplay, direction, isHovered, pauseOnHover, snap, speed, updateCards])

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    if (!draggable) return
    isDraggingRef.current = true
    setIsDragging(true)
    hasDraggedRef.current = false
    dragStartXRef.current = e.clientX
    lastPointerXRef.current = e.clientX
    lastPointerTimeRef.current = performance.now()
    velocityRef.current = 0
    targetRotationRef.current = null

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId)
    }
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return

    const now = performance.now()
    const deltaX = e.clientX - lastPointerXRef.current
    const totalDist = Math.abs(e.clientX - dragStartXRef.current)

    if (totalDist > 5) {
      hasDraggedRef.current = true
    }

    // Natural 1:1 rotation mapping based on cylinder circumference
    const degPerPixel = 360 / (2 * Math.PI * radius)
    rotationRef.current += deltaX * degPerPixel * 0.9

    // Calculate instantaneous velocity for smooth release momentum
    const dt = Math.max(now - lastPointerTimeRef.current, 8)
    const instantVelocity = (deltaX / dt) * 16 * (degPerPixel * 0.9)
    velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6

    lastPointerXRef.current = e.clientX
    lastPointerTimeRef.current = now
  }

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)

    if (e.currentTarget.releasePointerCapture) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId)
      } catch {
        // Safe fallback if pointer capture was already released
      }
    }

    // Apply momentum on drag release
    if (momentum && momentum > 0) {
      const clampedVelocity = Math.max(Math.min(velocityRef.current, 25), -25)
      velocityRef.current = clampedVelocity * momentum
    }
  }

  const handleCardClick = (index, item, e) => {
    if (hasDraggedRef.current) return

    if (onItemClick) {
      onItemClick(item, index, e)
    }

    if (focusOnClick) {
      focusCard(index)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden touch-pan-y ${className}`}
      style={{
        perspective: `${perspective}px`,
        cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'default',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    >
      {/* 3D Cylinder World Container */}
      <div
        ref={cylinderRef}
        className="relative flex items-center justify-center transition-transform"
        style={{
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          transformStyle: 'preserve-3d',
          opacity: introScale,
          transformOrigin: 'center center',
        }}
      >
        {items.map((item, index) => {
          const baseAngle = index * angleStep
          const riseOffset = (1 - introScale) * 60

          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={(e) => handleCardClick(index, item, e)}
              className="absolute top-0 left-0 bg-white rounded-xl shadow-lg border border-[#E2E8F0]/80 overflow-hidden cursor-pointer transition-shadow hover:shadow-xl"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: `${cornerRadius}px`,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${baseAngle}deg) translateZ(${radius}px) translateY(${riseOffset}px)`,
                backfaceVisibility: preset === 'cylinder' ? 'visible' : 'hidden',
              }}
            >
              {/* Image Container with Parallax Support */}
              <div className="relative w-full h-full overflow-hidden bg-[#0B241C]">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-200"
                  style={{
                    borderRadius: `${cornerRadius}px`,
                  }}
                />

                {/* Ambient vignette and bottom gradient for maximum contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C]/95 via-[#0B241C]/35 to-transparent pointer-events-none z-10" />

                {/* Top Badge: Role / Specialization */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-20">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#133A2E]/85 text-[#D4A338] border border-[#D4A338]/40 shadow-2xs backdrop-blur-xs">
                    {item.role || 'Werner Team'}
                  </span>
                </div>

                {/* Bottom Content: Name, Title & Experience */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 text-left pointer-events-none z-20">
                  <h4 className="heading-serif text-lg sm:text-xl font-normal text-white leading-tight drop-shadow-xs">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#D4A338] mt-0.5">
                    {item.subtitle}
                  </p>
                  {item.exp && (
                    <p className="text-[10px] font-mono text-white/75 mt-0.5">
                      {item.exp}
                    </p>
                  )}
                </div>

                {/* Depth Fade Overlay (Fades seamlessly into fadeColor e.g. #F8FAFC) */}
                <div
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-75"
                  style={{
                    backgroundColor: fadeColor,
                    opacity: 0,
                  }}
                />

                {/* Inner Shade Overlay for Cylinder Back-faces */}
                <div
                  ref={(el) => (shadeRefs.current[index] = el)}
                  className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-75 bg-[#0B241C]"
                  style={{
                    opacity: 0,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Subtle Drag Indicator Hint */}
      <div className="absolute bottom-1.5 sm:bottom-2 inset-x-0 text-center pointer-events-none z-40">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono text-[#475569]/80 bg-[#FFFFFF]/70 border border-[#E2E8F0] shadow-2xs backdrop-blur-xs">
          <span>&larr; Drag or click any card to focus &rarr;</span>
        </span>
      </div>
    </div>
  )
}
