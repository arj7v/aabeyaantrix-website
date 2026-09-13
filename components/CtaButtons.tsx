import { company } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * The two primary conversions. Orange is used ONLY here and on the mobile
 * sticky button — clicking to start a conversation is the single action the
 * site is built around.
 */

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[0.95rem] font-semibold transition-colors";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={telHref}
      className={`${baseBtn} bg-cta text-white hover:bg-cta-hover ${className}`}
    >
      <PhoneIcon className="h-[1.05em] w-[1.05em]" />
      <span>Call {company.phoneDisplay}</span>
    </a>
  );
}

export function WhatsAppLink({
  className = "",
  message,
}: {
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseBtn} border border-navy/20 bg-white text-navy hover:border-navy/40 hover:bg-surface ${className}`}
    >
      <WhatsAppIcon className="h-[1.1em] w-[1.1em] text-[#25D366]" />
      <span>WhatsApp</span>
    </a>
  );
}
