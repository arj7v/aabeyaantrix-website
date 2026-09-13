import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm uppercase tracking-wider text-cta">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
        This page isn&apos;t here.
      </h1>
      <p className="mt-4 max-w-prose text-steel">
        The page you were looking for may have moved or never existed. Head
        back to the homepage, or get in touch and we&apos;ll point you the
        right way.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md bg-cta px-5 py-3 font-semibold text-white transition-colors hover:bg-cta-hover"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-navy/20 px-5 py-3 font-semibold text-navy transition-colors hover:bg-surface"
        >
          Contact us
        </Link>
      </div>
    </Container>
  );
}
