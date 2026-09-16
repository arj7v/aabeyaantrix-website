import { Container } from "@/components/Container";
import { CallButton, WhatsAppLink } from "@/components/CtaButtons";

/** Repeated conversion band. Navy ground with the blueprint grid, orange Call
 *  button. Used at the foot of most pages. */
export function CtaBand({
  heading = "Discuss your project",
  body = "Tell us the scope and location. The fastest way to reach us is a call or a WhatsApp message — we'll get back to you directly.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      {/* Orange edge tying the band to the brand without a decorative wash. */}
      <div
        className="absolute inset-x-0 top-0 h-1 bg-orange"
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 leading-relaxed text-on-navy">{body}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <CallButton />
            <WhatsAppLink tone="onNavy" />
          </div>
        </div>
      </Container>
    </section>
  );
}
