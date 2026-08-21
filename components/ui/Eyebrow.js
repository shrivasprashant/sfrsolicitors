export default function Eyebrow({ children, onDark = false, className = "" }) {
  return (
    <span
      className={`font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${
        onDark ? "text-brass" : "text-oxblood"
      } ${className}`}
    >
      {children}
    </span>
  );
}
