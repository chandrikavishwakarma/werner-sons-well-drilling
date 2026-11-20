import * as React from 'react'
import { LONG_DISTANCE_CONNECTIONS } from '../data/worldMapConnections'

/**
 * Official WebberUI World Map component
 * Reference: https://webberui.com/docs/world-map
 * Installation reference: npx webberui@latest add world-map.en
 *
 * Dotted world map / connection diagram with procedural animation,
 * drawn on canvas 2D, with intercontinental arcs and endpoint pulses.
 */

const LAND = [
  { lng: -100, lat: 44, rx: 27, ry: 16 },
  { lng: -116, lat: 58, rx: 22, ry: 12 },
  { lng: -92, lat: 60, rx: 21, ry: 11 },
  { lng: -145, lat: 63, rx: 12, ry: 8 },
  { lng: -84, lat: 32, rx: 12, ry: 9 },
  { lng: -101, lat: 23, rx: 8, ry: 8 },
  { lng: -85, lat: 14, rx: 8, ry: 5 },
  { lng: -42, lat: 72, rx: 12, ry: 8 },
  { lng: -60, lat: -6, rx: 16, ry: 14 },
  { lng: -64, lat: -28, rx: 9, ry: 12 },
  { lng: -70, lat: -44, rx: 5, ry: 9 },
  { lng: 14, lat: 51, rx: 19, ry: 10 },
  { lng: 24, lat: 62, rx: 14, ry: 8 },
  { lng: -3, lat: 43, rx: 8, ry: 6 },
  { lng: 8, lat: 18, rx: 22, ry: 14 },
  { lng: 22, lat: 2, rx: 15, ry: 12 },
  { lng: 25, lat: -22, rx: 12, ry: 13 },
  { lng: 45, lat: 29, rx: 13, ry: 11 },
  { lng: 92, lat: 56, rx: 46, ry: 17 },
  { lng: 70, lat: 40, rx: 22, ry: 13 },
  { lng: 105, lat: 32, rx: 18, ry: 12 },
  { lng: 79, lat: 20, rx: 11, ry: 11 },
  { lng: 100, lat: 14, rx: 10, ry: 10 },
  { lng: 118, lat: -1, rx: 14, ry: 6 },
  { lng: 139, lat: 38, rx: 5, ry: 8 },
  { lng: 134, lat: -25, rx: 14, ry: 10 },
  { lng: 172, lat: -42, rx: 4, ry: 6 },
]

const LAT_TOP = 78
const LAT_BOTTOM = -56

function isLand(lat, lng) {
  for (let i = 0; i < LAND.length; i++) {
    const l = LAND[i]
    const dx = (lng - l.lng) / l.rx
    const dy = (lat - l.lat) / l.ry
    if (dx * dx + dy * dy <= 1) return true
  }
  return false
}

function withAlpha(color, a) {
  const h = color.trim()
  if (h[0] === '#') {
    let r, g, b
    if (h.length === 4) {
      r = parseInt(h[1] + h[1], 16)
      g = parseInt(h[2] + h[2], 16)
      b = parseInt(h[3] + h[3], 16)
    } else {
      r = parseInt(h.slice(1, 3), 16)
      g = parseInt(h.slice(3, 5), 16)
      b = parseInt(h.slice(5, 7), 16)
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
  const m = h.match(/rgba?\(([^)]+)\)/)
  if (m) {
    const p = m[1].split(',').map((s) => s.trim())
    return `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${a})`
  }
  return h
}

function quad(p0, p1, p2, t) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  }
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(() => {
    return typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  })
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function WorldMap({
  connections = LONG_DISTANCE_CONNECTIONS,
  dotColor,
  lineColor = '#38bdf8', // Official WebberUI sky blue
  dotGap = 16,
  dotRadius = 1.1,
  lineDuration = 1.6,
  staggerDelay = 0.6,
  curvature = 0.3,
  className = '',
}) {
  const reducedMotion = useReducedMotion()
  const reduced = Boolean(reducedMotion)
  const canvasRef = React.useRef(null)
  const rafRef = React.useRef(null)
  const dotsRef = React.useRef([])
  const connectionsKey = JSON.stringify(connections)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let width = 0
    let height = 0
    let resolvedDot = dotColor ?? getComputedStyle(canvas).color

    const project = (lat, lng) => ({
      x: ((lng + 180) / 360) * width,
      y: ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * height,
    })

    const buildDots = () => {
      const dots = []
      for (let gy = dotGap / 2; gy < height; gy += dotGap) {
        for (let gx = dotGap / 2; gx < width; gx += dotGap) {
          const lng = (gx / width) * 360 - 180
          const lat = LAT_TOP - (gy / height) * (LAT_TOP - LAT_BOTTOM)
          if (isLand(lat, lng)) dots.push({ x: gx, y: gy })
        }
      }
      dotsRef.current = dots
    }

    const drawDots = () => {
      ctx.fillStyle = resolvedDot
      ctx.globalAlpha = 1
      for (let i = 0; i < dotsRef.current.length; i++) {
        const d = dotsRef.current[i]
        ctx.beginPath()
        ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawEndpoint = (p, alpha, ringT) => {
      ctx.globalAlpha = alpha
      ctx.fillStyle = lineColor
      ctx.beginPath()
      ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2)
      ctx.fill()
      const radius = 2.4 + ringT * 9
      ctx.globalAlpha = alpha * (1 - ringT)
      ctx.strokeStyle = lineColor
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    const drawConnection = (c, progress, alpha, ringT) => {
      if (alpha <= 0 || progress <= 0) return
      const p1 = project(c.from.lat, c.from.lng)
      const p2 = project(c.to.lat, c.to.lng)
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
      const cp = {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2 - dist * curvature,
      }
      const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
      grad.addColorStop(0, withAlpha(lineColor, 0))
      grad.addColorStop(0.5, lineColor)
      grad.addColorStop(1, withAlpha(lineColor, 0))
      ctx.globalAlpha = alpha
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.4
      ctx.lineCap = 'round'
      ctx.shadowColor = lineColor
      ctx.shadowBlur = 6
      const STEPS = 64
      const end = Math.max(1, Math.round(STEPS * progress))
      ctx.beginPath()
      for (let s = 0; s <= end; s++) {
        const t = s / STEPS
        const pt = quad(p1, cp, p2, Math.min(t, progress))
        if (s === 0) ctx.moveTo(pt.x, pt.y)
        else ctx.lineTo(pt.x, pt.y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0
      if (progress < 1) {
        const head = quad(p1, cp, p2, progress)
        ctx.globalAlpha = alpha
        ctx.fillStyle = lineColor
        ctx.beginPath()
        ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
      drawEndpoint(p1, alpha, ringT)
      if (progress >= 1) drawEndpoint(p2, alpha, ringT)
      ctx.globalAlpha = 1
    }

    const hold = lineDuration * 0.7
    const fade = lineDuration * 0.6
    const gap = lineDuration * 0.5
    const cycle = lineDuration + hold + fade + gap

    const drawFrame = (nowMs) => {
      ctx.clearRect(0, 0, width, height)
      drawDots()
      if (reduced) {
        for (let i = 0; i < connections.length; i++) {
          drawConnection(connections[i], 1, 1, 0)
        }
        return
      }
      const t = nowMs / 1000
      const ringT = (t % 1.6) / 1.6
      connections.forEach((c, i) => {
        let local = (t - i * staggerDelay) % cycle
        if (local < 0) local += cycle
        let progress
        let alpha
        if (local < lineDuration) {
          progress = local / lineDuration
          alpha = 1
        } else if (local < lineDuration + hold) {
          progress = 1
          alpha = 1
        } else if (local < lineDuration + hold + fade) {
          progress = 1
          alpha = 1 - (local - lineDuration - hold) / fade
        } else {
          progress = 1
          alpha = 0
        }
        drawConnection(c, progress, alpha, ringT)
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildDots()
      drawFrame(reduced ? 0 : performance.now())
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    let themeObserver
    if (!dotColor) {
      themeObserver = new MutationObserver(() => {
        resolvedDot = getComputedStyle(canvas).color
        drawFrame(reduced ? 0 : performance.now())
      })
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
    }

    if (reduced) {
      return () => {
        ro.disconnect()
        themeObserver?.disconnect()
      }
    }

    const loop = (now) => {
      drawFrame(now)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const io =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
              if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(loop)
              }
            } else if (rafRef.current !== null) {
              cancelAnimationFrame(rafRef.current)
              rafRef.current = null
            }
          })
    io?.observe(canvas)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      io?.disconnect()
      ro.disconnect()
      themeObserver?.disconnect()
    }
  }, [
    connectionsKey,
    connections,
    dotColor,
    lineColor,
    dotGap,
    dotRadius,
    lineDuration,
    staggerDelay,
    curvature,
    reduced,
  ])

  return (
    <div
      aria-hidden
      className={`relative aspect-[2/1] w-full overflow-hidden text-neutral-400/50 dark:text-neutral-600/50 ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
