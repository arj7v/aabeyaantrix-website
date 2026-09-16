import Link from "next/link";
import { company, servicesToShow, projects } from "@/content/site";
import { Container } from "@/components/Container";
import { CallButton, WhatsAppLink } from "@/components/CtaButtons";
import { BlueprintSchematic } from "@/components/BlueprintSchematic";
import { RegistrationPlate } from "@/components/RegistrationPlate";
import { CtaBand } from "@/components/CtaBand";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export default function Home() {
  const services = servicesToShow();

  return (
    <>
      <LocalBusinessJsonLd />

      {/* Hero */}
      <section className="border-b border-line">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          <div className="hero-rise">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              MEP &amp; building-services contracting in Dubai.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
              {company.legalName} installs and maintains the systems that make
              buildings work — HVAC, electromechanical plant, plumbing and
              sanitary, district cooling and technical services. Based in Al
              Quoz Industrial First.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppLink />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <BlueprintSchematic className="h-full w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              What we do
            </h2>
            <p className="mt-3 text-steel">
              Six activities, each on our Dubai trade licence. We work for
              developers, main contractors, consultants and facilities
              managers across residential, commercial and industrial projects.
            </p>
          </div>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-blue sm:w-2/5 sm:shrink-0">
                    {service.name}
                  </h3>
                  <p className="text-steel">{service.summary}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/services"
              className="font-semibold text-blue hover:underline"
            >
              All services
            </Link>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-3 text-steel">
              Described by scope, sector and location. We&apos;re glad to talk
              through relevant references directly.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="bg-paper p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-blue">
                  {project.sector}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {project.scope}
                </h3>
                <p className="mt-2 font-mono text-sm text-steel">
                  {project.location}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/projects"
              className="font-semibold text-blue hover:underline"
            >
              More work
            </Link>
          </div>
        </Container>
      </section>

      {/* Registration / trust */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              A registered, licensed contractor
            </h2>
            <p className="mt-3 text-steel">
              A limited liability company licensed by the {company.authority}{" "}
              and a member of the Dubai Chamber of Commerce.
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
