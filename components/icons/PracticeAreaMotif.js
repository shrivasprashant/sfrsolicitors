const paths = {
  litigation: (
    <>
      <rect
        x="10"
        y="6"
        width="24"
        height="8"
        rx="1.5"
        transform="rotate(-35 22 10)"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line x1="18" y1="18" x2="6" y2="30" stroke="currentColor" strokeWidth="2.2" />
      <rect
        x="4"
        y="30"
        width="20"
        height="8"
        rx="1.5"
        transform="rotate(-45 8 34)"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <line x1="6" y1="42" x2="34" y2="42" stroke="currentColor" strokeWidth="2.2" />
    </>
  ),
  injury: (
    <>
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <line x1="24" y1="15" x2="24" y2="33" stroke="currentColor" strokeWidth="2.6" />
      <line x1="15" y1="24" x2="33" y2="24" stroke="currentColor" strokeWidth="2.6" />
    </>
  ),
  cica: (
    <>
      <path
        d="M24 5 L40 11 V22 C40 32 33 39 24 43 C15 39 8 32 8 22 V11 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M18 23 L22.5 28 L31 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  immigration: (
    <>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="7.5" ry="18" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />
      <path d="M9 15 C15 18 33 18 39 15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 33 C15 30 33 30 39 33" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  ma: (
    <>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="1.8" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />
      <path d="M15 17 L24 24 L33 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 31 L24 24 L33 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function PracticeAreaMotif({ icon, className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {paths[icon]}
    </svg>
  );
}
