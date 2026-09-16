import type { Metadata } from "next";
import { projects } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "MEP Projects in Dubai & the UAE | Selected Work",
  description:
    "Selected MEP and building-services work across Dubai, Sharjah and the UAE — described by scope, sector and location.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Selected work across the UAE"
        intro="We describe our work by scope, sector and location rather than by client name. For relevant references on a specific project type, the quickest route is a direct conversation."
        crumbs={[{ href: "/projects", label: "Projects" }]}
      />

      <Container className="py-16 sm:py-20">
        <ul className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="lift rounded-xl border border-line bg-paper p-7 hover:border-blue/30"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-wider text-blue">
                {project.sector}
              </p>
              <h2 className="mt-3 text-xl font-semibold leading-snug text-navy">
                {project.scope}
              </h2>
              <p className="mt-4 border-t border-line pt-4 font-mono text-sm text-steel">
                {project.location}
                {project.year ? ` · ${project.year}` : ""}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm text-steel">
          Client names are shown only with written permission. Ask us and
          we&apos;ll walk you through comparable work in confidence.
        </p>
      </Container>

      <CtaBand heading="Want references for your project type?" />
    </>
  );
}
