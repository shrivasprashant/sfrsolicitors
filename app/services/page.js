import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Link from "next/link";

export const metadata = {
  title: "Our Services | SFR Solicitors",
  description: "SFR Solicitors provides expert legal services across M&A & Europe, Disputes, Personal Injury, CICA Claims and Immigration Law.",
};

const services = [
  {
    href: "/services/ma-europe",
    label: "M&A & Europe",
    icon: "🌍",
    color: "from-amber-50 to-orange-50",
    accent: "border-amber-200",
    tag: "Corporate",
    description:
      "Expert legal advice on mergers, acquisitions and cross-border European transactions. We guide you through complex corporate restructuring, due diligence and regulatory compliance.",
    points: [
      "Due diligence & risk assessment",
      "Transaction structuring & SPA drafting",
      "EU regulatory & competition law",
      "Cross-border deal execution",
    ],
  },
  {
    href: "/services/disputes",
    label: "Disputes & Litigation",
    icon: "⚖",
    color: "from-slate-50 to-gray-50",
    accent: "border-slate-200",
    tag: "Litigation",
    description:
      "Strong, prepared representation in civil and commercial disputes. We explore all resolution options — from negotiation and mediation to full court proceedings.",
    points: [
      "County Court & High Court representation",
      "Mediation & alternative dispute resolution",
      "Contract disputes & breach of warranty claims",
      "Commercial & partnership disputes",
    ],
  },
  {
    href: "/services/personal-injury",
    label: "Personal Injury",
    icon: "🏥",
    color: "from-rose-50 to-red-50",
    accent: "border-rose-200",
    tag: "No Win No Fee",
    description:
      "If you have been injured due to someone else's negligence, you may be entitled to significant compensation. Our specialist solicitors act on a no win, no fee basis.",
    points: [
      "Road traffic accident claims",
      "Workplace & employer liability",
      "Slips, trips & public liability",
      "Serious & life-changing injuries",
    ],
  },
  {
    href: "/services/cica",
    label: "CICA Claims",
    icon: "🛡",
    color: "from-emerald-50 to-teal-50",
    accent: "border-emerald-200",
    tag: "Criminal Injuries",
    description:
      "Specialist support for victims of violent crime seeking compensation through the Criminal Injuries Compensation Authority. We manage the process from application to appeal.",
    points: [
      "Eligibility assessment & advice",
      "Full application preparation & submission",
      "CICA correspondence management",
      "Appeals to the First-tier Tribunal",
    ],
  },
  {
    href: "/services/immigration",
    label: "Immigration Law",
    icon: "🛂",
    color: "from-blue-50 to-indigo-50",
    accent: "border-blue-200",
    tag: "Immigration",
    description:
      "Expert UK immigration law advice for individuals, families and businesses. From visa applications to settlement, asylum and urgent deportation defence.",
    points: [
      "Entry clearance & visa applications",
      "ILR & British nationality",
      "Family visas & spouse applications",
      "Asylum claims & deportation appeals",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-16 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.08),transparent_65%)] blur-[80px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(169,133,84,0.07),transparent_65%)] blur-[80px]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal className="mb-7 inline-flex items-center gap-2.5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
                Practice Areas
              </span>
            </Reveal>
            <Reveal as="h1" delay={80} className="mx-auto max-w-[20ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              Comprehensive Legal Services, Tailored to You
            </Reveal>
            <Reveal as="p" delay={160} className="mx-auto mt-6 max-w-[55ch] text-[1.15rem] leading-[1.65] text-muted">
              From complex corporate transactions to personal injury claims, our specialist solicitors provide expert advice and strong representation across five core practice areas.
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-paper-line bg-white px-4 py-1.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-oxblood/40 hover:text-oxblood hover:shadow-sm"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Service Cards ── */}
        <section className="bg-parchment px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl space-y-8">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={i * 80}>
                <Link
                  href={service.href}
                  className={`group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border bg-gradient-to-br ${service.color} ${service.accent} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-oxblood opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon column */}
                  <div className="flex shrink-0 items-center justify-center px-8 py-10 sm:w-36 sm:py-12">
                    <span className="text-5xl drop-shadow-sm">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between border-t border-paper-line px-8 py-8 sm:border-l sm:border-t-0">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-oxblood/10 px-3 py-0.5 font-mono text-[0.7rem] font-semibold tracking-wide text-oxblood">
                          {service.tag}
                        </span>
                      </div>
                      <h2 className="mb-3 text-[1.5rem] font-bold text-ink transition-colors duration-200 group-hover:text-oxblood">
                        {service.label}
                      </h2>
                      <p className="max-w-[56ch] text-[1rem] leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      {/* Bullet points */}
                      <ul className="space-y-1.5">
                        {service.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-[0.875rem] text-muted">
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-oxblood/60" />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      {/* CTA arrow */}
                      <span className="ml-auto mt-4 inline-flex flex-shrink-0 items-center gap-2 font-mono text-[0.82rem] font-bold text-oxblood sm:mt-0">
                        Learn More
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Why SFR ── */}
        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">Why Clients Choose SFR Solicitors</h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-muted text-[1.05rem] leading-relaxed">
                Whatever brought you here, we are committed to understanding your situation and delivering clear, effective legal advice.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🎯", title: "Specialist Expertise", desc: "Dedicated solicitors in each practice area with deep specialist knowledge." },
                { icon: "🗣", title: "Clear Communication", desc: "We explain your options in plain English — no unnecessary jargon." },
                { icon: "⚡", title: "Responsive Service", desc: "We keep you informed and respond to your queries promptly." },
                { icon: "🤝", title: "Client-First Approach", desc: "Your outcome matters to us. We put your interests at the centre of everything." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="rounded-xl bg-white border border-paper-line p-7 text-center shadow-sm">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-[1.05rem] font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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
