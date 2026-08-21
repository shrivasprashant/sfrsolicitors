import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "Personal Injury Claims | SFR Solicitors",
  description: "Expert personal injury solicitors. We help victims of accidents, road traffic collisions and workplace injuries pursue compensation.",
};

const types = [
  { icon: "🚗", title: "Road Traffic Accidents", desc: "Representing drivers, passengers, cyclists and pedestrians injured in road collisions." },
  { icon: "🏭", title: "Workplace Injuries", desc: "Claims for accidents at work, including slips, trips, falls and industrial disease." },
  { icon: "🏥", title: "Medical Negligence", desc: "Pursuing compensation where substandard medical treatment has caused harm or injury." },
  { icon: "🚶", title: "Slips, Trips & Falls", desc: "Claims against occupiers and public bodies for preventable accidents on their premises." },
  { icon: "⚡", title: "Serious Injuries", desc: "Specialist support for life-changing injuries including brain injury and spinal cord damage." },
  { icon: "👨‍👩‍👧", title: "Fatal Accidents", desc: "Sensitive representation for families who have lost a loved one due to another party's negligence." },
];

export default function PersonalInjuryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-parchment px-5 py-24 sm:px-8 sm:py-32 border-b border-paper-line">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-12 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.07),transparent_70%)] blur-3xl" />
          <div className="relative mx-auto max-w-5xl">
            <Reveal className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">Our Services</span>
            </Reveal>
            <Reveal as="h1" delay={80} className="max-w-[16ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              Personal Injury Claims
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[58ch] text-[1.15rem] leading-[1.65] text-muted">
              If you have been injured due to someone else&apos;s negligence, you may be entitled to compensation. Our specialist personal injury solicitors are here to guide you through the process with care and expertise.
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap gap-6 text-sm text-muted font-medium">
              <span className="flex items-center gap-2"><span className="text-oxblood font-bold">✓</span> No win, no fee available</span>
              <span className="flex items-center gap-2"><span className="text-oxblood font-bold">✓</span> Free initial consultation</span>
              <span className="flex items-center gap-2"><span className="text-oxblood font-bold">✓</span> Expert legal team</span>
            </Reveal>
          </div>
        </section>

        <section className="bg-parchment px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-12 text-center">
              <h2 className="text-[2rem] font-semibold">Types of Claims We Handle</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {types.map((item, i) => (
                <Reveal key={item.title} delay={i * 70} className="rounded-xl border border-paper-line bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-[1.1rem] font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-parchment-2 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
            <Reveal>
              <h2 className="text-[2rem] font-semibold leading-[1.15] mb-5">Why Choose SFR for Your Personal Injury Claim?</h2>
              <ul className="space-y-4 text-muted">
                {[
                  "We work on a No Win, No Fee basis so there is no financial risk to you",
                  "You will have a dedicated solicitor managing your case from start to finish",
                  "We have a strong track record of achieving significant compensation for our clients",
                  "We handle all communication with insurers and third parties on your behalf",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full bg-oxblood/10 text-oxblood font-bold text-xs">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="rounded-xl border border-paper-line bg-white p-8 shadow-sm">
              <p className="text-[1.1rem] font-semibold text-ink mb-2">Time Limits Apply</p>
              <p className="text-muted leading-relaxed text-sm">
                In most personal injury cases, you have <strong className="text-ink">3 years</strong> from the date of the accident to bring a claim. Do not delay — contact us today for a free initial assessment of your case.
              </p>
              <div className="mt-6">
                <a href="/contact" className="inline-block rounded bg-oxblood px-6 py-3 font-mono text-sm font-semibold text-parchment transition-all hover:-translate-y-0.5 hover:bg-oxblood-dark">
                  Get Free Advice →
                </a>
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
