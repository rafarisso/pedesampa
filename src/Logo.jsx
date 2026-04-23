/**
 * PedeSampa Logo — SVG recreation of the official brand mark
 *
 * Icon: green shopping bag with São Paulo skyline silhouette inside
 * Wordmark: "pede" (white) + "sampa" (green #00E676), bold sans-serif
 *
 * Three exports:
 *   LogoIcon       — icon only  (favicon / square badge)
 *   LogoHorizontal — icon + wordmark side by side (navbar)
 *   LogoVertical   — icon stacked above wordmark (hero / standalone)
 */

/** The green shopping bag with SP skyline icon */
export function LogoIcon({ size = 48, className = '' }) {
  // Internal coordinate system: 56 × 64
  const W = 56
  const H = 64

  return (
    <svg
      width={size}
      height={Math.round(size * (H / W))}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PedeSampa ícone"
    >
      <defs>
        {/* Clip to bag body so skyline doesn't spill over */}
        <clipPath id="bagBody">
          <rect x="3" y="20" width="50" height="42" rx="3" />
        </clipPath>
      </defs>

      {/* ── Handles ── */}
      {/* Left handle */}
      <path
        d="M16 20 L16 10 Q16 4 22 4 L34 4 Q40 4 40 10 L40 20"
        stroke="#00E676"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Bag body ── */}
      <rect x="3" y="20" width="50" height="42" rx="3" fill="#00E676" />

      {/* ── SP Skyline silhouette (clipped inside bag) ── */}
      <g clipPath="url(#bagBody)">
        {/*
          Skyline from left to right.
          Heights and positions approximated from the official logo.
          All rects extend to y=64 (bottom of viewBox) so they fill fully.
        */}

        {/* Far-left tall building */}
        <rect x="3"  y="34" width="7"  height="30" fill="#0A0A0A" />

        {/* Short gap building */}
        <rect x="12" y="40" width="5"  height="24" fill="#0A0A0A" />

        {/* Medium building */}
        <rect x="19" y="36" width="6"  height="28" fill="#0A0A0A" />

        {/* Obelisk / tall thin spire (SP landmark) */}
        <rect x="27" y="24" width="3"  height="40" fill="#0A0A0A" />

        {/* Building right of obelisk */}
        <rect x="32" y="38" width="5"  height="26" fill="#0A0A0A" />

        {/* Wide building right */}
        <rect x="39" y="32" width="8"  height="32" fill="#0A0A0A" />

        {/* Far-right short building */}
        <rect x="49" y="42" width="5"  height="22" fill="#0A0A0A" />
      </g>
    </svg>
  )
}

/** Icon + wordmark side by side — use in navbar */
export function LogoHorizontal({ className = '', iconSize = 36 }) {
  const iconH = Math.round(iconSize * (64 / 56))

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-label="PedeSampa"
      style={{ lineHeight: 1 }}
    >
      <LogoIcon size={iconSize} />
      <span
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontWeight: 800,
          fontSize: `${Math.round(iconH * 0.72)}px`,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        <span style={{ color: '#FFFFFF' }}>pede</span>
        <span style={{ color: '#00E676' }}>sampa</span>
      </span>
    </div>
  )
}

/** Icon stacked above wordmark — vertical layout */
export function LogoVertical({ className = '', iconSize = 64 }) {
  const iconH = Math.round(iconSize * (64 / 56))

  return (
    <div
      className={`flex flex-col items-center gap-2 ${className}`}
      aria-label="PedeSampa"
    >
      <LogoIcon size={iconSize} />
      <span
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontWeight: 800,
          fontSize: `${Math.round(iconH * 0.52)}px`,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        <span style={{ color: '#FFFFFF' }}>pede</span>
        <span style={{ color: '#00E676' }}>sampa</span>
      </span>
    </div>
  )
}
