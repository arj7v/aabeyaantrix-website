import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { company, SITE_URL } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Interior Fit-Out & Renovation in Dubai | ${company.shortName} Building Contracting L.L.C`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Interior fit-out, renovation and building contracting in Dubai — one accountable team for villas, offices, retail and hospitality spaces, backed by licensed MEP capability.",
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  alternates: { canonical: "/" },
  // Interior/renovation terms lead now; MEP terms stay since that scope is
  // still real and still licensed — see content/site.ts for the distinction.
  keywords: [
    "interior fit-out Dubai",
    "villa renovation Dubai",
    "office fit-out Dubai",
    "building contracting UAE",
    "MEP contractor Dubai",
    "civil and structural works Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: company.legalName,
    title: `Interior Fit-Out & Renovation in Dubai | ${company.legalName}`,
    description:
      "Complete interior fit-out, renovation and building contracting solutions in Dubai and across the UAE — one accountable team from concept to handover.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Interior Fit-Out & Renovation in Dubai | ${company.shortName}`,
    description:
      "Interior fit-out, renovation and building contracting in Dubai and across the UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
