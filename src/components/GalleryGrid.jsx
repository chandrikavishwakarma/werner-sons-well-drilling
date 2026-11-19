import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { allMainGalleryPhotos } from '../data/galleryData'

// Helper to ensure each row has enough duplicated items so the loop never has an empty gap
function prepareTrack(items, minCount = 12) {
  if (!items || items.length === 0) return []
  let result = [...items]
  while (result.length < minCount) {
    result = [...result, ...items]
  }
  return result
}

export default function GalleryGrid({ photos = allMainGalleryPhotos, limit, filterCategory = null }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null)
  const previousActiveElement = useRef(null)
  const touchStartX = useRef(null)

  const filtered = (photos || allMainGalleryPhotos).filter((img) =>
    filterCategory && filterCategory !== 'All' ? img.category === filterCategory : true
  )
  const displayedImages = limit ? filtered.slice(0, limit) : filtered

  // Distribute photos into two distinct rows
  const row1Base = displayedImages.filter((_, idx) => idx % 2 === 0)
  const row2Base = displayedImages.filter((_, idx) => idx % 2 !== 0)

  // Ensure both rows have items, even with odd or small counts
  const row1Raw = row1Base.length > 0 ? row1Base : displayedImages
  const row2Raw = row2Base.length > 0 ? row2Base : [...displayedImages].reverse()

  const row1Items = prepareTrack(row1Raw, 12)
  const row2Items = prepareTrack(row2Raw, 12)

  // Handle touch swipe for mobile lightbox interactions
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 45) {
      // Swipe left -> Next
      setActiveImageIndex((prev) => (prev + 1) % displayedImages.length)
    } else if (diff < -45) {
      // Swipe right -> Prev
      setActiveImageIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length)
    }
    touchStartX.current = null
  }

  // Lock body scroll and manage keyboard events when lightbox is active
  useEffect(() => {
    if (activeImageIndex !== null) {
      previousActiveElement.current = document.activeElement
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          setActiveImageIndex(null)
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          setActiveImageIndex((prev) => (prev + 1) % displayedImages.length)
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          setActiveImageIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length)
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
        if (previousActiveElement.current && previousActiveElement.current.focus) {
          previousActiveElement.current.focus()
        }
      }
    }
  }, [activeImageIndex, displayedImages.length])

  // Clean, high-quality photograph card without intrusive text overlays
  const renderCard = (image, keyPrefix, isClone = false) => (
    <div
      key={`${keyPrefix}-${image.id}`}
      role="button"
      tabIndex={isClone ? -1 : 0}
      aria-hidden={isClone ? 'true' : undefined}
      onClick={() => {
        const idx = displayedImages.findIndex((p) => p.id === image.id)
        if (idx !== -1) setActiveImageIndex(idx)
      }}
      onKeyDown={(e) => {
        if (!isClone && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          const idx = displayedImages.findIndex((p) => p.id === image.id)
          if (idx !== -1) setActiveImageIndex(idx)
        }
      }}
      className="group/card relative shrink-0 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-[16/10] rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-[#133A2E]/15 bg-white transition-all duration-300 hover:scale-[1.03] hover:border-[#133A2E]/40 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E]"
      aria-label={isClone ? undefined : `View full photo: ${image.title}`}
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
      />
    </div>
  )

  return (
    <>
      {/* Continuously Moving Two-Row Gallery Container with Smooth Edge Fade Masks */}
      <div
        className="relative w-full overflow-hidden py-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        }}
        aria-label="Two-row continuously moving image gallery"
      >
        {/* ROW 1: Moves Continuously from Left to Right */}
        <div className="group/row relative w-full overflow-hidden mb-4 sm:mb-6">
          <div className="flex w-max animate-gallery-left-to-right group-hover/row:[animation-play-state:paused] motion-reduce:[animation:none]">
            {/* Sequence 1 */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6">
              {row1Items.map((photo, idx) => renderCard(photo, `r1-a-${idx}`, false))}
            </div>
            {/* Sequence 2 (Clone for seamless infinite loop) */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6" aria-hidden="true">
              {row1Items.map((photo, idx) => renderCard(photo, `r1-b-${idx}`, true))}
            </div>
          </div>
        </div>

        {/* ROW 2: Moves Continuously from Right to Left */}
        <div className="group/row relative w-full overflow-hidden">
          <div className="flex w-max animate-gallery-right-to-left group-hover/row:[animation-play-state:paused] motion-reduce:[animation:none]">
            {/* Sequence 1 */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6">
              {row2Items.map((photo, idx) => renderCard(photo, `r2-a-${idx}`, false))}
            </div>
            {/* Sequence 2 (Clone for seamless infinite loop) */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6" aria-hidden="true">
              {row2Items.map((photo, idx) => renderCard(photo, `r2-b-${idx}`, true))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Lightbox Modal (Fully responsive across Mobile, Tablet, Desktop) */}
      {activeImageIndex !== null && displayedImages[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-5 md:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${displayedImages[activeImageIndex].title}`}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90dvh] flex flex-col items-center justify-center animate-modal-in"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="w-full flex items-center justify-between text-white/80 pb-3 px-1">
              <span className="text-xs font-mono font-medium tracking-widest text-[#D4A338] uppercase">
                Photo {activeImageIndex + 1} of {displayedImages.length}
              </span>

              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="inline-flex items-center justify-center p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                aria-label="Close full size photo"
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Main Image Frame with Navigation Arrows & Touch Swipe Support */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
              <img
                key={displayedImages[activeImageIndex].id || activeImageIndex}
                src={displayedImages[activeImageIndex].src}
                alt={displayedImages[activeImageIndex].title}
                className="max-h-[62dvh] sm:max-h-[68dvh] w-auto max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300 animate-fade-in select-none"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImageIndex(
                    (activeImageIndex - 1 + displayedImages.length) % displayedImages.length
                  )
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/70 text-white hover:bg-[#D4A338] hover:text-[#133A2E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImageIndex((activeImageIndex + 1) % displayedImages.length)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/70 text-white hover:bg-[#D4A338] hover:text-[#133A2E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Responsive Caption Box */}
            <div className="mt-3 sm:mt-4 text-center text-white max-w-2xl px-2">
              {displayedImages[activeImageIndex].category && (
                <span className="text-[11px] sm:text-xs uppercase font-mono font-medium tracking-widest text-[#D4A338]">
                  {displayedImages[activeImageIndex].category}
                </span>
              )}
              <h3 className="heading-serif text-lg sm:text-xl font-normal mt-0.5 leading-snug">
                {displayedImages[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-2 sm:line-clamp-none">
                {displayedImages[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
