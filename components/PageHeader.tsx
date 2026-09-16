import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/** Interior-page title band. A thin orange rule ties pages back to the brand
 *  without repeating a caps eyebrow above every heading. */
export function PageHeader({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-surface">
      <div
        className="blueprint-grid-light absolute inset-0"
        aria-hidden="true"
      />
      <Container className="relative py-12 sm:py-16 md:py-20">
        {crumbs && (
          <div className="mb-6">
            <Breadcrumbs trail={crumbs} />
          </div>
        )}
        <div className="h-1 w-12 bg-orange" />
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            {intro}
          </p>
        )}
      </Container>
    </div>
  );
}
