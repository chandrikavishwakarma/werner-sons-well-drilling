import { useId } from 'react'

/**
 * Reusable DotPattern component inspired by Magic UI.
 * Renders an SVG pattern grid of subtle, elegant dots.
 *
 * @param {number} width - Pattern width in pixels (default: 20)
 * @param {number} height - Pattern height in pixels (default: 20)
 * @param {number} x - Pattern x offset (default: 0)
 * @param {number} y - Pattern y offset (default: 0)
 * @param {number} cx - Center X coordinate of dot (default: 1.5)
 * @param {number} cy - Center Y coordinate of dot (default: 1.5)
 * @param {number} cr - Radius of dot (default: 1.25)
 * @param {boolean} glow - Whether dots feature a subtle warm glow
 * @param {string} className - Additional CSS classes (default: 'fill-[#133A2E]/20')
 */
export default function DotPattern({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  cx = 1.5,
  cy = 1.5,
  cr = 1.25,
  glow = false,
  className = '',
  ...props
}) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-[#133A2E]/20 ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            cx={cx}
            cy={cy}
            r={cr}
            className={glow ? 'drop-shadow-[0_0_2px_rgba(212,163,56,0.8)]' : undefined}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}
