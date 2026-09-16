"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/content/site";
import { telHref } from "@/lib/contact";
import { PhoneIcon } from "@/components/icons";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header gains a shadow once the page moves — separates it from content
  // without drawing a permanent hard line.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled ? "border-line shadow-[var(--shadow-md)]" : "border-transparent"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${company.legalName} — home`}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-active={active}
                className={`link-underline text-sm font-medium transition-colors duration-150 hover:text-blue ${
                  active ? "text-blue" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={telHref}
            className="btn inline-flex items-center gap-2 rounded-lg bg-cta px-4 py-2.5 text-sm font-semibold text-white hover:bg-cta-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden xl:inline">{company.phoneDisplay}</span>
            <span className="xl:hidden">Call</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 inline-flex items-center justify-center rounded-lg p-2 text-navy transition-colors hover:bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {/* Bars morph into a cross. Classes rather than inline styles, so
                no style attribute is needed under the CSP. */}
            <path
              d="M4 7h16"
              className={`origin-center transition-transform duration-300 ease-[cubic-bezier(0.2,0.65,0.3,1)] ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <path
              d="M4 12h16"
              className={`transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <path
              d="M4 17h16"
              className={`origin-center transition-transform duration-300 ease-[cubic-bezier(0.2,0.65,0.3,1)] ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </svg>
        </button>
      </Container>

      {/* Mobile panel — height-animated so it opens rather than snaps. */}
      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-line bg-paper transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.2,0.65,0.3,1)] lg:hidden ${
          open
            ? "grid-rows-[1fr] border-t opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col py-3">
            <nav aria-label="Primary" className="flex flex-col">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                    // Close on tap rather than reacting to the route change in
                    // an effect — same result, no cascading render.
                    onClick={() => setOpen(false)}
                    className={`border-b border-line/60 py-3.5 text-base font-medium transition-colors ${
                      active ? "text-blue" : "text-ink hover:text-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <a
              href={telHref}
              tabIndex={open ? undefined : -1}
              className="btn mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3.5 font-semibold text-white hover:bg-cta-hover"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {company.phoneDisplay}
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}
