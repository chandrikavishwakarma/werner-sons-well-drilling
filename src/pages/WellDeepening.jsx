import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, ArrowRight, Wrench } from 'lucide-react'
import Button from '../components/Button'
import GalleryGrid from '../components/GalleryGrid'
import SectionHeading from '../components/SectionHeading'
import PageHero from '../components/PageHero'
import { wellDeepeningGalleryPhotos } from '../data/galleryData'

// High-resolution authentic featured images
import heroDeepeningImg from '../assets/gallery/well-deepening/deepening-6.jpg'
import featuredDeepeningImg from '../assets/gallery/well-deepening/deepening-1.jpg'

export default function WellDeepening() {
  useEffect(() => {
    document.title = 'Well Deepening, Well Tanks | Easton, PA | Werner & Sons'
  }, [])

  return (
    <div className="bg-[#F8FAFC]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Well Deepening"
        breadcrumbPath="/well-deepening"
        badgeText="Aquifer Restoration & Tank Equipment"
        title="Well Deepening, Well Tanks in Easton, Pennsylvania"
        description="Increase your well's efficiency and yield with water well deepening services from our company in Easton, Pennsylvania. We remove sediment, dig into fresh water layers, and install industry-standard holding and pressure tanks."
        backgroundImage={heroDeepeningImg}
        imageAlt="Field workover service rig performing well cleanout and deepening operations"
        highlights={[
          'Aquifer Restoration & Sediment Cleanout',
          'Well-X-Trol Pre-Pressurized Tanks',
          'Yield & Drawdown Sounding'
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
                  Water Well <span className="italic">Deepening Services</span>
                </h2>
                <p className="text-fluid-lead text-[#475569] leading-relaxed">
                  Dig deep into quality well services when you call on <strong className="text-[#133A2E]">Werner &amp; Sons Well Drilling LLC</strong>. We offer well deepening services that safely and efficiently deepen your well while protecting your well&apos;s longevity. This service improves the yield and overall functioning of your residential, commercial, or agricultural water supply.
                </p>
              </div>

              {/* Signs You Need Deepening */}
              <div className="border-t border-[#E2E8F0] pt-6">
                <h3 className="heading-serif text-fluid-h3 font-normal text-[#133A2E] mb-3 text-balance">
                  When Is It Time to <span className="italic">Deepen Your Well?</span>
                </h3>
                <p className="text-base text-[#475569] leading-relaxed mb-4">
                  Over decades of reliable water supply, wells can experience reduced output due to regional water table shifts, sediment encroachment, or mineral deposits. Signs your well may require deepening include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#133A2E]">Noticeable drops in water pressure or flow rate</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#133A2E]">Pump running frequently or sputtering air faucets</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#133A2E]">Sediment, silt, or murkiness entering supply lines</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#133A2E]">Dry spells or seasonal water shortages</span>
                  </div>
                </div>
              </div>

              {/* Well Tanks Section */}
              <div className="border-t border-[#E2E8F0] pt-6">
                <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E] mb-3">
                  Well Tanks &amp; Equipment
                </h3>
                <p className="text-base text-[#475569] leading-relaxed mb-4">
                  Over time, your water tanks wear out. When they are becoming rusty, waterlogged, or ineffective, it&apos;s time to replace them. We install all types of holding tanks and pressure tanks for your home or business, specializing in trusted brands:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-[#0284C7]/25 bg-[#F1F5F9]/60 text-left card-hover">
                    <h4 className="font-bold text-[#133A2E] text-base mb-1">Champion&reg; Pressure Tanks</h4>
                    <p className="text-xs text-[#475569]">
                      High-durability residential and commercial water storage designed for stable household pressure and long service life.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#0284C7]/25 bg-[#F1F5F9]/60 text-left card-hover">
                    <h4 className="font-bold text-[#133A2E] text-base mb-1">WELL-X-TROL&reg; Tanks</h4>
                    <p className="text-xs text-[#475569]">
                      Industry benchmark pre-pressurized diaphragm tanks engineered to prevent pump short-cycling and reduce electric draw.
                    </p>
                  </div>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">
                  We also install and configure heavy-duty <strong className="text-[#133A2E]">J-Class water pumps</strong> to ensure your deepened well operates with optimal flow rate and pressure.
                </p>
              </div>

              {/* Callout */}
              <div className="bg-[#133A2E] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="heading-serif text-xl sm:text-2xl font-normal text-white">Need Professional Well Deepening?</h4>
                  <p className="text-sm text-white/80">Contact us to request an estimate for prompt and professional water deepening services.</p>
                </div>
                <Button to="/estimate-request" variant="primary" size="md" glow={true}>
                  Request an Estimate
                </Button>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Photo Card with New High-Res Image */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-xs overflow-hidden text-left">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={featuredDeepeningImg}
                    alt="Well Deepening Service Hoist and Rig"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-mono font-medium uppercase text-[#D4A338] tracking-widest">Field Operations</p>
                <h4 className="heading-serif text-lg font-normal text-[#133A2E] mt-0.5">
                  Well Deepening Service Unit
                </h4>
                <p className="text-xs text-[#475569] mt-1">
                  Mobile drilling unit deployed for clean sediment cleanout and casing extension.
                </p>
              </div>

              {/* Tank Brand Highlights */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs text-left">
                <h4 className="heading-serif text-xl font-normal text-[#133A2E] mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#0284C7]" />
                  <span>Installed Equipment</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#475569]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0" />
                    <span>Champion&reg; Holding &amp; Pressure Tanks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0" />
                    <span>WELL-X-TROL&reg; Pre-Pressurized Tanks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0" />
                    <span>J-Class Submersible Deep Well Pumps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338] shrink-0" />
                    <span>Sanitary Pitless Adapters &amp; Caps</span>
                  </li>
                </ul>
              </div>

              {/* Direct Phone Assistance */}
              <div className="bg-[#133A2E] text-white rounded-2xl p-6 shadow-xs text-left">
                <p className="text-xs font-mono font-medium uppercase text-[#D4A338] tracking-widest mb-1">
                  Immediate Assistance
                </p>
                <h4 className="heading-serif text-2xl font-normal mb-2">Well Running Low on Water?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Call our technicians directly. We answer 24 hours a day to diagnose water supply issues.
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
            badge="Field Photography (6 Photos)"
            title="Well Deepening &amp; Rehabilitation Gallery"
            description="Explore authentic camera photographs of well deepening operations, borehole cleanout, water table testing, and high-capacity pressure tank installations."
          />

          {/* Renders exactly 6 distinct photographs with interactive Lightbox */}
          <GalleryGrid photos={wellDeepeningGalleryPhotos} />
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container-custom">
          <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E] mb-6 text-center">
            Related Water Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/well-drilling"
              className="p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>New Water Well Drilling</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">Cable tool drilling for new residential and commercial wells.</p>
            </Link>

            <Link
              to="/water-treatment-system"
              className="p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>Water Treatment Systems</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">ATS® purification systems to remove sulfur, minerals &amp; taste.</p>
            </Link>

            <Link
              to="/pump-sales--service---installation"
              className="p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#133A2E] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#133A2E] group-hover:text-[#0284C7] flex items-center justify-between">
                <span>Pump Sales &amp; Installation</span>
                <ArrowRight className="w-4 h-4 text-[#D4A338] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">J-Class submersible pump replacement and 24/7 service.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
