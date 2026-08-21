import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ClosingCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-5 py-28 text-center text-parchment sm:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.18),transparent_70%)] blur-2xl"
      />
      <div className="relative">
        <Reveal>
          <Eyebrow onDark>Ready to Discuss Your Legal Matter?</Eyebrow>
        </Reveal>
        <Reveal delay={80} as="h2" className="mx-auto mt-5 max-w-[16ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.14]">
          Whatever brought you here, taking the first step can make it clearer.
        </Reveal>
        <Reveal
          delay={160}
          as="p"
          className="mx-auto mt-[22px] max-w-[48ch] text-parchment/[0.68]"
        >
          You may be dealing with an injury, a dispute, the consequences of
          violent crime, or an immigration challenge. Speak to our legal team
          today and find out how we may be able to help.
        </Reveal>
        <Reveal delay={240} className="mt-9">
          <Button href="/contact" variant="primary-on-dark">
            Get Legal Advice
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
