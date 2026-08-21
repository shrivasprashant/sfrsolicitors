"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data/process-steps";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-slate px-5 py-24 text-parchment shadow-[inset_0_16px_28px_-28px_rgba(0,0,0,0.5)] sm:px-8">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-14 max-w-[640px]">
          <Eyebrow onDark>From Your First Conversation to the Next Step</Eyebrow>
          <h2 className="mt-4 text-[2.2rem] font-semibold">
            Finding a solicitor doesn&rsquo;t have to feel overwhelming
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-y-7 border-t border-white/[0.16] sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90} className="h-full">
              <div
                onPointerMove={(e) => handleTiltMove(e, { intensity: 6 })}
                onPointerLeave={handleTiltLeave}
                className="tilt-card tilt-card-glow tilt-card-glow--dark h-full rounded-sm border-white/[0.16] px-1 pt-7 transition-[box-shadow] duration-200 hover:shadow-premium-dark sm:border-r sm:pr-6 sm:odd:border-r md:border-r md:pr-6 md:last:border-r-0 md:last:pr-0"
              >
                <span className="relative z-10 block">
                  <span className="mb-3.5 block font-mono text-[0.78rem] text-brass">
                    {step.number}
                  </span>
                  <h3 className="mb-2.5 text-[1.08rem] font-bold">{step.title}</h3>
                  <p className="text-[0.92rem] text-parchment/[0.72]">{step.description}</p>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
