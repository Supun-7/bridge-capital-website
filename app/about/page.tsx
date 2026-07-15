import Link from "next/link";
import BridgeMotif from "@/components/BridgeMotif";

const principles = [
  {
    title: "We understand your business first.",
    body: "Before we write a single word of a proposal, we go through your operations, numbers, and requirements in detail — so the case we build is accurate, not generic.",
  },
  {
    title: "We speak the language of lenders.",
    body: "Banks and financial institutions evaluate businesses on specific terms. We translate your story into the profile and structure they're trained to say yes to.",
  },
  {
    title: "We stay in the room.",
    body: "We don't hand you a document and disappear. We coordinate the discussions directly, from introduction through negotiation to signed terms.",
  },
  {
    title: "We're transparent about cost.",
    body: "Commission structures and agreements are set out clearly at the start of the engagement — no surprises when the deal closes.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-line blueprint-grid">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">About Bridge Capital</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-balance text-ink md:text-6xl">
            Every business with a real plan deserves a fair hearing from
            capital.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            Bridge Capital exists to close the gap between businesses that
            need financing and the institutions that provide it. We&apos;re the
            structural support in between — doing the preparation,
            translation, and negotiation most business owners don&apos;t have the
            time or specialist knowledge to do alone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">Why &quot;Bridge&quot;</p>
            <h2 className="mt-4 font-display text-3xl italic text-ink md:text-4xl">
              Two sides. One structure.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-slate leading-relaxed">
              A business with a strong plan and a bank with capital to deploy
              rarely speak the same language on the first attempt. One side
              knows the operation inside out; the other needs it presented in
              a very specific, evidence-backed format. Bridge Capital sits in
              the middle — gathering what a lender needs to see, structuring
              it correctly, and staying engaged through every round of
              discussion until an agreement is reached.
            </p>
            <p className="mt-4 text-slate leading-relaxed">
              That&apos;s the whole model: not a one-off document, but an active
              advisory relationship that carries a financing request from
              first conversation to signed terms.
            </p>
          </div>
        </div>
      </section>

      <BridgeMotif className="h-24 w-full border-y border-line bg-ink" strokeColor="#FFEF00" />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">How we operate</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl italic text-ink md:text-4xl">
          Principles that shape every engagement.
        </h2>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-line pt-6">
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-yellow">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-3xl italic text-ink md:text-4xl">
            Ready to see what a properly structured proposal looks like?
          
          </h2>
          <Link
            href="/contact"
            className="whitespace-nowrap border border-ink bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-blue hover:border-blue"
          >
            Book a consultation call
          </Link>
        </div>
      </section>
    </>
  );
}
