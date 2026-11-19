import { Clock, MapPin, Sparkles, Check, Phone, Shield } from 'lucide-react'

const announcements = [
  {
    icon: Clock,
    text: '24-Hour Emergency Service • Phones Answered 24/7',
    highlight: true
  },
  {
    icon: MapPin,
    text: 'Easton, PA • Northampton, Lehigh, Monroe & Carbon Counties'
  },
  {
    icon: Sparkles,
    text: 'Free Estimates & Upfront Transparent Pricing',
    highlight: true
  },
  {
    icon: Check,
    text: 'Cash & Checks Accepted'
  },
  {
    icon: Phone,
    text: 'Call Direct: (610) 258-5615',
    isPhone: true
  },
  {
    icon: Shield,
    text: 'Over 50 Years of Family-Owned Drilling Excellence'
  }
]

export default function AnnouncementBar() {
  const renderTrackItems = (isClone = false) => (
    <div
      className="flex items-center shrink-0"
      aria-hidden={isClone ? 'true' : undefined}
    >
      {announcements.map((item, index) => {
        const IconComponent = item.icon
        return (
          <div
            key={`${isClone ? 'clone' : 'orig'}-${index}`}
            className="flex items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 text-[11px] sm:text-xs font-medium whitespace-nowrap">
              <IconComponent className="w-3.5 h-3.5 text-[#D4A338] shrink-0" />
              {item.isPhone ? (
                <a
                  href="tel:6102585615"
                  className="text-white/95 hover:text-[#D4A338] font-bold transition-colors cursor-pointer"
                >
                  {item.text}
                </a>
              ) : (
                <span
                  className={
                    item.highlight ? 'text-white font-semibold' : 'text-white/90'
                  }
                >
                  {item.text}
                </span>
              )}
            </div>

            {/* Subtle separator bullet */}
            <span className="text-[#D4A338]/50 text-xs select-none">&bull;</span>
          </div>
        )
      })}

      {/* Facebook Link in the track */}
      <div className="flex items-center">
        <div className="inline-flex items-center gap-1.5 px-4 sm:px-6 text-[11px] sm:text-xs font-medium whitespace-nowrap">
          <a
            href="http://www.facebook.com/share.php?u=http://www.wernerandsonswelldrilling.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-[#D4A338] underline-offset-2 hover:underline transition-colors cursor-pointer"
            aria-label="Visit Werner & Sons on Facebook"
          >
            Find Us on Facebook
          </a>
        </div>
        <span className="text-[#D4A338]/50 text-xs select-none">&bull;</span>
      </div>
    </div>
  )

  return (
    <aside
      aria-label="Important Company Announcements"
      className="relative overflow-hidden w-full bg-[#133A2E] text-white py-2 sm:py-2.5 border-y border-[#133A2E] select-none group z-20 shadow-xs"
    >
      {/* Edge gradient masks for soft entry and exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#133A2E] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#133A2E] to-transparent z-10" />

      {/* Continuous Marquee Scrolling Track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
        {/* Track 1 (Original items) */}
        {renderTrackItems(false)}

        {/* Track 2 (Clone track for seamless infinite loop) */}
        {renderTrackItems(true)}
      </div>
    </aside>
  )
}
