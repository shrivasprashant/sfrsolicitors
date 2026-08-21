import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "About Us | SFR Solicitors",
  description: "Learn about SFR Solicitors, our history, and our values.",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 bg-parchment border-b border-paper-line">
          <div className="relative mx-auto max-w-wrap text-center">
            <Reveal className="mb-7 inline-flex items-center gap-2.5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
                Our Firm
              </span>
            </Reveal>

            <Reveal as="h1" delay={80} className="mx-auto max-w-[20ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              About SFR Solicitors
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="mx-auto mt-6 max-w-[55ch] text-[1.15rem] leading-[1.65] text-muted"
            >
              We are a dedicated team of legal professionals providing expert advice and strong representation across a range of practice areas.
            </Reveal>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
