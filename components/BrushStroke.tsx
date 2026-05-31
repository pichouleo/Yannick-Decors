/** Séparateurs en coup de pinceau SVG entre les sections */

interface BrushStrokeProps {
  color?: string
  flip?: boolean
  className?: string
}

export function BrushDivider({ color = '#F5F4F0', flip = false, className = '' }: BrushStrokeProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
      style={{ marginBottom: '-2px' }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: '80px', display: 'block' }}
      >
        <path
          d="M0,40 C120,10 240,70 480,45 C720,20 960,65 1200,40 C1320,27 1400,50 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export function BrushAccent({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 16"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      aria-hidden="true"
    >
      <path
        d="M4,8 C20,2 40,14 60,8 C80,2 100,14 116,8"
        stroke="#C4956A"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M8,11 C24,6 44,16 64,10 C84,4 104,15 112,10"
        stroke="#C4956A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  )
}

export function BrushUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 14"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-xs ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2,7 C40,2 80,12 120,7 C160,2 185,10 198,7"
        stroke="#C4956A"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
