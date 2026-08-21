export default function ScalesIllustration(props) {
  return (
    <svg
      viewBox="0 0 320 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line x1="160" y1="20" x2="160" y2="290" stroke="#1c1a17" strokeWidth="2.5" />
      <circle cx="160" cy="18" r="7" fill="#7a2e2e" />
      <line x1="60" y1="70" x2="260" y2="70" stroke="#1c1a17" strokeWidth="2.5" />
      <circle cx="160" cy="70" r="5" fill="#1c1a17" />
      {/* left pan */}
      <line x1="60" y1="70" x2="30" y2="140" stroke="#1c1a17" strokeWidth="1.4" />
      <line x1="60" y1="70" x2="90" y2="140" stroke="#1c1a17" strokeWidth="1.4" />
      <path d="M18 140 Q60 175 102 140" stroke="#a98554" strokeWidth="2.5" fill="none" />
      {/* right pan */}
      <line x1="260" y1="70" x2="230" y2="140" stroke="#1c1a17" strokeWidth="1.4" />
      <line x1="260" y1="70" x2="290" y2="140" stroke="#1c1a17" strokeWidth="1.4" />
      <path d="M218 140 Q260 175 302 140" stroke="#a98554" strokeWidth="2.5" fill="none" />
      {/* base */}
      <path
        d="M110 290 L210 290 L235 330 L85 330 Z"
        stroke="#1c1a17"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="120" y1="290" x2="120" y2="330" stroke="#1c1a17" strokeWidth="1" opacity="0.4" />
      <line x1="160" y1="290" x2="160" y2="330" stroke="#1c1a17" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="290" x2="200" y2="330" stroke="#1c1a17" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
