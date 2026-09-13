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

  phone: "+97142992591", // landline, tel: format
  phoneDisplay: "+971 4 299 2591",
  mobile: "+971508782591",
  mobileDisplay: "+971 50 878 2591",
  whatsapp: "971508782591", // TODO: confirm the mobile line is the monitored WhatsApp number
  email: null as string | null, // TODO: blocked on the domain decision (Blocker 1). Publish only a monitored address.

  // Geo for LocalBusiness JSON-LD. Approximate centroid of Al Quoz Industrial
  // First; refine from the Makani number if a precise pin is needed.
  geo: { lat: 25.1279, lng: 55.2312 }, // TODO: verify exact coordinates for Warehouse No. 2 via Makani 2207982493
} as const;

/** The public site URL. `.vercel.app` until sign-off; do NOT wire a custom domain yet. */
export const SITE_URL = "https://aabeyaantrix-website.vercel.app"; // TODO: set to the final domain once Blocker 1 is resolved

export type Service = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
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
    summary:
      "Installation and maintenance of HVAC and air-filtration systems for occupied and industrial spaces.",
    detail:
      "We install and maintain air-conditioning, ventilation and air-filtration systems — from air handling and fan-coil units to ductwork, dampers and filtration for commercial, residential and industrial buildings. Work covers new installation, replacement and planned maintenance.",
    licensed: true,
  },
  {
    slug: "electromechanical",
    name: "Electromechanical equipment installation & maintenance",
    summary:
      "Integrated electrical and mechanical plant — pumps, motors, control systems and distribution.",
    detail:
      "Electromechanical scope brings the electrical and mechanical trades together: pumps, motors, control panels, power distribution and the plant that ties a building's services into one working system. We handle installation, commissioning support and ongoing maintenance.",
    licensed: true,
  },
  {
    slug: "plumbing-sanitary",
    name: "Plumbing & sanitary installation",
    summary:
      "Water supply, drainage and sanitary fit-out to code, for new build and refurbishment.",
    detail:
      "Complete plumbing and sanitary installation: hot and cold water supply, drainage, waste and sanitary fixtures, installed to specification for new construction and refurbishment projects.",
    licensed: true,
  },
  {
    slug: "sanitary-pipes-repair",
    name: "Sanitary installation & pipe repair",
    summary:
      "Repair and replacement of pipework and sanitary systems, including fault diagnosis.",
    detail:
      "Diagnosis, repair and replacement of pipework and sanitary systems — addressing leaks, blockages and failed sections, and restoring systems to reliable service.",
    licensed: true,
  },
  {
    slug: "district-cooling",
    name: "District cooling services",
    summary:
      "Connection and servicing of chilled-water district-cooling systems and their in-building plant.",
    detail:
      "Work on chilled-water district-cooling systems and the in-building plant they feed — energy transfer stations, chilled-water pipework and associated controls — for developments served by district cooling.",
    licensed: true,
  },
  {
    slug: "technical-services",
    name: "Technical services works",
    summary:
      "General technical and building-services works supporting the trades above.",
    detail:
      "Technical services works covering the wider building-services scope that supports our core trades — the specialist tasks a developer, main contractor or facilities manager needs handled by a licensed team.",
    licensed: true,
  },

  // --- Brochure-only activities: NOT on licence 1439847. licensed: false. ---
  // Excluded from render until Blocker 2 (permitted activities) is resolved.
  {
    slug: "building-contracting",
    name: "Building contracting",
    summary: "",
    detail: "",
    licensed: false,
  },
  {
    slug: "electrical-fittings-contracting",
    name: "Electrical fittings contracting",
    summary: "",
    detail: "",
    licensed: false,
  },
  {
    slug: "building-maintenance",
    name: "Building maintenance",
    summary: "",
    detail: "",
    licensed: false,
  },
];

/** Only the activities cleared for publication. */
export function servicesToShow(): Service[] {
  return services.filter((s) => s.licensed);
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
