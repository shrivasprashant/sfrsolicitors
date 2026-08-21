import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "CICA Claims | Criminal Injuries Compensation | SFR Solicitors",
  description: "Specialist CICA claim solicitors. We help victims of violent crime claim the compensation they are entitled to from the Criminal Injuries Compensation Authority.",
};

const faqs = [
  { q: "Who can make a CICA claim?", a: "You can apply if you were the victim of a violent crime in Great Britain on or after 1 August 1964. You must apply within 2 years of the incident." },
  { q: "How much compensation can I receive?", a: "Awards range from £1,000 to £500,000 depending on the severity of your injuries, as set out in the CICA Tariff of Injuries." },
  { q: "Do I need a solicitor?", a: "While you can apply directly, having a specialist solicitor significantly improves your prospects of a successful and maximised award." },
  { q: "What if my claim was rejected?", a: "We can review rejected claims and assist with appeals to the First-tier Tribunal (Criminal Injuries Compensation)." },
];

export default function CICAPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.07),transparent_70%)] blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">Our Services</span>
            </Reveal>
            <Reveal as="h1" delay={80} className="max-w-[16ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              CICA Claims: Criminal Injuries Compensation
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.65] text-muted">
              Victims of violent crime deserve support. The Criminal Injuries Compensation Authority (CICA) scheme exists to provide financial redress. Our specialist solicitors will guide you through every step of the application process.
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-parchment px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">How the CICA Process Works</h2>
              <p className="mt-4 mx-auto max-w-[52ch] text-muted text-[1.05rem] leading-relaxed">
                The CICA scheme can be complex. We simplify the process and manage your claim from start to finish.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", label: "Free Case Assessment", desc: "We review your circumstances and advise whether you have a valid claim." },
                { step: "02", label: "Application Preparation", desc: "We gather all necessary evidence, medical records and police reports." },
                { step: "03", label: "Submission & Review", desc: "We submit the claim to CICA and manage all correspondence on your behalf." },
                { step: "04", label: "Award & Appeal", desc: "We review any award made and advise on appealing decisions we believe are too low." },
              ].map((s, i) => (
                <Reveal key={s.step} delay={i * 80} className="rounded-xl bg-white border border-paper-line p-7 shadow-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-oxblood/10">
                    <span className="font-mono text-sm font-bold text-oxblood">{s.step}</span>
                  </div>
                  <h3 className="mt-2 text-[1.05rem] font-bold text-ink">{s.label}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">Common Questions About CICA</h2>
            </Reveal>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 80} className="rounded-xl border border-paper-line bg-white p-7 shadow-sm">
                  <h3 className="text-[1.05rem] font-bold text-ink mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
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
