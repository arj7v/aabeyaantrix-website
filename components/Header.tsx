"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav } from "@/content/site";
import { telHref } from "@/lib/contact";
import { PhoneIcon } from "@/components/icons";
import { Container } from "@/components/Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-bold tracking-tight text-navy">
            {company.shortName}
          </span>
          <span className="hidden font-mono text-[0.7rem] uppercase tracking-wider text-steel sm:inline">
            Building Contracting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-blue ${
                isActive(item.href) ? "text-blue" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-paper md:hidden"
        >
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 py-3 text-base font-medium ${
                  isActive(item.href) ? "text-blue" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-cta px-4 py-3 font-semibold text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {company.phoneDisplay}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
