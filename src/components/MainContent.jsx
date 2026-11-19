import { useState } from 'react'
import {
  ShieldCheck,
  Clock,
  Wrench,
  Layers,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Phone,
} from 'lucide-react'

import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import GalleryGrid from './GalleryGrid'
import EstimateForm from './EstimateForm'
import Button from './Button'
import Counter from './Counter'
import useScrollReveal from '../hooks/useScrollReveal'

import { homeGalleryPhotos } from '../data/galleryData'

// High-resolution real camera photos for cards and showcases
import cardDrillingImg from '../assets/gallery/well-drilling/drilling-5.jpg'
import cardDeepeningImg from '../assets/gallery/well-deepening/deepening-1.jpg'
import cardTreatmentImg from '../assets/gallery/water-treatment/treatment-1.jpg'
import cardPumpImg from '../assets/gallery/pump-installation/pump-1.jpg'
import showcaseDrillImg from '../assets/gallery/well-drilling/drilling-2.jpg'
import aboutTeamImg from '../assets/gallery/about-us/about-1.jpg'

export default function MainContent() {
  const [openFaq, setOpenFaq] = useState(null)

  // Scroll reveal hooks for progressive entrance
  const [statsRef, statsRevealed] = useScrollReveal({ threshold: 0.15 })
  const [servicesRef, servicesRevealed] = useScrollReveal({ threshold: 0.1 })
  const [cableToolRef, cableToolRevealed] = useScrollReveal({ threshold: 0.15 })
  const [aboutRef, aboutRevealed] = useScrollReveal({ threshold: 0.15 })

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
    <div className="bg-[#F7F7F2]">
      {/* SECTION 4: Company Trust / Genuine Statistics Bar */}
      <section ref={statsRef} className="bg-white border-y border-[#E3E8E3] py-8 sm:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {/* Stat 1: 50+ Years */}
            <div className={`flex flex-col items-center p-4 rounded-xl bg-[#F7F7F2]/60 border border-[#E3E8E3]/60 card-hover reveal-on-scroll ${statsRevealed ? 'is-revealed' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] mb-2.5 transition-transform hover:scale-110">
                <ShieldCheck className="w-6 h-6 text-[#2D6654]" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#173F35] heading-serif">
                <Counter end={50} suffix="+" /> Years
              </span>
              <span className="text-xs sm:text-sm text-[#64706A] mt-0.5">Family-Owned Business</span>
            </div>

            {/* Stat 2: 24/7 Service */}
            <div
              className={`flex flex-col items-center p-4 rounded-xl bg-[#F7F7F2]/60 border border-[#E3E8E3]/60 card-hover reveal-on-scroll ${statsRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] mb-2.5 transition-transform hover:scale-110">
                <Clock className="w-6 h-6 text-[#2D6654]" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#173F35] heading-serif">
                <Counter end={24} suffix="/7" />
              </span>
              <span className="text-xs sm:text-sm text-[#64706A] mt-0.5">Emergency Phones Answered</span>
            </div>

            {/* Stat 3: 4 Core Counties */}
            <div
              className={`flex flex-col items-center p-4 rounded-xl bg-[#F7F7F2]/60 border border-[#E3E8E3]/60 card-hover reveal-on-scroll ${statsRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] mb-2.5 transition-transform hover:scale-110">
                <MapPin className="w-6 h-6 text-[#2D6654]" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#173F35] heading-serif">
                <Counter end={4} /> Core Counties
              </span>
              <span className="text-xs sm:text-sm text-[#64706A] mt-0.5">Northampton, Lehigh, Monroe, Carbon</span>
            </div>

            {/* Stat 4: 100% Cable Tool Percussion */}
            <div
              className={`flex flex-col items-center p-4 rounded-xl bg-[#F7F7F2]/60 border border-[#E3E8E3]/60 card-hover reveal-on-scroll ${statsRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] mb-2.5 transition-transform hover:scale-110">
                <Layers className="w-6 h-6 text-[#2D6654]" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#173F35] heading-serif">
                <Counter end={100} suffix="%" /> Cable Tool
              </span>
              <span className="text-xs sm:text-sm text-[#64706A] mt-0.5">Gentle Aquifer Preservation</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Services (Progressive Scroll Entrance) */}
      <section id="services" ref={servicesRef} className="py-16 sm:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Comprehensive Solutions"
            title="Our Professional Water Services"
            description="From drilling new fresh water wells to emergency pump replacement and high-efficiency purification, Werner & Sons delivers complete residential, commercial, and industrial well services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div
              className={`reveal-on-scroll ${servicesRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              <ServiceCard
                title="Water Well Drilling"
                description="Comprehensive water well drilling for homeowners and commercial facilities seeking clean, reliable fresh water with our gentle cable tool method."
                image={cardDrillingImg}
                to="/well-drilling"
                badge="Core Service"
                highlights={['Slower, gentler cable tool drilling', 'No artificial fluids or foams added', 'Charged by the foot, not by hour']}
              />
            </div>

            <div
              className={`reveal-on-scroll ${servicesRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '120ms' }}
            >
              <ServiceCard
                title="Well Deepening"
                description="Dig deeper into dependable aquifers when older wells experience low flow, sediment buildup, or seasonal water level drops."
                image={cardDeepeningImg}
                to="/well-deepening"
                badge="Restoration"
                highlights={['Safe sediment & debris removal', 'Protects long-term well structure', 'Champion® & WELL-X-TROL® tanks']}
              />
            </div>

            <div
              className={`reveal-on-scroll ${servicesRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '240ms' }}
            >
              <ServiceCard
                title="Water Treatment System"
                description="Enjoy crisp, healthy water throughout your entire property with professional installation and repair of ATS® purification systems."
                image={cardTreatmentImg}
                to="/water-treatment-system"
                badge="Purification"
                highlights={['Eliminates foul tastes and odors', 'Healthier water for drinking & cooking', 'Fast, friendly installation']}
              />
            </div>

            <div
              className={`reveal-on-scroll ${servicesRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '360ms' }}
            >
              <ServiceCard
                title="Pump Sales & Service"
                description="Reliable sales, diagnostics, and installation of durable J-Class submersible pumps when your water system stops delivering."
                image={cardPumpImg}
                to="/pump-sales--service---installation"
                badge="24/7 Available"
                highlights={['Heavy-duty J-Class submersible pumps', 'Pressure tank diagnostics & replacement', '24-hour emergency pump response']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Choose Werner & Sons? (Cable Tool Advantage) */}
      <section
        id="why-us"
        ref={cableToolRef}
        className={`py-16 sm:py-20 bg-white border-y border-[#E3E8E3] reveal-on-scroll ${
          cableToolRevealed ? 'is-revealed' : ''
        }`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D5AA54]/15 text-[#173F35] border border-[#D5AA54]/30 mb-3">
                The Werner Difference
              </span>
              <h2 className="heading-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173F35] tracking-tight leading-tight mb-4">
                Why Drill Your Well the Old-Fashioned Way?
              </h2>
              <p className="text-base sm:text-lg text-[#64706A] leading-relaxed mb-6">
                In an era of rushed air drilling, Werner &amp; Sons remains committed to the proven, clean cable tool method. Your water well is a decades-long investment, and how it is drilled directly affects the depth, water quality, and maintenance frequency for years to come.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#173F35] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#173F35]">Charged by the Foot, Not by the Hour</h4>
                    <p className="text-sm text-[#64706A] mt-0.5">
                      You are charged for the actual depth needed, not hurried drilling time. Cable tool drilling allows natural fissures to open cleanly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#173F35] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#173F35]">No High-Pressure Shock or Rock Fracturing</h4>
                    <p className="text-sm text-[#64706A] mt-0.5">
                      High-pressure air can traumatize and collapse delicate underground aquifers. Cable tool drilling preserves surrounding geological formations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#173F35] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#173F35]">Nothing Artificial Is Added</h4>
                    <p className="text-sm text-[#64706A] mt-0.5">
                      Only natural water is used during drilling. No synthetic drilling foams, chemical muds, or leaking compressor oils ever enter your water supply.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button to="/well-drilling" variant="primary" size="md">
                  Explore Cable Tool Benefits
                </Button>
                <Button to="/estimate-request" variant="outline" size="md">
                  Request an Estimate
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3E8E3] shadow-md bg-[#F7F7F2] p-3 sm:p-4 card-hover">
                {/* Subtle Industry-Related Cable Tool Depth Indicator Graphic */}
                <div className="absolute top-6 right-6 z-10 hidden sm:flex items-center gap-2 bg-[#173F35]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D5AA54]/30 text-white shadow-lg">
                  <div className="relative w-2 h-4 flex flex-col items-center justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D5AA54] animate-drilling-pulse" />
                    <span className="w-0.5 h-full bg-[#D5AA54]/40" />
                  </div>
                  <span className="text-[11px] font-bold text-[#D5AA54] uppercase tracking-wider">
                    Cable Tool Percussion
                  </span>
                </div>

                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={showcaseDrillImg}
                    alt="Active Water Well Drilling Operation in Field"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D5AA54]">Authentic Workmanship</p>
                  <p className="text-sm font-semibold text-[#173F35] mt-1">
                    Borehole Drilling Operation &bull; Easton, Pennsylvania Site
                  </p>
                  <p className="text-xs text-[#64706A] mt-1">
                    Careful property setup ensuring tidy lawns, protected soil, and pure water delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: About Us (Pale Sage Background Accent) */}
      <section
        id="about-us"
        ref={aboutRef}
        className={`py-16 sm:py-24 bg-[#EAF0E9]/50 border-y border-[#E3E8E3] reveal-on-scroll ${
          aboutRevealed ? 'is-revealed' : ''
        }`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Authentic Company Photograph */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3E8E3] shadow-md bg-white p-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={aboutTeamImg}
                    alt="Werner & Sons Experienced Well Drilling Team"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#173F35]">
                    <Sparkles className="w-4 h-4 text-[#D5AA54]" />
                    <span>Family-Owned &amp; Operated for 50+ Years</span>
                  </div>
                  <p className="text-xs text-[#64706A] mt-1">
                    Easton, PA &bull; Prompt response &bull; Dependable results
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Company Background & Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left">
              <SectionHeading
                badge="About Werner & Sons"
                title="Your Dedicated Water Drilling Contractor in Easton, PA"
                align="left"
                className="mb-6"
              />

              <div className="space-y-4 text-base sm:text-lg text-[#64706A] leading-relaxed">
                <p>
                  <strong className="text-[#173F35]">Werner &amp; Sons Well Drilling LLC</strong> is a water drilling contractor in Easton, Pennsylvania, that uses the good, old-fashioned water well drilling equipment when you need to tap into a fresh water source.
                </p>
                <p>
                  Our team ensures that every job is done efficiently, quickly, and without a mess. We take pride in our fleet of equipment and in creating as little impact as we can on your property and landscaping.
                </p>
                <p>
                  For more than 50 years, our family-owned-and-operated drilling company has provided the highest quality services for residential, commercial, and industrial customers throughout Northampton, Lehigh, Monroe, and Carbon counties and the Poconos. We respond right away to your service request, stand firmly behind our work, and provide prompt and professional service at all times.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button to="/estimate-request" variant="primary" size="md">
                  Request a Free Estimate
                </Button>
                <a
                  href="tel:6102585615"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#173F35] hover:text-[#2D6654]"
                >
                  <Phone className="w-4 h-4 text-[#D5AA54]" />
                  <span>Call (610) 258-5615</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Homepage Gallery Section (MANDATORY MINIMUM 6 PHOTOGRAPHS) */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E3E8E3]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F35]/10 text-[#173F35] mb-2">
                Field Operations Showcase (6 Photos)
              </span>
              <h2 className="heading-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173F35]">
                Recent Field Projects &amp; Equipment
              </h2>
            </div>
            <Button to="/gallery" variant="outline" size="md">
              View Complete Gallery ({homeGalleryPhotos.length}+ Photos) &rarr;
            </Button>
          </div>

          {/* Renders at least 6 distinct photographs with interactive Lightbox */}
          <GalleryGrid photos={homeGalleryPhotos} />
        </div>
      </section>

      {/* SECTION 9: Service Areas */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <SectionHeading
            badge="Local Coverage"
            title="Proudly Serving Eastern Pennsylvania"
            description="Our service trucks travel throughout eastern Pennsylvania, delivering dependable water well drilling and 24-hour emergency pump solutions across 5 key regional zones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E3E8E3] shadow-xs card-hover flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#173F35] mb-2 font-bold text-lg heading-serif">
                    <MapPin className="w-5 h-5 text-[#D5AA54] shrink-0" />
                    <span>{area.name}</span>
                  </div>
                  <p className="text-sm text-[#64706A] leading-relaxed">{area.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E3E8E3] text-xs font-semibold text-[#2D6654]">
                  Full residential &amp; commercial service &bull; 24/7 Available
                </div>
              </div>
            ))}

            {/* Easton Headquarters Card */}
            <div className="bg-[#173F35] text-white rounded-2xl p-6 shadow-xs card-hover flex flex-col justify-between text-left">
              <div>
                <span className="text-xs uppercase font-bold text-[#D5AA54] tracking-widest">
                  Home Office &amp; Operations
                </span>
                <h4 className="heading-serif text-xl font-bold text-white mt-1 mb-2">
                  Easton, PA 18040
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Centrally situated in Northampton County to dispatch drilling rigs and service technicians right away.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/15">
                <a
                  href="tel:6102585615"
                  className="text-xs font-bold text-[#D5AA54] hover:text-white flex items-center gap-1.5 cursor-pointer group"
                >
                  <Phone className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>Call (610) 258-5615</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Verified Company Standards / Commitments */}
      <section className="py-14 bg-[#173F35] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D5AA54]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="heading-serif text-lg font-bold text-white mb-1">Stand Behind Our Work</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Every well and pump installation is backed by more than five decades of family ownership and genuine accountability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D5AA54]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="heading-serif text-lg font-bold text-white mb-1">Prompt Response Time</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Phones answered 24 hours a day. We know that running out of water is an emergency that cannot wait until Monday.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D5AA54]">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="heading-serif text-lg font-bold text-white mb-1">Clean &amp; Minimal Impact</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  We take pride in our well-maintained fleet and leaving your yard and driveway clean, neat, and without a mess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Frequently Asked Questions */}
      <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#E3E8E3]">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            description="Clear, honest answers about water well drilling, pump replacement, and well deepening from our 50 years in the field."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  openFaq === index ? 'border-[#173F35] shadow-xs' : 'border-[#E3E8E3] hover:border-[#173F35]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F7F7F2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] cursor-pointer"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#173F35] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2D6654] shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180 text-[#D5AA54]' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-[#64706A] leading-relaxed border-t border-[#E3E8E3]/60 pt-3.5 bg-[#F7F7F2]/50 text-left animate-slide-down">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Request an Estimate Section */}
      <section id="estimate" className="py-16 sm:py-24 bg-[#F7F7F2]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F35]/10 text-[#173F35] mb-3">
                Free Estimate Request
              </span>
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-[#173F35] leading-tight mb-4">
                Ready to Tap into Clean, Reliable Water?
              </h2>
              <p className="text-base text-[#64706A] leading-relaxed mb-6">
                Fill out the estimate form, and our family team will review your project details and follow up promptly with honest advice and pricing.
              </p>

              <div className="bg-white rounded-xl p-5 border border-[#E3E8E3] shadow-xs space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-[#252D2A]">
                  <Phone className="w-4 h-4 text-[#D5AA54] shrink-0" />
                  <span>
                    Call 24/7:{' '}
                    <a href="tel:6102585615" className="font-bold text-[#173F35] underline">
                      (610) 258-5615
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#252D2A]">
                  <MapPin className="w-4 h-4 text-[#D5AA54] shrink-0" />
                  <span>Easton, PA &bull; Northampton, Lehigh, Monroe &amp; Carbon Counties</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#252D2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0" />
                  <span>Cash &amp; Personal Checks Accepted &bull; Free Estimates</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#173F35] text-white">
                <p className="text-xs uppercase font-bold text-[#D5AA54] tracking-wider">Emergency Pump Failure?</p>
                <p className="text-sm text-white/90 mt-1">
                  Do not wait for form replies. Dial our emergency line directly at{' '}
                  <a href="tel:6102585615" className="font-bold underline text-white">
                    (610) 258-5615
                  </a>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
