import type { Metadata } from "next";
import { company } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RegistrationPlate } from "@/components/RegistrationPlate";
import { CtaBand } from "@/components/CtaBand";
import { MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | Interior Fit-Out & Renovation Contractor in Dubai",
  description:
    "Aabeyaantrix Building Contracting L.L.C is a Dubai-based interior fit-out, renovation and building contracting company delivering complete solutions across the UAE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { address } = company;

  return (
    <>
      <PageHeader
        title="Design & construction, without the handoff gap"
        intro={`${company.legalName} is a Dubai-based interior fit-out, renovation and building contracting company delivering complete solutions for residential, commercial, hospitality and retail spaces.`}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-steel">
            <p>
              From initial survey and design coordination to demolition,
              civil works, MEP, fit-out and final handover, we manage the
              process through one accountable team — helping clients maintain
              better control over quality, timelines and communication.
            </p>
            <p>
              Interior fit-out and renovation are what we lead with, backed
              by civil, electrical, plumbing, HVAC and technical capabilities
              in-house. Six of those technical activities — air-conditioning
              and ventilation, electromechanical, plumbing and sanitary, pipe
              repair, district cooling and technical services — sit on our
              Dubai trade licence; the rest we take on as coordinated scope
              within a turnkey project.
            </p>
            <p>
              As a limited liability company licensed by the{" "}
              {company.authority} and a member of the Dubai Chamber of
              Commerce, we operate as a registered, accountable contractor —
              which, in this market, is the starting point for being trusted
              on site.
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

        {/* Mission & vision */}
        <div className="mt-16 grid gap-10 border-t border-line pt-16 sm:grid-cols-2">
          <div>
            <div className="h-0.5 w-8 bg-orange" />
            <h2 className="mt-4 text-xl font-semibold text-navy">
              Our mission
            </h2>
            <p className="mt-3 leading-relaxed text-steel">{company.mission}</p>
          </div>
          <div>
            <div className="h-0.5 w-8 bg-orange" />
            <h2 className="mt-4 text-xl font-semibold text-navy">
              Our vision
            </h2>
            <p className="mt-3 leading-relaxed text-steel">{company.vision}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-16">
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
