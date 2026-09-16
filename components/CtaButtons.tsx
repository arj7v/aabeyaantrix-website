import { company } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * The two primary conversions. Orange is used ONLY here, in the header and on
 * the mobile sticky button — starting a conversation is the single action the
 * site is built around.
 */

const baseBtn =
  "btn group inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold";

export function CallButton({
  className = "",
  tone = "solid",
}: {
  className?: string;
  tone?: "solid" | "onNavy";
}) {
  return (
    <a
      href={telHref}
      className={`${baseBtn} bg-cta text-white hover:bg-cta-hover ${className}`}
      data-tone={tone}
    >
      <PhoneIcon className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:-rotate-12" />
      <span>Call {company.phoneDisplay}</span>
    </a>
  );
}

export function WhatsAppLink({
  className = "",
  message,
  tone = "light",
}: {
  className?: string;
  message?: string;
  tone?: "light" | "onNavy";
}) {
  const skin =
    tone === "onNavy"
      ? "border border-white/25 text-white hover:border-white/50 hover:bg-white/10"
      : "border border-navy/15 bg-paper text-navy hover:border-navy/35 hover:bg-surface";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseBtn} ${skin} ${className}`}
    >
      <WhatsAppIcon className="h-[1.15em] w-[1.15em] text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
      <span>WhatsApp</span>
    </a>
  );
}
