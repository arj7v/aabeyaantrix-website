import { company } from "@/content/site";

/** `tel:` href for the landline. */
export const telHref = `tel:${company.phone}`;

/** `tel:` href for the mobile. */
export const mobileTelHref = `tel:${company.mobile}`;

/**
 * wa.me link with an optional pre-filled message. The primary conversion in
 * this market is a direct WhatsApp message, so we seed useful context.
 */
export function whatsappHref(
  message = `Hello ${company.shortName}, I'd like to discuss a project.`,
): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
