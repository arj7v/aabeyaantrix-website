# Aabeyaantrix website

Marketing site for **Aabeyaantrix Building Contracting L.L.C** — a Dubai MEP and
building-services contractor. Static Next.js site, hosted on Vercel.

- **Framework:** Next.js 16 (App Router), TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Rendering:** fully static (no database, CMS or auth)
- **Content:** every string lives in [`content/site.ts`](content/site.ts)
- **Design rationale:** see [`DESIGN.md`](DESIGN.md)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks (run before deploying)

```bash
npm run build      # production build + typecheck
npm run lint       # ESLint
npm audit          # clear high/critical
npx tsc --noEmit   # typecheck only
```

## Contact form

The form posts to [Web3Forms](https://web3forms.com). It needs a public access
key in `NEXT_PUBLIC_WEB3FORMS_KEY` — see [`.env.example`](.env.example). Without
it, the form prompts visitors to call/WhatsApp instead. The key is public by
design (it only authorises posting to the configured inbox).

## Open items

Several values are intentionally unset — search the codebase for `TODO:`.
They are business decisions, not code gaps:

- **Domain & email** — `SITE_URL` and `company.email` (Blocker 1).
- **Licensed services** — three brochure activities are present but flagged
  `licensed: false` and excluded from render until confirmed (Blocker 2).
- **Client names** — projects are described by scope/sector/location, never by
  client, until written permission exists (Blocker 3).
- **TRN, founding year, exact geo, exact brand hex, real logo** — confirm before
  publishing; do not invent.

## Deploy

Not yet deployed. When ready: push to GitHub, import to Vercel, verify headers
on the `.vercel.app` preview. **Do not** wire a custom domain or touch DNS until
sign-off — live Google Workspace mail depends on the current DNS records.
