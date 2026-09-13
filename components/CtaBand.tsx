import { company } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/Container";

/** Repeated conversion band. Navy background (structure), orange Call button
 *  (action). Used at the foot of most pages. */
export function CtaBand({
  heading = "Discuss your project",
  body = "Tell us the scope and location. The fastest way to reach us is a call or a WhatsApp message — we'll get back to you directly.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
            <p className="mt-3 text-on-navy">{body}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-5 py-3 font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {company.phoneDisplay}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
