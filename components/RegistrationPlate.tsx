import { company } from "@/content/site";

/** The trust signal: real registration numbers set as mono "data plates".
 *  Reused on the home and about pages. */
export function RegistrationPlate() {
  const items: { label: string; value: string }[] = [
    { label: "Trade licence", value: company.tradeLicence },
    { label: "Commercial register", value: company.commercialRegister },
    { label: "Dubai Chamber", value: company.chamberMembership },
  ];
  if (company.trn) items.push({ label: "TRN", value: company.trn });

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-paper p-5">
          <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-steel">
            {item.label}
          </dt>
          <dd className="mt-1 font-mono text-base font-medium text-navy">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
