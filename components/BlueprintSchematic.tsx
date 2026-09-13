/**
 * Hero motif: an abstract MEP schematic — chilled-water pipework, a duct run,
 * valves and a pump — drawn as fine lines on a blueprint grid in brand blue.
 * This is the "plant room, not skyline" idea from DESIGN.md, and doubles as
 * the typographic/structural fallback when real site photography isn't cleared.
 * Purely decorative, so it's hidden from assistive tech.
 */
export function BlueprintSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id="grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0V24"
            fill="none"
            stroke="var(--blue)"
            strokeWidth="0.5"
            opacity="0.14"
          />
        </pattern>
      </defs>

      {/* blueprint field */}
      <rect x="0" y="0" width="480" height="360" fill="url(#grid)" />
      <rect
        x="0.5"
        y="0.5"
        width="479"
        height="359"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* main chilled-water supply/return lines */}
      <g
        fill="none"
        stroke="var(--blue)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 96 H300 V210 H392" />
        <path d="M40 132 H264 V246 H392" />
      </g>

      {/* duct run (double line, orange accent) */}
      <g fill="none" stroke="var(--orange)" strokeWidth="1.6" opacity="0.9">
        <path d="M96 300 H360" />
        <path d="M96 316 H360" />
        <path d="M120 300 V316 M168 300 V316 M216 300 V316 M264 300 V316 M312 300 V316" />
      </g>

      {/* pump on the supply line */}
      <g stroke="var(--blue)" strokeWidth="2.4" fill="var(--paper)">
        <circle cx="300" cy="96" r="16" />
        <path d="M300 80 L314 96 L300 112 Z" fill="var(--blue)" stroke="none" />
      </g>

      {/* gate valves */}
      <g stroke="var(--blue)" strokeWidth="2.4" fill="var(--paper)">
        <g>
          <path d="M156 84 L172 108 M172 84 L156 108" />
          <rect x="152" y="80" width="24" height="32" rx="2" fill="none" />
        </g>
        <g>
          <path d="M204 120 L220 144 M220 120 L204 144" />
          <rect x="200" y="116" width="24" height="32" rx="2" fill="none" />
        </g>
      </g>

      {/* riser terminations */}
      <g stroke="var(--blue)" strokeWidth="2.4" fill="var(--paper)">
        <circle cx="392" cy="210" r="7" />
        <circle cx="392" cy="246" r="7" />
      </g>

      {/* dimension tick + label, mono-style feel */}
      <g stroke="var(--steel)" strokeWidth="1" opacity="0.7">
        <path d="M40 168 H264" />
        <path d="M40 163 V173 M264 163 V173" />
      </g>
    </svg>
  );
}
