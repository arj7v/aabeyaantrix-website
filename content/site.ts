/**
 * Single source of truth for every string on the site.
 * All values are verified against the DED commercial licence (No. 1439847)
 * and the company brochure — see BRIEF.md, Section 0.
 *
 * Anything marked `TODO:` is an unresolved gap. Do NOT invent values for
 * these — leave them null/empty and they will render as omitted.
 */

export const company = {
  legalName: "Aabeyaantrix Building Contracting L.L.C",
  shortName: "Aabeyaantrix",
  tagline: "Building with integrity",

  tradeLicence: "1439847",
  commercialRegister: "2464279",
  chamberMembership: "576016",
  paidUpCapital: "AED 300,000",
  legalForm: "Limited Liability Company (LLC)",
  authority: "Dubai Department of Economy and Tourism",
  trn: null as string | null, // TODO: confirm with FTA certificate, or leave omitted if not VAT-registered
  yearEstablished: null as string | null, // TODO: licence issued Nov 2024 may be a renewal — confirm founding year before publishing "since 20XX"

  address: {
    warehouse: "Warehouse No. 2",
    building: "Dubai Real Estate Corporation Building",
    street: "Street 5B",
    area: "Al Quoz Industrial First",
    emirate: "Dubai",
    country: "United Arab Emirates",
    poBox: "33124",
    makani: "2207982493",
  },

  // Updated 2026-09-17, given directly by the family (not from the licence/
  // brochure): the trade-licence landline (+971 4 299 2591) and the licence
  // mobile (+971 50 878 2591) are both retired from the site. `phone` is now
  // the priority contact — the owner's personal number — used for calls
  // *and* WhatsApp; `mobile` is a second, alternative line.
  phone: "+971506786270",
  phoneDisplay: "+971 50 678 6270",
  mobile: "+971585943224",
  mobileDisplay: "+971 58 594 3224",
  whatsapp: "971506786270", // same as `phone` — the priority number
  email: null as string | null, // TODO: no monitored inbox on aabeyaantrixuae.com confirmed yet. Publish only a monitored address.

  // Geo for LocalBusiness JSON-LD. Approximate centroid of Al Quoz Industrial
  // First; refine from the Makani number if a precise pin is needed.
  geo: { lat: 25.1279, lng: 55.2312 }, // TODO: verify exact coordinates for Warehouse No. 2 via Makani 2207982493

  /**
   * Where we actually take work. Supported by the brochure's stated target
   * market (UAE-wide) and by the Sharjah project — not an invented claim.
   * Used for `areaServed` in structured data.
   */
  areaServed: ["Dubai", "Sharjah", "Abu Dhabi", "United Arab Emirates"],
} as const;

/** The public site URL. `.vercel.app` until sign-off; do NOT wire a custom domain yet. */
// Blocker 1 resolved 2026-09-17: aabeyaantrix.com's registrant is unreachable
// (the original site's contractor is no longer contactable), so the company
// is standing on the domain it actually controls — aabeyaantrixuae.com,
// where Google Workspace mail already lives. DNS confirmed live and mail
// records (MX/SPF/DKIM) verified untouched.
export const SITE_URL = "https://www.aabeyaantrixuae.com";

export type Service = {
  slug: string;
  name: string;
  /** Location-bearing H1 for the service's own page. */
  heading: string;
  summary: string;
  detail: string;
  /** What the scope covers. Describes the trade, not a claim about past jobs. */
  scopeIncludes: string[];
  metaTitle: string;
  metaDescription: string;
  /** false = advertised in the brochure but NOT on the licence — excluded from render until Blocker 2 clears. */
  licensed: boolean;
};

/**
 * The six activities on trade licence 1439847 (licensed: true) plus the three
 * brochure-only activities (licensed: false). Only licensed services render;
 * see servicesToShow() below.
 */
export const services: Service[] = [
  {
    slug: "air-conditioning-ventilation",
    name: "Air-conditioning, ventilation & air filtration",
    heading: "Air-conditioning, ventilation & air filtration in Dubai",
    summary:
      "Installation and maintenance of HVAC and air-filtration systems for occupied and industrial spaces.",
    detail:
      "We install and maintain air-conditioning, ventilation and air-filtration systems — from air handling and fan-coil units to ductwork, dampers and filtration for commercial, residential and industrial buildings across Dubai and the wider UAE. Work covers new installation, replacement and planned maintenance.",
    scopeIncludes: [
      "Air handling units (AHUs) and fan-coil units (FCUs)",
      "Ductwork, dampers, grilles and diffusers",
      "Chilled-water pipework and insulation",
      "Air filtration and indoor air-quality systems",
      "Planned preventive maintenance and fault-finding",
      "System replacement and upgrades",
    ],
    metaTitle: "HVAC Installation & Maintenance in Dubai | Air-Conditioning & Ventilation",
    metaDescription:
      "Licensed HVAC contractor in Dubai. Installation and maintenance of air-conditioning, ventilation and air-filtration systems for commercial, residential and industrial buildings across the UAE.",
    licensed: true,
  },
  {
    slug: "electromechanical",
    name: "Electromechanical equipment installation & maintenance",
    heading: "Electromechanical installation & maintenance in Dubai",
    summary:
      "Integrated electrical and mechanical plant — pumps, motors, control systems and distribution.",
    detail:
      "Electromechanical scope brings the electrical and mechanical trades together: pumps, motors, control panels, power distribution and the plant that ties a building's services into one working system. We handle installation, commissioning support and ongoing maintenance for projects in Dubai and across the UAE.",
    scopeIncludes: [
      "Pumps, motors and drive assemblies",
      "Control panels and distribution boards",
      "Power distribution and cable containment",
      "Plant-room installation and commissioning support",
      "Preventive maintenance programmes",
      "Fault diagnosis and plant replacement",
    ],
    metaTitle: "Electromechanical Contractor in Dubai | Installation & Maintenance",
    metaDescription:
      "Electromechanical equipment installation and maintenance in Dubai — pumps, motors, control panels, power distribution and building plant. Licensed UAE contractor.",
    licensed: true,
  },
  {
    slug: "plumbing-sanitary",
    name: "Plumbing & sanitary installation",
    heading: "Plumbing & sanitary installation in Dubai",
    summary:
      "Water supply, drainage and sanitary fit-out to code, for new build and refurbishment.",
    detail:
      "Complete plumbing and sanitary installation: hot and cold water supply, drainage, waste and sanitary fixtures, installed to specification for new construction and refurbishment projects in Dubai and the UAE.",
    scopeIncludes: [
      "Hot and cold water supply systems",
      "Soil, waste and drainage installation",
      "Sanitary fixtures and fittings",
      "Pumps, tanks and booster sets",
      "Testing, flushing and handover",
      "Refurbishment and fit-out plumbing",
    ],
    metaTitle: "Plumbing & Sanitary Installation Contractor in Dubai | UAE",
    metaDescription:
      "Licensed plumbing and sanitary installation in Dubai — hot and cold water supply, drainage, waste and sanitary fixtures for new build and refurbishment across the UAE.",
    licensed: true,
  },
  {
    slug: "sanitary-pipes-repair",
    name: "Sanitary installation & pipe repair",
    heading: "Sanitary installation & pipe repair in Dubai",
    summary:
      "Repair and replacement of pipework and sanitary systems, including fault diagnosis.",
    detail:
      "Diagnosis, repair and replacement of pipework and sanitary systems — addressing leaks, blockages and failed sections, and restoring systems to reliable service. We work on occupied buildings across Dubai and the UAE where disruption has to be kept to a minimum.",
    scopeIncludes: [
      "Leak detection and localised repair",
      "Blocked drain and waste clearing",
      "Pipework section replacement",
      "Corroded and failed riser remediation",
      "Sanitary fixture repair and replacement",
      "Reactive call-outs for occupied buildings",
    ],
    metaTitle: "Pipe Repair & Sanitary Services in Dubai | Leak & Drainage Repair",
    metaDescription:
      "Pipe repair and sanitary system services in Dubai — leak detection, blockage clearing, pipework replacement and fault diagnosis for occupied buildings across the UAE.",
    licensed: true,
  },
  {
    slug: "district-cooling",
    name: "District cooling services",
    heading: "District cooling services in Dubai",
    summary:
      "Connection and servicing of chilled-water district-cooling systems and their in-building plant.",
    detail:
      "Work on chilled-water district-cooling systems and the in-building plant they feed — energy transfer stations, chilled-water pipework and associated controls — for developments served by district cooling in Dubai and across the UAE.",
    scopeIncludes: [
      "Energy transfer station (ETS) installation",
      "Chilled-water pipework and valve sets",
      "Heat exchangers and associated plant",
      "Controls, metering and BMS interface",
      "Commissioning support and balancing",
      "Planned maintenance and servicing",
    ],
    metaTitle: "District Cooling Contractor in Dubai | ETS & Chilled-Water Services",
    metaDescription:
      "District cooling services in Dubai — energy transfer stations, chilled-water pipework, controls and in-building plant for developments served by district cooling.",
    licensed: true,
  },
  {
    slug: "technical-services",
    name: "Technical services works",
    heading: "Technical services works in Dubai",
    summary:
      "General technical and building-services works supporting the trades above.",
    detail:
      "Technical services works covering the wider building-services scope that supports our core trades — the specialist tasks a developer, main contractor or facilities manager in Dubai needs handled by a licensed team.",
    scopeIncludes: [
      "Builder's work in connection with MEP",
      "Testing, inspection and snagging support",
      "Minor works and modifications",
      "Plant-room remediation and tidy-ups",
      "Site support for main contractors",
      "Coordination with consultants and FM teams",
    ],
    metaTitle: "Building Technical Services in Dubai | MEP Support Works",
    metaDescription:
      "Technical services works in Dubai supporting MEP and building-services scope — specialist tasks handled by a licensed Dubai contractor for developers and facilities managers.",
    licensed: true,
  },

  // --- Brochure-only activities: NOT on licence 1439847. licensed: false. ---
  // Excluded from render until Blocker 2 (permitted activities) is resolved.
  {
    slug: "building-contracting",
    name: "Building contracting",
    heading: "",
    summary: "",
    detail: "",
    scopeIncludes: [],
    metaTitle: "",
    metaDescription: "",
    licensed: false,
  },
  {
    slug: "electrical-fittings-contracting",
    name: "Electrical fittings contracting",
    heading: "",
    summary: "",
    detail: "",
    scopeIncludes: [],
    metaTitle: "",
    metaDescription: "",
    licensed: false,
  },
  {
    slug: "building-maintenance",
    name: "Building maintenance",
    heading: "",
    summary: "",
    detail: "",
    scopeIncludes: [],
    metaTitle: "",
    metaDescription: "",
    licensed: false,
  },
];

/** Only the activities cleared for publication. */
export function servicesToShow(): Service[] {
  return services.filter((s) => s.licensed);
}

/** Look up a publishable service by slug. Unlicensed slugs resolve to undefined. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug && s.licensed);
}

export type Project = {
  slug: string;
  scope: string; // e.g. "MEP installation"
  sector: string; // e.g. "Hospitality"
  location: string;
  year?: string;
  client?: string; // ONLY if written permission exists — otherwise omitted (Blocker 3)
  image?: string;
};

/**
 * Projects are described by scope / sector / location, NOT by client name
 * (Blocker 3 — naming clients needs written consent and invites verification).
 * These entries are generalised from the brochure's own hedged descriptions.
 *
 * TODO: confirm each of these is accurate and cleared for publication; add
 * `year` and, only with written permission, `client`. Add real photography
 * (confirmed to be the company's own, not stock) via `image`.
 */
export const projects: Project[] = [
  {
    slug: "hospitality-mep-sharjah",
    scope: "MEP installation & maintenance support",
    sector: "Hospitality",
    location: "Sharjah, UAE",
  },
  {
    slug: "mixed-use-development-dubai",
    scope: "HVAC & electromechanical works",
    sector: "Mixed-use development",
    location: "Dubai, UAE",
  },
  {
    slug: "leisure-attraction-dubai",
    scope: "Plumbing, sanitary & technical services",
    sector: "Leisure & retail",
    location: "Dubai, UAE",
  },
];

/** Primary nav — order matters. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
