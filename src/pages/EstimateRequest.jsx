import { useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import EstimateForm from '../components/EstimateForm'
import Button from '../components/Button'
import PageHero from '../components/PageHero'

import heroEstimateImg from '../assets/gallery/about-us/about-5.jpg'

export default function EstimateRequest() {
  useEffect(() => {
    document.title = 'Water Drilling Contractor | Easton, PA | Estimate Request | Werner & Sons'
  }, [])

  return (
    <div className="bg-[#F7F7F2]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Estimate Request"
        breadcrumbPath="/estimate-request"
        badgeText="Free Estimates • Upfront Advice"
        title="Request an Estimate"
        description="Contact Werner & Sons Well Drilling LLC to discuss new well drilling, well deepening, water filtration systems, or pump sales and emergency services across Easton and Eastern PA."
        backgroundImage={heroEstimateImg}
        imageAlt="Werner & Sons drilling fleet and service equipment ready on location"
        highlights={[
          'Free & Upfront Quotes',
          'Phones Answered 24/7',
          '50+ Years Trusted Pennsylvania Service'
        ]}
      />

      {/* Main 2-Column Content */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Information & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Company Info Box */}
              <div className="bg-white rounded-2xl border border-[#E3E8E3] p-6 sm:p-8 shadow-xs card-hover">
                <h3 className="heading-serif text-2xl font-bold text-[#173F35] mb-2">
                  Contact Us Directly
                </h3>
                <p className="text-sm text-[#64706A] leading-relaxed mb-6">
                  For immediate assistance, urgent pump failure, or scheduled well drilling inquiries, reach out to our family team anytime.
                </p>

                <div className="space-y-5 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] shrink-0 mt-0.5 shadow-2xs">
                      <Phone className="w-4 h-4 text-[#2D6654]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-[#64706A]">Phone (Answered 24/7)</p>
                      <a
                        href="tel:6102585615"
                        className="text-lg font-bold text-[#173F35] hover:text-[#2D6654] hover:underline cursor-pointer transition-colors"
                      >
                        (610) 258-5615
                      </a>
                      <p className="text-xs text-[#64706A] mt-0.5">24-Hour Emergency Service</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] shrink-0 mt-0.5 shadow-2xs">
                      <Mail className="w-4 h-4 text-[#2D6654]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-[#64706A]">Email Inquiries</p>
                      <a
                        href="mailto:wernerandsons@yahoo.com"
                        className="text-sm font-semibold text-[#173F35] hover:text-[#2D6654] hover:underline cursor-pointer transition-colors break-all"
                      >
                        wernerandsons@yahoo.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] shrink-0 mt-0.5 shadow-2xs">
                      <MapPin className="w-4 h-4 text-[#2D6654]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-[#64706A]">Headquarters &amp; Service Area</p>
                      <p className="font-semibold text-[#252D2A]">Easton, PA 18040 &bull; PA 18042-9493</p>
                      <p className="text-xs text-[#64706A] mt-0.5">
                        Northampton, Lehigh, Monroe, Carbon &amp; Poconos
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#EAF0E9] flex items-center justify-center text-[#2D6654] shrink-0 mt-0.5 shadow-2xs">
                      <Clock className="w-4 h-4 text-[#2D6654]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-[#64706A]">Hours of Operation</p>
                      <p className="font-semibold text-[#252D2A]">24-Hour Emergency Service</p>
                      <p className="text-xs text-[#64706A] mt-0.5">Phones Answered 24 Hours a Day</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E3E8E3] space-y-2 text-xs text-[#64706A]">
                  <div className="flex items-center gap-2 text-[#173F35] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#D5AA54]" />
                    <span>Free, No-Obligation Estimates</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#173F35] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D5AA54]" />
                    <span>Cash &amp; Personal Checks Accepted</span>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Emergency Box */}
              <div className="bg-[#173F35] text-white rounded-2xl p-6 shadow-xs card-hover">
                <span className="text-xs uppercase font-bold text-[#D5AA54] tracking-widest">
                  Urgent Well Situation?
                </span>
                <h4 className="heading-serif text-xl font-bold mt-1 mb-2">
                  Immediate Emergency Service
                </h4>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  If you have lost water pressure completely or have an active well blowout, please do not wait for email. Call our direct line now:
                </p>
                <Button
                  href="tel:6102585615"
                  variant="accent"
                  size="md"
                  icon={Phone}
                  className="w-full justify-center"
                >
                  Call (610) 258-5615
                </Button>
              </div>
            </div>

            {/* Right Column: Estimate Form (7 Cols) */}
            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
