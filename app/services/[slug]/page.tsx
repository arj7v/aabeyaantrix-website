import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  company,
  servicesToShow,
  getService,
  SITE_URL,
} from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcons";
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
  const others = servicesToShow().filter((s) => s.slug !== service.slug);

  // Service structured data — ties the page to the business and the area it
  // covers, which is what local packs read for "<trade> in Dubai" queries.
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
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.name },
        ]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <ServiceIcon
              slug={service.slug}
              className="h-10 w-10 text-blue"
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
              {service.detail}
            </p>

            <h2 className="mt-12 text-2xl font-semibold tracking-tight text-navy">
              What this scope covers
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

            <div className="mt-12 rounded-xl border border-line bg-surface p-6">
              <h2 className="text-lg font-semibold text-navy">
                Where we work
              </h2>
              <p className="mt-2 leading-relaxed text-steel">
                We&apos;re based in {company.address.area},{" "}
                {company.address.emirate}, and take this work on across the{" "}
                {company.address.country} — for developers, main contractors,
                consultants and facilities managers.
              </p>
            </div>
          </div>

          {/* Other services */}
          <aside className="lg:pt-2">
            <h2 className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
              Other services
            </h2>
            <ul className="mt-5 space-y-px overflow-hidden rounded-xl border border-line">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex items-center gap-3 bg-paper px-4 py-3.5 transition-colors duration-200 hover:bg-surface"
                  >
                    <ServiceIcon
                      slug={other.slug}
                      className="h-5 w-5 shrink-0 text-blue transition-colors duration-200 group-hover:text-cta"
                    />
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
