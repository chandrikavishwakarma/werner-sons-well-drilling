export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
  revealed = true,
}) {
  const alignmentClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }

  return (
    <div className={`flex flex-col max-w-3xl mb-6 sm:mb-8 ${alignmentClasses[align] || alignmentClasses.center} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest mb-2 sm:mb-2.5 reveal-on-scroll ${
            revealed ? 'is-revealed' : ''
          } ${
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
          className={`heading-serif text-fluid-h2 font-normal tracking-tight text-balance mb-2.5 sm:mb-3 reveal-on-scroll reveal-stagger-1 ${
            revealed ? 'is-revealed' : ''
          } ${light ? 'text-white' : 'text-[#133A2E]'}`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-fluid-lead leading-relaxed max-w-2xl sm:max-w-3xl reveal-on-scroll reveal-stagger-2 ${
            revealed ? 'is-revealed' : ''
          } ${light ? 'text-white/80' : 'text-[#475569]'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
