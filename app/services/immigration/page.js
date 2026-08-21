import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "Immigration Law | SFR Solicitors",
  description: "Expert UK immigration lawyers. We advise on visas, settlement, nationality, asylum and appeals for individuals, families and businesses.",
};

const services = [
  { icon: "🛂", title: "Entry Clearance & Visas", desc: "Skilled Worker, Student, Family, Visitor and Investor visas — applications, extensions and transfers of conditions." },
  { icon: "🏠", title: "Settlement (ILR)", desc: "Applications for Indefinite Leave to Remain, including long residence and family-based routes." },
  { icon: "🇬🇧", title: "British Nationality", desc: "Naturalisation and registration as a British citizen, including complex cases involving absences and criminal records." },
  { icon: "👨‍👩‍👧", title: "Family Visas", desc: "Spouse, partner, parent and child visas — both entry clearance and leave to remain applications." },
  { icon: "⚠️", title: "Deportation & Removal", desc: "Urgent legal representation and appeals for those facing removal or deportation from the UK." },
  { icon: "📋", title: "Asylum Claims", desc: "Sensitive, expert assistance with asylum applications and human rights claims under Article 3 and Article 8." },
];

export default function ImmigrationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.07),transparent_70%)] blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">Our Services</span>
            </Reveal>
            <Reveal as="h1" delay={80} className="max-w-[16ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              UK Immigration &amp; Nationality Law
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.65] text-muted">
              UK immigration law is complex and constantly evolving. Our specialist solicitors provide clear, reliable advice to help you navigate the system — whether you are applying for a visa, seeking settlement, or facing an immigration challenge.
            </Reveal>
          </div>
        </section>

        <section className="bg-parchment px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">Immigration Services We Offer</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item, i) => (
                <Reveal key={item.title} delay={i * 70} className="group rounded-xl border border-paper-line bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-[1.1rem] font-bold text-ink group-hover:text-oxblood transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-start">
            <Reveal>
              <h2 className="text-[2rem] font-semibold leading-[1.15] mb-5">Why the Right Legal Advice Matters</h2>
              <p className="text-muted leading-relaxed mb-6">
                An incorrect or incomplete application can result in refusal, delays, or in serious cases, removal from the UK. We ensure your application is thorough, accurately presented and submitted on time.
              </p>
              <ul className="space-y-3 text-sm text-muted">
                {["Expert knowledge of the Immigration Rules and Home Office policies",
                  "Experience with complex cases including previous refusals",
                  "Dedicated solicitor for your case from start to finish",
                  "Transparent fixed fees where possible"].map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-oxblood font-bold">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="space-y-4">
              <div className="rounded-xl border border-paper-line bg-white p-7 shadow-sm">
                <p className="font-bold text-ink mb-1">Urgent Matters</p>
                <p className="text-sm text-muted leading-relaxed">If you are facing imminent removal or have received a time-sensitive decision, contact us immediately. We can advise on emergency applications and injunctions.</p>
              </div>
              <div className="rounded-xl border border-paper-line bg-white p-7 shadow-sm">
                <p className="font-bold text-ink mb-1">Business Immigration</p>
                <p className="text-sm text-muted leading-relaxed">We also advise employers on sponsorship licences, compliance and skilled worker visa requirements for their workforce.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
