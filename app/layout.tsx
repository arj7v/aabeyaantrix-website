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
    default: `${company.shortName} — MEP & building-services contracting in Dubai`,
    template: `%s — ${company.shortName}`,
  },
  description:
    "Dubai MEP and building-services contractor: HVAC, electromechanical, plumbing and sanitary, district cooling and technical services. Licensed, Dubai Chamber member, based in Al Quoz.",
  applicationName: company.legalName,
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: company.legalName,
    title: `${company.shortName} — MEP & building-services contracting in Dubai`,
    description:
      "HVAC, electromechanical, plumbing, district cooling and technical services in Dubai. Licensed and Dubai Chamber registered.",
  },
  robots: { index: true, follow: true },
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
