import Button from "@/components/ui/Button";

import Reveal from "@/components/ui/Reveal";

import ScalesIllustration from "@/components/icons/ScalesIllustration";

import PracticeAreaNav from "@/components/sections/PracticeAreaNav";



export default function Hero() {

  return (

    <section className="relative overflow-hidden px-5 pt-16 sm:px-8 sm:pt-10">

      {/* Decorative depth accent — soft, low-opacity, purely ambient */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.10),transparent_70%)] blur-2xl"

      />

      <div

        aria-hidden="true"

        className="pointer-events-none absolute left-1/3 top-40 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(169,133,84,0.08),transparent_70%)] blur-2xl"

      />



      <div className="relative mx-auto grid max-w-wrap items-center gap-10 md:grid-cols-[1fr_1fr] lg:gap-6">

        {/* Content */}
        <div>
          <Reveal className="mb-7 inline-flex items-center gap-2.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-oxblood"
              aria-hidden="true"
            />

            <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
              Legal Support When It Matters Most
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="max-w-[14ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]"
          >
            Trusted legal advice. Clear guidance. Strong representation.
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-[52ch] text-[1.15rem] leading-[1.65] text-muted"
          >
            When you&rsquo;re facing a legal dispute, pursuing compensation,
            dealing with the consequences of an accident, or navigating an
            immigration matter, having the right legal support can make a
            significant difference. You do not have to face it alone.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary">
              Speak to Our Legal Team
            </Button>

            <Button href="#litigation" variant="ghost">
              Browse Our Case Files
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-spring group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Button>
          </Reveal>
        </div>

        {/* Illustration */}
        <Reveal
          variant="fade"
          delay={120}
          className="flex items-center justify-center max-md:order-first"
        >
          <div
            aria-hidden="true"
            className="animate-gentle-float flex w-full justify-center"
          >
            <ScalesIllustration
              className="
          w-[300px]
          sm:w-[340px]
          md:w-[400px]
          lg:w-[400px]
          xl:w-[400px]
          h-auto
        "
            />
          </div>
        </Reveal>

      </div>



      <div className="relative">

        <PracticeAreaNav />

      </div>

    </section>

  );

}