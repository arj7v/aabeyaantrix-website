import Link from "next/link";
import { company, nav } from "@/content/site";
import { telHref, mobileTelHref } from "@/lib/contact";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

/** Registration data line — rendered in mono, since these numbers are the
 *  credibility signal in UAE B2B. */
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-on-navy-muted">
        {label}
      </dt>
      <dd className="font-mono text-sm text-on-navy">{value}</dd>
    </div>
  );
}

export function Footer() {
  const { address } = company;
  const year = new Date().getFullYear();

  return (
    // No top margin: most pages end on the navy CtaBand, and a gap there would
    // cut a white stripe between two navy blocks. The orange rule is the join.
    <footer className="relative overflow-hidden border-t-4 border-orange bg-navy text-on-navy">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity + address */}
          <div className="md:col-span-1">
            <Logo tone="light" />
            <p className="mt-5 text-sm font-semibold text-white">
              {company.legalName}
            </p>
            <p className="mt-1 text-sm text-on-navy-muted">
              {company.tagline}
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-on-navy">
              {address.warehouse}, {address.building}
              <br />
              {address.street}, {address.area}
              <br />
              {address.emirate}, {address.country}
              <br />
              P.O. Box {address.poBox}
            </address>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-[0.7rem] uppercase tracking-wider text-on-navy-muted">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={telHref} className="inline-block transition-colors duration-150 hover:text-white">
                  Call {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mobileTelHref} className="inline-block transition-colors duration-150 hover:text-white">
                  Alternative {company.mobileDisplay}
                </a>
              </li>
              {company.email && (
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-block transition-colors duration-150 hover:text-white"
                  >
                    {company.email}
                  </a>
                </li>
              )}
            </ul>

            <h2 className="mt-8 font-mono text-[0.7rem] uppercase tracking-wider text-on-navy-muted">
              Site
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block transition-colors duration-150 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration plate */}
          <div>
            <h2 className="font-mono text-[0.7rem] uppercase tracking-wider text-on-navy-muted">
              Registration
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              <DataRow label="Trade licence" value={company.tradeLicence} />
              <DataRow
                label="Dubai Chamber"
                value={company.chamberMembership}
              />
              <DataRow
                label="Commercial reg."
                value={company.commercialRegister}
              />
              {company.trn && <DataRow label="TRN" value={company.trn} />}
            </dl>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-on-navy-muted">
          <p>
            © {year} {company.legalName}. Licensed by the{" "}
            {company.authority}. {company.legalForm}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
