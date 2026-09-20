import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * The Content-Security-Policy is NOT set here — it is built per-request in
 * `proxy.ts`, because `script-src` carries a fresh nonce on every response.
 * A static `script-src 'self'` header blocks Next.js's own inline hydration
 * bootstrap, which silently kills all client interactivity (the mobile menu
 * and the contact form) while leaving the server-rendered HTML looking fine.
 *
 * Everything below is request-independent, so it stays in the static config.
 */
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
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    // Stock photography placeholder host — see content/site.ts for the
    // "these are stock, not the company's own work" note. Swap this out
    // once real project photography replaces the Unsplash URLs.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
