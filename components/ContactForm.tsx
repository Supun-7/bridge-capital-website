"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const financingOptions = [
  "Working capital",
  "Expansion / growth capital",
  "Equipment financing",
  "Trade / import-export financing",
  "Other",
];

type Status = "idle" | "submitting" | "submitted";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: This form is not yet wired to a backend or email service.
    // Connect it to your provider of choice (e.g. an API route, Resend,
    // Formspree) before going live. The short "submitting" delay below is
    // a placeholder so the UI has something real to transition through —
    // swap it for your actual request/await.
    setStatus("submitting");
    setTimeout(() => setStatus("submitted"), 700);
  }

  return (
    <AnimatePresence mode="wait">
      {status === "submitted" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="border border-ink bg-ink px-8 py-14 text-paper"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-yellow">
            Request received
          </p>
          <h2 className="mt-3 font-display text-2xl italic">
            Thanks — we&apos;ll be in touch within one business day.
          </h2>
          <p className="mt-3 text-sm text-paper/70">
            We&apos;ll reach out to schedule your consultation call at a time
            that works for you.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
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
            disabled={status === "submitting"}
            className="relative w-full overflow-hidden border border-ink bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue hover:border-blue hover:shadow-lg disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 sm:w-auto"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "submitting" ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="h-3 w-3 animate-spin rounded-full border-2 border-paper/40 border-t-paper" />
                  Sending
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Request a consultation call
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate/50 transition-colors focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";

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
