"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { practiceAreas } from "@/lib/data/practice-areas";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

export default function PracticeAreaNav() {
  return (
    <nav aria-label="Practice areas" className="mt-14 border-t border-paper-line">
      <div className="grid grid-cols-1 divide-y divide-paper-line sm:grid-cols-2 sm:divide-y-0 md:grid-cols-5">
        {practiceAreas.map((area, index) => (
          <Reveal key={area.id} delay={index * 70}>
            <Link
              href={`#${area.id}`}
              onPointerMove={(e) => handleTiltMove(e, { intensity: 5 })}
              onPointerLeave={handleTiltLeave}
              className="tilt-card tilt-card-glow flex h-full flex-col gap-2 border-paper-line px-4 py-5 transition-[background-color,box-shadow] duration-200 hover:bg-parchment-2 sm:border-r sm:odd:border-r md:border-r md:last:border-r-0"
            >
              <span className="relative z-10 flex flex-col gap-2">
                <span className="font-mono text-[0.72rem] font-semibold text-oxblood">
                  {area.fileNumber.replace("FILE NO. ", "FILE ")}
                </span>
                <span className="font-display text-[1.02rem] font-semibold">
                  {area.docketLabel}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </nav>
  );
}
