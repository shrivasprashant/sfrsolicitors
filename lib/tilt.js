/**
 * Cursor-based 3D tilt + glow, shared by the docket tabs and process
 * steps. Writes CSS custom properties directly to the target element
 * on pointermove rather than going through React state, so hovering a
 * card doesn't re-render the tree on every mouse event.
 *
 * Usage:
 *   <div
 *     className="tilt-card tilt-card-glow"
 *     onPointerMove={(e) => handleTiltMove(e)}
 *     onPointerLeave={handleTiltLeave}
 *   />
 *
 * The .tilt-card / .tilt-card-glow CSS (globals.css) only applies the
 * 3D transform and glow inside a `(hover: hover) and (pointer: fine)`
 * media query, so touch devices already get an inert, flat card — the
 * pointerType check here is a second guard against synthetic touch
 * "pointermove" events some browsers fire on tap-and-hold.
 */
export function handleTiltMove(event, { intensity = 7 } = {}) {
  if (event.pointerType && event.pointerType !== "mouse") return;

  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width;
  const py = (event.clientY - rect.top) / rect.height;

  const rotateX = (py - 0.5) * -2 * intensity;
  const rotateY = (px - 0.5) * 2 * intensity;

  el.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
  el.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
  el.style.setProperty("--glow-x", `${(px * 100).toFixed(1)}%`);
  el.style.setProperty("--glow-y", `${(py * 100).toFixed(1)}%`);
}

export function handleTiltLeave(event) {
  const el = event.currentTarget;
  el.style.setProperty("--tilt-rx", "0deg");
  el.style.setProperty("--tilt-ry", "0deg");
}
