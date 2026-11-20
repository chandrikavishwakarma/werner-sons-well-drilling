import { useMemo } from 'react'
import { Phone, CheckCircle, Calendar } from 'lucide-react'
import Button from './Button'
import DotPattern from './DotPattern'

export default function HeroBanner({
  title = 'Reliable Water Well Drilling & Pump Services'
}) {
  const wordsWithChars = useMemo(() => {
    let globalIndex = 0
    return title.split(' ').map((word) => ({
      word,
      chars: word.split('').map((char) => ({
        char,
        index: globalIndex++,
      })),
    }))
  }, [title])

  return (
    <section
      aria-label="Hero Introduction"
      className="relative bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#133A2E] overflow-hidden"
    >
      {/* Magic UI DotPattern Background with Soft Radial Fade Mask */}
      <DotPattern
        width={20}
        height={20}
        cx={1.5}
        cy={1.5}
        cr={1.25}
        className="fill-[#133A2E]/20 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)] [-webkit-mask-image:radial-gradient(450px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)] sm:[-webkit-mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
      />

      <div className="container-custom relative z-10 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-11 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Trust Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#133A2E]/10 border border-[#133A2E]/20 text-[#133A2E] text-xs font-mono font-medium tracking-widest uppercase mb-3.5 sm:mb-4 shadow-2xs animate-hero-slide-up [animation-delay:100ms]">
            <Calendar className="w-3.5 h-3.5 text-[#133A2E] shrink-0" />
            <span>Over 50 Years of Family-Owned Excellence</span>
          </div>

          {/* Main Headline */}
          <h1
            aria-label={title}
            className="heading-serif text-fluid-hero font-normal tracking-tight text-[#133A2E] mb-3.5 sm:mb-4 max-w-4xl text-center text-balance"
          >
            <span aria-hidden="true">
              {wordsWithChars.map(({ word, chars }, wordIndex) => {
                const isGold = word === '&' || word === 'Pump' || word === 'Services'
                const isItalic = word === 'Pump' || word === 'Services'
                return (
                  <span key={wordIndex}>
                    <span
                      className={`inline-block whitespace-nowrap ${
                        isGold ? 'text-[#B88414]' : 'text-[#133A2E]'
                      } ${isItalic ? 'italic' : ''}`}
                    >
                      {chars.map(({ char, index }) => (
                        <span
                          key={index}
                          className="inline-block animate-char-reveal"
                          style={{ animationDelay: `${index * 28}ms` }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    {wordIndex < wordsWithChars.length - 1 && ' '}
                  </span>
                )
              })}
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-fluid-lead text-[#475569] leading-relaxed max-w-2xl sm:max-w-3xl mb-5 sm:mb-6 font-normal text-center animate-hero-slide-up [animation-delay:350ms]">
            Professional water well solutions backed by over 50 years of experience and traditional cable tool workmanship in Easton, Pennsylvania. We drill and service residential, commercial, and industrial wells with minimum property impact.
          </p>

          {/* Key Trust Checkmarks (Centered Horizontal & Vertical) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-6 sm:mb-8 w-full max-w-lg mx-auto text-center text-xs sm:text-sm text-[#475569] animate-hero-slide-up [animation-delay:450ms]">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span className="font-semibold text-[#133A2E]">Cable Tool Drilling Method</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span className="font-semibold text-[#133A2E]">24-Hour Emergency Service</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span className="font-semibold text-[#133A2E]">Prompt Free Estimates</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span className="font-semibold text-[#133A2E]">Zero Foreign Additives in Well</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto animate-hero-slide-up [animation-delay:600ms]">
            <Button to="/estimate-request" variant="accent" size="lg" glow={true} className="w-full sm:w-auto">
              Request an Estimate
            </Button>
            <Button
              href="tel:6102585615"
              variant="secondary"
              size="lg"
              icon={Phone}
              className="w-full sm:w-auto"
            >
              Call: (610) 258-5615
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
