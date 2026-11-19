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
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none active:translate-y-0 active:scale-[0.98]'

  const variants = {
    // Primary: Forest green with hover lift and dark forest transition (#102F28)
    primary:
      'bg-[#173F35] hover:bg-[#102F28] text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[#173F35] border border-transparent',

    // Accent/Gold: Warm architectural gold for primary marketing CTAs
    accent:
      'bg-[#D5AA54] hover:bg-[#C49942] text-[#173F35] font-bold shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[#D5AA54] border border-[#C49942]/30',

    // Secondary: White background with forest green border and text, transitions to filled on hover
    secondary:
      'bg-white border-2 border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#173F35]',

    outline:
      'bg-transparent border-2 border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#173F35]',

    outlineGold:
      'bg-transparent border-2 border-[#D5AA54] text-[#D5AA54] hover:bg-[#D5AA54] hover:text-[#173F35] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#D5AA54]',

    // White button: Clean card surface with soft hover tint
    white:
      'bg-white text-[#173F35] hover:bg-[#F7F7F2] shadow-xs hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-white border border-[#E3E8E3]',

    ghost:
      'bg-transparent text-[#173F35] hover:bg-[#173F35]/10 hover:-translate-y-0.5 focus-visible:ring-[#173F35]',
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5 min-h-[34px]',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2 min-h-[42px]',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5 font-semibold min-h-[48px]',
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  const iconElement = Icon && (
    <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0`} />
  )

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && iconElement}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && iconElement}
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
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </button>
  )
}
