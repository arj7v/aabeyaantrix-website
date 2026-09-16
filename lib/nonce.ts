import { headers } from "next/headers";

/**
 * The per-request CSP nonce set by `proxy.ts`.
 *
 * Any inline <script> we render ourselves must carry it, or the CSP will
 * block it. Reading headers() opts the calling route into dynamic rendering,
 * which is required for nonces to exist at all.
 */
export async function getNonce(): Promise<string | undefined> {
  const h = await headers();
  return h.get("x-nonce") ?? undefined;
}
