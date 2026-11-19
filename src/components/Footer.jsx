import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, ChevronUp, Share2 } from 'lucide-react'
import Logo from './Logo'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/#about-us' },
  { label: 'Why Cable Tool?', path: '/#why-us' },
  { label: 'Project Gallery', path: '/gallery' },
  { label: 'Request an Estimate', path: '/estimate-request' },
  { label: 'Frequently Asked Questions', path: '/#faq' },
]

const servicesList = [
  { label: 'Water Well Drilling', path: '/well-drilling' },
  { label: 'Cable Tool Drilling Technique', path: '/well-drilling' },
  { label: 'Well Deepening & Sediment Removal', path: '/well-deepening' },
  { label: 'Holding & Pressure Tanks', path: '/well-deepening' },
  { label: 'Water Treatment & Purification Systems', path: '/water-treatment-system' },
  { label: 'Pump Sales, Service & Installation', path: '/pump-sales--service---installation' },
]

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-[#133A2E] text-white border-t border-[#133A2E]/40 pt-16 pb-12 relative">
        <div className="container-custom">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Logo & Company Bio (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <Link
                to="/"
                className="inline-block mb-5 transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A338] rounded cursor-pointer"
                aria-label="Werner & Sons Well Drilling LLC Home"
              >
                <Logo
                  variant="horizontal"
                  theme="dark"
                  className="h-11 sm:h-12 w-auto"
                />
              </Link>

              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Werner &amp; Sons Well Drilling LLC is an established, family-owned-and-operated water well drilling contractor based in Easton, Pennsylvania. For more than 50 years, our team has delivered prompt, reliable, and neat water drilling solutions with traditional cable tool workmanship.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#D4A338] font-medium bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#D4A338] shrink-0" />
                <span>We Accept Cash &amp; Personal Checks &bull; Free Estimates</span>
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="heading-serif text-xl font-normal text-white mb-4 pb-2 border-b border-white/10">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="hover:text-[#D4A338] hover-underline-animation transition-colors flex items-center gap-1.5 cursor-pointer py-0.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#D4A338]/60 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services (3 cols) */}
            <div className="lg:col-span-3 text-left">
              <h4 className="heading-serif text-xl font-normal text-white mb-4 pb-2 border-b border-white/10">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-sm text-white/80">
                {servicesList.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="hover:text-[#D4A338] hover-underline-animation transition-colors flex items-center gap-1.5 cursor-pointer py-0.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#D4A338]/60 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Verified Contact Info (3 cols) */}
            <div className="lg:col-span-3 text-left">
              <h4 className="heading-serif text-xl font-normal text-white mb-4 pb-2 border-b border-white/10">
                Contact Information
              </h4>
              <div className="space-y-3.5 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4A338] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-white/60 font-mono font-medium tracking-wider">Phone (24/7 Answered)</p>
                    <a
                      href="tel:6102585615"
                      className="text-white font-bold hover:text-[#D4A338] hover:underline transition-colors cursor-pointer"
                    >
                      (610) 258-5615
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4A338] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-white/60 font-mono font-medium tracking-wider">Email Address</p>
                    <a
                      href="mailto:wernerandsons@yahoo.com"
                      className="text-white hover:text-[#D4A338] hover:underline transition-colors break-all cursor-pointer"
                    >
                      wernerandsons@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4A338] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-white/60 font-mono font-medium tracking-wider">Location &amp; Service Area</p>
                    <p className="text-white">Easton, PA 18040 &bull; PA 18042-9493</p>
                    <p className="text-xs text-white/70 mt-0.5">
                      Northampton, Lehigh, Monroe, Carbon &amp; Poconos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4A338] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-white/60 font-mono font-medium tracking-wider">Hours of Operation</p>
                    <p className="text-white font-medium">24-Hour Emergency Service</p>
                    <p className="text-xs text-white/70">Phones Answered 24 Hours a Day</p>
                  </div>
                </div>
              </div>

              {/* Social Share Link with micro-interaction */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href="http://www.facebook.com/share.php?u=http://www.wernerandsonswelldrilling.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A338] hover:text-white transition-colors cursor-pointer group"
                >
                  <Share2 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>Like Werner &amp; Sons on Facebook</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal, Attribution & Back to Top Link */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              &copy; {new Date().getFullYear()} Werner &amp; Sons Well Drilling LLC. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#D4A338] transition-colors cursor-pointer group"
            >
              <span>Back to top</span>
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>

            <p className="text-center sm:text-right">
              Original web presence powered by Dex Media &bull; Modern 2026 Standards
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Smooth Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#133A2E] hover:bg-[#0B241C] text-[#D4A338] hover:text-white border border-[#D4A338]/40 shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer active:scale-95 animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A338]"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
