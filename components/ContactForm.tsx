"use client";

import { useState } from "react";

const financingOptions = [
  "Working capital",
  "Expansion / growth capital",
  "Equipment financing",
  "Trade / import-export financing",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: This form is not yet wired to a backend or email service.
    // Connect it to your provider of choice (e.g. an API route, Resend,
    // Formspree) before going live.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="border border-ink bg-ink px-8 py-14 text-paper">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">
          Request received
        </p>
        <h2 className="mt-4 font-display text-2xl italic">
          Thanks — we&apos;ll be in touch within one business day.
        </h2>
        <p className="mt-3 text-sm text-paper/70">
          We&apos;ll reach out to schedule your consultation call at a time
          that works for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClass} />
        </Field>
        <Field label="Business name" htmlFor="business">
          <input id="business" name="business" type="text" required className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </Field>
      </div>

      <Field label="What kind of financing are you exploring?" htmlFor="financing">
        <select id="financing" name="financing" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {financingOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your business and what you need" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        className="w-full border border-ink bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blue hover:border-blue sm:w-auto"
      >
        Request a consultation call
      </button>
    </form>
  );
}

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate/50 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
