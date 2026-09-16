import Image from "next/image";

/**
 * Brand lockup. The real artwork is a *stacked* logo (gear above the
 * wordmark above the tagline), which is illegible as a whole at header
 * height — so we pair the gear mark with the real wordmark graphic on one
 * line instead of shrinking the whole lockup. `/logo-full.svg` holds the
 * complete stacked artwork for print/OG use.
 *
 * Both pieces are the genuine vector artwork (extracted from the brochure
 * PDF's vector paths, not redrawn — see DESIGN.md), not set type standing in
 * for it. `tone` only affects the "Building Contracting" caption colour; the
 * mark and wordmark are full-colour on both surfaces. Orange-on-navy has no
 * minimum contrast requirement under WCAG (logos are exempt) and reads fine
 * regardless; the gear's blue is the one that goes dark-on-dark on navy, so
 * it alone sits on a paper chip there.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const secondary = tone === "light" ? "text-on-navy-muted" : "text-steel";

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
      <span className="flex flex-col justify-center gap-1">
        <Image
          src="/logo-wordmark.svg"
          alt="Aabeyaantrix"
          width={262}
          height={29}
          priority
          className="h-[1.05rem] w-auto"
        />
        <span
          className={`font-mono text-[0.6rem] uppercase tracking-[0.14em] ${secondary}`}
        >
          Building Contracting
        </span>
      </span>
    </span>
  );
}
