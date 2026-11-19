import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  glow = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none active:translate-y-0 active:scale-[0.98]'

  const variants = {
    // Primary: Architectural gold with deep forest green bold text
    primary:
      'bg-[#D4A338] hover:bg-[#C2922B] text-[#133A2E] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[#D4A338] border border-[#C2922B]/30',

    // Accent/Gold: Warm architectural gold for prominent CTAs
    accent:
      'bg-[#D4A338] hover:bg-[#C2922B] text-[#133A2E] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[#D4A338] border border-[#C2922B]/30',

    // Secondary: Pure white background with deep forest green border and text, filled on hover
    secondary:
      'bg-[#FFFFFF] border border-[#133A2E] text-[#133A2E] font-semibold hover:bg-[#133A2E] hover:text-[#FFFFFF] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#133A2E]',

    outline:
      'bg-transparent border border-[#133A2E] text-[#133A2E] font-semibold hover:bg-[#133A2E] hover:text-[#FFFFFF] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#133A2E]',

    outlineGold:
      'bg-transparent border-2 border-[#D4A338] text-[#D4A338] hover:bg-[#D4A338] hover:text-[#133A2E] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#D4A338]',

    // White button: Clean card surface with soft hover tint
    white:
      'bg-[#FFFFFF] text-[#133A2E] font-semibold hover:bg-[#F8FAFC] shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[#133A2E] border border-[#E2E8F0]',

    ghost:
      'bg-transparent text-[#133A2E] hover:bg-[#133A2E]/10 hover:-translate-y-0.5 focus-visible:ring-[#133A2E]',
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5 min-h-[34px]',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 min-h-[42px]',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5 font-semibold min-h-[48px]',
  }

  const iconElement = Icon && (
    <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0`} />
  )

  const renderInner = () => (
    <>
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </>
  )

  // Animated continuous light-yellow aura & shimmering border variant
  if (glow) {
    const glowWrapperClasses = `glow-shimmer-btn-wrapper ${className.includes('w-full') ? 'w-full' : ''} ${className}`
    const innerClasses = `${baseStyles} bg-[#D4A338] hover:bg-[#C2922B] text-[#133A2E] font-bold ${sizes[size] || sizes.md} rounded-[11px] relative z-10 w-full`

    if (to) {
      return (
        <div className={glowWrapperClasses}>
          <div className="glow-shimmer-border" aria-hidden="true" />
          <Link to={to} className={innerClasses} onClick={onClick} {...props}>
            {renderInner()}
          </Link>
        </div>
      )
    }

    if (href) {
      return (
        <div className={glowWrapperClasses}>
          <div className="glow-shimmer-border" aria-hidden="true" />
          <a href={href} className={innerClasses} onClick={onClick} {...props}>
            {renderInner()}
          </a>
        </div>
      )
    }

    return (
      <div className={glowWrapperClasses}>
        <div className="glow-shimmer-border" aria-hidden="true" />
        <button
          type={type}
          disabled={disabled}
          className={innerClasses}
          onClick={onClick}
          {...props}
        >
          {renderInner()}
        </button>
      </div>
    )
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {renderInner()}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {renderInner()}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {renderInner()}
    </button>
  )
}
