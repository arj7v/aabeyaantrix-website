"use client";

// Error boundaries must be Client Components. We show a plain fallback and
// never expose stack traces or error details to visitors.

import { useEffect } from "react";
import { Container } from "@/components/Container";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Log to the browser console only; nothing persistent, no user data.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm uppercase tracking-wider text-cta">
        Error
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-prose text-steel">
        An unexpected error occurred while loading this page. Please try again,
        or call us and we&apos;ll help directly.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-md bg-cta px-5 py-3 font-semibold text-white transition-colors hover:bg-cta-hover"
        >
          Try again
        </button>
      </div>
    </Container>
  );
}
