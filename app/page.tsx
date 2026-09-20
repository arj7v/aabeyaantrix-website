import Image from "next/image";
import Link from "next/link";
import {
  company,
  featuredServices,
  sectors,
  process,
  whyChooseUs,
  projects,
  images,
} from "@/content/site";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/CtaButtons";
import { RegistrationPlate } from "@/components/RegistrationPlate";
import { CtaBand } from "@/components/CtaBand";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ArrowIcon } from "@/components/icons";

export default function Home() {
  const featured = featuredServices();

  return (
    <>
      <LocalBusinessJsonLd />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden text-white">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Stock photo, not a real project — see content/site.ts. Gradient
            keeps the hero text legible over whatever the photo does. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30"
          aria-hidden="true"
        />
        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="hero-rise-1 h-1 w-14 bg-orange" />
          <h1 className="hero-rise-1 mt-6 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Complete interior fit-out &amp; renovation solutions
          </h1>
          <p className="hero-rise-2 mt-6 max-w-xl text-lg leading-relaxed text-on-navy">
            From concept to completion — {company.legalName} designs,
            renovates, fits out and delivers complete spaces with one
            accountable team and all major trades under one roof, in Dubai
            and across the UAE.
          </p>

          <div className="hero-rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn inline-flex items-center justify-center gap-2.5 rounded-lg bg-cta px-6 py-3.5 text-[0.95rem] font-semibold text-white hover:bg-cta-hover"
            >
              Get a renovation quote
              <ArrowIcon className="h-[1.05em] w-[1.05em]" />
            </Link>
            <WhatsAppLink tone="onNavy" />
          </div>
        </Container>

        {/* Trust bar */}
        <div className="relative border-t border-white/10 bg-black/10">
          <Container className="grid grid-cols-1 gap-x-10 gap-y-4 py-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-on-navy-muted">
                Emirates served
              </p>
              <p className="mt-1 font-semibold">Dubai · Sharjah · Abu Dhabi</p>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-on-navy-muted">
                Turnkey capability
              </p>
              <p className="mt-1 font-semibold">
                Design · Fit-out · Civil · MEP · Handover
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-on-navy-muted">
                Project experience
              </p>
              <p className="mt-1 font-semibold">
                Residential · Commercial · Hospitality · Retail
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ------------------------------------------------------------- About */}
      <section>
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
            <Image
              src={images.about}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Design &amp; construction, without the handoff gap
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel">
              {company.legalName} is a Dubai-based interior fit-out,
              renovation and building contracting company delivering complete
              solutions for residential, commercial, hospitality and retail
              spaces.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              From initial survey and design coordination to demolition,
              civil works, MEP, fit-out and final handover, we manage the
              process through one accountable team — helping clients maintain
              better control over quality, timelines and communication.
            </p>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- What we deliver */}
      <section className="bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What we deliver
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              One accountable team, four capabilities — coordinated as a
              single turnkey programme or engaged on their own.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="lift group flex flex-col overflow-hidden rounded-xl border border-line bg-paper hover:border-blue/30"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold leading-snug text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-steel">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">
                    Learn more
                    <ArrowIcon className="nudge h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- Sectors served */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Sectors we serve
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.name}>
                <div className="h-0.5 w-8 bg-orange" />
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {sector.name}
                </h3>
                <p className="mt-2 leading-relaxed text-steel">{sector.blurb}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Process */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our process
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-navy">
              A simple, coordinated path from first site visit to final
              handover.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div key={step.step}>
                <p className="font-mono text-sm text-orange">{step.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-on-navy">
                  {step.blurb}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- Why choose us */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Built on quality, delivered with integrity
            </h2>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((point) => (
              <div key={point.title}>
                <div className="h-0.5 w-8 bg-orange" />
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {point.title}
                </h3>
                <p className="mt-2 leading-relaxed text-steel">{point.blurb}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- Selected work */}
      <section className="bg-surface">
        <Container className="py-20 sm:py-24">
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
                className="lift overflow-hidden rounded-xl border border-line bg-paper hover:border-blue/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-wider text-blue">
                    {project.sector}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">
                    {project.scope}
                  </h3>
                  <p className="mt-3 font-mono text-sm text-steel">
                    {project.location}
                  </p>
                </div>
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
              A registered contractor
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              A limited liability company licensed by the {company.authority}{" "}
              and a member of the Dubai Chamber of Commerce.
            </p>
          </div>
          <div className="mt-10">
            <RegistrationPlate />
          </div>
        </Container>
      </section>

      <CtaBand
        heading="Let's build your next space."
        body="Tell us what you are planning — whether it is a villa renovation, apartment makeover, office fit-out, retail project or complete turnkey renovation. We can arrange a site visit and prepare a clear proposal."
      />
    </>
  );
}
