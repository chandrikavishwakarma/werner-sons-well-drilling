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
    <div className="bg-[#F8FAFC]">
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
      <section className="py-8 sm:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Information & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Company Info Box */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs card-hover">
                <h3 className="heading-serif text-fluid-h3 font-normal text-[#133A2E] mb-2 text-balance">
                  Contact Us <span className="italic">Directly</span>
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  For immediate assistance, urgent pump failure, or scheduled well drilling inquiries, reach out to our family team anytime.
                </p>

                <div className="space-y-5 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5 shadow-2xs">
                      <Phone className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-mono font-medium tracking-widest text-[#475569]">Phone (Answered 24/7)</p>
                      <a
                        href="tel:6102585615"
                        className="text-lg font-bold text-[#133A2E] hover:text-[#0284C7] hover:underline cursor-pointer transition-colors"
                      >
                        (610) 258-5615
                      </a>
                      <p className="text-xs text-[#475569] mt-0.5">24-Hour Emergency Service</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5 shadow-2xs">
                      <Mail className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-mono font-medium tracking-widest text-[#475569]">Email Inquiries</p>
                      <a
                        href="mailto:wernerandsons@yahoo.com"
                        className="text-sm font-semibold text-[#133A2E] hover:text-[#0284C7] hover:underline cursor-pointer transition-colors break-all"
                      >
                        wernerandsons@yahoo.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5 shadow-2xs">
                      <MapPin className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-mono font-medium tracking-widest text-[#475569]">Headquarters &amp; Service Area</p>
                      <p className="font-semibold text-[#133A2E]">Easton, PA 18040 &bull; PA 18042-9493</p>
                      <p className="text-xs text-[#475569] mt-0.5">
                        Northampton, Lehigh, Monroe, Carbon &amp; Poconos
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5 shadow-2xs">
                      <Clock className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-mono font-medium tracking-widest text-[#475569]">Hours of Operation</p>
                      <p className="font-semibold text-[#133A2E]">24-Hour Emergency Service</p>
                      <p className="text-xs text-[#475569] mt-0.5">Phones Answered 24 Hours a Day</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E2E8F0] space-y-2 text-xs text-[#475569]">
                  <div className="flex items-center gap-2 text-[#133A2E] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#D4A338]" />
                    <span>Free, No-Obligation Estimates</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#133A2E] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A338]" />
                    <span>Cash &amp; Personal Checks Accepted</span>
                  </div>
                </div>
              </div>

              {/* Direct Urgent Emergency Box */}
              <div className="bg-[#133A2E] text-white rounded-2xl p-6 shadow-xs card-hover">
                <span className="text-xs uppercase font-mono font-medium text-[#D4A338] tracking-widest">
                  Urgent Well Situation?
                </span>
                <h4 className="heading-serif text-2xl font-normal mt-1 mb-2">
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
