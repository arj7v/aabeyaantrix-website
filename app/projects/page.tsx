import type { Metadata } from "next";
import { projects } from "@/content/site";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected MEP and building-services work in the UAE, described by scope, sector and location.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Selected work"
        intro="We describe our work by scope, sector and location rather than by client name. For relevant references on a specific project type, the quickest route is a direct conversation."
      />

      <Container className="py-16 sm:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-blue">
                  {project.sector}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-navy">
                  {project.scope}
                </h2>
              </div>
              <p className="font-mono text-sm text-steel">
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
