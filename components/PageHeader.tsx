import { Container } from "@/components/Container";

/** Interior-page title band. A thin orange rule ties pages back to the brand
 *  without repeating a caps eyebrow above every heading. */
export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="py-14 sm:py-20">
        <div className="h-1 w-12 bg-orange" />
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
            {intro}
          </p>
        )}
      </Container>
    </div>
  );
}
