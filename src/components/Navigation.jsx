import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Well Drilling', path: '/well-drilling' },
  { label: 'Well Deepening', path: '/well-deepening' },
  { label: 'Water Treatment System', path: '/water-treatment-system' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Pump Sales & Service', path: '/pump-sales--service---installation' },
  { label: 'Estimate Request', path: '/estimate-request', isCta: true },
]

export default function Navigation() {
  return (
    <nav
      aria-label="Primary navigation"
      className="hidden md:block bg-transparent text-white border-t border-white/10"
    >
      <div className="container-custom">
        <ul className="flex items-center justify-between gap-1 py-1.5">
          <div className="flex items-center flex-wrap gap-1">
            {navItems
              .filter((item) => !item.isCta)
              .map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `relative block px-3.5 py-2 text-xs lg:text-sm font-medium transition-all duration-200 rounded-md cursor-pointer select-none group ${
                        isActive
                          ? 'text-[#D5AA54] font-bold bg-white/10 shadow-xs'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.label}</span>
                        {/* Animated Underline Transition */}
                        <span
                          className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#D5AA54] rounded-full transition-transform duration-300 origin-left ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
          </div>

          {/* Prominent CTA Navigation Item */}
          <li>
            <NavLink
              to="/estimate-request"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                  isActive
                    ? 'bg-[#c49942] text-[#173F35] ring-2 ring-white/30'
                    : 'bg-[#D5AA54] text-[#173F35] hover:bg-[#c49942]'
                }`
              }
            >
              <span>Estimate Request</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
