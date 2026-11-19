import { Phone, CheckCircle, Shield, Calendar, Droplets } from 'lucide-react'
import Button from './Button'
import heroRigImg from '../assets/gallery/well-drilling/drilling-5.jpg'
import heroDrillingBg from '../assets/hero-well-drilling.jpg'

export default function HeroBanner() {
  return (
    <section aria-label="Hero Introduction" className="relative bg-[#173F35] text-white overflow-hidden -mt-[56px] sm:-mt-[60px] lg:-mt-[68px]">
      {/* Full-Width Authentic Background Image (Consistent with other website routes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div
          className="w-full h-full bg-cover bg-center sm:bg-[center_right_15%] lg:bg-center scale-100 motion-safe:animate-hero-zoom transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url(${heroDrillingBg})` }}
          role="img"
          aria-label="Werner & Sons cable tool water well drilling machinery operating on site in Easton PA"
        />

        {/* Brand-Green Multi-Stop Overlay (Strictly derived from #173F35) */}
        {/* Deep #173F35 on the left (95% to 85%) ensuring crystal-clear text readability, transitioning to 45% on the right to reveal the drilling rig */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#173F35]/95 via-[#173F35]/85 to-[#173F35]/45" />

        {/* Ambient Top & Bottom Vignettes for seamless Header and Marquee integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/70 via-transparent to-[#173F35]/50" />

        {/* Decorative subtle ambient water ripple glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2D6654]/20 blur-3xl pointer-events-none animate-water-pulse" />
      </div>

      <div className="container-custom relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Text & Marketing CTAs (Staggered Entrance) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D5AA54]/15 border border-[#D5AA54]/30 text-[#D5AA54] text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs animate-hero-slide-up [animation-delay:100ms]">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Over 50 Years of Family-Owned Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-serif text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5 animate-hero-slide-up [animation-delay:200ms]">
              Reliable Water Well Drilling &amp; Pump Services
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mb-6 font-normal animate-hero-slide-up [animation-delay:350ms]">
              Professional water well solutions backed by over 50 years of experience and traditional cable tool workmanship in Easton, Pennsylvania. We drill and service residential, commercial, and industrial wells with minimum property impact.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl text-xs sm:text-sm text-white/90 animate-hero-slide-up [animation-delay:450ms]">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#D5AA54] shrink-0" />
                <span className="font-medium">Cable Tool Drilling Method</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#D5AA54] shrink-0" />
                <span className="font-medium">24-Hour Emergency Service</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#D5AA54] shrink-0" />
                <span className="font-medium">Prompt Free Estimates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#D5AA54] shrink-0" />
                <span className="font-medium">Zero Foreign Additives in Well</span>
              </div>
            </div>

            {/* Action Buttons with 2026 Micro-interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto animate-hero-slide-up [animation-delay:600ms]">
              <Button to="/estimate-request" variant="accent" size="lg">
                Request an Estimate
              </Button>
              <Button
                href="tel:6102585615"
                variant="white"
                size="lg"
                icon={Phone}
              >
                Call: (610) 258-5615
              </Button>
            </div>
          </div>

          {/* Right Column: High-Res Original Drilling Equipment Showcase */}
          <div className="lg:col-span-5 relative animate-hero-slide-up [animation-delay:300ms]">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-white/5 shadow-2xl p-2.5 sm:p-3.5 backdrop-blur-xs transition-transform duration-300 hover:scale-[1.01]">
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-neutral-900">
                <img
                  src={heroRigImg}
                  alt="Werner & Sons heavy-duty mobile well drilling rig operating on field"
                  className="w-full h-full object-cover object-center animate-hero-zoom transition-transform duration-700 ease-out hover:scale-105"
                  width="1200"
                  height="825"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D5AA54] mb-1">
                    <Droplets className="w-3.5 h-3.5 text-[#D5AA54]" />
                    <span>Pure Groundwater Drilling</span>
                  </div>
                  <p className="text-sm font-semibold">
                    Drill Your Well the Old Fashioned Way &bull; Easton, PA
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-3 bg-white text-[#173F35] px-4 py-2.5 rounded-xl shadow-xl border border-[#E3E8E3] card-hover">
                <Shield className="w-5 h-5 text-[#2D6654] shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#64706A] tracking-wider">Service Guarantee</p>
                  <p className="text-xs font-bold text-[#173F35]">Prompt, Clean &amp; Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
