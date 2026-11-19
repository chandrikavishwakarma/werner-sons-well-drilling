export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignmentClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align] || alignmentClasses.center} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest mb-3 ${
            light
              ? 'bg-[#D4A338]/20 text-[#D4A338] border border-[#D4A338]/30'
              : 'bg-[#133A2E]/10 text-[#133A2E] border border-[#133A2E]/20'
          }`}
        >
          {badge}
        </span>
      )}

      {title && (
        <h2
          className={`heading-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4 ${
            light ? 'text-white' : 'text-[#133A2E]'
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-[#475569]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
