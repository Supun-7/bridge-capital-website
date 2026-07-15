"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl italic tracking-tight text-ink">
            Bridge
          </span>
          <span className="h-1.5 w-1.5 bg-yellow" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate">
            Capital
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-blue"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blue hover:border-blue"
          >
            Book a call
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm uppercase tracking-[0.15em] text-ink-soft"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 border border-ink bg-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-paper"
          >
            Book a call
          </Link>
        </nav>
      )}
    </header>
  );
}
