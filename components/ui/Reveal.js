"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades/slides children in once they cross into the viewport. Applies
 * the `.reveal` CSS class (globals.css) and toggles `data-visible` —
 * the actual animation is CSS-driven so it stays on the compositor
 * (opacity/transform only) rather than being computed in JS per frame.
 *
 * `delay` (ms) staggers a group of siblings — pass index * 80 or similar.
 * `variant="fade"` drops the translate/scale for elements where a slide
 * would look wrong (e.g. full-bleed backgrounds).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      data-variant={variant}
      className={`reveal ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
