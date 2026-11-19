import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({
  breadcrumbText = 'Well Drilling',
  badgeText = 'Specialized Cable Tool Drilling',
  title = 'Water Well Drilling in Easton, Pennsylvania',
  description = "Don't get flooded with high water bills. Our family-owned company in Easton, Pennsylvania provides affordable, sustainable water well drilling services designed for longevity and pristine water quality.",
  backgroundImage,
  imageAlt = 'Water well drilling machinery on location',
  highlights = [
    '50+ Years Cable Tool Experience',
    'Pure Water (Zero Chemical Additives)',
    '24/7 Emergency Service'
  ]
}) {
  return (
    <section
      aria-label={`${title} Hero Banner`}
      className="relative bg-[#173F35] text-white py-14 sm:py-18 lg:py-24 border-b border-[#173F35]/40 overflow-hidden"
    >
      {/* Background Image Container with Fallback & Modern Subtle Zoom */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* Zoomed background element */}
          <div
            className="w-full h-full bg-cover bg-center sm:bg-[center_right_15%] lg:bg-center scale-100 motion-safe:animate-hero-zoom transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label={imageAlt}
          />

          {/* Primary Dark Forest Green Multi-stop Gradient Overlay */}
          {/* Desktop: Strong left forest green (92%) transitioning to medium (75%) and subtle right (25%) */}
          {/* Mobile: Full-width vertical-horizontal blend for optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#102F28]/95 via-[#173F35]/85 to-[#173F35]/35 sm:to-[#173F35]/45 lg:to-[#173F35]/25" />

          {/* Ambient Edge Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#102F28]/60 via-transparent to-[#102F28]/40" />

          {/* Subtle Warm Gold Radial Glow in upper left */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D5AA54]/10 blur-3xl pointer-events-none" />
        </div>
      )}

      {/* Hero Foreground Content */}
      <div className="container-custom relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80 mb-4 sm:mb-5 animate-hero-slide-up [animation-delay:50ms]"
        >
          <Link
            to="/"
            className="text-white/80 hover:text-white hover:underline transition-colors cursor-pointer font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
          <span className="text-[#D5AA54] font-semibold tracking-wide">
            {breadcrumbText}
          </span>
        </nav>

        {/* Content Box with Staggered Animations */}
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#D5AA54]/20 text-[#D5AA54] border border-[#D5AA54]/40 shadow-xs mb-3.5 sm:mb-4 backdrop-blur-xs animate-hero-slide-up [animation-delay:150ms]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5AA54] animate-pulse" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Main Page Headline */}
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-5 text-balance drop-shadow-xs animate-hero-slide-up [animation-delay:250ms]">
            {title}
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-normal mb-6 sm:mb-8 max-w-2xl animate-hero-slide-up [animation-delay:350ms]">
            {description}
          </p>

          {/* Trust Highlights Badges */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-3 border-t border-white/15 text-xs sm:text-sm text-white/90 animate-hero-slide-up [animation-delay:450ms]">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {idx > 0 && (
                    <span className="text-white/30 hidden sm:inline mr-2">&bull;</span>
                  )}
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D5AA54] shrink-0" />
                  <span className="font-medium text-white/95">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
