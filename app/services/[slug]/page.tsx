import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  company,
  servicesToShow,
  featuredServices,
  mepTrades,
  getService,
  SITE_URL,
} from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { ServiceMedia } from "@/components/ServiceMedia";
import { ArrowIcon } from "@/components/icons";
import { getNonce } from "@/lib/nonce";

export function generateStaticParams() {
  return servicesToShow().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const nonce = await getNonce();
  const isMepHub = service.category === "mep" && service.featured;
  const isGranularMepTrade = service.category === "mep" && !service.featured;

  // Sidebar: sibling featured capabilities, always — this is the "what else
  // do you do" list regardless of which kind of page you're on.
  const otherCapabilities = featuredServices().filter(
    (s) => s.slug !== service.slug,
  );

  const crumbs = isGranularMepTrade
    ? [
        { href: "/services", label: "Services" },
        { href: "/services/mep-technical-services", label: "MEP & Technical Services" },
        { href: `/services/${service.slug}`, label: service.name },
      ]
    : [
        { href: "/services", label: "Services" },
        { href: `/services/${service.slug}`, label: service.name },
      ];

  // Service structured data — ties the page to the business and the area it
  // covers, which is what local packs read for "<trade> in Dubai" queries.
  // Note: this associates the service with the company and describes its
  // scope; it does not itself assert a licence. See content/site.ts for why
  // `licensed: false` services use capability language rather than a
  // licence-backed claim.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "GeneralContractor",
      name: company.legalName,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${company.address.warehouse}, ${company.address.building}, ${company.address.street}`,
        addressLocality: company.address.area,
        addressRegion: company.address.emirate,
        addressCountry: "AE",
      },
    },
    areaServed: company.areaServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} — scope`,
      itemListElement: service.scopeIncludes.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHeader
        title={service.heading}
        intro={service.summary}
        crumbs={crumbs}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <ServiceMedia
                service={service}
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel">
              {service.detail}
            </p>

            {isMepHub ? (
              <>
                <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
                  The six licensed activities
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-steel">
                  Each of these is on trade licence {company.tradeLicence}.
                </p>
                <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line sm:grid-cols-2">
                  {mepTrades().map((trade) => (
                    <li key={trade.slug}>
                      <Link
                        href={`/services/${trade.slug}`}
                        className="group flex h-full items-center gap-3 bg-paper px-5 py-4 transition-colors duration-200 hover:bg-surface"
                      >
                        <span className="flex-1 text-sm font-medium leading-snug text-navy">
                          {trade.name}
                        </span>
                        <ArrowIcon className="nudge h-4 w-4 shrink-0 text-steel transition-colors duration-200 group-hover:text-cta" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
                  What this covers
                </h2>
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.scopeIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed text-steel">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-12 rounded-xl border border-line bg-surface p-6">
              <h2 className="text-lg font-semibold text-navy">
                Where we work
              </h2>
              <p className="mt-2 leading-relaxed text-steel">
                We&apos;re based in {company.address.area},{" "}
                {company.address.emirate}, and take this work on across the{" "}
                {company.address.country} — for developers, main contractors,
                consultants, facilities managers and private clients.
              </p>
            </div>
          </div>

          {/* Other capabilities */}
          <aside className="lg:pt-2">
            <h2 className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
              Other capabilities
            </h2>
            <ul className="mt-5 space-y-px overflow-hidden rounded-xl border border-line">
              {otherCapabilities.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex items-center gap-3 bg-paper px-4 py-3.5 transition-colors duration-200 hover:bg-surface"
                  >
                    <span className="flex-1 text-sm font-medium leading-snug text-navy">
                      {other.name}
                    </span>
                    <ArrowIcon className="nudge h-4 w-4 shrink-0 text-steel transition-colors duration-200 group-hover:text-cta" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>

      <CtaBand heading={`Need ${service.name.toLowerCase()} in Dubai?`} />
    </>
  );
}
