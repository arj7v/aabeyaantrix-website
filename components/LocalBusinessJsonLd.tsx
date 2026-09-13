import { company, SITE_URL } from "@/content/site";

/**
 * LocalBusiness structured data — the highest-leverage SEO item for a Dubai
 * contractor. Emitted as a JSON-LD script. We build the object and serialise
 * with JSON.stringify (no raw HTML), so there is no injection surface.
 */
export function LocalBusinessJsonLd() {
  const { address, geo } = company;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.legalName,
    alternateName: company.shortName,
    slogan: company.tagline,
    url: SITE_URL,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.warehouse}, ${address.building}, ${address.street}`,
      addressLocality: address.area,
      addressRegion: address.emirate,
      addressCountry: "AE",
      postOfficeBoxNumber: address.poBox,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    identifier: [
      { "@type": "PropertyValue", name: "Trade Licence", value: company.tradeLicence },
      { "@type": "PropertyValue", name: "Commercial Register", value: company.commercialRegister },
      { "@type": "PropertyValue", name: "Dubai Chamber Membership", value: company.chamberMembership },
      { "@type": "PropertyValue", name: "Makani", value: address.makani },
    ],
  };

  if (company.email) data.email = company.email;

  // The only place we use dangerouslySetInnerHTML: inline JSON-LD requires it,
  // because React HTML-escapes <script> text content and would break the JSON.
  // The payload is a static, company-controlled object (no user input), so
  // there is no XSS surface. We still escape `<` so a value could never emit a
  // literal </script> and break out of the element.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
