import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "M&A & Europe | SFR Solicitors",
  description: "Expert legal advice on Mergers & Acquisitions and European law matters. SFR Solicitors guides you through complex cross-border transactions.",
};

const highlights = [
  { icon: "⚖", title: "Due Diligence", desc: "Thorough legal due diligence for acquisitions, mergers and corporate restructuring to identify risk before you commit." },
  { icon: "📋", title: "Transaction Structuring", desc: "We advise on the optimal legal structure for your deal, whether a share purchase, asset acquisition or merger." },
  { icon: "🌍", title: "Cross-Border Compliance", desc: "Navigating EU regulatory frameworks, GDPR, competition law and jurisdiction-specific requirements." },
  { icon: "🤝", title: "Negotiation & Drafting", desc: "Expert drafting and negotiation of SPAs, shareholder agreements, warranties, and indemnities." },
];

export default function MAEuropePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.07),transparent_70%)] blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">Our Services</span>
            </Reveal>
            <Reveal as="h1" delay={80} className="max-w-[18ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              Mergers, Acquisitions &amp; European Law
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.65] text-muted">
              Whether you are acquiring a business, expanding into Europe or managing a complex corporate restructure, our team provides clear, strategic legal advice at every stage.
            </Reveal>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="bg-parchment px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="rounded-xl border border-paper-line bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h2 className="mb-3 text-[1.2rem] font-bold text-ink">{item.title}</h2>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">Our Approach</h2>
              <p className="mt-4 mx-auto max-w-[52ch] text-muted text-[1.05rem] leading-relaxed">
                We take a practical, commercial approach — understanding your business objectives before applying the law.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { step: "01", label: "Initial Assessment", desc: "We review your transaction or matter and advise on the legal implications and risks." },
                { step: "02", label: "Strategy & Planning", desc: "We develop a clear plan, identify key legal milestones and advise on the optimal structure." },
                { step: "03", label: "Execution & Completion", desc: "We manage the legal process through to completion, keeping you informed at every stage." },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 100} className="rounded-xl bg-white border border-paper-line p-7 shadow-sm">
                  <span className="font-mono text-sm font-bold text-oxblood">{s.step}</span>
                  <h3 className="mt-3 text-[1.1rem] font-bold text-ink">{s.label}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
