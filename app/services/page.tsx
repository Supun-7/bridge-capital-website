import Link from "next/link";

const groups = [
  {
    label: "A",
    title: "Consultation & Discovery",
    intro: "Before anything is written down, we need to understand the business as well as you do.",
    items: [
      {
        title: "Financial consultation call",
        body: "A direct, no-obligation conversation about your business, your financing goals, and whether we're the right fit to help.",
      },
      {
        title: "Business requirements",
        body: "We work with you to understand and outline exactly what your business needs — how much, for what purpose, and on what timeline.",
      },
      {
        title: "Information collection",
        body: "We gather the financial statements, operational data, and supporting documentation lenders will expect to see.",
      },
    ],
  },
  {
    label: "B",
    title: "Positioning & Proposal",
    intro: "Then we put your business into the form that lenders are trained to evaluate.",
    items: [
      {
        title: "Company profiles",
        body: "A professional company profile that presents your business, its track record, and its financial position clearly and credibly.",
      },
      {
        title: "Industry-focused pitches",
        body: "Pitches tailored to how your specific industry is assessed by banks and financial institutions — not a generic template.",
      },
      {
        title: "Winning proposals",
        body: "Hands-on support shaping a proposal built to hold up under a lender's scrutiny, from structure to supporting evidence.",
      },
    ],
  },
  {
    label: "C",
    title: "Financing & Negotiation",
    intro: "Finally, we define the terms and carry the discussion through to close.",
    items: [
      {
        title: "Financing requirements",
        body: "We define exactly what type and structure of financing fits your business — before you're in front of a lender.",
      },
      {
        title: "Bank coordination",
        body: "We coordinate discussions directly with banks and financial institutions on your behalf, managing the back-and-forth.",
      },
      {
        title: "Agreements & commission",
        body: "We carry the process to signed agreements, with commission structures established and agreed upfront.",
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="border-b border-line blueprint-grid">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue">Services</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-balance text-ink md:text-6xl">
            Everything between a business plan and a signed term sheet.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            Our services span three stages of a financing engagement. Most
            clients move through all three; some join partway through with
            work already done. Either way, you have one advisor across the
            whole process.
          </p>
        </div>
      </section>

      {groups.map((group, i) => (
        <section
          key={group.label}
          className={`mx-auto max-w-6xl px-6 py-16 md:py-20 ${
            i !== groups.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-display text-5xl italic text-yellow-deep">
                {group.label}
              </span>
              <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                {group.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{group.intro}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
              {group.items.map((item) => (
                <div key={item.title} className="border-t border-ink pt-4">
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 text-paper md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-3xl italic md:text-4xl">
            Not sure which stage your business is at?
          </h2>
          <Link
            href="/contact"
            className="whitespace-nowrap border border-yellow bg-yellow px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-yellow"
          >
            Book a consultation call
          </Link>
        </div>
      </section>
    </>
  );
}
