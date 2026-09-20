import type { Metadata } from "next";
import { company } from "@/content/site";
import { telHref, mobileTelHref, whatsappHref } from "@/lib/contact";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Book a Site Visit in Dubai",
  description:
    "Tell Aabeyaantrix Building Contracting what you're planning — a villa renovation, apartment makeover, office fit-out or turnkey project. Call, WhatsApp or request a proposal.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { address } = company;

  return (
    <>
      <PageHeader
        title="Let's build your next space"
        intro="Tell us what you're planning — a villa renovation, apartment makeover, office fit-out, retail project or complete turnkey renovation. We'll arrange a site visit, review the scope and prepare a clear proposal."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Direct contact — the primary conversions */}
          <div>
            <div className="space-y-3">
              <a
                href={telHref}
                className="flex items-center gap-4 rounded-xl border border-line p-5 transition-colors hover:border-navy/30 hover:bg-surface"
              >
                <PhoneIcon className="h-6 w-6 shrink-0 text-blue" />
                <span>
                  <span className="block text-sm text-steel">
                    Call us
                  </span>
                  <span className="block text-lg font-semibold text-navy">
                    {company.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-line p-5 transition-colors hover:border-navy/30 hover:bg-surface"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#25D366]" />
                <span>
                  <span className="block text-sm text-steel">
                    Message on WhatsApp
                  </span>
                  <span className="block text-lg font-semibold text-navy">
                    {company.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={mobileTelHref}
                className="flex items-center gap-4 rounded-xl border border-line p-5 transition-colors hover:border-navy/30 hover:bg-surface"
              >
                <PhoneIcon className="h-6 w-6 shrink-0 text-blue" />
                <span>
                  <span className="block text-sm text-steel">Alternative number</span>
                  <span className="block text-lg font-semibold text-navy">
                    {company.mobileDisplay}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-line bg-surface p-5">
              <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-blue" />
              <div>
                <p className="text-sm text-steel">Visit</p>
                <address className="mt-1 not-italic leading-relaxed text-navy">
                  {address.warehouse}, {address.building}
                  <br />
                  {address.street}, {address.area}
                  <br />
                  {address.emirate}, {address.country}
                </address>
                <p className="mt-3 font-mono text-sm text-steel">
                  Makani {address.makani} · P.O. Box {address.poBox}
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div>
            <h2 className="text-xl font-semibold text-navy">
              Request a proposal
            </h2>
            <p className="mt-2 text-steel">
              A few lines on the location, size and scope is plenty to start.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
