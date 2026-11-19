import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, ArrowRight, Layers } from 'lucide-react'
import Button from '../components/Button'
import GalleryGrid from '../components/GalleryGrid'
import SectionHeading from '../components/SectionHeading'
import PageHero from '../components/PageHero'
import { wellDrillingGalleryPhotos } from '../data/galleryData'

// High-resolution authentic featured images
import heroDrillingImg from '../assets/hero-well-drilling.jpg'
import featuredRigImg from '../assets/gallery/well-drilling/drilling-5.jpg'

export default function WellDrilling() {
  useEffect(() => {
    document.title = 'Water Well Drilling | Easton, PA | Werner & Sons'
  }, [])

  return (
    <div className="bg-[#F7F7F2]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Well Drilling"
        breadcrumbPath="/well-drilling"
        badgeText="Specialized Cable Tool Drilling"
        title="Water Well Drilling in Easton, Pennsylvania"
        description="Don't get flooded with high water bills. Our family-owned company in Easton, Pennsylvania provides affordable, sustainable water well drilling services designed for longevity and pristine water quality."
        backgroundImage={heroDrillingImg}
        imageAlt="Professional water well drilling truck preparing for borehole drilling in outdoor countryside setting"
        highlights={[
          '50+ Years Cable Tool Experience',
          'Pure Water (Zero Chemical Additives)',
          '24/7 Emergency Service'
        ]}
      />

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Content Area (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E3E8E3] p-6 sm:p-10 shadow-xs space-y-8 text-left">
              <div>
                <h2 className="heading-serif text-2xl sm:text-3xl font-bold text-[#173F35] mb-3">
                  Well Water Drilling Services
                </h2>
                <p className="text-base sm:text-lg text-[#64706A] leading-relaxed">
                  <strong className="text-[#173F35]">Werner &amp; Sons Well Drilling LLC</strong> offers well drilling services for all types of water wells. Our team specializes in an effective, time-honored well drilling technique: <em>cable tool drilling</em>. Whether you are building a new home, upgrading an agricultural supply, or developing a commercial facility, we drill deep and clean.
                </p>
              </div>

              {/* Cable Tool Method Deep Dive */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Why Go with the Cable Tool Method?
                </h3>
                <div className="space-y-4 text-base text-[#64706A] leading-relaxed">
                  <p>
                    In most cases, you are going to be <strong>charged by the foot of drilled hole</strong>, not by the hour. Cable tool drilling is a slower, gentler method of well drilling, and does little to upset formations surrounding your well.
                  </p>
                  <p>
                    Since no high pressure air or drilling fluid is used in cable tool drilling, there is less chance of porous formations being traumatized, collapsed, clogged, or otherwise impaired by debris or excess pressure and motion.
                  </p>
                  <div className="bg-[#EAF0E9]/70 rounded-xl p-4 border border-[#2D6654]/25 text-sm text-[#173F35] font-medium flex items-start gap-3 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#2D6654] shrink-0 mt-0.5" />
                    <span>
                      Many times cable tool drilling allows wells to fill faster and easier with less depth being necessary, ensuring higher recovery yields.
                    </span>
                  </div>
                </div>
              </div>

              {/* Isn't Air Drilling Faster? */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Isn&apos;t Air Drilling Faster?
                </h3>
                <p className="text-base text-[#64706A] leading-relaxed mb-3">
                  It has been pointed out that cable tool drilling is a slower method of drilling. Ask yourself what kind of quality you are going to end up with over the long haul.
                </p>
                <p className="text-base text-[#64706A] leading-relaxed">
                  Your water well is a long-term investment. The depth and quality of that well will determine the frequency and cost of pump and well maintenance in the years ahead. It may be good for you to consider how the hours spent drilling your well now will affect you in the decades to come.
                </p>
              </div>

              {/* Nothing Artificial Is Added */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Nothing Artificial Is Added!
                </h3>
                <p className="text-base text-[#64706A] leading-relaxed">
                  Only pure water will be in your well during the drilling process. No synthetic drilling fluids, chemical foams, leaking oils, or other matter unrelated to your water, soil, and rock formations ever enter the hole.
                </p>
              </div>

              {/* Ask Around */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Ask Around
                </h3>
                <p className="text-base text-[#64706A] leading-relaxed mb-6">
                  Talk to people who have had wells drilled before by different methods and see what they might have to tell you. We think you will choose to have your well drilled using the clean, reliable cable tool method.
                </p>

                <div className="bg-[#173F35] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="heading-serif text-lg font-bold text-white">Tired of Paying High Water Bills?</h4>
                    <p className="text-sm text-white/80">Request a free estimate for reliable, clean water well drilling today.</p>
                  </div>
                  <Button to="/estimate-request" variant="primary" size="md">
                    Request an Estimate
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Photo Card with New High-Res Image */}
              <div className="bg-white rounded-2xl border border-[#E3E8E3] p-4 shadow-xs overflow-hidden text-left">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={featuredRigImg}
                    alt="Heavy Truck-Mounted Water Well Drilling Rig in Action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase font-bold text-[#D5AA54] tracking-wider">Field Operations</p>
                <h4 className="heading-serif text-base font-bold text-[#173F35] mt-0.5">
                  Werner &amp; Sons Mobile Drilling Rig
                </h4>
                <p className="text-xs text-[#64706A] mt-1">
                  Drilling deep into rock layers across Northampton, Lehigh, and surrounding counties.
                </p>
              </div>

              {/* Method Comparison Box */}
              <div className="bg-white rounded-2xl border border-[#E3E8E3] p-6 shadow-xs text-left">
                <h4 className="heading-serif text-lg font-bold text-[#173F35] mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#2D6654]" />
                  <span>The Cable Tool Edge</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-[#64706A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0 mt-0.5" />
                    <span>Gentle percussion preserves natural aquifer fractures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0 mt-0.5" />
                    <span>Charged by the foot of hole, not by rushing hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0 mt-0.5" />
                    <span>Zero artificial chemical foams or drilling fluids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0 mt-0.5" />
                    <span>Less silt wear on submersible pump impellers</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Call Card */}
              <div className="bg-[#173F35] text-white rounded-2xl p-6 shadow-xs text-left">
                <p className="text-xs uppercase font-bold text-[#D5AA54] tracking-widest mb-1">
                  Emergency Service
                </p>
                <h4 className="heading-serif text-xl font-bold mb-2">Need a Well Drilled or Serviced?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Call our family team directly. Phones are answered 24 hours a day, 7 days a week.
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
      <section className="py-16 sm:py-20 bg-white border-y border-[#E3E8E3]">
        <div className="container-custom">
          <SectionHeading
            badge="Field Photography (6 Photos)"
            title="Well Drilling Equipment &amp; Operations Gallery"
            description="Explore authentic camera photographs of our heavy-duty drilling rigs, elevated masts, mechanical winches, and active borehole drilling on location."
          />

          {/* Renders exactly 6 distinct photographs with interactive Lightbox */}
          <GalleryGrid photos={wellDrillingGalleryPhotos} />
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-12 bg-[#F7F7F2]">
        <div className="container-custom">
          <h3 className="heading-serif text-xl font-bold text-[#173F35] mb-6 text-center">
            Explore Related Well Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/well-deepening"
              className="p-5 rounded-2xl border border-[#E3E8E3] hover:border-[#173F35] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#173F35] group-hover:text-[#2D6654] flex items-center justify-between">
                <span>Well Deepening &amp; Tanks</span>
                <ArrowRight className="w-4 h-4 text-[#D5AA54] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#64706A] mt-1.5 leading-relaxed">Deepen existing wells and replace holding or pressure tanks.</p>
            </Link>

            <Link
              to="/water-treatment-system"
              className="p-5 rounded-2xl border border-[#E3E8E3] hover:border-[#173F35] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#173F35] group-hover:text-[#2D6654] flex items-center justify-between">
                <span>Water Purification</span>
                <ArrowRight className="w-4 h-4 text-[#D5AA54] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#64706A] mt-1.5 leading-relaxed">Install ATS® systems to purify, soften and filter well water.</p>
            </Link>

            <Link
              to="/pump-sales--service---installation"
              className="p-5 rounded-2xl border border-[#E3E8E3] hover:border-[#173F35] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#173F35] group-hover:text-[#2D6654] flex items-center justify-between">
                <span>Pump Sales &amp; Installation</span>
                <ArrowRight className="w-4 h-4 text-[#D5AA54] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#64706A] mt-1.5 leading-relaxed">J-Class submersible pump replacement and 24/7 service.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
