import Link from "next/link";
import Image from "next/image";
import BridgeMotif from "./BridgeMotif";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <BridgeMotif className="h-16 w-full opacity-60" strokeColor="#FFEF00" animate />

        <div className="mt-10 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Bridge Capital"
                width={48}
                height={48}
                className="h-11 w-11"
              />
              <span className="font-brand text-lg tracking-wide text-paper">
                BRIDGE <span className="text">CAPITAL</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              We build the profile, the pitch, and the relationships businesses
              need to secure financing — then stay at the table until terms
              are signed.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li><Link href="/about" className="hover:text-yellow">About</Link></li>
              <li><Link href="/services" className="hover:text-yellow">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>hello@bridgecapital.com</li>
              <li>+1 (000) 000-0000</li>
              <li>Mon–Fri, 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Bridge Capital. All rights reserved.</span>
          <span className="font-mono">Financial Consultation &amp; Capital Advisory</span>
        </div>
      </div>
    </footer>
  );
}
