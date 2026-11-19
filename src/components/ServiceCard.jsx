import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({
  title,
  description,
  image,
  to,
  badge,
  highlights = [],
}) {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#E2E8F0] shadow-xs card-hover overflow-hidden text-left">
      {/* Image Container with smooth zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-[#133A2E] text-white text-xs font-mono font-medium uppercase tracking-widest px-2.5 py-1 rounded-md shadow-xs border border-white/10">
            {badge}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E] mb-2.5 group-hover:text-[#0284C7] transition-colors leading-tight">
          <Link to={to} className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#133A2E] rounded">
            {title}
          </Link>
        </h3>

        <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="mb-6 space-y-2 border-t border-[#E2E8F0] pt-4 text-xs text-[#133A2E]">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
                <span className="font-medium text-[#475569]">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-2 border-t border-[#E2E8F0]">
          <Link
            to={to}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#133A2E] hover:text-[#0284C7] transition-colors focus:outline-none group/btn cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 text-[#D4A338] transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
