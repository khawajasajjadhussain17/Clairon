const HORIZONTAL_LINES = [
  122.039, 170.039, 202.039, 234.039, 266.039, 299.039, 331.039, 363.039,
  396.039, 428.039, 460.039, 492.039, 525.039, 557.039, 589.039, 622.039,
]

const VERTICAL_LINES = [64, 183, 344.803, 452.803, 560.803, 668.803, 776.803, 884.803, 992.803, 1101, 1209, 1312]

export function HeroWhiteGrid() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[16%] bottom-0 z-[1]" aria-hidden>
      <svg
        viewBox="0 0 1392 756"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-70"
      >
        <defs>
          <clipPath id="hero-grid-clip">
            <rect x="64" y="88" width="1264" height="668" />
          </clipPath>
          <filter id="hero-grid-glow" x="104" y="-374" width="1184" height="555" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="57" />
          </filter>
        </defs>

        <g clipPath="url(#hero-grid-clip)" stroke="#DEE2E7" strokeWidth="0.79">
          {HORIZONTAL_LINES.map((y) => (
            <line key={`h-${y}`} x1="64" y1={y} x2="1312" y2={y} />
          ))}
          {VERTICAL_LINES.map((x) => (
            <line key={`v-${x}`} x1={x} y1="28.7363" x2={x} y2="755.536" />
          ))}
        </g>

        <ellipse cx="696" cy="-96.5" rx="478" ry="163.5" fill="#FBFBFB" filter="url(#hero-grid-glow)" opacity="0.55" />
      </svg>
    </div>
  )
}
