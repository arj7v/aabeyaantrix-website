import Image from "next/image";
import type { Service } from "@/content/site";
import { BlueprintSchematic } from "@/components/BlueprintSchematic";

/**
 * The visual for a service card/hero. MEP entries use the hand-built pipe
 * schematic instead of a stock photo — not a style choice, a trust one: we
 * can't currently verify what a given Unsplash ID actually shows (no way to
 * preview images in this environment), and one already shipped mismatched
 * (a "plumbing" page showing clothing). The schematic is a self-authored SVG,
 * so there's nothing to get wrong. Fit-out/renovation/civil keep photos since
 * those haven't been reported wrong — but see content/site.ts, the same risk
 * technically applies to them too until someone eyeballs the live site.
 */
export function ServiceMedia({
  service,
  sizes,
  priority,
}: {
  service: Service;
  sizes: string;
  priority?: boolean;
}) {
  if (service.category === "mep") {
    return (
      <div className="flex h-full w-full items-center justify-center bg-navy p-4">
        <BlueprintSchematic tone="dark" className="h-full w-full" />
      </div>
    );
  }

  return (
    <Image
      src={service.image}
      alt=""
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}
