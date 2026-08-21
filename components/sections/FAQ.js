"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section className="bg-white px-5 py-24 sm:px-8 border-t border-paper-line">
      <div className="mx-auto max-w-[800px]">
        <Reveal className="mb-16 text-center flex flex-col items-center">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="mt-[18px] text-[2.2rem] font-semibold leading-[1.12] sm:text-[2.6rem]">
            Common questions
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-xl border border-paper-line bg-white transition-all duration-300 ${
                  isOpen ? "shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 p-6 text-left font-body text-[1.1rem] font-bold text-ink transition-colors duration-200 hover:text-oxblood"
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  id={`${faq.id}-trigger`}
                  onClick={() => toggle(faq.id)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-spring ${
                      isOpen
                        ? "rotate-45 bg-oxblood text-white"
                        : "bg-parchment-2 text-oxblood group-hover:bg-oxblood/10"
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`${faq.id}-panel`}
                  role="region"
                  aria-labelledby={`${faq.id}-trigger`}
                  className={`faq-answer ${isOpen ? "is-open" : ""}`}
                >
                  <div className={isOpen ? "px-6 pb-6 pt-2" : "px-6"}>
                    <p className="text-[1.05rem] leading-[1.7] text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

