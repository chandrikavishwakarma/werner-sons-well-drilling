/**
 * Werner & Sons Well Drilling - Modern Brand Logo Component
 *
 * Preserves the exact brand name and heritage colors (Gold, Forest Green, Terracotta, Aquatic Cyan)
 * while providing an authoritative, premium, modern 2026 visual identity.
 *
 * Supports:
 * - variant: 'horizontal' (default, optimal for navbar), 'stacked' (crest lockup), or 'icon' (monogram badge)
 * - theme: 'light' (default, for white/cream surfaces) or 'dark' (for dark spruce surfaces like the footer)
 */

export default function Logo({
  variant = 'horizontal',
  theme = 'light',
  className = 'h-10 sm:h-12 w-auto',
  ariaLabel = 'Werner & Sons Well Drilling LLC'
}) {
  const isDark = theme === 'dark'

  // Variant 1: ICON ONLY (Square 1:1 aspect ratio)
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <linearGradient id="iconGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF6D4"/>
            <stop offset="30%" stop-color="#ECD07B"/>
            <stop offset="70%" stop-color="#D5AA54"/>
            <stop offset="100%" stop-color="#8F641B"/>
          </linearGradient>
          <linearGradient id="iconForest" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#245A4C"/>
            <stop offset="50%" stop-color="#173F35"/>
            <stop offset="100%" stop-color="#0D2620"/>
          </linearGradient>
          <linearGradient id="iconCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#76E7FD"/>
            <stop offset="50%" stop-color="#3DC3DF"/>
            <stop offset="100%" stop-color="#147587"/>
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="30" fill="url(#iconForest)" stroke="url(#iconGold)" strokeWidth="2.4"/>
        <circle cx="32" cy="32" r="26.5" fill="none" stroke="#D5AA54" strokeWidth="0.7" strokeDasharray="2.5 1.5" opacity="0.65"/>

        {/* Aquifer Strata */}
        <path d="M 14 44 Q 32 50 50 44" stroke="#3DC3DF" strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
        <path d="M 17 48 Q 32 53 47 48" stroke="#D5AA54" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>

        {/* Derrick W Monogram */}
        <polygon points="15,17 20,17 24,42 19,42" fill="url(#iconGold)"/>
        <polygon points="49,17 44,17 40,42 45,42" fill="url(#iconGold)"/>
        <polygon points="22,17 27,17 32,38 29,41" fill="url(#iconGold)"/>
        <polygon points="42,17 37,17 32,38 35,41" fill="url(#iconGold)"/>

        {/* Drill Bit */}
        <polygon points="30.5,38 33.5,38 32,49" fill="#FFF6D4" stroke="#8F641B" strokeWidth="0.5"/>

        {/* Horizontal Girders */}
        <line x1="18" y1="24" x2="46" y2="24" stroke="#8F641B" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="20" y1="32" x2="44" y2="32" stroke="#8F641B" strokeWidth="1.1" strokeLinecap="round"/>

        {/* Aquifer Droplet */}
        <path d="M 32 20 C 27.5 26, 25 30, 25 34 C 25 38, 28 41, 32 41 C 36 41, 39 38, 39 34 C 39 30, 36.5 26, 32 20 Z" fill="url(#iconCyan)"/>
        <path d="M 28.5 30 C 27 32, 27 35, 29.5 37" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.85"/>

        <circle cx="32" cy="15" r="3" fill="url(#iconGold)" stroke="#0D2620" strokeWidth="0.7"/>
      </svg>
    )
  }

  // Variant 2: STACKED CREST (Arched Heritage Master Logo, 540x260)
  if (variant === 'stacked') {
    return (
      <svg
        viewBox="0 0 540 260"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <linearGradient id="stkGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFF6D4"/>
            <stop offset="20%" stop-color="#ECD07B"/>
            <stop offset="55%" stop-color="#D5AA54"/>
            <stop offset="85%" stop-color="#B38631"/>
            <stop offset="100%" stop-color="#8F641B"/>
          </linearGradient>

          <linearGradient id="stkForest" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#225447"/>
            <stop offset="45%" stop-color="#173F35"/>
            <stop offset="100%" stop-color="#0D2620"/>
          </linearGradient>

          <linearGradient id="stkCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#76E7FD"/>
            <stop offset="35%" stop-color="#3DC3DF"/>
            <stop offset="75%" stop-color="#249BB2"/>
            <stop offset="100%" stop-color="#147587"/>
          </linearGradient>

          <linearGradient id="stkTerra" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#BF4433"/>
            <stop offset="55%" stop-color="#983224"/>
            <stop offset="100%" stop-color="#731F14"/>
          </linearGradient>

          <filter id="stkElevated" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#071914" floodOpacity={isDark ? "0.6" : "0.35"}/>
          </filter>

          <filter id="stkTextDepth" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#071914" floodOpacity={isDark ? "0.7" : "0.5"}/>
          </filter>

          <path id="stkWernerArc" d="M 75,130 Q 270,90 465,130" fill="none"/>
        </defs>

        {/* Top Medallion Emblem */}
        <g filter="url(#stkElevated)">
          <circle cx="270" cy="46" r="38" fill="url(#stkForest)" stroke="url(#stkGold)" strokeWidth="2.8"/>
          <circle cx="270" cy="46" r="34" fill="none" stroke="#D5AA54" strokeWidth="0.75" strokeDasharray="3 1.5" opacity="0.65"/>

          <path d="M 244 62 Q 270 69 296 62" stroke="#3DC3DF" strokeWidth="2" strokeLinecap="round" opacity="0.75"/>
          <path d="M 249 67 Q 270 73 291 67" stroke="#D5AA54" strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>

          <polygon points="245,26 252,26 258,60 251,60" fill="url(#stkGold)"/>
          <polygon points="295,26 288,26 282,60 289,60" fill="url(#stkGold)"/>
          <polygon points="256,26 262,26 270,55 266,59" fill="url(#stkGold)"/>
          <polygon points="284,26 278,26 270,55 274,59" fill="url(#stkGold)"/>

          <polygon points="268,55 272,55 270,70" fill="#FFF6D4" stroke="#8F641B" strokeWidth="0.5"/>

          <line x1="248" y1="36" x2="292" y2="36" stroke="#8F641B" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="251" y1="47" x2="289" y2="47" stroke="#8F641B" strokeWidth="1.3" strokeLinecap="round"/>

          <path d="M 270 31 C 264 39.5, 260 45, 260 50 C 260 55.5, 264.5 60, 270 60 C 275.5 60, 280 55.5, 280 50 C 280 45, 276 39.5, 270 31 Z" fill="url(#stkCyan)"/>
          <path d="M 265 44 C 263.5 47, 263.5 51, 266 54 C 264.5 52.5, 264 49.5, 265 47 Z" fill="#FFFFFF" opacity="0.85"/>
          <circle cx="273.5" cy="54" r="1.1" fill="#FFFFFF" opacity="0.9"/>

          <circle cx="270" cy="24" r="4" fill="url(#stkGold)" stroke="#0D2620" strokeWidth="0.8"/>
          <circle cx="270" cy="24" r="1.3" fill="#0D2620"/>
        </g>

        {/* Arched WERNER */}
        <g filter="url(#stkTextDepth)">
          <text
            fontFamily="'Montserrat', 'Inter', -apple-system, sans-serif"
            fontSize="56"
            fontWeight="900"
            letterSpacing="5"
            fill="#0D2620"
            stroke="#0D2620"
            strokeWidth="5"
            strokeLinejoin="round"
          >
            <textPath href="#stkWernerArc" startOffset="50%" textAnchor="middle">
              WERNER
            </textPath>
          </text>
          <text
            fontFamily="'Montserrat', 'Inter', -apple-system, sans-serif"
            fontSize="56"
            fontWeight="900"
            letterSpacing="5"
            fill="url(#stkGold)"
          >
            <textPath href="#stkWernerArc" startOffset="50%" textAnchor="middle">
              WERNER
            </textPath>
          </text>
        </g>

        {/* & SONS Badge */}
        <g filter="url(#stkElevated)">
          <rect x="200" y="152" width="140" height="32" rx="16" ry="16" fill="url(#stkTerra)" stroke="url(#stkGold)" strokeWidth="2"/>
          <rect x="203" y="155" width="134" height="26" rx="13" ry="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.35"/>
          <text
            x="270"
            y="174"
            textAnchor="middle"
            fontFamily="'Inter', -apple-system, sans-serif"
            fontSize="14.5"
            fontWeight="800"
            letterSpacing="3"
            fill="#FFFFFF"
          >
            &amp; SONS
          </text>
        </g>

        {/* WELL DRILLING Banner */}
        <g filter="url(#stkElevated)">
          <rect x="75" y="196" width="390" height="44" rx="22" ry="22" fill="url(#stkCyan)" stroke="#0D2620" strokeWidth="2.5"/>
          <path d="M 100 201 L 440 201" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
          <text
            x="270"
            y="226"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Inter', -apple-system, sans-serif"
            fontSize="20"
            fontWeight="900"
            letterSpacing="6"
            fill="#0D2620"
          >
            WELL DRILLING
          </text>
        </g>
      </svg>
    )
  }

  // Variant 3: HORIZONTAL (Default, 480x76, streamlined for header navbar & responsiveness)
  const gradPrefix = isDark ? 'hzDark' : 'hzLight'

  return (
    <svg
      viewBox="0 0 480 76"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id={`${gradPrefix}Gold`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF6D4"/>
          <stop offset="25%" stop-color="#ECD07B"/>
          <stop offset="60%" stop-color="#D5AA54"/>
          <stop offset="100%" stop-color="#8F641B"/>
        </linearGradient>

        <linearGradient id={`${gradPrefix}Forest`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#245A4C"/>
          <stop offset="45%" stop-color="#1B473C"/>
          <stop offset="100%" stop-color="#11332A"/>
        </linearGradient>

        <linearGradient id={`${gradPrefix}Cyan`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#76E7FD"/>
          <stop offset="35%" stop-color="#3DC3DF"/>
          <stop offset="75%" stop-color="#249BB2"/>
          <stop offset="100%" stop-color="#147587"/>
        </linearGradient>

        <linearGradient id={`${gradPrefix}Terra`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#BF4433"/>
          <stop offset="55%" stop-color="#983224"/>
          <stop offset="100%" stop-color="#731F14"/>
        </linearGradient>

        <filter id={`${gradPrefix}Shadow`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#071914" floodOpacity={isDark ? "0.5" : "0.25"}/>
        </filter>
      </defs>

      {/* Left Monogram Medallion */}
      <g transform="translate(6, 6)" filter={`url(#${gradPrefix}Shadow)`}>
        <circle cx="32" cy="32" r="30" fill={`url(#${gradPrefix}Forest)`} stroke={`url(#${gradPrefix}Gold)`} strokeWidth="2.4"/>
        <circle cx="32" cy="32" r="26.5" fill="none" stroke="#D5AA54" strokeWidth="0.7" strokeDasharray="2.5 1.5" opacity={isDark ? "0.75" : "0.65"}/>

        <path d="M 14 44 Q 32 50 50 44" stroke="#3DC3DF" strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
        <path d="M 17 48 Q 32 53 47 48" stroke="#D5AA54" strokeWidth="1.3" strokeLinecap="round" opacity="0.55"/>

        <polygon points="15,17 20,17 24,42 19,42" fill={`url(#${gradPrefix}Gold)`}/>
        <polygon points="49,17 44,17 40,42 45,42" fill={`url(#${gradPrefix}Gold)`}/>
        <polygon points="22,17 27,17 32,38 29,41" fill={`url(#${gradPrefix}Gold)`}/>
        <polygon points="42,17 37,17 32,38 35,41" fill={`url(#${gradPrefix}Gold)`}/>

        <polygon points="30.5,38 33.5,38 32,49" fill="#FFF6D4" stroke="#8F641B" strokeWidth="0.5"/>

        <line x1="18" y1="24" x2="46" y2="24" stroke="#8F641B" strokeWidth="1.1" strokeLinecap="round"/>
        <line x1="20" y1="32" x2="44" y2="32" stroke="#8F641B" strokeWidth="1.1" strokeLinecap="round"/>

        <path d="M 32 20 C 27.5 26, 25 30, 25 34 C 25 38, 28 41, 32 41 C 36 41, 39 38, 39 34 C 39 30, 36.5 26, 32 20 Z" fill={`url(#${gradPrefix}Cyan)`}/>
        <path d="M 28.5 30 C 27 32, 27 35, 29.5 37" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.85"/>

        <circle cx="32" cy="15" r="3" fill={`url(#${gradPrefix}Gold)`} stroke="#0D2620" strokeWidth="0.7"/>
      </g>

      {/* Line 1: WERNER + & SONS */}
      <g>
        <text
          x="86"
          y="37"
          fontFamily="'Montserrat', 'Inter', -apple-system, sans-serif"
          fontSize="34"
          fontWeight="900"
          letterSpacing="2.5"
          fill={isDark ? "#FFFFFF" : "#173F35"}
        >
          WERNER
        </text>

        <g transform="translate(270, 14)">
          <rect x="0" y="0" width="98" height="25" rx="12.5" ry="12.5" fill={`url(#${gradPrefix}Terra)`} stroke={`url(#${gradPrefix}Gold)`} strokeWidth="1.4"/>
          <text
            x="49"
            y="17"
            textAnchor="middle"
            fontFamily="'Inter', -apple-system, sans-serif"
            fontSize="11.5"
            fontWeight="800"
            letterSpacing="2"
            fill="#FFFFFF"
          >
            &amp; SONS
          </text>
        </g>
      </g>

      {/* Line 2: WELL DRILLING Cyan Banner */}
      <g transform="translate(86, 45)">
        <rect
          x="0"
          y="0"
          width="282"
          height="24"
          rx="12"
          ry="12"
          fill={`url(#${gradPrefix}Cyan)`}
          stroke={isDark ? "#FFFFFF" : "#0D2620"}
          strokeWidth={isDark ? "0.8" : "1.3"}
        />
        <path d="M 14 2.5 L 268 2.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.45"/>
        <text
          x="141"
          y="16.5"
          textAnchor="middle"
          fontFamily="'Montserrat', 'Inter', -apple-system, sans-serif"
          fontSize="13"
          fontWeight="900"
          letterSpacing="4"
          fill="#0D2620"
        >
          WELL DRILLING
        </text>
      </g>
    </svg>
  )
}
