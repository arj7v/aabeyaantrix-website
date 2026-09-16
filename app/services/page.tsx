import type { Metadata } from "next";
import Link from "next/link";
import { company, servicesToShow } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { ServiceIcon } from "@/components/ServiceIcons";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "MEP Services in Dubai | HVAC, Plumbing, District Cooling",
  description:
    "Licensed MEP and building-services activities in Dubai: air-conditioning and ventilation, electromechanical, plumbing and sanitary, pipe repair, district cooling and technical services across the UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = servicesToShow();

  return (
    <>
      <PageHeader
        title="MEP & building services in Dubai"
        intro={`The six activities on trade licence ${company.tradeLicence}. Each is delivered by a licensed team for developers, main contractors, consultants and facilities managers across the UAE.`}
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="lift group flex flex-col rounded-xl border border-line bg-paper p-7 hover:border-blue/30"
            >
              <ServiceIcon
                slug={service.slug}
                className="h-9 w-9 text-blue transition-colors duration-200 group-hover:text-cta"
              />
              <h2 className="mt-5 text-xl font-semibold leading-snug text-navy">
                {service.name}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-steel">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                Read more
                <ArrowIcon className="nudge h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 max-w-2xl border-t border-line pt-6 text-sm leading-relaxed text-steel">
          Scope varies by project. If what you need sits alongside these
          activities, call and we&apos;ll tell you plainly whether it&apos;s
          something we can take on.
        </p>
      </Container>

      <CtaBand heading="Need one of these on a live project?" />
    </>
  );
}
