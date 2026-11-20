import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Shield, Phone, ArrowRight, Wrench, Clock, Zap } from 'lucide-react'
import Button from '../components/Button'
import GalleryGrid from '../components/GalleryGrid'
import SectionHeading from '../components/SectionHeading'
import PageHero from '../components/PageHero'
import { pumpInstallationGalleryPhotos } from '../data/galleryData'

// High-resolution authentic featured images
import heroPumpImg from '../assets/gallery/pump-installation/pump-5.jpg'
import featuredPumpImg from '../assets/gallery/pump-installation/pump-1.jpg'

export default function PumpSales() {
  useEffect(() => {
    document.title = 'Pump Sales, Service & Installation | Easton, PA | Werner & Sons'
  }, [])

  return (
    <div className="bg-[#F8FAFC]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Pump Sales, Service & Installation"
        breadcrumbPath="/pump-sales--service---installation"
        badgeText="Reliable Water System Equipment"
        title="Pump Sales, Service & Installation"
        description="Our company installs J Class submersible pumps. When your water pump stops working or you experience sudden pressure loss, count on our family team for rapid diagnostic and replacement services."
        backgroundImage={heroPumpImg}
        imageAlt="Heavy water well pumping station and pressure manifold"
        highlights={[
          'J-Class Submersible Pumps',
          '24/7 Emergency Pump Repair',
          'Complete Diagnostics & Pressure Calibration'
        ]}
      />

      {/* Main Content & Sidebar Grid */}
      <section className="py-8 sm:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Column (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs space-y-8 text-left">
              <div>
                <h2 className="heading-serif text-fluid-h2 font-normal text-[#133A2E] mb-3 text-balance">
                  Submersible Pump Sales &amp; <span className="italic">Replacement</span>
                </h2>
                <p className="text-fluid-lead text-[#475569] leading-relaxed">
                  <strong className="text-[#133A2E]">Werner &amp; Sons Well Drilling LLC</strong> provides sales and service for all residential, commercial, and agricultural water pump systems. You can call us anytime your pump stops working or fails to maintain adequate water pressure.
                </p>
                <p className="text-fluid-lead text-[#475569] leading-relaxed mt-3">
                  We specialize in the installation and replacement of <strong className="text-[#133A2E]">J Class submersible pumps</strong>. Engineered for continuous deep-well service, high energy efficiency, and rugged durability, J-Class pumps provide dependable, smooth flow even in challenging groundwater conditions.
                </p>
              </div>

              {/* Complete Pump Diagnostics & Service */}
              <div className="border-t border-[#E2E8F0] pt-6">
                <h3 className="heading-serif text-fluid-h3 font-normal text-[#133A2E] mb-3 text-balance">
                  Common Pump Issues We Fix Quickly
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F1F5F9]/50 border border-[#0284C7]/20 card-hover">
                    <div className="flex items-center gap-2 text-[#133A2E] font-bold text-base mb-1">
                      <Zap className="w-4 h-4 text-[#D4A338]" />
                      <span>No Water at Faucets</span>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Diagnosing electrical control boxes, faulty pressure switches, or burned-out submersible pump motors.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F1F5F9]/50 border border-[#0284C7]/20 card-hover">
                    <div className="flex items-center gap-2 text-[#133A2E] font-bold text-base mb-1">
                      <Clock className="w-4 h-4 text-[#D4A338]" />
                      <span>Pump Constantly Cycling</span>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Repairing waterlogged pressure tanks, faulty check valves, or drop-pipe pinhole leaks deep in the well.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F1F5F9]/50 border border-[#0284C7]/20 card-hover">
                    <div className="flex items-center gap-2 text-[#133A2E] font-bold text-base mb-1">
                      <Wrench className="w-4 h-4 text-[#D4A338]" />
                      <span>Low or Pulsing Water Pressure</span>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Evaluating pump impeller wear, tank pre-charge pressures, and sediment obstructions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F1F5F9]/50 border border-[#0284C7]/20 card-hover">
                    <div className="flex items-center gap-2 text-[#133A2E] font-bold text-base mb-1">
                      <Shield className="w-4 h-4 text-[#D4A338]" />
                      <span>Pressure Tank Replacement</span>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Installing genuine Champion&reg; and WELL-X-TROL&reg; tanks that match your pump horsepower.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Service Banner */}
              <div className="border-t border-[#E2E8F0] pt-6">
                <div className="bg-[#133A2E] text-white rounded-xl p-6">
                  <div className="flex items-center gap-2 text-[#D4A338] text-xs font-mono font-medium uppercase tracking-widest mb-2">
                    <Clock className="w-4 h-4" />
                    <span>24-Hour Emergency Response</span>
                  </div>
                  <h4 className="heading-serif text-2xl sm:text-3xl font-normal mb-2">
                    Has Your Water Pump Stopped Working?
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed mb-5">
                    Water is an absolute necessity. Our phone lines are answered 24 hours a day, 7 days a week. We dispatch service trucks with replacement pumps, switches, and tanks to restore your water supply right away.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      href="tel:6102585615"
                      variant="primary"
                      size="lg"
                      icon={Phone}
                    >
                      Call (610) 258-5615
                    </Button>
                    <span className="text-xs text-white/70">Easton, PA &bull; Northampton, Lehigh, Monroe &amp; Carbon Counties</span>
                  </div>
                </div>
              </div>

              {/* Estimate Callout */}
              <div className="border-t border-[#E2E8F0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="heading-serif text-xl sm:text-2xl font-normal text-[#133A2E]">Looking for a New Pump or Tank?</h4>
                  <p className="text-sm text-[#475569]">Contact us today to request a free, upfront estimate.</p>
                </div>
                <Button to="/estimate-request" variant="primary" size="md" glow={true}>
                  Request an Estimate
                </Button>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Photo Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-xs overflow-hidden text-left">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={featuredPumpImg}
                    alt="Werner & Sons Submersible Well Pump & Pressure Tank Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase font-mono font-medium text-[#D4A338] tracking-widest">Well Equipment</p>
                <h4 className="heading-serif text-lg font-normal text-[#133A2E] mt-0.5">
                  Submersible Pump &amp; Tank Service
                </h4>
                <p className="text-xs text-[#475569] mt-1">
                  Professional equipment matched specifically to your well depth and household capacity.
                </p>
              </div>

              {/* Specifications Box */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs text-left">
                <h4 className="heading-serif text-xl font-normal text-[#133A2E] mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#0284C7]" />
                  <span>Equipment We Install</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-[#475569]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>J Class Submersible Water Well Pumps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>Champion&reg; High-Pressure Water Tanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>WELL-X-TROL&reg; Pre-Pressurized Diaphragm Tanks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0 mt-0.5" />
                    <span>Heavy-Duty Submersible Drop Wire &amp; Safety Cables</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Call Box */}
              <div className="bg-[#133A2E] text-white rounded-2xl p-6 shadow-xs text-left">
                <p className="text-xs uppercase font-mono font-medium text-[#D4A338] tracking-widest mb-1">
                  Emergency Line
                </p>
                <h4 className="heading-serif text-2xl font-normal mb-2">Pump Out of Order?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Call Werner &amp; Sons immediately. We respond right away with replacement equipment ready to install.
                </p>
                <Button
                  href="tel:6102585615"
                  variant="primary"
                  size="md"
                  icon={Phone}
                  className="w-full justify-center"
                >
                  Call (610) 258-5615
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SERVICE GALLERY SECTION (MANDATORY MINIMUM 6 PHOTOGRAPHS) */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="container-custom">
          <SectionHeading
            badge="Equipment Photography (7 Photos)"
            title="Water Pumps &amp; Pressure Tanks Gallery"
            description="Explore authentic camera photographs of our J-Class submersible deep-well pumps, Well-X-Trol pressure storage tanks, pressure switches, brass manifolds, and completed water pumping stations."
          />

          {/* Renders exactly 7 distinct photographs (exceeds min 6) with interactive Lightbox */}
          <GalleryGrid photos={pumpInstallationGalleryPhotos} />
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container-custom">
          <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E] mb-6 text-center">
            Explore Related Well Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/well-drilling"
              className="p-5 rounded-xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-xs transition-all text-left group bg-white"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>New Water Well Drilling</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338]" />
              </h4>
              <p className="text-xs text-[#475569] mt-1">Cable tool drilling for residential, commercial &amp; farms.</p>
            </Link>

            <Link
              to="/well-deepening"
              className="p-5 rounded-xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-xs transition-all text-left group bg-white"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>Well Deepening &amp; Tanks</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338]" />
              </h4>
              <p className="text-xs text-[#475569] mt-1">Deepen existing wells and replace pressure tanks.</p>
            </Link>

            <Link
              to="/water-treatment-system"
              className="p-5 rounded-xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-xs transition-all text-left group bg-white"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>Water Purification Systems</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338]" />
              </h4>
              <p className="text-xs text-[#475569] mt-1">ATS® systems to eliminate sulfur smell and minerals.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
