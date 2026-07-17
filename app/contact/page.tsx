import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="border-b border-line blueprint-grid">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">Contact</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-balance text-ink md:text-5xl">
            Tell us where your business stands.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
            Share a few details and we&apos;ll set up a consultation call to
            go through your financing needs — no obligation, no cost for the
            first conversation.
          </p>

          <div className="mt-12 space-y-6 border-t border-line pt-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-deep">Email</p>
              <p className="mt-1 text-ink">team.bridgecapital@gmail.com</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-deep">Phone</p>
              <p className="mt-1 text-ink">+94 </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-deep">Hours</p>
              <p className="mt-1 text-ink">Monday–Friday, 9:00–18:00</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
