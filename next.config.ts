import type { NextConfig } from "next";

// Contact form submissions post to Web3Forms. Declared once so the host
// appears in exactly one place across the CSP directives below.
const FORM_ENDPOINT = "https://api.web3forms.com";

// Content-Security-Policy, assembled from single-purpose directives.
// Start restrictive; loosen only where a build genuinely breaks.
// 'unsafe-inline' appears ONLY on style-src (Next.js inlines critical CSS).
// It must never be added to script-src.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  `connect-src 'self' ${FORM_ENDPOINT}`,
  `form-action 'self' ${FORM_ENDPOINT}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
