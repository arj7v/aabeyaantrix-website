/**
 * Hero motif: an abstract MEP schematic — chilled-water pipework, a duct run,
 * valves and a pump — drawn as fine lines on a blueprint grid. This is the
 * "plant room, not skyline" idea from DESIGN.md, and doubles as the
 * structural fallback until real site photography is cleared.
 *
 * `tone="dark"` re-tints the linework for the navy hero (brand blue goes
 * dark-on-dark there, so the lines lift to a lighter tint and the component
 * bodies fill with the navy ground to read as hollow, like a real drawing).
 *
 * The pipe runs draw themselves in once on mount — a single orchestrated
 * moment, not an ambient loop. Disabled under prefers-reduced-motion.
 * Purely decorative, so it's hidden from assistive tech.
 */
export function BlueprintSchematic({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  const line = dark ? "#5c9ee0" : "var(--blue)";
  const bodyFill = dark ? "var(--navy)" : "var(--paper)";
  const gridStroke = dark ? "#5c9ee0" : "var(--blue)";
  const gridOpacity = dark ? 0.22 : 0.14;
  const frameOpacity = dark ? 0.3 : 0.35;
  const dimStroke = dark ? "var(--on-navy-muted)" : "var(--steel)";

  return (
    <svg
      viewBox="0 0 480 360"
      className={`schematic ${className}`}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M24 0H0V24"
            fill="none"
            stroke={gridStroke}
            strokeWidth="0.5"
            opacity={gridOpacity}
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
        stroke={line}
        strokeWidth="1"
        opacity={frameOpacity}
      />

      {/* main chilled-water supply/return lines */}
      <g
        fill="none"
        stroke={line}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="draw draw-1" d="M40 96 H300 V210 H392" />
        <path className="draw draw-2" d="M40 132 H264 V246 H392" />
      </g>

      {/* duct run (double line, orange accent) */}
      <g fill="none" stroke="var(--orange)" strokeWidth="1.6" opacity="0.9">
        <path className="draw draw-3" d="M96 300 H360" />
        <path className="draw draw-3" d="M96 316 H360" />
        <path d="M120 300 V316 M168 300 V316 M216 300 V316 M264 300 V316 M312 300 V316" />
      </g>

      {/* pump on the supply line */}
      <g stroke={line} strokeWidth="2.4" fill={bodyFill}>
        <circle cx="300" cy="96" r="16" />
        <path d="M300 80 L314 96 L300 112 Z" fill={line} stroke="none" />
      </g>

      {/* gate valves */}
      <g stroke={line} strokeWidth="2.4" fill={bodyFill}>
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
      <g stroke={line} strokeWidth="2.4" fill={bodyFill}>
        <circle cx="392" cy="210" r="7" />
        <circle cx="392" cy="246" r="7" />
      </g>

      {/* dimension tick */}
      <g stroke={dimStroke} strokeWidth="1" opacity="0.7">
        <path d="M40 168 H264" />
        <path d="M40 163 V173 M264 163 V173" />
      </g>
    </svg>
  );
}
