import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact Us | SFR Solicitors",
  description: "Get in touch with SFR Solicitors for expert legal advice.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 bg-parchment">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(169,133,84,0.1),transparent_70%)] blur-2xl"
          />
          <div className="relative mx-auto max-w-wrap">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              {/* Contact Information */}
              <div>
                <Reveal>
                  <h1 className="text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
                    Get in touch.
                  </h1>
                  <p className="mt-6 text-[1.15rem] leading-[1.65] text-muted max-w-[40ch]">
                    We're here to provide the legal support you need. Contact us to schedule an initial consultation or discuss your case.
                  </p>
                </Reveal>

                <Reveal delay={100} className="mt-12 space-y-8">
                  <div>
                    <h3 className="mb-2 font-mono text-[0.85rem] font-semibold uppercase tracking-wider text-oxblood">
                      Our Office
                    </h3>
                    <p className="text-[1.05rem] leading-relaxed text-ink">
                      124-128 City Road,<br />
                      London, England, EC1V 2NX
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-mono text-[0.85rem] font-semibold uppercase tracking-wider text-oxblood">
                      Contact Details
                    </h3>
                    <p className="text-[1.05rem] leading-relaxed text-ink">
                      <a href="mailto:contact@sfrsolicitors.com" className="transition-colors hover:text-oxblood block mb-1">
                        contact@sfrsolicitors.com
                      </a>
                      <a href="tel:+442046154242" className="transition-colors hover:text-oxblood font-semibold">
                        +44 20 4615 4242
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-mono text-[0.85rem] font-semibold uppercase tracking-wider text-oxblood">
                      Business Hours
                    </h3>
                    <p className="text-[1.05rem] leading-relaxed text-ink">
                      Monday &ndash; Friday: 9:00 AM &ndash; 5:30 PM<br />
                      Closed on Weekends and Bank Holidays
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Contact Form */}
              <Reveal delay={200}>
                <div className="rounded-md border border-paper-line bg-white p-8 shadow-sm sm:p-12">
                  <h2 className="mb-6 text-[1.75rem] font-semibold">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-ink">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full rounded border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-ink">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full rounded border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood transition-colors"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full resize-y rounded border border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-oxblood focus:outline-none focus:ring-1 focus:ring-oxblood transition-colors"
                        placeholder="Please provide a brief overview of your legal matter..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded bg-oxblood px-6 py-4 font-mono text-[0.85rem] font-semibold tracking-wider text-white transition-all duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood"
                    >
                      Submit Enquiry
                    </button>
                    
                    <p className="text-center text-[0.8rem] text-gray-500">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="underline hover:text-oxblood">Privacy Policy</a>.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
