"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/content/site";

// Field length caps (mirrors the server-side limits in the brief). Client
// validation is UX only; Web3Forms performs its own server-side handling.
const LIMITS = { name: 100, phone: 30, email: 200, message: 2000 } as const;

// Public access key — safe to expose (NEXT_PUBLIC). Set in Vercel env / .env.local.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "mt-1.5 w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-ink placeholder:text-steel/60 focus:border-blue focus:outline-none focus-visible:outline-2 focus-visible:outline-blue";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields. If present, silently "succeed".
    if ((data.get("botcheck") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const phone = (data.get("phone") as string)?.trim();
    if (!phone) {
      setError("Please add a phone number so we can call you back.");
      return;
    }

    if (!ACCESS_KEY) {
      setError(
        "The form isn't configured yet. Please call or WhatsApp us in the meantime.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry — ${company.shortName}`,
          from_name: company.legalName,
          name: (data.get("name") as string)?.slice(0, LIMITS.name),
          phone: phone.slice(0, LIMITS.phone),
          email: (data.get("email") as string)?.slice(0, LIMITS.email),
          message: (data.get("message") as string)?.slice(0, LIMITS.message),
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending your message. Please call or WhatsApp us instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-line bg-surface p-8"
      >
        <div className="h-1 w-10 bg-orange" />
        <h2 className="mt-4 text-xl font-semibold text-navy">
          Thanks — we&apos;ve got your message.
        </h2>
        <p className="mt-2 text-steel">
          We&apos;ll be in touch shortly. If it&apos;s urgent, call us on{" "}
          <a href={`tel:${company.phone}`} className="text-blue hover:underline">
            {company.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, off-screen, not a tab stop. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Do not fill this field
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            className={fieldBase}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone <span className="text-orange">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            maxLength={LIMITS.phone}
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={LIMITS.email}
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={LIMITS.message}
          placeholder="Scope, sector and location help us respond quickly."
          className={`${fieldBase} resize-y`}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-cta">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-cta px-6 py-3 font-semibold text-white transition-colors hover:bg-cta-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="text-xs text-steel">
        Phone is the field that matters most here — it&apos;s how we&apos;ll
        reach you. Prefer to talk now? Call {company.phoneDisplay}.
      </p>
    </form>
  );
}
