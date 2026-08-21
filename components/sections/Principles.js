"use client";

import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { principles } from "@/lib/data/principles";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

export default function Principles() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 border-t border-paper-line">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mx-auto mt-[18px] max-w-[15ch] text-[2.2rem] font-semibold leading-[1.12] sm:text-[2.6rem]">
            Legal expertise with a human approach
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              delay={index * 100}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* tilt-card is on this inner div so pointer events work correctly */}
              <div
                className="tilt-card tilt-card-glow group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-paper-line bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                onPointerMove={(e) => handleTiltMove(e, { intensity: 8 })}
                onPointerLeave={handleTiltLeave}
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-parchment-2 text-oxblood transition-all duration-300 ease-spring group-hover:scale-110 group-hover:bg-oxblood/10">
                    <span className="font-mono text-[1.1rem] font-bold">{principle.number}</span>
                  </div>
                  <h3 className="mb-3 text-[1.25rem] font-bold text-ink transition-colors duration-200 group-hover:text-oxblood">
                    {principle.title}
                  </h3>
                  <p className="text-[1rem] leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
                {/* animated bottom line on hover */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-oxblood transition-all duration-500 ease-out group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
