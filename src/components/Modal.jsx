import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ShineBorder from './ShineBorder'

/**
 * Modern, Fully Responsive Modal Dialog Component (2026 Standards)
 *
 * Implements all Section 13 requirements:
 * - Desktop: Centered, balanced padding, subtle shadow, rounded-2xl
 * - Tablet & Mobile: Viewport-aware width, max-height: 90dvh, vertical scrolling (overflow-y-auto)
 * - Safe close button placement, Escape key handling, backdrop click dismiss, stopPropagation on content
 * - Background scroll locking & restoration
 * - Keyboard focus management and accessible ARIA attributes
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl',
  ariaLabel = 'Dialog Window',
}) {
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)

  // Manage Body Scroll Lock & Keyboard Focus
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement
      // Prevent background scrolling
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // Focus modal container
      if (modalRef.current) {
        modalRef.current.focus()
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          onClose()
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
        // Restore focus to opener element
        if (previousActiveElement.current && previousActiveElement.current.focus) {
          previousActiveElement.current.focus()
        }
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || ariaLabel}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${maxWidth} max-h-[90dvh] flex flex-col bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-modal-in focus:outline-none`}
      >
        <ShineBorder shineColor={["#133A2E", "#D4A338", "#FDE047"]} borderWidth={2} />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[#E2E8F0] bg-[#F8FAFC] shrink-0">
          <div className="pr-6 text-left">
            {title && (
              <h3 className="heading-serif text-xl sm:text-2xl font-normal text-[#133A2E]">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#475569] hover:text-[#133A2E] hover:bg-neutral-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133A2E] shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 text-left overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  )
}
