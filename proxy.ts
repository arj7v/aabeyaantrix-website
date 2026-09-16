import { NextResponse, type NextRequest } from "next/server";

/**
 * Per-request Content-Security-Policy with a nonce.
 *
 * Next.js emits inline <script> tags to bootstrap hydration. Under a static
 * `script-src 'self'` those are blocked, React never hydrates, and every
 * client interaction (mobile menu, contact form) silently dies while the
 * server-rendered HTML still looks correct. A nonce is the supported fix, and
 * Next.js requires dynamic rendering to attach one — see
 * node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md.
 *
 * NOTE: in Next 16 this file is `proxy.ts` (formerly `middleware.ts`).
 *
 * 'unsafe-inline' never appears in script-src — that is the directive that
 * matters, and the nonce covers it.
 *
 * style-src deliberately uses 'unsafe-inline' and NO nonce. A nonce in a
 * source list makes browsers ignore 'unsafe-inline' entirely, which blocks
 * inline style *attributes* (nonces cannot be applied to an attribute).
 * next/image emits those, so a nonced style-src breaks image rendering.
 * Next.js also inlines critical CSS, which needs one or the other.
 */

// Contact form submissions post to Web3Forms. Declared once so the host
// appears in exactly one place across the CSP directives below.
const FORM_ENDPOINT = "https://api.web3forms.com";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // React uses eval() in development for better error stacks. Never in prod.
  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    `connect-src 'self' ${FORM_ENDPOINT}`,
    `form-action 'self' ${FORM_ENDPOINT}`,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Next.js reads the nonce off the *request* headers to stamp its own tags.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    /*
     * Run on documents only. Static assets and the image optimiser don't need
     * a CSP and shouldn't pay for a function invocation.
     * Excludes: /_next/static, /_next/image, and any file with an extension.
     */
    {
      source: "/((?!_next/static|_next/image|.*\\..*).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
