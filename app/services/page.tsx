import type { Metadata } from "next";
import Link from "next/link";
import { featuredServices } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { ServiceMedia } from "@/components/ServiceMedia";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Interior Fit-Out, Renovation & MEP Services in Dubai",
  description:
    "Interior fit-out, renovation, civil and structural works, and licensed MEP services in Dubai — one accountable team for turnkey projects across the UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = featuredServices();

  return (
    <>
      <PageHeader
        title="What we deliver"
        intro="One accountable team, four capabilities — coordinated as a single turnkey programme or engaged on their own."
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="lift group flex flex-col overflow-hidden rounded-xl border border-line bg-paper hover:border-blue/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ServiceMedia
                  service={service}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-xl font-semibold leading-snug text-navy">
                  {service.name}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-steel">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                  Read more
                  <ArrowIcon className="nudge h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-14 max-w-2xl border-t border-line pt-6 text-sm leading-relaxed text-steel">
          Scope varies by project. If what you need sits alongside these
          capabilities, call and we&apos;ll tell you plainly whether it&apos;s
          something we can take on.
        </p>
      </Container>

      <CtaBand heading="Need one of these on a live project?" />
    </>
  );
}
