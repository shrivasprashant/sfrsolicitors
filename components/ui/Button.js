"use client";

import { useState } from "react";
import Link from "next/link";

const variants = {
  primary:
    "inline-block rounded bg-oxblood px-7 py-[15px] font-mono text-[0.85rem] font-semibold tracking-[0.02em] text-parchment shadow-[0_1px_0_rgba(0,0,0,0.2)] transition-[background-color,transform,box-shadow] duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood active:translate-y-0 active:scale-[0.98] active:duration-100",
  "primary-on-dark":
    "inline-block rounded bg-oxblood px-7 py-[15px] font-mono text-[0.85rem] font-semibold tracking-[0.02em] text-parchment transition-[background-color,transform,box-shadow] duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-light hover:shadow-glow-brass active:translate-y-0 active:scale-[0.98] active:duration-100",
  ghost:
    "group inline-flex items-center gap-1.5 border-b-[1.5px] border-ink pb-0.5 font-mono text-[0.85rem] font-semibold text-ink transition-colors duration-200 hover:border-oxblood hover:text-oxblood",
  outline:
    "group inline-flex items-center gap-1.5 rounded border border-[#dfddd5] bg-transparent px-7 py-[15px] font-mono text-[0.85rem] font-semibold text-ink transition-[background-color,border-color,transform] duration-200 ease-spring hover:-translate-y-0.5 hover:border-oxblood hover:bg-white/50 active:translate-y-0 active:scale-[0.98]",
};

const rippleEligible = new Set(["primary", "primary-on-dark"]);

export default function Button({ href, variant = "primary", children, className = "", ...props }) {
  const [ripples, setRipples] = useState([]);

  function handleClick(event) {
    if (!rippleEligible.has(variant)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const ripple = { id, x: event.clientX - rect.left, y: event.clientY - rect.top };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative ${rippleEligible.has(variant) ? "overflow-hidden" : ""} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="btn-ripple-dot"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </Link>
  );
}
