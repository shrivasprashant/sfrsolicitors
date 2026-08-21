import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "Disputes & Litigation | SFR Solicitors",
  description: "Experienced dispute resolution and litigation lawyers. We represent clients in commercial disputes, civil claims and court proceedings.",
};

const highlights = [
  { icon: "🏛", title: "Court Representation", desc: "Strong, prepared advocacy in County Court, High Court and tribunal proceedings on your behalf." },
  { icon: "🤝", title: "Mediation & ADR", desc: "Resolving disputes efficiently through mediation, arbitration and alternative dispute resolution." },
  { icon: "📄", title: "Contract Disputes", desc: "Advising on breach of contract claims, damages, injunctions and enforcement of agreements." },
  { icon: "🏢", title: "Commercial Litigation", desc: "Acting for businesses in complex commercial disputes, including partnership and shareholder conflicts." },
];

export default function DisputesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.07),transparent_70%)] blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">Our Services</span>
            </Reveal>
            <Reveal as="h1" delay={80} className="max-w-[16ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              Disputes &amp; Civil Litigation
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.65] text-muted">
              When disputes arise, you need legal representation that is confident, prepared and focused on achieving the best possible outcome. We handle civil and commercial disputes from negotiation through to trial.
            </Reveal>
          </div>
        </section>

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

        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">How We Handle Your Dispute</h2>
              <p className="mt-4 mx-auto max-w-[52ch] text-muted text-[1.05rem] leading-relaxed">
                Litigation can be costly and time-consuming. We always explore all options to resolve matters efficiently.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { step: "01", label: "Case Review", desc: "We assess the merits of your claim or defence, advise on prospects and outline your options." },
                { step: "02", label: "Pre-Litigation Steps", desc: "We send formal correspondence, negotiate settlements and attempt to resolve matters before court." },
                { step: "03", label: "Proceedings & Trial", desc: "If necessary, we issue proceedings and represent you robustly through to judgment." },
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
