import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Selected Project Experience | Fit-Out, Renovation & MEP in the UAE",
  description:
    "Selected fit-out, renovation and MEP work across Dubai, Sharjah and the UAE — described by scope, sector and location.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Selected project experience"
        intro="We describe our work by scope, sector and location rather than by client name. For relevant references on a specific project type, the quickest route is a direct conversation."
        crumbs={[{ href: "/projects", label: "Projects" }]}
      />

      <Container className="py-16 sm:py-20">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="lift overflow-hidden rounded-xl border border-line bg-paper hover:border-blue/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-blue">
                  {project.sector}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-navy">
                  {project.scope}
                </h2>
                <p className="mt-4 border-t border-line pt-4 font-mono text-sm text-steel">
                  {project.location}
                  {project.year ? ` · ${project.year}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm text-steel">
          Client names are shown only with written permission. Ask us and
          we&apos;ll walk you through comparable work in confidence. Photos
          above illustrate the sector and are not photographs of these
          specific projects.
        </p>
      </Container>

      <CtaBand heading="Want references for your project type?" />
    </>
  );
}
