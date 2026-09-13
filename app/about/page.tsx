import type { Metadata } from "next";
import { company } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RegistrationPlate } from "@/components/RegistrationPlate";
import { CtaBand } from "@/components/CtaBand";
import { MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aabeyaantrix Building Contracting L.L.C is a Dubai MEP and building-services contractor based in Al Quoz Industrial First — licensed, LLC, and a Dubai Chamber member.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { address } = company;

  return (
    <>
      <PageHeader
        title="About the company"
        intro={`${company.legalName} is a Dubai-based MEP and building-services contractor working across residential, commercial and industrial projects.`}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-steel">
            <p>
              We install and maintain the mechanical, electrical and plumbing
              systems buildings depend on — air-conditioning and ventilation,
              electromechanical plant, plumbing and sanitary works, district
              cooling and the technical services that keep them running.
            </p>
            <p>
              Our clients are property developers, main contractors,
              consultants and facilities managers. The work ranges from
              installation on new developments to maintenance and repair on
              buildings already in use. We take on scope that sits squarely
              within our licensed activities, and we&apos;re direct about what
              does and doesn&apos;t.
            </p>
            <p>
              As a limited liability company licensed by the{" "}
              {company.authority} and a member of the Dubai Chamber of
              Commerce, we operate as a registered, accountable contractor —
              which, in this market, is the starting point for being trusted on
              site.
            </p>
          </div>

          <aside className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
              <div>
                <h2 className="font-semibold text-navy">Where we are</h2>
                <address className="mt-2 not-italic text-sm leading-relaxed text-steel">
                  {address.warehouse}
                  <br />
                  {address.building}
                  <br />
                  {address.street}, {address.area}
                  <br />
                  {address.emirate}, {address.country}
                </address>
                <dl className="mt-4 space-y-2">
                  <div>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                      Makani
                    </dt>
                    <dd className="font-mono text-sm text-navy">
                      {address.makani}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
                      P.O. Box
                    </dt>
                    <dd className="font-mono text-sm text-navy">
                      {address.poBox}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-navy">
            Registration &amp; credentials
          </h2>
          <div className="mt-6">
            <RegistrationPlate />
          </div>
        </div>
      </Container>

      <CtaBand />
    </>
  );
}
