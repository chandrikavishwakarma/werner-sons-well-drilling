import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, MapPin, Menu, X, ChevronRight } from 'lucide-react'
import Logo from './Logo'
import Modal from './Modal'
import EstimateForm from './EstimateForm'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Well Drilling', path: '/well-drilling' },
  { label: 'Well Deepening', path: '/well-deepening' },
  { label: 'Water Treatment System', path: '/water-treatment-system' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Pump Sales & Service', path: '/pump-sales--service---installation' },
  { label: 'Estimate Request', path: '/estimate-request', isCta: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quickEstimateOpen, setQuickEstimateOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)

  // Sync mobile menu close when route changes during render (React recommended pattern)
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname)
    setMobileMenuOpen(false)
  }

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled

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

  // Listen for scroll to elevate sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-[#173F35]/35 border-b border-white/10 shadow-none backdrop-blur-xs'
            : isScrolled
              ? 'bg-[#173F35]/50 backdrop-blur-md shadow-md border-b border-[#173F35]/40 text-white'
              : 'bg-[#173F35] shadow-xs border-b border-[#173F35]/40 text-white'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-2 lg:px-6 xl:px-8">
          {/* Single Unified Horizontal Navbar Row */}
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between gap-1 md:gap-1.5 lg:gap-4 xl:gap-6 transition-all duration-300 ${
              isScrolled ? 'py-1.5 sm:py-2 md:py-2' : 'py-2 sm:py-2.5 md:py-2.5'
            }`}
          >
            {/* Left: Authentic Brand Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5AA54] rounded-lg p-0.5 cursor-pointer"
              aria-label="Werner & Sons Well Drilling Home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo
                variant="horizontal"
                theme="dark"
                className="h-7 sm:h-8 md:h-[21px] lg:h-[28px] xl:h-[36px] w-auto transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>

            {/* Center: Tablet & Desktop Navigation Links (md / 768px+) */}
            <ul className="hidden md:flex items-center gap-0 md:gap-0.5 lg:gap-1.5 xl:gap-2 flex-1 justify-center min-w-0">
              {navLinks
                .filter((item) => !item.isCta)
                .map((item) => (
                  <li key={item.path} className="shrink-0">
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `relative block px-1 md:px-1 lg:px-2.5 xl:px-3 py-1 md:py-1 lg:py-1.5 text-[10px] md:text-[10px] lg:text-xs xl:text-sm font-semibold md:font-semibold lg:font-medium transition-all duration-200 rounded-md cursor-pointer select-none group whitespace-nowrap ${
                          isActive
                            ? 'text-[#D5AA54] font-bold bg-white/10 shadow-xs'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          {/* Animated Underline Transition */}
                          <span
                            className={`absolute bottom-0.5 left-1 md:left-1 lg:left-2.5 xl:left-3 right-1 md:right-1 lg:right-2.5 xl:right-3 h-[2px] bg-[#D5AA54] rounded-full transition-transform duration-300 origin-left ${
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
            </ul>

            {/* Right: Prominent Gold CTA Navigation Item (Tablet, Laptop & Desktop md+) */}
            <div className="hidden md:flex items-center shrink-0">
              <NavLink
                to="/estimate-request"
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 lg:gap-1.5 px-2 md:px-2 lg:px-3.5 xl:px-4 py-1.5 md:py-1.5 lg:py-2 text-[10px] md:text-[10px] lg:text-xs xl:text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap group ${
                    isActive
                      ? 'bg-[#c49942] text-[#173F35] ring-2 ring-white/30'
                      : 'bg-[#D5AA54] text-[#173F35] hover:bg-[#c49942]'
                  }`
                }
              >
                <span>Estimate Request</span>
                <ChevronRight className="hidden lg:inline w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-0.5" />
              </NavLink>
            </div>

            {/* Mobile Actions Only (< md / 768px) */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="tel:6102585615"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D5AA54] text-[#173F35] hover:bg-[#c49942] transition-colors shadow-xs cursor-pointer active:scale-95"
                aria-label="Call (610) 258-5615"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5AA54] cursor-pointer active:scale-95 transition-all"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Drawer Navigation Only (< md / 768px) */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-40 bg-[#173F35] border-b border-[#173F35]/40 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain animate-slide-down text-white">
            <div className="space-y-1 mb-5">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    item.isCta
                      ? 'bg-[#D5AA54] text-[#173F35] font-bold mt-2 text-center shadow-xs hover:bg-[#c49942]'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/15 pt-4 space-y-2 text-xs text-white/80 text-left">
              <p className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#D5AA54]" />
                <a href="tel:6102585615" className="hover:underline cursor-pointer">
                  (610) 258-5615 &bull; 24-Hour Emergency Service
                </a>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#D5AA54]" />
                <span>Easton, PA 18040 &bull; Serving Lehigh Valley</span>
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[56px] sm:top-[60px] bg-black/60 z-30 md:hidden backdrop-blur-xs transition-opacity"
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
