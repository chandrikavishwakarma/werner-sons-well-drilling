/**
 * Reusable ShineBorder component inspired by Magic UI.
 * Renders an animated glowing border sweep around its parent container.
 *
 * @param {number} borderWidth - Width of the border in pixels (default: 2)
 * @param {number} duration - Animation duration in seconds (default: 12)
 * @param {string|string[]} shineColor - Color or array of colors for the gradient sweep
 * @param {string} className - Additional CSS classes
 * @param {object} style - Additional inline styles
 * @param {React.ReactNode} children - Optional children elements
 */
export default function ShineBorder({
  borderWidth = 2,
  duration = 12,
  shineColor = ['#133A2E', '#D4A338', '#FDE047'],
  className = '',
  style = {},
  children,
  ...props
}) {
  const colorString = Array.isArray(shineColor) ? shineColor.join(', ') : shineColor

  return (
    <div
      style={{
        '--border-width': `${borderWidth}px`,
        '--duration': `${duration}s`,
        padding: `${borderWidth}px`,
        backgroundImage: `radial-gradient(transparent, transparent, ${colorString}, transparent, transparent)`,
        backgroundSize: '300% 300%',
        ...style,
      }}
      className={`pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] shine-border-mask animate-shine motion-safe:animate-shine ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
