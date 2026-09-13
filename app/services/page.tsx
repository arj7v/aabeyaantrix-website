import type { Metadata } from "next";
import { company, servicesToShow } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Licensed MEP and building-services activities: air-conditioning and ventilation, electromechanical, plumbing and sanitary, pipe repair, district cooling and technical services in Dubai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = servicesToShow();

  return (
    <>
      <PageHeader
        title="Services"
        intro={`The activities on trade licence ${company.tradeLicence}. Each is delivered by a licensed team for developers, main contractors, consultants and facilities managers.`}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24"
            >
              <div className="h-0.5 w-8 bg-orange" />
              <h2 className="mt-4 text-xl font-semibold text-navy">
                {service.name}
              </h2>
              <p className="mt-3 leading-relaxed text-steel">
                {service.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-16 max-w-2xl border-t border-line pt-6 text-sm text-steel">
          Scope varies by project. If what you need sits alongside these
          activities, call and we&apos;ll tell you plainly whether it&apos;s
          something we can take on.
        </p>
      </Container>

      <CtaBand heading="Need one of these on a live project?" />
    </>
  );
}
