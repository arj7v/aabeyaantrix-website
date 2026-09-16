import type { ComponentType, SVGProps } from "react";

/**
 * One line-drawn glyph per licensed activity, drawn in the same 24-unit grid
 * and stroke weight so the set reads as one family. These are schematic
 * (diffuser, pump, trap, valve) rather than generic — the trades are the
 * subject, so the icons should look like plant, not clip art.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Ceiling diffuser + airflow — HVAC / ventilation. */
function AirIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="8" rx="1" />
      <path d="M7 8h10M7 4v8M17 4v8" />
      <path d="M5 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 2-2" />
      <path d="M5 20c2 0 2 1.6 4 1.6" opacity="0.5" />
    </svg>
  );
}

/** Pump volute with drive shaft — electromechanical plant. */
function PumpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="13" r="5.5" />
      <path d="M10 7.5V13l4 2.5" />
      <path d="M15.5 13H21M18 10.5V13" />
      <path d="M4.5 13H2M10 18.5V21" />
      <path d="M13 5h6" />
    </svg>
  );
}

/** Supply riser and trap — plumbing & sanitary. */
function PipeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3v8a3 3 0 0 0 3 3h3" />
      <path d="M19 21v-6a3 3 0 0 0-3-3h-5" />
      <circle cx="5" cy="3" r="1.2" />
      <circle cx="19" cy="21" r="1.2" />
      <path d="M9 14v-2.5M13 14v-2.5" opacity="0.5" />
    </svg>
  );
}

/** Pipe section with repair coupling — pipe repair. */
function RepairIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9h6M16 9h6M2 15h6M16 15h6" />
      <rect x="8" y="6" width="8" height="12" rx="1" />
      <path d="M11 6v12M13 6v12" opacity="0.5" />
      <path d="M8 12h8" />
    </svg>
  );
}

/** Chilled-water loop with heat-exchange plates — district cooling. */
function CoolingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v20M12 7l-3.5-3M12 7l3.5-3M12 17l-3.5 3M12 17l3.5 3" />
      <path d="M3.5 7l17 10M3.5 17l17-10" opacity="0.55" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

/** Gauge / commissioning dial — technical services. */
function TechnicalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12l4-3" />
      <path d="M12 3.5v2M20.5 12h-2M12 20.5v-2M3.5 12h2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Keyed by service slug from content/site.ts. */
export const serviceIcons: Record<string, ComponentType<IconProps>> = {
  "air-conditioning-ventilation": AirIcon,
  electromechanical: PumpIcon,
  "plumbing-sanitary": PipeIcon,
  "sanitary-pipes-repair": RepairIcon,
  "district-cooling": CoolingIcon,
  "technical-services": TechnicalIcon,
};

export function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = serviceIcons[slug] ?? TechnicalIcon;
  return <Icon className={className} />;
}
