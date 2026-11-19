import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, ArrowRight, Droplets } from 'lucide-react'
import Button from '../components/Button'
import GalleryGrid from '../components/GalleryGrid'
import SectionHeading from '../components/SectionHeading'
import PageHero from '../components/PageHero'
import { waterTreatmentGalleryPhotos } from '../data/galleryData'

// High-resolution authentic featured image
import featuredTreatmentImg from '../assets/gallery/water-treatment/treatment-1.jpg'

export default function WaterTreatment() {
  useEffect(() => {
    document.title = 'Water Purification Systems | Easton, PA | Werner & Sons'
  }, [])

  return (
    <div className="bg-[#F7F7F2]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Water Treatment System"
        breadcrumbPath="/water-treatment-system"
        badgeText="Pure, Crisp & Healthy Water"
        title="Water Treatment Systems in Easton, Pennsylvania"
        description="Enjoy fresh well water again. Our contractors in Easton, Pennsylvania service, repair, and install professional water purification systems for homes, farms, and businesses."
        backgroundImage={featuredTreatmentImg}
        imageAlt="Whole-house multi-stage water filtration and softening unit"
        highlights={[
          'ATS Whole-House Purification',
          'Free Comprehensive Water Quality Testing',
          'Eliminates Sulfur, Iron & Hard Minerals'
        ]}
      />

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Column (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E3E8E3] p-6 sm:p-10 shadow-xs space-y-8 text-left">
              <div>
                <h2 className="heading-serif text-2xl sm:text-3xl font-bold text-[#173F35] mb-3">
                  Water Purification Systems
                </h2>
                <p className="text-base sm:text-lg text-[#64706A] leading-relaxed">
                  Does your water taste bad, smell like sulfur, or leave orange stains on your fixtures? <strong className="text-[#173F35]">Werner &amp; Sons Well Drilling LLC</strong> works on all internal water purification systems. Enjoy great-tasting, clean water again when we install a customized new treatment system in your home or business.
                </p>
                <p className="text-base sm:text-lg text-[#64706A] leading-relaxed mt-3">
                  Best of all, our professional team provides fast, friendly, and affordable services. We install industry-standard <strong className="text-[#173F35]">ATS&reg; water purification systems</strong> designed to make your water both healthier to drink and gentle on household plumbing and appliances.
                </p>
              </div>

              {/* Water Problems Solved */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Common Well Water Issues We Solve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F7F7F2] border border-[#E3E8E3]">
                    <h4 className="font-bold text-[#173F35] text-base mb-1">Metallic or Foul Taste</h4>
                    <p className="text-xs text-[#64706A]">
                      High concentrations of dissolved iron, manganese, or minerals eliminated through multi-stage filtration.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F7F7F2] border border-[#E3E8E3]">
                    <h4 className="font-bold text-[#173F35] text-base mb-1">Sulfur &amp; Rotten Egg Odors</h4>
                    <p className="text-xs text-[#64706A]">
                      Aeration and oxidation purification to neutralize hydrogen sulfide gas completely.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F7F7F2] border border-[#E3E8E3]">
                    <h4 className="font-bold text-[#173F35] text-base mb-1">Hard Water Scale</h4>
                    <p className="text-xs text-[#64706A]">
                      Protect water heaters, dishwashers, and piping from mineral calcification and soap scum.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F7F7F2] border border-[#E3E8E3]">
                    <h4 className="font-bold text-[#173F35] text-base mb-1">Sediment &amp; Turbidity</h4>
                    <p className="text-xs text-[#64706A]">
                      High-efficiency sediment pre-filters that capture fine sand, silt, and rust flakes.
                    </p>
                  </div>
                </div>
              </div>

              {/* ATS Systems Highlight */}
              <div className="border-t border-[#E3E8E3] pt-6">
                <h3 className="heading-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-3">
                  Why We Install ATS&reg; Water Purification Systems
                </h3>
                <p className="text-base text-[#64706A] leading-relaxed mb-4">
                  We selected ATS&reg; water filtration equipment because of its proven track record in eastern Pennsylvania geology. These units offer long-lasting resin media, reliable digital control valves, and low operating maintenance costs.
                </p>
                <div className="bg-[#EAF0E9]/70 rounded-xl p-5 border border-[#2D6654]/25 text-sm text-[#173F35] space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6654]" />
                    <span>Tested for residential, agricultural, and commercial flow capacities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6654]" />
                    <span>Reduces appliance wear and prolongs hot water heater life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6654]" />
                    <span>Healthier, clearer water for the whole family</span>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="bg-[#173F35] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="heading-serif text-lg font-bold text-white">Ready for Pure, Delicious Water?</h4>
                  <p className="text-sm text-white/80">Contact us to request an estimate from our established and well-respected water drilling company.</p>
                </div>
                <Button to="/estimate-request" variant="primary" size="md">
                  Request an Estimate
                </Button>
              </div>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Photo Card with New High-Res Image */}
              <div className="bg-white rounded-2xl border border-[#E3E8E3] p-4 shadow-xs overflow-hidden text-left">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={featuredTreatmentImg}
                    alt="ATS Whole-House Water Purification System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs uppercase font-bold text-[#D5AA54] tracking-wider">Water Quality</p>
                <h4 className="heading-serif text-base font-bold text-[#173F35] mt-0.5">
                  Whole-House Purification Unit
                </h4>
                <p className="text-xs text-[#64706A] mt-1">
                  Custom-engineered water treatment units installed cleanly in basements and utility rooms.
                </p>
              </div>

              {/* Quick Checklist */}
              <div className="bg-white rounded-2xl border border-[#E3E8E3] p-6 shadow-xs text-left">
                <h4 className="heading-serif text-lg font-bold text-[#173F35] mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-[#2D6654]" />
                  <span>Our Treatment Services</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#64706A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0" />
                    <span>ATS&reg; Whole-House Water Purification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0" />
                    <span>Iron &amp; Sulfur Filter Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0" />
                    <span>Water Softeners &amp; Scale Reducers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54] shrink-0" />
                    <span>Filter Media Replacement &amp; Service</span>
                  </li>
                </ul>
              </div>

              {/* Direct Phone Assistance */}
              <div className="bg-[#173F35] text-white rounded-2xl p-6 shadow-xs text-left">
                <p className="text-xs uppercase font-bold text-[#D5AA54] tracking-widest mb-1">
                  Direct Line
                </p>
                <h4 className="heading-serif text-xl font-bold mb-2">Have Water Concerns?</h4>
                <p className="text-xs text-white/80 mb-4 leading-relaxed">
                  Call Werner &amp; Sons to discuss your water symptoms and schedule a free estimate.
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
            title="Water Treatment &amp; Filtration Systems Gallery"
            description="Explore authentic camera photographs of multi-cylinder whole-house filtration units, copper bypass manifolds, digital metered valves, and laboratory water testing."
          />

          {/* Renders exactly 6 distinct photographs with interactive Lightbox */}
          <GalleryGrid photos={waterTreatmentGalleryPhotos} />
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
              to="/well-drilling"
              className="p-5 rounded-2xl border border-[#E3E8E3] hover:border-[#173F35] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#173F35] group-hover:text-[#2D6654] flex items-center justify-between">
                <span>New Water Well Drilling</span>
                <ArrowRight className="w-4 h-4 text-[#D5AA54] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#64706A] mt-1.5 leading-relaxed">Cable tool drilling for residential, commercial &amp; farms.</p>
            </Link>

            <Link
              to="/well-deepening"
              className="p-5 rounded-2xl border border-[#E3E8E3] hover:border-[#173F35] hover:shadow-md card-hover transition-all text-left group bg-white cursor-pointer"
            >
              <h4 className="font-bold text-base text-[#173F35] group-hover:text-[#2D6654] flex items-center justify-between">
                <span>Well Deepening &amp; Tanks</span>
                <ArrowRight className="w-4 h-4 text-[#D5AA54] transition-transform group-hover:translate-x-1" />
              </h4>
              <p className="text-xs text-[#64706A] mt-1.5 leading-relaxed">Deepen existing wells and replace pressure tanks.</p>
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
