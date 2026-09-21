/**
 * Single source of truth for every string on the site.
 *
 * Positioning updated 2026-09-20 per "Aabeyaantrix_Website_Content_Brief.docx",
 * handed to the family by company personnel: the site now leads with Interior
 * Fit-Out & Renovation, with civil, MEP, electrical and plumbing positioned as
 * supporting capabilities rather than the headline business.
 *
 * IMPORTANT — licensing distinction, carried through deliberately:
 * Trade licence 1439847 covers six specific MEP/technical activities (see the
 * six `category: "mep"` entries below, `licensed: true`). Interior fit-out,
 * renovation and civil/structural work are NOT on that licence. The content
 * brief itself doesn't address licensing, and no licence amendment or written
 * approval has been verified for these three — only a verbal assurance,
 * relayed secondhand, that this is fine. So: their copy uses capability/scope
 * language ("we deliver", "our team handles") and never says "licensed for"
 * or cites the trade-licence number in connection with them. Get that
 * written confirmation and this can be tightened to match the MEP pages.
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
  legalForm: "Limited Liability Company (LLC)",
  authority: "Dubai Department of Economy and Tourism",
  trn: null as string | null, // TODO: confirm with FTA certificate, or leave omitted if not VAT-registered
  yearEstablished: null as string | null, // TODO: licence issued Nov 2024 may be a renewal — confirm founding year before publishing "since 20XX"

  // From the content brief. Kept short — this is marketing copy, not a
  // verifiable fact, so it's fine as-is (unlike founding year or project
  // counts, which would need evidence).
  mission:
    "To deliver reliable interior fit-out and renovation solutions with clear communication, disciplined execution, quality workmanship and respect for each client's time and budget.",
  vision:
    "To become a trusted UAE partner for interior fit-out, renovation and turnkey project delivery — known for integrity, consistency and accountable execution.",

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
  // Confirmed 2026-09-21: real Workspace inbox on aabeyaantrixuae.com,
  // actively monitored (also the destination for the Web3Forms contact
  // form submissions).
  email: "info@aabeyaantrixuae.com" as string | null,

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

/** The public site URL — live on the company's own domain. */
// Blocker 1 resolved 2026-09-17: aabeyaantrix.com's registrant is unreachable
// (the original site's contractor is no longer contactable), so the company
// is standing on the domain it actually controls — aabeyaantrixuae.com,
// where Google Workspace mail already lives. DNS confirmed live and mail
// records (MX/SPF/DKIM) verified untouched. NB: the content brief's footer
// text still says the old aabeyaantrix.com / info@aabeyaantrix.com — not
// used here, deliberately, since that domain is dead.
export const SITE_URL = "https://www.aabeyaantrixuae.com";

/**
 * Stock photography, credited to Unsplash. These are placeholders standing
 * in for real project photography — NOT the company's own completed work.
 * The original brief was explicit that real photos need clearing before use
 * and stock needs disclosing; that hasn't happened yet, hence "STOCK" in
 * every alt text below and no photo used with a project it doesn't actually
 * depict as a real claim. Swap for real photography as soon as it's cleared.
 */
function unsplash(id: string, w = 1200, q = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  hero: unsplash("1600607687920-4e2a09cf159d", 1600),
  about: unsplash("1600210491892-03d54c0aaf87", 1200),
  fitOut: unsplash("1600210492486-724fe5c67fb0"),
  renovation: unsplash("1600607687939-ce8a6c25118c"),
  civil: unsplash("1541888946425-d81bb19240f5"),
  mep: unsplash("1621905252507-b35492cc74b4"),
  projectVillaRenovation: unsplash("1600585154526-990dced4db0d"),
  projectOfficeFitOut: unsplash("1497366754035-f200968a6e72"),
  projectHospitality: unsplash("1564501049412-61c2a3083791"),
  // Unsplash's own listed description is "A plumber repairs plumbing in a
  // bathroom" (free licence, photographer bhagya laxmi) — confirmed via the
  // photo's page metadata, not guessed from the ID like the images above.
  projectPlumbing: unsplash("1749532125405-70950966b0e5"),
} as const;

export type ServiceCategory = "fit-out" | "renovation" | "civil" | "mep";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  /** Shown as one of the four "What we deliver" homepage cards. */
  featured: boolean;
  /** Location-bearing H1 for the service's own page. */
  heading: string;
  summary: string;
  detail: string;
  /** What the scope covers. Describes the trade, not a claim about past jobs. */
  scopeIncludes: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
  /** True only for the six activities actually on trade licence 1439847. */
  licensed: boolean;
};

export const services: Service[] = [
  // --- The four featured "what we deliver" categories -----------------
  {
    slug: "interior-fit-out-design",
    name: "Interior Fit-Out & Design",
    category: "fit-out",
    featured: true,
    heading: "Interior fit-out & design in Dubai",
    summary: "Custom interiors for villas, apartments, offices, retail and hospitality spaces.",
    detail:
      "We design and deliver complete interior fit-outs — from initial layout and material coordination through joinery, finishes and final styling — for residential, commercial, retail and hospitality spaces across Dubai and the UAE. One team carries the project from concept through to a finished, occupied space.",
    scopeIncludes: [
      "Layout design and space planning",
      "Partitions, ceilings and flooring",
      "Joinery and custom millwork",
      "Finishes, painting and wall treatments",
      "Coordination with civil and MEP trades",
      "Furniture, fixtures and final styling",
    ],
    image: images.fitOut,
    metaTitle: "Interior Fit-Out & Design in Dubai | Aabeyaantrix",
    metaDescription:
      "Interior fit-out and design for villas, apartments, offices, retail and hospitality spaces in Dubai — one accountable team from concept to handover.",
    licensed: false,
  },
  {
    slug: "villa-property-renovation",
    name: "Villa & Property Renovation",
    category: "renovation",
    featured: true,
    heading: "Villa & property renovation in Dubai",
    summary: "Renovation, refurbishment and complete transformations.",
    detail:
      "Full and partial renovation for villas, apartments and commercial properties — from a single room to a complete transformation. We handle the demolition, coordination and rebuild so the property comes back better, on a schedule you can plan around.",
    scopeIncludes: [
      "Villa and apartment renovation",
      "Extensions and layout changes",
      "Kitchen and bathroom refurbishment",
      "Structural and cosmetic upgrades",
      "Refurbishment for occupied and vacant properties",
      "Snagging and defect rectification",
    ],
    image: images.renovation,
    metaTitle: "Villa & Property Renovation in Dubai | Aabeyaantrix",
    metaDescription:
      "Villa, apartment and property renovation in Dubai — refurbishment and complete transformations for residential and commercial spaces.",
    licensed: false,
  },
  {
    slug: "civil-structural-works",
    name: "Civil & Structural Works",
    category: "civil",
    featured: true,
    heading: "Civil & structural works in Dubai",
    summary: "Demolition, civil modifications and structural works.",
    detail:
      "Civil and structural scope in support of fit-out and renovation projects — demolition, structural modifications and the builder's work that has to happen before finishes go in. Coordinated as part of one turnkey programme rather than a separate contract.",
    scopeIncludes: [
      "Demolition and site preparation",
      "Structural modifications and openings",
      "Blockwork and masonry",
      "Waterproofing and concrete repair",
      "Builder's work in connection with MEP",
      "Site safety and access coordination",
    ],
    image: images.civil,
    metaTitle: "Civil & Structural Works in Dubai | Aabeyaantrix",
    metaDescription:
      "Civil and structural works in Dubai — demolition, structural modification and builder's work supporting fit-out and renovation projects.",
    licensed: false,
  },
  {
    slug: "mep-technical-services",
    name: "MEP & Technical Services",
    category: "mep",
    featured: true,
    heading: "MEP & technical services in Dubai",
    summary: "Electrical, plumbing, HVAC and related services.",
    detail:
      "The six MEP and technical activities on our Dubai trade licence, delivered as part of a turnkey fit-out or renovation, or on their own. See the licensed scope for each below.",
    scopeIncludes: [
      "Air-conditioning, ventilation & air filtration",
      "Electromechanical equipment installation & maintenance",
      "Plumbing & sanitary installation",
      "Sanitary installation & pipe repair",
      "District cooling services",
      "Technical services works",
    ],
    image: images.mep,
    metaTitle: "MEP & Technical Services in Dubai | Licensed Contractor",
    metaDescription:
      "Licensed MEP and technical services in Dubai — HVAC, electromechanical, plumbing and sanitary, district cooling and technical services, on trade licence 1439847.",
    licensed: true,
  },

  // --- The six licensed MEP trades (unchanged, still individually SEO'd) ---
  {
    slug: "air-conditioning-ventilation",
    name: "Air-conditioning, ventilation & air filtration",
    category: "mep",
    featured: false,
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
    image: images.mep,
    metaTitle: "HVAC Installation & Maintenance in Dubai | Air-Conditioning & Ventilation",
    metaDescription:
      "Licensed HVAC contractor in Dubai. Installation and maintenance of air-conditioning, ventilation and air-filtration systems for commercial, residential and industrial buildings across the UAE.",
    licensed: true,
  },
  {
    slug: "electromechanical",
    name: "Electromechanical equipment installation & maintenance",
    category: "mep",
    featured: false,
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
    image: images.mep,
    metaTitle: "Electromechanical Contractor in Dubai | Installation & Maintenance",
    metaDescription:
      "Electromechanical equipment installation and maintenance in Dubai — pumps, motors, control panels, power distribution and building plant. Licensed UAE contractor.",
    licensed: true,
  },
  {
    slug: "plumbing-sanitary",
    name: "Plumbing & sanitary installation",
    category: "mep",
    featured: false,
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
    image: images.mep,
    metaTitle: "Plumbing & Sanitary Installation Contractor in Dubai | UAE",
    metaDescription:
      "Licensed plumbing and sanitary installation in Dubai — hot and cold water supply, drainage, waste and sanitary fixtures for new build and refurbishment across the UAE.",
    licensed: true,
  },
  {
    slug: "sanitary-pipes-repair",
    name: "Sanitary installation & pipe repair",
    category: "mep",
    featured: false,
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
    image: images.mep,
    metaTitle: "Pipe Repair & Sanitary Services in Dubai | Leak & Drainage Repair",
    metaDescription:
      "Pipe repair and sanitary system services in Dubai — leak detection, blockage clearing, pipework replacement and fault diagnosis for occupied buildings across the UAE.",
    licensed: true,
  },
  {
    slug: "district-cooling",
    name: "District cooling services",
    category: "mep",
    featured: false,
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
    image: images.mep,
    metaTitle: "District Cooling Contractor in Dubai | ETS & Chilled-Water Services",
    metaDescription:
      "District cooling services in Dubai — energy transfer stations, chilled-water pipework, controls and in-building plant for developments served by district cooling.",
    licensed: true,
  },
  {
    slug: "technical-services",
    name: "Technical services works",
    category: "mep",
    featured: false,
    heading: "Technical services works in Dubai",
    summary: "General technical and building-services works supporting the trades above.",
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
    image: images.mep,
    metaTitle: "Building Technical Services in Dubai | MEP Support Works",
    metaDescription:
      "Technical services works in Dubai supporting MEP and building-services scope — specialist tasks handled by a licensed Dubai contractor for developers and facilities managers.",
    licensed: true,
  },
];

/** The four homepage "What we deliver" cards. */
export function featuredServices(): Service[] {
  return services.filter((s) => s.featured);
}

/** The six granular trades on the MEP licence — shown on the MEP category page. */
export function mepTrades(): Service[] {
  return services.filter((s) => s.category === "mep" && !s.featured);
}

/** Look up any service (featured category or granular trade) by slug. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Every real, publishable service — used for generateStaticParams and the sitemap. */
export function servicesToShow(): Service[] {
  return services;
}

export type Sector = { name: string; blurb: string };

/** From the content brief's "Sectors We Serve" section. */
export const sectors: Sector[] = [
  {
    name: "Residential & Villas",
    blurb: "Villa renovation, apartment renovation, extensions and complete interior transformations.",
  },
  {
    name: "Commercial & Offices",
    blurb: "Office fit-out, refurbishment, partitions, ceilings, flooring and MEP coordination.",
  },
  {
    name: "Retail & F&B",
    blurb: "Customer-facing interiors, refurbishment and turnkey fit-out solutions.",
  },
  {
    name: "Hospitality & Hotels",
    blurb: "Guest areas, rooms, public spaces and renovation works.",
  },
  {
    name: "Government & Institutional",
    blurb: "Fit-out, renovation and supporting civil/MEP works subject to project requirements.",
  },
];

export type ProcessStep = { step: string; title: string; blurb: string };

/** From the content brief's "Our Process" section. */
export const process: ProcessStep[] = [
  { step: "01", title: "Survey & Consultation", blurb: "Understand the property, requirements, budget and scope." },
  { step: "02", title: "Design & Proposal", blurb: "Coordinate layouts, finishes, materials and a clear quotation." },
  { step: "03", title: "Approvals & Planning", blurb: "Coordinate required drawings, permits, method statements and site planning." },
  { step: "04", title: "Demolition & Preparation", blurb: "Execute safe demolition and prepare the space for construction." },
  { step: "05", title: "Fit-Out & MEP", blurb: "Coordinate civil, electrical, plumbing, HVAC, joinery and interior works." },
  { step: "06", title: "Quality Check & Handover", blurb: "Snagging, testing, rectification and final handover." },
];

export type WhyPoint = { title: string; blurb: string };

/**
 * The content brief only fully specified one of these ("One Accountable
 * Team") before cutting off; the rest below are written in the same voice
 * to complete the section — general value-proposition copy, not factual
 * claims, so no verification gap the way an invented stat would be.
 */
export const whyChooseUs: WhyPoint[] = [
  { title: "One Accountable Team", blurb: "One coordinated team from survey to handover — no gaps between trades to fall through." },
  { title: "Clear Communication", blurb: "Straightforward updates on scope, timeline and cost, with no surprises at handover." },
  { title: "Multi-Trade Capability", blurb: "Interior, civil and MEP coordinated under one roof, so design intent survives contact with construction." },
  { title: "Careful Handover", blurb: "Snagging, testing and a proper walkthrough before we call a project done." },
];

export type Project = {
  slug: string;
  scope: string; // e.g. "MEP installation"
  sector: string; // e.g. "Hospitality"
  location: string;
  year?: string;
  client?: string; // ONLY if written permission exists — otherwise omitted (Blocker 3)
  image: string;
};

/**
 * Projects are described by scope / sector / location, NOT by client name
 * (Blocker 3 — naming clients needs written consent and invites verification).
 * These entries are generalised from the brochure's own hedged descriptions.
 * Images are stock (see `images` above) illustrating the sector, NOT photos
 * of the actual project — do not caption them as if they were.
 *
 * TODO: confirm each of these is accurate and cleared for publication; add
 * `year` and, only with written permission, `client`. Replace stock images
 * with real project photography (confirmed to be the company's own) once
 * cleared.
 */
export const projects: Project[] = [
  {
    slug: "hospitality-mep-sharjah",
    scope: "MEP installation & maintenance support",
    sector: "Hospitality",
    location: "Sharjah, UAE",
    image: images.projectHospitality,
  },
  {
    slug: "mixed-use-development-dubai",
    scope: "HVAC & electromechanical works",
    sector: "Commercial & Offices",
    location: "Dubai, UAE",
    image: images.projectOfficeFitOut,
  },
  {
    slug: "leisure-attraction-dubai",
    scope: "Plumbing, sanitary & technical services",
    sector: "Retail & F&B",
    location: "Dubai, UAE",
    // Picking by sector here (a generic retail-interior stock shot) read as
    // a straight-up mismatch next to "Plumbing, sanitary & technical
    // services" — the scope is the prominent text on the card, so the photo
    // needs to match that, not the sector label.
    image: images.projectPlumbing,
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
