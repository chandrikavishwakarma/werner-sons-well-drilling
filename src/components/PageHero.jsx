import { useMemo } from 'react'

export default function PageHero({
  badgeText = 'Specialized Cable Tool Drilling',
  title = 'Water Well Drilling in Easton, Pennsylvania',
  description = "Don't get flooded with high water bills. Our family-owned company in Easton, Pennsylvania provides affordable, sustainable water well drilling services designed for longevity and pristine water quality.",
  highlights = [
    '50+ Years Cable Tool Experience',
    'Pure Water (Zero Chemical Additives)',
    '24/7 Emergency Service'
  ]
}) {
  const isStringTitle = typeof title === 'string'

  const wordsWithChars = useMemo(() => {
    if (!isStringTitle) return null
    let globalIndex = 0
    return title.split(' ').map((word) => ({
      word,
      chars: word.split('').map((char) => ({
        char,
        index: globalIndex++,
      })),
    }))
  }, [title, isStringTitle])

  return (
    <section
      aria-label={`${title} Hero Banner`}
      className="relative bg-[#F8FAFC] text-[#133A2E] pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-11 lg:pb-14 border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Top Eyebrow Badge (Centered) */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-[#133A2E]/10 text-[#133A2E] border border-[#133A2E]/20 shadow-2xs mb-5 animate-hero-slide-up [animation-delay:100ms]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133A2E] animate-pulse" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Main Page Headline (Centered) */}
          <h1
            aria-label={isStringTitle ? title : undefined}
            className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal tracking-tight text-[#133A2E] leading-[1.1] mb-5 max-w-3xl text-center text-balance"
          >
            {wordsWithChars ? (
              <span aria-hidden="true">
                {wordsWithChars.map(({ chars }, wordIndex) => (
                  <span key={wordIndex}>
                    <span className="inline-block whitespace-nowrap">
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
                ))}
              </span>
            ) : (
              title
            )}
          </h1>

          {/* Supporting Description (Centered) */}
          <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed font-normal mb-8 max-w-2xl sm:max-w-3xl text-center animate-hero-slide-up [animation-delay:300ms]">
            {description}
          </p>

          {/* Trust Highlights Badges (Centered, Zero Divider Lines) */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-[#475569] animate-hero-slide-up [animation-delay:400ms]">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
                  <span className="font-semibold text-[#133A2E]">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
