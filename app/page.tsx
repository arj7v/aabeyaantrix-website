import Link from "next/link";
import { company, servicesToShow, projects } from "@/content/site";
import { Container } from "@/components/Container";
import { CallButton, WhatsAppLink } from "@/components/CtaButtons";
import { BlueprintSchematic } from "@/components/BlueprintSchematic";
import { RegistrationPlate } from "@/components/RegistrationPlate";
import { CtaBand } from "@/components/CtaBand";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ServiceIcon } from "@/components/ServiceIcons";
import { ArrowIcon } from "@/components/icons";

export default function Home() {
  const services = servicesToShow();

  return (
    <>
      <LocalBusinessJsonLd />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16 lg:pt-20">
          <div>
            <div className="hero-rise-1 h-1 w-14 bg-orange" />
            <h1 className="hero-rise-1 mt-6 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              MEP &amp; building-services contracting in Dubai
            </h1>
            <p className="hero-rise-2 mt-6 max-w-xl text-lg leading-relaxed text-on-navy">
              {company.legalName} installs and maintains the systems that make
              buildings work — HVAC, electromechanical plant, plumbing and
              sanitary, district cooling and technical services. Licensed,
              Dubai Chamber registered, based in Al Quoz Industrial First.
            </p>

            <div className="hero-rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppLink tone="onNavy" />
            </div>
          </div>

          <div className="hero-rise-4 relative">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-2 shadow-[var(--shadow-lg)]">
              <BlueprintSchematic tone="dark" className="h-full w-full" />
            </div>
          </div>
        </Container>

        {/* Trust strip — the registration numbers as a hairline band. */}
        <div className="relative border-t border-white/10">
          <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
            {[
              ["Trade licence", company.tradeLicence],
              ["Dubai Chamber", company.chamberMembership],
              ["Commercial reg.", company.commercialRegister],
              ["Makani", company.address.makani],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-on-navy-muted">
                  {label}
                </span>
                <span className="font-mono text-sm text-white">{value}</span>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                What we do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Six activities, each on our Dubai trade licence. We work for
                developers, main contractors, consultants and facilities
                managers across residential, commercial and industrial
                projects in the UAE.
              </p>
            </div>
            <Link
              href="/services"
              className="link-underline shrink-0 self-start font-semibold text-blue md:self-auto"
            >
              All services
            </Link>
          </div>

          <ul className="mt-12 border-t border-line">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-line">
                <Link
                  href={`/services/${service.slug}`}
                  className="row-item group flex flex-col gap-3 py-6 pl-5 pr-4 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="flex items-center gap-4 sm:w-[42%] sm:shrink-0">
                    <ServiceIcon
                      slug={service.slug}
                      className="h-7 w-7 shrink-0 text-blue transition-colors duration-200 group-hover:text-cta"
                    />
                    <h3 className="text-lg font-semibold leading-snug text-navy">
                      {service.name}
                    </h3>
                  </span>
                  <p className="flex-1 leading-relaxed text-steel">
                    {service.summary}
                  </p>
                  <ArrowIcon className="nudge hidden h-5 w-5 shrink-0 text-steel transition-colors duration-200 group-hover:text-cta sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* -------------------------------------------------------- Selected work */}
      <section className="relative overflow-hidden bg-surface">
        <div
          className="blueprint-grid-light absolute inset-0"
          aria-hidden="true"
        />
        <Container className="relative py-20 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Selected work
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                Described by scope, sector and location. We&apos;re glad to
                talk through relevant references directly.
              </p>
            </div>
            <Link
              href="/projects"
              className="link-underline shrink-0 self-start font-semibold text-blue md:self-auto"
            >
              More work
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="lift rounded-xl border border-line bg-paper p-6 hover:border-blue/30"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-blue">
                  {project.sector}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">
                  {project.scope}
                </h3>
                <p className="mt-3 font-mono text-sm text-steel">
                  {project.location}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Registration */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              A registered, licensed contractor
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              A limited liability company licensed by the {company.authority}{" "}
              and a member of the Dubai Chamber of Commerce. Our registration
              details are published in full — verify them before you engage us.
            </p>
          </div>
          <div className="mt-10">
            <RegistrationPlate />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
