import { useMemo } from 'react'
import DotPattern from './DotPattern'

export default function PageHero({
  badgeText = 'Specialized Cable Tool Drilling',
  title = 'Water Well Drilling in Easton, Pennsylvania',
  highlightText,
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
    const rawWords = title.split(' ')
    const totalWords = rawWords.length

    return rawWords.map((word, wordIndex) => {
      // Determine if word is highlighted in rich warm gold (#B88414)
      let isGold = false
      if (highlightText) {
        const cleanWord = word.replace(/[^a-zA-Z0-9&]/g, '').toLowerCase()
        const cleanHighlight = highlightText.toLowerCase()
        isGold = cleanHighlight.includes(cleanWord)
      } else {
        const cleanWord = word.replace(/[^a-zA-Z0-9&]/g, '')
        if (cleanWord === 'Easton' || cleanWord === 'Pennsylvania') {
          isGold = true
        } else if (word === '&' && wordIndex >= totalWords - 2) {
          isGold = true
        } else if (cleanWord === 'Installation' || cleanWord === 'Gallery' || cleanWord === 'Estimate') {
          isGold = true
        } else if (totalWords > 2 && wordIndex >= totalWords - 2) {
          isGold = true
        }
      }

      const isItalic = isGold

      return {
        word,
        isGold,
        isItalic,
        chars: word.split('').map((char) => ({
          char,
          index: globalIndex++,
        })),
      }
    })
  }, [title, isStringTitle, highlightText])

  return (
    <section
      aria-label={`${title} Hero Banner`}
      className="relative bg-[#F8FAFC] text-[#133A2E] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-11 border-b border-[#E2E8F0] overflow-hidden"
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

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Top Eyebrow Badge (Centered) */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-[#133A2E]/10 text-[#133A2E] border border-[#133A2E]/20 shadow-2xs mb-3 sm:mb-4 animate-hero-slide-up [animation-delay:100ms]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133A2E] animate-pulse" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Main Page Headline (Centered) */}
          <h1
            aria-label={isStringTitle ? title : undefined}
            className="heading-serif text-fluid-pagehero font-normal tracking-tight text-[#133A2E] mb-3 sm:mb-4 max-w-3xl text-center text-balance"
          >
            {wordsWithChars ? (
              <span aria-hidden="true">
                {wordsWithChars.map(({ isGold, isItalic, chars }, wordIndex) => (
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
                ))}
              </span>
            ) : (
              title
            )}
          </h1>

          {/* Supporting Description (Centered) */}
          <p className="text-fluid-lead text-[#475569] leading-relaxed font-normal mb-5 sm:mb-6 max-w-2xl sm:max-w-3xl text-center animate-hero-slide-up [animation-delay:300ms]">
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
