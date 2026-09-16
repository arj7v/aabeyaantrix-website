import Link from "next/link";
import { SITE_URL } from "@/content/site";
import { getNonce } from "@/lib/nonce";

export type Crumb = { href: string; label: string };

/**
 * Visible breadcrumb trail plus its BreadcrumbList JSON-LD. Google uses the
 * markup to render the trail in place of a bare URL in results, which matters
 * on the service pages where the path carries the keyword.
 */
export async function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const nonce = await getNonce();
  const items = [{ href: "/", label: "Home" }, ...trail];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.7rem] uppercase tracking-wider text-steel">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-navy">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-blue"
                  >
                    {item.label}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        nonce={nonce}
        // Static, site-controlled data — see LocalBusinessJsonLd for the
        // rationale on this being the one sanctioned use.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
