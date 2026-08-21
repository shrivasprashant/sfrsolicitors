import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { practiceAreas } from "@/lib/data/practice-areas";

export const metadata = {
  title: "Our Services | SFR Solicitors",
  description: "Explore the legal services provided by SFR Solicitors.",
};

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 bg-parchment border-b border-paper-line">
          <div className="relative mx-auto max-w-wrap text-center">
            <Reveal className="mb-7 inline-flex items-center gap-2.5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
                Practice Areas
              </span>
            </Reveal>

            <Reveal as="h1" delay={80} className="mx-auto max-w-[20ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              Our Legal Services
            </Reveal>
            
            <Reveal
              as="p"
              delay={160}
              className="mx-auto mt-6 max-w-[55ch] text-[1.15rem] leading-[1.65] text-muted"
            >
              We offer comprehensive legal support in Personal Injury, Immigration, Civil Litigation, and Criminal Injuries Compensation.
            </Reveal>
          </div>
        </section>
        <section className="px-5 py-24 sm:px-8 bg-parchment">
          <div className="mx-auto max-w-wrap grid gap-8 md:grid-cols-2">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.id} delay={index * 100} className="rounded-xl border border-paper-line bg-white p-8 shadow-sm">
                 <h2 className="text-[1.5rem] font-bold text-ink mb-4">{area.title}</h2>
                 <p className="text-muted leading-relaxed mb-6">{area.description}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
