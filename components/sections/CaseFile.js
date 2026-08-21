import PracticeAreaMotif from "@/components/icons/PracticeAreaMotif";
import Reveal from "@/components/ui/Reveal";

export default function CaseFile({ area }) {
  const isDark = area.tone === "dark";

  return (
    <section
      id={area.id}
      className={`relative border-t px-5 py-20 sm:px-8 ${
        isDark
          ? "border-white/[0.12] bg-slate text-parchment shadow-[inset_0_16px_28px_-28px_rgba(0,0,0,0.5)]"
          : "border-paper-line bg-parchment text-ink"
      }`}
    >
      <div className="mx-auto grid max-w-wrap gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <Reveal as="div" variant="fade-up" className="self-start md:sticky md:top-[88px]">
          <div className="mb-4 flex items-center gap-3.5">
            <PracticeAreaMotif
              icon={area.icon}
              className={`h-[34px] w-[34px] flex-shrink-0 transition-transform duration-300 ease-spring ${
                isDark ? "text-brass" : "text-oxblood"
              }`}
            />
            <span
              className={`inline-block rounded-sm border px-3 py-1.5 font-mono text-[0.78rem] tracking-[0.08em] ${
                isDark ? "border-brass text-brass" : "border-oxblood text-oxblood"
              }`}
            >
              {area.fileNumber}
            </span>
          </div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.15]">{area.title}</h2>
          <p
            className={`mt-6 font-mono text-[0.7rem] uppercase tracking-[0.06em] ${
              isDark ? "text-parchment/50" : "text-muted"
            }`}
          >
            {area.status}
          </p>
        </Reveal>

        <Reveal as="div" delay={100}>
          {area.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`max-w-[56ch] text-[1.08rem] leading-[1.7] ${
                index > 0 ? "mt-4" : ""
              } ${isDark ? "text-parchment/[0.82]" : "text-muted"}`}
            >
              {paragraph}
            </p>
          ))}

          {area.list && (
            <ul className="mt-8 grid max-w-[640px] grid-cols-1 gap-x-7 gap-y-2.5 sm:grid-cols-2">
              {area.list.map((item) => (
                <li
                  key={item}
                  className={`relative border-t py-2.5 pl-5 text-[0.94rem] transition-[padding-left] duration-200 hover:pl-6 ${
                    isDark ? "border-white/[0.14]" : "border-paper-line"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-2.5 transition-transform duration-200 ${
                      isDark ? "text-brass" : "text-oxblood"
                    }`}
                    aria-hidden="true"
                  >
                    &mdash;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <a
            href="#contact"
            className={`group mt-9 inline-flex items-center gap-2 border-b-[1.5px] border-transparent font-mono text-[0.85rem] font-semibold transition-colors duration-150 hover:border-current ${
              isDark ? "text-brass" : "text-oxblood"
            }`}
          >
            {area.linkLabel}
            <span
              className="transition-transform duration-200 ease-spring group-hover:translate-x-[5px]"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
