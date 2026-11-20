import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * DottedWaveBackground
 * High-performance 3D perspective dotted wave terrain built with Three.js.
 * Features an undulating mesh of Warm Gold (#D4A338) points rendered
 * over the dark forest green (#133A2E) banner background.
 */
export default function DottedWaveBackground({
  className = '',
  amountX = 60,
  amountZ = 32,
  separationX = 16,
  separationZ = 16,
  speed = 0.024,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Safely cleanup any previous canvas nodes on mount/remount (React 19 StrictMode safety)
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    const getSize = () => {
      const rect = container.getBoundingClientRect()
      const w = rect.width || container.clientWidth || window.innerWidth
      const h = rect.height || container.clientHeight || 260
      return {
        width: Math.max(w, 100),
        height: Math.max(h, 80),
      }
    }

    const { width: initialWidth, height: initialHeight } = getSize()

    // 1. Scene
    const scene = new THREE.Scene()

    // 2. Camera (Wide horizontal framing positioned above and looking slightly downward)
    const camera = new THREE.PerspectiveCamera(
      55,
      initialWidth / initialHeight,
      1,
      2000
    )
    camera.position.set(0, 120, 320)
    camera.lookAt(0, 0, 0)

    // 3. WebGLRenderer with transparent background so #133A2E shows through
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(initialWidth, initialHeight)

    const canvas = renderer.domElement
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.pointerEvents = 'none'

    container.appendChild(canvas)

    // 4. Create smooth circular texture for round golden points
    const createCircleTexture = () => {
      const texCanvas = document.createElement('canvas')
      texCanvas.width = 64
      texCanvas.height = 64
      const ctx = texCanvas.getContext('2d')
      if (!ctx) return null

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)')
      gradient.addColorStop(0.85, 'rgba(255, 255, 255, 0.4)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(32, 32, 32, 0, Math.PI * 2)
      ctx.fill()

      const texture = new THREE.CanvasTexture(texCanvas)
      texture.needsUpdate = true
      return texture
    }

    const circleTexture = createCircleTexture()

    // 5. Geometry & Attributes for 3D Particle Grid
    const numParticles = amountX * amountZ
    const positions = new Float32Array(numParticles * 3)
    const scales = new Float32Array(numParticles)

    let i = 0
    let j = 0
    for (let ix = 0; ix < amountX; ix++) {
      for (let iz = 0; iz < amountZ; iz++) {
        positions[i] = (ix - amountX / 2) * separationX // x
        positions[i + 1] = 0                           // y
        positions[i + 2] = (iz - amountZ / 2) * separationZ // z

        scales[j] = 1
        i += 3
        j++
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    // 6. Material (Warm Gold #D4A338 with clean opacity)
    const material = new THREE.PointsMaterial({
      color: 0xd4a338,
      size: 3.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.75,
      map: circleTexture || undefined,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // 7. Motion & Visibility Handlers
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReducedMotion = mediaQuery.matches
    let isVisible = true
    let animationFrameId
    let count = 0

    const updateWave = (step) => {
      const posArray = geometry.attributes.position.array
      let idx = 0

      for (let ix = 0; ix < amountX; ix++) {
        for (let iz = 0; iz < amountZ; iz++) {
          const indexY = idx * 3 + 1
          // Multi-frequency layered 3D sine/cosine wave
          posArray[indexY] =
            Math.sin((ix + step) * 0.28) * 15 +
            Math.sin((iz + step) * 0.42) * 15 +
            Math.sin((ix + iz + step * 0.8) * 0.18) * 8
          idx++
        }
      }

      geometry.attributes.position.needsUpdate = true
    }

    const render = () => {
      renderer.render(scene, camera)
    }

    const animate = () => {
      if (isVisible) {
        count += speed
        updateWave(count)
        render()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    // Single static wave frame if user prefers reduced motion
    if (prefersReducedMotion) {
      updateWave(15)
      render()
    } else {
      updateWave(0)
      render()
      animationFrameId = requestAnimationFrame(animate)
    }

    // 8. Resizing & Visibility Observers
    const handleResize = () => {
      const { width, height } = getSize()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      if (prefersReducedMotion) render()
    }

    const resizeObserver = new ResizeObserver(() => {
      handleResize()
    })
    resizeObserver.observe(container)
    window.addEventListener('resize', handleResize)

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    visibilityObserver.observe(container)

    // 9. Teardown
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()

      geometry.dispose()
      material.dispose()
      if (circleTexture) circleTexture.dispose()
      renderer.dispose()

      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [amountX, amountZ, separationX, separationZ, speed])

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Subtle edge fades to integrate naturally into #133A2E */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-t from-[#133A2E]/70 via-transparent to-[#133A2E]/70" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-r from-[#133A2E]/60 via-transparent to-[#133A2E]/60" />
    </div>
  )
}
