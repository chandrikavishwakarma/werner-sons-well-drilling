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
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            light
              ? 'bg-[#D5AA54]/20 text-[#D5AA54] border border-[#D5AA54]/30'
              : 'bg-[#173F35]/10 text-[#173F35] border border-[#173F35]/20'
          }`}
        >
          {badge}
        </span>
      )}

      {title && (
        <h2
          className={`heading-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 ${
            light ? 'text-white' : 'text-[#173F35]'
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-[#64706A]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
