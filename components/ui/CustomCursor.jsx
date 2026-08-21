"use client";

import { useEffect, useRef } from "react";

/**
 * Premium custom cursor with context-aware states:
 *   default   → small dot + lagging ring
 *   link/btn  → ring expands + fills red, dot hides ("click" state)
 *   text      → ring squishes into thin vertical bar
 *   image/svg → ring shows "✦" explore indicator
 *   drag area → shows ↔ bidirectional arrow
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    // Only run on real pointer (no touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = "none";

    let mx = -200, my = -200; // mouse
    let rx = -200, ry = -200; // ring (lagging)
    let rafId;

    // Direct write to transform (no React state, no re-render)
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      label.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onEnter = (e) => {
      const el = e.target;

      // LINK / BUTTON → expand ring, fill oxblood
      if (el.closest("a, button, [role='button']")) {
        ring.dataset.state = "link";
        dot.dataset.state = "link";
        label.textContent = "";
        return;
      }

      // SCALES ILLUSTRATION / IMAGE
      if (el.closest("svg, img, canvas, [data-cursor='explore']")) {
        ring.dataset.state = "explore";
        dot.dataset.state = "explore";
        label.textContent = "✦";
        return;
      }

      // TILT CARD → show drag indicator
      if (el.closest(".tilt-card")) {
        ring.dataset.state = "drag";
        dot.dataset.state = "drag";
        label.textContent = "";
        return;
      }

      // HEADINGS / PARAGRAPHS → text bar
      if (el.closest("h1, h2, h3, h4, p")) {
        ring.dataset.state = "text";
        dot.dataset.state = "text";
        label.textContent = "";
        return;
      }

      // DEFAULT
      ring.dataset.state = "";
      dot.dataset.state = "";
      label.textContent = "";
    };

    const onLeave = () => {
      ring.dataset.state = "";
      dot.dataset.state = "";
      label.textContent = "";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <>
      {/* Dot — always snaps to exact pointer position */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
      />
      {/* Ring — lags behind for kinetic feel */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
      />
      {/* Floating label inside ring (explore star, etc.) */}
      <div
        ref={labelRef}
        aria-hidden="true"
        className="cursor-label"
      />
    </>
  );
}
