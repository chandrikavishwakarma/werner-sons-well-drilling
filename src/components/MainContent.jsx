import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Clock,
  Layers,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Phone,
  ArrowRight,
} from 'lucide-react'

import SectionHeading from './SectionHeading'
import GalleryGrid from './GalleryGrid'
import EstimateForm from './EstimateForm'
import Button from './Button'
import Counter from './Counter'
import CircularCarousel from './CircularCarousel'
import { employeeItems } from '../data/employeeData'
import useScrollReveal from '../hooks/useScrollReveal'
import DottedWaveBackground from './DottedWaveBackground'
import WorldMap from './WorldMap'
import { ROTATING_SERVICE_AREAS } from '../data/serviceAreas'

import { homeGalleryPhotos } from '../data/galleryData'

// High-resolution real camera photos for cards and showcases
import cardDrillingImg from '../assets/gallery/well-drilling/drilling-5.jpg'
import cardDeepeningImg from '../assets/gallery/well-deepening/deepening-1.jpg'
import cardTreatmentImg from '../assets/gallery/water-treatment/treatment-1.jpg'
import cardPumpImg from '../assets/gallery/pump-installation/pump-1.jpg'

const services = [
  {
    id: 'drilling',
    title: 'Water Well Drilling',
    description:
      'Comprehensive water well drilling for homeowners and commercial facilities seeking clean, reliable fresh water with our gentle cable tool method.',
    image: cardDrillingImg,
    to: '/well-drilling',
    badge: 'Core Service',
  },
  {
    id: 'deepening',
    title: 'Well Deepening',
    description:
      'Dig deeper into dependable aquifers when older wells experience low flow, sediment buildup, or seasonal water level drops.',
    image: cardDeepeningImg,
    to: '/well-deepening',
    badge: 'Restoration',
  },
  {
    id: 'treatment',
    title: 'Water Treatment System',
    description:
      'Enjoy crisp, healthy water throughout your entire property with professional installation and repair of ATS® purification systems.',
    image: cardTreatmentImg,
    to: '/water-treatment-system',
    badge: 'Purification',
  },
  {
    id: 'pumps',
    title: 'Pump Sales & Service',
    description:
      'Reliable sales, diagnostics, and installation of durable J-Class submersible pumps when your water system stops delivering.',
    image: cardPumpImg,
    to: '/pump-sales--service---installation',
    badge: '24/7 Available',
  },
]

export default function MainContent() {
  const [openFaq, setOpenFaq] = useState(null)

  // Spotlight Carousel state for Services
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [carouselDirection, setCarouselDirection] = useState(1)
  const [isServicesHovered, setIsServicesHovered] = useState(false)

  const handleSelectService = useCallback((targetIndex, dir) => {
    setCarouselDirection(dir !== undefined ? dir : (targetIndex > activeServiceIndex ? 1 : -1))
    setActiveServiceIndex(targetIndex)
  }, [activeServiceIndex])

  // Automatically advance to the next service every ~3.5s (pauses on hover and reduced motion)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches || isServicesHovered) return

    const timer = setInterval(() => {
      setCarouselDirection(1)
      setActiveServiceIndex((prev) => (prev + 1) % services.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [isServicesHovered])

  // Rotating service-area names for WebberUI World Map
  const [activeServiceAreaIdx, setActiveServiceAreaIdx] = useState(0)
  const [isServiceAreaTransitioning, setIsServiceAreaTransitioning] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const timer = setInterval(() => {
      setIsServiceAreaTransitioning(true)
      setTimeout(() => {
        setActiveServiceAreaIdx((prev) => (prev + 1) % ROTATING_SERVICE_AREAS.length)
        setIsServiceAreaTransitioning(false)
      }, 350)
    }, 2600)

    return () => clearInterval(timer)
  }, [])

  // Scroll reveal hooks for progressive bidirectional entrance
  const [statsRef, statsRevealed] = useScrollReveal({ threshold: 0.1 })
  const [crewRef, crewRevealed] = useScrollReveal({ threshold: 0.08 })
  const [servicesRef, servicesRevealed] = useScrollReveal({ threshold: 0.08 })
  const [galleryRef, galleryRevealed] = useScrollReveal({ threshold: 0.08 })
  const [areasRef, areasRevealed] = useScrollReveal({ threshold: 0.08 })
  const [standardsRef, standardsRevealed] = useScrollReveal({ threshold: 0.08 })
  const [faqRef, faqRevealed] = useScrollReveal({ threshold: 0.08 })
  const [estimateRef, estimateRevealed] = useScrollReveal({ threshold: 0.08 })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: 'Why should I choose the cable tool drilling method over high-pressure air drilling?',
      a: 'Cable tool drilling is a slower, gentler method that does not upset or fracture the fragile rock and soil formations surrounding your well. Unlike air drilling, it uses zero artificial chemical foams, drilling muds, or high-pressure air that could clog porous water veins or collapse aquifer walls. In most cases, wells drilled with cable tools fill faster, require less depth, and experience significantly less long-term pump silt wear.',
    },
    {
      q: 'When does an older well need to be deepened?',
      a: 'Over years of use, sediment, silt, and natural minerals can accumulate at the bottom of an older well, or water table fluctuations may reduce the flow. Werner & Sons provides well deepening and cleaning services that safely dig deeper to reach pristine water sources without damaging your existing well structure.',
    },
    {
      q: 'What water purification and treatment systems do you install?',
      a: 'We install premium ATS® water purification and conditioning systems. If your water has mineral taste, hardness, or odors, our systems restore clean, healthy, great-tasting water for your home or business.',
    },
    {
      q: 'What types of water pumps and well tanks do you sell and service?',
      a: 'We specialize in sales, service, and replacement of heavy-duty J-Class submersible water pumps as well as industry-leading holding and pressure tanks, including Champion® and WELL-X-TROL®.',
    },
    {
      q: 'Do you offer emergency well service?',
      a: 'Yes! Werner & Sons provides 24-Hour Emergency Service with phone lines answered 24 hours a day. Call (610) 258-5615 whenever your pump stops or you experience sudden water loss.',
    },
    {
      q: 'Which payment methods do you accept?',
      a: 'We accept cash and personal checks. We provide free, honest estimates before starting any drilling or pump installation work.',
    },
  ]

  const serviceAreas = [
    { name: 'Northampton County', desc: 'Easton, Bethlehem, Nazareth, Palmer Township, Forks Township & Wilson' },
    { name: 'Lehigh County', desc: 'Allentown, Emmaus, Macungie, Upper Saucon & Whitehall' },
    { name: 'Monroe County', desc: 'Stroudsburg, East Stroudsburg, Tobyhanna & Pocono Township' },
    { name: 'Carbon County', desc: 'Jim Thorpe, Lehighton, Palmerton & surrounding rural areas' },
    { name: 'Poconos Region', desc: 'Complete residential and commercial deep well services throughout the Pocono mountains' },
  ]

  return (
    <div className="bg-[#F8FAFC]">
      {/* SECTION 4: Company Trust / Genuine Statistics Bar */}
      <section ref={statsRef} className="bg-white border-y border-[#E2E8F0] py-6 sm:py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {/* Stat 1: 50+ Years */}
            <div className={`flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC]/60 border border-[#E2E8F0]/60 card-hover reveal-on-scroll ${statsRevealed ? 'is-revealed' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] mb-2 transition-transform hover:scale-110">
                <ShieldCheck className="w-6 h-6 text-[#0284C7]" />
              </div>
              <span className="text-fluid-h2 font-normal text-[#133A2E] heading-serif">
                <Counter end={50} suffix="+" /> Years
              </span>
              <span className="text-xs sm:text-sm text-[#475569] mt-0.5">Family-Owned Business</span>
            </div>

            {/* Stat 2: 24/7 Service */}
            <div
              className={`flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC]/60 border border-[#E2E8F0]/60 card-hover reveal-on-scroll reveal-stagger-1 ${statsRevealed ? 'is-revealed' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] mb-2 transition-transform hover:scale-110">
                <Clock className="w-6 h-6 text-[#0284C7]" />
              </div>
              <span className="text-fluid-h2 font-normal text-[#133A2E] heading-serif">
                <Counter end={24} suffix="/7" />
              </span>
              <span className="text-xs sm:text-sm text-[#475569] mt-0.5">Emergency Phones Answered</span>
            </div>

            {/* Stat 3: 4 Core Counties */}
            <div
              className={`flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC]/60 border border-[#E2E8F0]/60 card-hover reveal-on-scroll reveal-stagger-2 ${statsRevealed ? 'is-revealed' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] mb-2 transition-transform hover:scale-110">
                <MapPin className="w-6 h-6 text-[#0284C7]" />
              </div>
              <span className="text-fluid-h2 font-normal text-[#133A2E] heading-serif">
                <Counter end={4} /> Core Counties
              </span>
              <span className="text-xs sm:text-sm text-[#475569] mt-0.5">Northampton, Lehigh, Monroe, Carbon</span>
            </div>

            {/* Stat 4: 100% Cable Tool Percussion */}
            <div
              className={`flex flex-col items-center p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC]/60 border border-[#E2E8F0]/60 card-hover reveal-on-scroll reveal-stagger-3 ${statsRevealed ? 'is-revealed' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] mb-2 transition-transform hover:scale-110">
                <Layers className="w-6 h-6 text-[#0284C7]" />
              </div>
              <span className="text-fluid-h2 font-normal text-[#133A2E] heading-serif">
                <Counter end={100} suffix="%" /> Cable Tool
              </span>
              <span className="text-xs sm:text-sm text-[#475569] mt-0.5">Gentle Aquifer Preservation</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: Meet the Crew - 3D Circular Carousel Showcase */}
      <section ref={crewRef} className="py-8 sm:py-12 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        <div className="container-custom mb-3 sm:mb-4 text-center">
          <span className={`inline-block text-xs font-mono font-semibold uppercase tracking-widest text-[#B88414] mb-1 reveal-on-scroll ${crewRevealed ? 'is-revealed' : ''}`}>
            OUR TEAM
          </span>
          <h2 className={`heading-serif text-fluid-h2 font-normal text-[#133A2E] leading-tight text-balance reveal-on-scroll reveal-stagger-1 ${crewRevealed ? 'is-revealed' : ''}`}>
            Meet the Crew Behind Every Well
          </h2>
          <p className={`text-fluid-lead text-[#475569] mt-1.5 max-w-2xl mx-auto reveal-on-scroll reveal-stagger-2 ${crewRevealed ? 'is-revealed' : ''}`}>
            Experienced drillers, certified pump technicians, and filtration specialists dedicated to pure groundwater and generational workmanship across Pennsylvania.
          </p>
        </div>

        <div className={`w-full h-[340px] sm:h-[380px] relative reveal-on-scroll reveal-stagger-3 ${crewRevealed ? 'is-revealed' : ''}`}>
          <CircularCarousel
            items={employeeItems}
            preset="cylinder"
            intro="rise"
            cardWidth={220}
            aspectRatio={1}
            speed={14}
            gap={25}
            tilt={-5}
            curve={1}
            perspective={2500}
            autoplay="drift"
            interval={3}
            direction="left"
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            draggable
            parallax={0.3}
            stretch={0.5}
            fadeColor="#F8FAFC"
            depthFade={0.55}
            innerShade={0.6}
            cornerRadius={12}
          />
        </div>
      </section>

      {/* SECTION 5: Our Services (Progressive Scroll Entrance) */}
      <section id="services" ref={servicesRef} className="py-8 sm:py-12">
        <div className="container-custom">
          <SectionHeading
            badge="Comprehensive Solutions"
            title="Our Professional Water Services"
            revealed={servicesRevealed}
          />

          {/* Cardless Center-Larger Spotlight Carousel */}
          <div
            className={`relative max-w-5xl mx-auto reveal-on-scroll reveal-stagger-3 ${
              servicesRevealed ? 'is-revealed' : ''
            }`}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            {/* Carousel Stage Track */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] flex items-center justify-center overflow-hidden py-1">
              {/* Previous Arrow Button */}
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    (activeServiceIndex - 1 + services.length) % services.length,
                    -1
                  )
                }
                aria-label="Previous service"
                className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#133A2E] border border-[#E2E8F0] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Arrow Button */}
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    (activeServiceIndex + 1) % services.length,
                    1
                  )
                }
                aria-label="Next service"
                className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#133A2E] border border-[#E2E8F0] shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Service Images */}
              {services.map((service, index) => {
                let diff = index - activeServiceIndex
                while (diff < -2) diff += 4
                while (diff > 2) diff -= 4
                if (diff === 2 && carouselDirection === -1) diff = -2
                if (diff === -2 && carouselDirection === 1) diff = 2

                const isCenter = diff === 0
                const isLeft = diff === -1
                const isRight = diff === 1
                const isFar = Math.abs(diff) >= 2

                let transformStr = 'translateX(0%) scale(1)'
                let opacityVal = 1
                let zIndexVal = 20
                let pointerEventsVal = 'auto'

                if (isLeft) {
                  transformStr = 'translateX(-68%) scale(0.78)'
                  opacityVal = 0.65
                  zIndexVal = 10
                } else if (isRight) {
                  transformStr = 'translateX(68%) scale(0.78)'
                  opacityVal = 0.65
                  zIndexVal = 10
                } else if (isFar) {
                  transformStr = `translateX(${diff > 0 ? 140 : -140}%) scale(0.6)`
                  opacityVal = 0
                  zIndexVal = 0
                  pointerEventsVal = 'none'
                }

                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      if (isLeft) handleSelectService(index, -1)
                      else if (isRight) handleSelectService(index, 1)
                    }}
                    className={`absolute top-0 bottom-0 my-auto w-[220px] sm:w-[270px] md:w-[320px] aspect-[16/10] rounded-[14px] overflow-hidden shadow-lg select-none ${
                      isCenter ? 'cursor-pointer' : isFar ? '' : 'cursor-pointer hover:opacity-85'
                    }`}
                    style={{
                      transform: transformStr,
                      opacity: opacityVal,
                      zIndex: zIndexVal,
                      pointerEvents: pointerEventsVal,
                      transition:
                        'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 550ms cubic-bezier(0.22, 1, 0.36, 1), filter 550ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {isCenter ? (
                      <Link to={service.to} className="block w-full h-full relative group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-medium uppercase tracking-wider bg-[#133A2E]/85 text-[#D4A338] border border-[#D4A338]/30 backdrop-blur-xs shadow-xs">
                            {service.badge}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                          <span className="px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-medium uppercase tracking-wider bg-[#133A2E]/85 text-[#D4A338] border border-[#D4A338]/30 backdrop-blur-xs shadow-xs">
                            {service.badge}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Details for Active Centered Service (Cardless, cleanly on #F8FAFC) */}
            <div className={`mt-4 sm:mt-5 max-w-2xl mx-auto text-center px-4 reveal-on-scroll reveal-stagger-4 ${servicesRevealed ? 'is-revealed' : ''}`}>
              <h3 className="heading-serif text-fluid-h3 font-normal text-[#133A2E] leading-tight">
                {services[activeServiceIndex].title}
              </h3>
              <p className="text-fluid-body text-[#475569] leading-relaxed mt-1.5 sm:mt-2 font-normal">
                {services[activeServiceIndex].description}
              </p>
              <div className="mt-2.5 sm:mt-3">
                <Link
                  to={services[activeServiceIndex].to}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#133A2E] hover:text-[#B88414] transition-colors group cursor-pointer min-h-[44px] px-3 py-1.5 rounded-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A338] transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2.5 mt-3.5 sm:mt-4">
                {services.map((serviceItem, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectService(idx, idx > activeServiceIndex ? 1 : -1)}
                    aria-label={`Go to ${serviceItem.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer min-w-[10px] ${
                      activeServiceIndex === idx
                        ? 'w-7 bg-[#133A2E]'
                        : 'w-2.5 bg-[#133A2E]/25 hover:bg-[#133A2E]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Homepage Gallery Section (MANDATORY MINIMUM 6 PHOTOGRAPHS) */}
      <section ref={galleryRef} className="py-8 sm:py-12 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-[#133A2E]/10 text-[#133A2E] mb-2 reveal-on-scroll ${galleryRevealed ? 'is-revealed' : ''}`}>
                Field Operations Showcase (6 Photos)
              </span>
              <h2 className={`heading-serif text-fluid-h2 font-normal text-[#133A2E] tracking-tight leading-tight reveal-on-scroll reveal-stagger-1 ${galleryRevealed ? 'is-revealed' : ''}`}>
                Recent Field Projects &amp; <span className="italic">Equipment</span>
              </h2>
            </div>
            <div className={`reveal-on-scroll reveal-stagger-2 ${galleryRevealed ? 'is-revealed' : ''}`}>
              <Button to="/gallery" variant="outline" size="md">
                View Complete Gallery ({homeGalleryPhotos.length}+ Photos) &rarr;
              </Button>
            </div>
          </div>

          {/* Renders at least 6 distinct photographs with interactive Lightbox */}
          <div className={`reveal-on-scroll reveal-stagger-3 ${galleryRevealed ? 'is-revealed' : ''}`}>
            <GalleryGrid photos={homeGalleryPhotos} />
          </div>
        </div>
      </section>

      {/* SECTION 9: Service Areas */}
      <section ref={areasRef} className="py-8 sm:py-12">
        <div className="container-custom">
          <SectionHeading
            badge="Local Coverage"
            title="Proudly Serving Eastern Pennsylvania"
            description="Our service trucks travel throughout eastern Pennsylvania, delivering dependable water well drilling and 24-hour emergency pump solutions across 5 key regional zones."
            revealed={areasRevealed}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => {
              const staggerClass = `reveal-stagger-${idx + 1}`
              return (
                <div
                  key={idx}
                  className={`group bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs service-area-card flex flex-col justify-between text-left reveal-on-scroll ${staggerClass} ${areasRevealed ? 'is-revealed' : ''}`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#133A2E] mb-2 font-bold text-lg">
                      <MapPin className="w-5 h-5 text-[#D4A338] shrink-0 service-area-icon" />
                      <span className="transition-colors duration-300 group-hover:text-[#0b241c]">{area.name}</span>
                    </div>
                    <p className="text-fluid-body text-[#475569] leading-relaxed">{area.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] service-area-divider text-xs font-semibold text-[#0284C7] service-area-avail-text">
                    Full residential &amp; commercial service <span className="service-area-avail-bullet text-[#0284C7]">&bull;</span> 24/7 Available
                  </div>
                </div>
              )
            })}

            {/* Easton Headquarters Card */}
            <div className={`group bg-[#133A2E] text-white rounded-2xl p-6 border border-white/10 shadow-xs service-area-hq-card flex flex-col justify-between text-left reveal-on-scroll reveal-stagger-6 ${areasRevealed ? 'is-revealed' : ''}`}>
              <div>
                <span className="text-xs font-mono font-medium uppercase text-[#D4A338] tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A338] animate-pulse" />
                  Home Office &amp; Operations
                </span>
                <h4 className="heading-serif text-2xl font-normal text-white mt-1 mb-2">
                  Easton, PA 18040
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Centrally situated in Northampton County to dispatch drilling rigs and service technicians right away.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/15 service-area-hq-divider">
                <a
                  href="tel:6102585615"
                  className="text-xs font-bold text-[#D4A338] hover:text-white flex items-center gap-1.5 cursor-pointer group/link min-h-[44px] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 transition-transform service-area-hq-phone-icon" />
                  <span>Call (610) 258-5615</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Official WebberUI World Map & Three.js Animated Visual */}
      <section ref={standardsRef} className="relative pt-10 sm:pt-14 pb-0 bg-[#133A2E] text-white overflow-hidden">
        {/* Official WebberUI Animated Dotted World Map */}
        <div className={`container-custom relative z-10 reveal-on-scroll ${standardsRevealed ? 'is-revealed' : ''}`}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-black/15 border border-white/5">
            <WorldMap className="w-full" />

            {/* Rotating Service Area Badges positioned around the world map */}
            {ROTATING_SERVICE_AREAS.map((area, idx) => {
              if (idx !== activeServiceAreaIdx) return null
              return (
                <div
                  key={area.name}
                  className={`absolute z-20 pointer-events-none transition-all duration-400 ease-out ${area.position}`}
                  style={{
                    opacity: isServiceAreaTransitioning ? 0 : 1,
                    transform: isServiceAreaTransitioning ? 'scale(0.92) translateY(6px)' : 'scale(1) translateY(0)',
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#133A2E]/90 border border-[#38bdf8]/45 text-white shadow-lg backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#38bdf8] font-bold">Zone:</span>
                    <span className="heading-serif font-serif text-sm sm:text-base font-medium text-white tracking-wide">{area.name}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Animated rotating service-area name below the map */}
          <div className="mt-4 sm:mt-6 text-center max-w-2xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-[0.22em] bg-white/5 border border-white/10 text-white/80 mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              Service Area
            </div>
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <h3
                key={activeServiceAreaIdx}
                className={`heading-serif font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-wide transition-all duration-350 ease-out ${
                  isServiceAreaTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {ROTATING_SERVICE_AREAS[activeServiceAreaIdx].name}
              </h3>
            </div>
          </div>
        </div>

        {/* Generous clean, completely empty vertical content area */}
        <div className="w-full h-32 sm:h-44 lg:h-52 pointer-events-none" aria-hidden="true" />

        {/* Existing Three.js visual below empty space (unwanted text overlays removed) */}
        <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
          <DottedWaveBackground className="pointer-events-none absolute inset-0 w-full h-full" />
        </div>
      </section>

      {/* SECTION 11: Frequently Asked Questions */}
      <section id="faq" ref={faqRef} className="py-8 sm:py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            revealed={faqRevealed}
            align="center"
          />

          <div className={`space-y-4 reveal-on-scroll reveal-stagger-3 ${faqRevealed ? 'is-revealed' : ''}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  openFaq === index ? 'border-[#133A2E] shadow-xs' : 'border-[#E2E8F0] hover:border-[#133A2E]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-[#F8FAFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E] cursor-pointer min-h-[48px]"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#133A2E] text-left">
                    {faq.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-45 text-[#D4A338]' : 'text-[#133A2E]'
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#E2E8F0]/60 pt-3.5 bg-[#F8FAFC]/50 text-left animate-slide-down">
                    <p className="text-left leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Request an Estimate Section */}
      <section id="estimate" ref={estimateRef} className="py-8 sm:py-12 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 text-left">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-[#133A2E]/10 text-[#133A2E] mb-3 reveal-on-scroll ${estimateRevealed ? 'is-revealed' : ''}`}>
                Free Estimate Request
              </span>
              <h2 className={`heading-serif text-fluid-h2 font-normal text-[#133A2E] leading-tight mb-4 text-balance reveal-on-scroll reveal-stagger-1 ${estimateRevealed ? 'is-revealed' : ''}`}>
                Ready to Tap into Clean, <span className="italic">Reliable Water?</span>
              </h2>
              <p className={`text-fluid-lead text-[#475569] leading-relaxed mb-6 reveal-on-scroll reveal-stagger-2 ${estimateRevealed ? 'is-revealed' : ''}`}>
                Fill out the estimate form, and our family team will review your project details and follow up promptly with honest advice and pricing.
              </p>

              <div className={`bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-xs space-y-3 mb-6 reveal-on-scroll reveal-stagger-3 ${estimateRevealed ? 'is-revealed' : ''}`}>
                <div className="flex items-center gap-3 text-sm text-[#133A2E]">
                  <Phone className="w-4 h-4 text-[#D4A338] shrink-0" />
                  <span>
                    Call 24/7:{' '}
                    <a href="tel:6102585615" className="font-bold text-[#133A2E] underline">
                      (610) 258-5615
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#133A2E]">
                  <MapPin className="w-4 h-4 text-[#D4A338] shrink-0" />
                  <span>Easton, PA &bull; Northampton, Lehigh, Monroe &amp; Carbon Counties</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#133A2E]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0" />
                  <span>Cash &amp; Personal Checks Accepted &bull; Free Estimates</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl bg-[#133A2E] text-white reveal-on-scroll reveal-stagger-4 ${estimateRevealed ? 'is-revealed' : ''}`}>
                <p className="text-xs font-mono font-medium uppercase text-[#D4A338] tracking-widest">Emergency Pump Failure?</p>
                <p className="text-sm text-white/90 mt-1">
                  Do not wait for form replies. Dial our emergency line directly at{' '}
                  <a href="tel:6102585615" className="font-bold underline text-white">
                    (610) 258-5615
                  </a>.
                </p>
              </div>
            </div>

            <div className={`lg:col-span-7 reveal-on-scroll reveal-stagger-2 ${estimateRevealed ? 'is-revealed' : ''}`}>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
