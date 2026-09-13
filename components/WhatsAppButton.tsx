import { whatsappHref } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Mobile-only sticky WhatsApp button. Hidden on md+ where the header Call
 * button and inline CTAs are always reachable.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/20 transition-transform hover:scale-105 md:hidden"
    >
      <span className="sr-only">Message us on WhatsApp</span>
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
