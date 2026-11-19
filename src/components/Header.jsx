import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, MapPin, Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import Modal from './Modal'
import EstimateForm from './EstimateForm'

const serviceLinks = [
  { label: 'Well Drilling', path: '/well-drilling' },
  { label: 'Well Deepening', path: '/well-deepening' },
  { label: 'Water Treatment System', path: '/water-treatment-system' },
  { label: 'Pump Sales & Service', path: '/pump-sales--service---installation' },
]

const servicePaths = [
  '/well-drilling',
  '/well-deepening',
  '/water-treatment-system',
  '/pump-sales--service---installation',
  '/pump-sales',
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quickEstimateOpen, setQuickEstimateOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)

  const servicesDropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const isServicesActive = servicePaths.includes(location.pathname)

  // Sync menu close when route changes during render (React recommended pattern)
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev
      if (next && isServicesActive) {
        setMobileServicesOpen(true)
      }
      return next
    })
  }

  // Desktop hover handlers with generous debounce to prevent accidental menu closure
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 180)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Close desktop services dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [mobileMenuOpen])

  // Listen for scroll to elevate sticky header immediately when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false)
        if (servicesOpen) setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen, servicesOpen])

  // Automatically close mobile menu if screen resizes to tablet/desktop (>= 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-150 ${
          isScrolled
            ? 'pt-2 sm:pt-3 px-3 sm:px-4 md:px-6 pointer-events-none'
            : 'pt-0 px-0 pointer-events-auto bg-transparent'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-150 pointer-events-auto ${
            isScrolled
              ? 'max-w-6xl px-3 sm:px-4 md:px-4 lg:px-6 py-1.5 sm:py-2 bg-[#F8FAFC]/36 backdrop-blur-md rounded-2xl border border-[#E2E8F0] shadow-sm text-[#133A2E]'
              : 'w-full max-w-[1440px] px-3 sm:px-4 md:px-4 lg:px-6 xl:px-8 py-2 sm:py-2.5 bg-transparent border-transparent text-[#133A2E]'
          } ${mobileMenuOpen && !isScrolled ? 'bg-white rounded-2xl border border-[#E2E8F0] shadow-lg' : ''}`}
        >
          {/* Single Unified Horizontal Navbar Row */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-150"
          >
            {/* Left: Authentic Brand Logo with crisp light styling */}
            <Link
              to="/"
              className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E] rounded-lg p-0.5 cursor-pointer"
              aria-label="Werner & Sons Well Drilling Home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo
                variant="horizontal"
                theme="light"
                className={`w-auto transition-all duration-150 group-hover:scale-[1.01] ${
                  isScrolled
                    ? 'h-7 sm:h-8 md:h-[24px] lg:h-[30px] xl:h-[36px]'
                    : 'h-8 sm:h-9 md:h-[26px] lg:h-[34px] xl:h-[42px]'
                }`}
              />
            </Link>

            {/* Center: Tablet & Desktop Navigation Links (md / 768px+) */}
            {/* Exactly ordered: 1. Home, 2. Gallery (Center), 3. Services (with chevron dropdown) */}
            <ul className="hidden md:flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-5 flex-1 justify-center min-w-0">
              {/* 1. Home */}
              <li className="shrink-0">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `relative block px-3 lg:px-4 py-1.5 md:py-2 text-sm md:text-[15px] lg:text-base transition-all duration-150 rounded-md cursor-pointer select-none group whitespace-nowrap ${
                      isActive
                        ? 'text-[#133A2E] font-bold bg-[#133A2E]/10 shadow-2xs'
                        : 'text-[#133A2E] font-semibold hover:text-[#0B241C] hover:bg-[#133A2E]/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>Home</span>
                      {/* Animated Underline Transition */}
                      <span
                        className={`absolute bottom-0.5 left-3 lg:left-4 right-3 lg:right-4 h-[2px] bg-[#133A2E] rounded-full transition-transform duration-150 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>

              {/* 2. Gallery (Positioned in Center) */}
              <li className="shrink-0">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `relative block px-3 lg:px-4 py-1.5 md:py-2 text-sm md:text-[15px] lg:text-base transition-all duration-150 rounded-md cursor-pointer select-none group whitespace-nowrap ${
                      isActive
                        ? 'text-[#133A2E] font-bold bg-[#133A2E]/10 shadow-2xs'
                        : 'text-[#133A2E] font-semibold hover:text-[#0B241C] hover:bg-[#133A2E]/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>Gallery</span>
                      {/* Animated Underline Transition */}
                      <span
                        className={`absolute bottom-0.5 left-3 lg:left-4 right-3 lg:right-4 h-[2px] bg-[#133A2E] rounded-full transition-transform duration-150 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>

              {/* 3. Services Dropdown Menu */}
              <li
                className="relative shrink-0"
                ref={servicesDropdownRef}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setServicesOpen((prev) => !prev)
                    }
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`relative inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 md:py-2 text-sm md:text-[15px] lg:text-base transition-all duration-150 rounded-md cursor-pointer select-none group whitespace-nowrap ${
                    isServicesActive || servicesOpen
                      ? 'text-[#133A2E] font-bold bg-[#133A2E]/10 shadow-2xs'
                      : 'text-[#133A2E] font-semibold hover:text-[#0B241C] hover:bg-[#133A2E]/5'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#D4A338]' : 'text-[#133A2E]/70 group-hover:text-[#133A2E]'
                    }`}
                  />
                  {/* Animated Underline Transition */}
                  <span
                    className={`absolute bottom-0.5 left-3 lg:left-4 right-3 lg:right-4 h-[2px] bg-[#133A2E] rounded-full transition-transform duration-150 origin-left ${
                      isServicesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel (Right-aligned under trigger: right-0) */}
                {servicesOpen && (
                  <div
                    className="absolute right-0 top-full pt-1.5 w-60 sm:w-64 z-50 animate-in fade-in zoom-in-95 duration-150"
                    role="menu"
                    aria-orientation="vertical"
                    aria-label="Services Menu"
                  >
                    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-lg py-2 text-left">
                      <div className="px-3.5 py-1.5 mb-1 border-b border-[#E2E8F0]/70 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#D4A338]">
                          Our Well Services
                        </span>
                        <span className="text-[10px] font-mono text-[#475569]/70">4 Areas</span>
                      </div>
                      {serviceLinks.map((service) => {
                        const isCurrent =
                          location.pathname === service.path ||
                          (service.path === '/pump-sales--service---installation' && location.pathname === '/pump-sales')
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className={`flex items-center justify-between px-3.5 py-2.5 mx-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-[#133A2E]/10 text-[#133A2E] font-bold shadow-2xs'
                                : 'text-[#133A2E] hover:bg-[#F1F5F9] hover:text-[#0B241C]'
                            }`}
                          >
                            <span>{service.label}</span>
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] shrink-0" />
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* Right: Prominent Gold CTA Navigation Item with continuous light-yellow aura & shimmering border */}
            <div className="hidden md:flex items-center shrink-0">
              <div className="glow-shimmer-btn-wrapper">
                <div className="glow-shimmer-border" aria-hidden="true" />
                <NavLink
                  to="/estimate-request"
                  className={({ isActive }) =>
                    `relative z-10 inline-flex items-center gap-1.5 px-3.5 md:px-4 lg:px-5 py-2 md:py-2 lg:py-2.5 text-xs md:text-sm lg:text-[15px] font-bold rounded-[11px] bg-[#D4A338] text-[#133A2E] hover:bg-[#C2922B] transition-colors whitespace-nowrap group cursor-pointer ${
                      isActive ? 'ring-2 ring-[#133A2E]/20' : ''
                    }`
                  }
                >
                  <span>Estimate Request</span>
                  <ChevronRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-0.5 text-[#133A2E]" />
                </NavLink>
              </div>
            </div>

            {/* Mobile Actions Only (< md / 768px) */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="tel:6102585615"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D4A338] text-[#133A2E] hover:bg-[#C2922B] transition-colors shadow-xs cursor-pointer active:scale-95"
                aria-label="Call (610) 258-5615"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#E2E8F0] text-[#133A2E] hover:bg-neutral-100/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E] cursor-pointer active:scale-95 transition-all duration-150"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className={`transition-transform duration-150 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Drawer Navigation Only (< md / 768px) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 pb-2 border-t border-[#E2E8F0] space-y-1 animate-slide-down text-[#133A2E]">
              <div className="space-y-1 mb-4">
                {/* 1. Mobile Home */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-[15px] transition-colors cursor-pointer ${
                    location.pathname === '/'
                      ? 'text-[#133A2E] font-bold bg-[#133A2E]/10'
                      : 'text-[#133A2E] font-semibold hover:bg-[#133A2E]/5 hover:text-[#0B241C]'
                  }`}
                >
                  Home
                </Link>

                {/* 2. Mobile Gallery (Positioned in Center) */}
                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-[15px] transition-colors cursor-pointer ${
                    location.pathname === '/gallery'
                      ? 'text-[#133A2E] font-bold bg-[#133A2E]/10'
                      : 'text-[#133A2E] font-semibold hover:bg-[#133A2E]/5 hover:text-[#0B241C]'
                  }`}
                >
                  Gallery
                </Link>

                {/* 3. Mobile Expandable Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[15px] transition-colors cursor-pointer ${
                      isServicesActive
                        ? 'text-[#133A2E] font-bold bg-[#133A2E]/10'
                        : 'text-[#133A2E] font-semibold hover:bg-[#133A2E]/5 hover:text-[#0B241C]'
                    }`}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-[#D4A338]' : 'text-[#133A2E]/70'
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-3 pr-1 py-1 space-y-1 mt-1 border-l-2 border-[#D4A338]/50 ml-3 animate-in fade-in duration-150">
                      {serviceLinks.map((service) => {
                        const isCurrent =
                          location.pathname === service.path ||
                          (service.path === '/pump-sales--service---installation' && location.pathname === '/pump-sales')
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-[#133A2E]/15 text-[#133A2E] font-bold'
                                : 'text-[#475569] font-medium hover:bg-[#133A2E]/5 hover:text-[#133A2E]'
                            }`}
                          >
                            <span>{service.label}</span>
                            {isCurrent && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] shrink-0" />
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* 4. Mobile Estimate Request CTA with light-yellow aura & shimmering border */}
                <div className="glow-shimmer-btn-wrapper w-full mt-2">
                  <div className="glow-shimmer-border" aria-hidden="true" />
                  <Link
                    to="/estimate-request"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative z-10 w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-[11px] text-[15px] font-bold bg-[#D4A338] text-[#133A2E] hover:bg-[#C2922B] transition-colors cursor-pointer"
                  >
                    <span>Estimate Request</span>
                    <ChevronRight className="w-4 h-4 text-[#133A2E]" />
                  </Link>
                </div>
              </div>

              <div className="border-t border-[#E2E8F0] pt-3 pb-1 space-y-1.5 text-xs text-[#475569] text-left">
                <p className="flex items-center gap-2 text-[#133A2E] font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#133A2E]" />
                  <a href="tel:6102585615" className="hover:underline cursor-pointer">
                    (610) 258-5615 &bull; 24-Hour Emergency Service
                  </a>
                </p>
                <p className="flex items-center gap-2 text-[#475569]">
                  <MapPin className="w-3.5 h-3.5 text-[#133A2E]" />
                  <span>Easton, PA 18040 &bull; Serving Lehigh Valley</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs transition-opacity duration-150"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Reusable Responsive Estimate Modal */}
      <Modal
        isOpen={quickEstimateOpen}
        onClose={() => setQuickEstimateOpen(false)}
        title="Request a Free Estimate"
        subtitle="Tell us about your well drilling, pump, or water treatment requirements. Phones answered 24/7."
      >
        <EstimateForm
          compact={true}
          onSuccess={() => setQuickEstimateOpen(false)}
        />
      </Modal>
    </>
  )
}
