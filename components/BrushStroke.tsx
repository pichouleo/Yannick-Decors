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
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: '56px', display: 'block' }}
      >
        <path
          d="M0,28 C80,8 160,48 280,32 C400,16 480,44 600,28 C720,12 840,46 960,30 C1080,14 1200,42 1320,26 C1380,18 1420,32 1440,28 L1440,56 L0,56 Z"
          fill={color}
        />
        {/* Stroke décoratif légèrement décalé */}
        <path
          d="M0,36 C100,20 200,52 360,36 C520,20 640,50 780,34 C920,18 1040,48 1200,32 C1300,22 1380,38 1440,34"
          fill="none"
          stroke={color}
          strokeWidth="3"
          opacity="0.4"
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
