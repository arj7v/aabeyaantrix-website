import Image from "next/image";
import { company } from "@/content/site";

/**
 * Brand lockup. The real artwork is a *stacked* logo (gear above the wordmark),
 * which is illegible at header height — so we pair the gear mark with set
 * typography instead of shrinking the whole lockup. `/logo-full.svg` holds the
 * complete artwork for print/OG use.
 *
 * `tone` picks the text colour for light vs navy surfaces; the mark itself is
 * full-colour on both (its blue reads fine against the navy at this size).
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const primary = tone === "light" ? "text-white" : "text-navy";
  const secondary = tone === "light" ? "text-on-navy-muted" : "text-steel";

  // The mark's gear is brand blue, which goes dark-on-dark against the navy
  // footer. On light-tone surfaces it sits on a paper chip so it keeps its
  // real colours instead of being flattened to a white silhouette.
  const mark = (
    <Image
      src="/logo-mark.svg"
      alt=""
      width={108}
      height={77}
      priority
      className="h-9 w-auto shrink-0"
    />
  );

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {tone === "light" ? (
        <span className="flex items-center justify-center rounded-lg bg-paper p-1.5">
          {mark}
        </span>
      ) : (
        mark
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-bold tracking-tight ${primary}`}
        >
          {company.shortName}
        </span>
        <span
          className={`mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${secondary}`}
        >
          Building Contracting
        </span>
      </span>
    </span>
  );
}
