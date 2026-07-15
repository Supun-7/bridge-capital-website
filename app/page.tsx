import Link from "next/link";
import BridgeMotif from "@/components/BridgeMotif";

const process = [
  {
    n: "01",
    title: "Consultation call",
    body: "We start with a direct conversation about where your business stands and what financing needs to make happen next.",
  },
  {
    n: "02",
    title: "Requirements & information",
    body: "We outline your business requirements in detail and collect the financial and operational information lenders will ask for.",
  },
  {
    n: "03",
    title: "Profile & pitch",
    body: "We build a professional company profile and an industry-focused pitch that puts your business in its strongest light.",
  },
  {
    n: "04",
    title: "Proposal & structure",
    body: "We help you shape a winning proposal and define exactly what financing you need, on what terms.",
  },
  {
    n: "05",
    title: "Bank coordination",
    body: "We coordinate discussions directly with banks and financial institutions on your behalf.",
  },
  {
    n: "06",
    title: "Agreement",
    body: "We carry the process through to signed agreements, with commission structures set out clearly from the start.",
  },
];

const stats = [
  { value: "1", label: "Point of contact, start to close" },
  { value: "6", label: "Steps from call to agreement" },
  { value: "0", label: "Surprises in your fee structure" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line blueprint-grid">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-20 pb-16 md:grid-cols-12 md:pt-28 md:pb-24">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">
              Financial Consultation &amp; Capital Advisory
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-balance text-ink md:text-7xl">
              The structure between your business and its next round of{" "}
              <span className="italic text-blue">capital.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate md:text-lg">
              Bridge Capital builds the case, the profile, and the bank
              relationships businesses need to secure financing — and stays
              at the table from the first call to the signed agreement.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="border border-ink bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blue hover:border-blue"
              >
                Book a consultation call
              </Link>
              <Link
                href="/services"
                className="border border-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-blue hover:text-blue"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>

        <BridgeMotif
          className="h-28 w-full md:h-40"
          strokeColor="#0000FF"
          labelLeft="YOUR BUSINESS"
          labelRight="FINANCIAL INSTITUTION"
        />
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-paper/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 px-2 py-8 sm:px-8">
              <span className="font-display text-4xl italic text-yellow">{s.value}</span>
              <span className="text-sm text-paper/70">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">
            How we work
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-ink md:text-4xl">
            One engagement, six stages, one outcome.
          </h2>
          <p className="mt-4 text-slate leading-relaxed">
            Every business we take on moves through the same disciplined
            process — nothing skipped, nothing rushed.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {process.map((step) => (
            <div key={step.n} className="flex gap-5 border-t border-line pt-6">
              <span className="font-mono text-sm text-yellow-deep">{step.n}</span>
              <div>
                <h3 className="font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-t border-line bg-yellow">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-3xl italic text-ink md:text-4xl">
            Bring us your numbers. We&apos;ll bring the bank.
          </h2>
          <Link
            href="/contact"
            className="whitespace-nowrap border border-ink bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blue hover:border-blue"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
