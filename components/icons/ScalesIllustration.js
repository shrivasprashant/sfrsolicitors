export default function ScalesIllustration(props) {
  return (
    <svg
      viewBox="0 0 420 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Brass gradient */}
        <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8bd86" />
          <stop offset="35%" stopColor="#a98554" />
          <stop offset="65%" stopColor="#c7a96c" />
          <stop offset="100%" stopColor="#806039" />
        </linearGradient>

        {/* Dark metal */}
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#35312c" />
          <stop offset="50%" stopColor="#1c1a17" />
          <stop offset="100%" stopColor="#0e0d0c" />
        </linearGradient>

        {/* Pan gradient */}
        <linearGradient id="pan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8bd86" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8e693f" stopOpacity="0.55" />
        </linearGradient>

        {/* Soft shadow */}
        <filter
          id="shadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="180%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            floodColor="#1c1a17"
            floodOpacity="0.18"
          />
        </filter>

        {/* Subtle glow */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ================= TOP ORNAMENT ================= */}

      <g filter="url(#shadow)">
        {/* Top finial */}
        <path
          d="M210 22
             C202 22 197 28 197 36
             C197 44 202 49 210 49
             C218 49 223 44 223 36
             C223 28 218 22 210 22Z"
          fill="url(#brass)"
        />

        <circle
          cx="210"
          cy="35"
          r="5"
          fill="#f1dfb3"
          opacity="0.65"
        />

        {/* Main vertical column */}
        <path
          d="M203 48
             L217 48
             L217 338
             L203 338
             Z"
          fill="url(#metal)"
        />

        {/* Brass highlight on column */}
        <path
          d="M204 55 L208 55 L208 330 L204 330 Z"
          fill="#b9975c"
          opacity="0.45"
        />

        {/* Decorative collar */}
        <path
          d="M192 57
             Q210 49 228 57
             L224 68
             Q210 73 196 68
             Z"
          fill="url(#brass)"
        />
      </g>

      {/* ================= BALANCE BAR ================= */}

      <g filter="url(#shadow)">
        {/* Main bar */}
        <rect
          x="58"
          y="86"
          width="304"
          height="13"
          rx="6.5"
          fill="url(#metal)"
        />

        {/* Brass highlight */}
        <rect
          x="67"
          y="88"
          width="286"
          height="3"
          rx="1.5"
          fill="#c9aa70"
          opacity="0.5"
        />

        {/* Center pivot */}
        <circle
          cx="210"
          cy="92"
          r="12"
          fill="url(#brass)"
        />

        <circle
          cx="210"
          cy="92"
          r="5"
          fill="#211e1a"
        />
      </g>

      {/* ================= LEFT CHAINS ================= */}

      <g stroke="url(#brass)" strokeWidth="2.2" fill="none">
        <path d="M70 99 L40 174" />
        <path d="M70 99 L100 174" />

        {/* chain links */}
        <ellipse cx="62" cy="119" rx="4" ry="8" transform="rotate(22 62 119)" />
        <ellipse cx="54" cy="138" rx="4" ry="8" transform="rotate(22 54 138)" />
        <ellipse cx="46" cy="157" rx="4" ry="8" transform="rotate(22 46 157)" />

        <ellipse cx="78" cy="119" rx="4" ry="8" transform="rotate(-22 78 119)" />
        <ellipse cx="86" cy="138" rx="4" ry="8" transform="rotate(-22 86 138)" />
        <ellipse cx="94" cy="157" rx="4" ry="8" transform="rotate(-22 94 157)" />
      </g>

      {/* ================= RIGHT CHAINS ================= */}

      <g stroke="url(#brass)" strokeWidth="2.2" fill="none">
        <path d="M350 99 L320 174" />
        <path d="M350 99 L380 174" />

        <ellipse cx="342" cy="119" rx="4" ry="8" transform="rotate(22 342 119)" />
        <ellipse cx="334" cy="138" rx="4" ry="8" transform="rotate(22 334 138)" />
        <ellipse cx="326" cy="157" rx="4" ry="8" transform="rotate(22 326 157)" />

        <ellipse cx="358" cy="119" rx="4" ry="8" transform="rotate(-22 358 119)" />
        <ellipse cx="366" cy="138" rx="4" ry="8" transform="rotate(-22 366 138)" />
        <ellipse cx="374" cy="157" rx="4" ry="8" transform="rotate(-22 374 157)" />
      </g>

      {/* ================= LEFT PAN ================= */}

      <g filter="url(#shadow)">
        {/* Pan rim */}
        <ellipse
          cx="70"
          cy="178"
          rx="55"
          ry="12"
          fill="url(#brass)"
        />

        {/* Pan body */}
        <path
          d="M15 178
             C22 205 39 222 70 226
             C101 222 118 205 125 178
             Z"
          fill="url(#pan)"
          stroke="#8e693f"
          strokeWidth="2"
        />

        {/* Inner pan */}
        <ellipse
          cx="70"
          cy="180"
          rx="46"
          ry="7"
          fill="#332d25"
          opacity="0.35"
        />

        {/* highlight */}
        <path
          d="M31 185 C39 204 53 213 70 216"
          stroke="#f0dbac"
          strokeWidth="2"
          opacity="0.45"
          strokeLinecap="round"
        />
      </g>

      {/* ================= RIGHT PAN ================= */}

      <g filter="url(#shadow)">
        <ellipse
          cx="350"
          cy="178"
          rx="55"
          ry="12"
          fill="url(#brass)"
        />

        <path
          d="M295 178
             C302 205 319 222 350 226
             C381 222 398 205 405 178
             Z"
          fill="url(#pan)"
          stroke="#8e693f"
          strokeWidth="2"
        />

        <ellipse
          cx="350"
          cy="180"
          rx="46"
          ry="7"
          fill="#332d25"
          opacity="0.35"
        />

        <path
          d="M311 185 C319 204 333 213 350 216"
          stroke="#f0dbac"
          strokeWidth="2"
          opacity="0.45"
          strokeLinecap="round"
        />
      </g>

      {/* ================= CENTRAL COLUMN ================= */}

      <g filter="url(#shadow)">
        {/* Neck */}
        <path
          d="M185 329
             Q210 316 235 329
             L244 350
             L176 350
             Z"
          fill="url(#brass)"
        />

        {/* Pedestal */}
        <path
          d="M166 347
             Q210 334 254 347
             L270 390
             L150 390
             Z"
          fill="url(#metal)"
        />

        {/* Pedestal brass line */}
        <path
          d="M158 370
             Q210 358 262 370"
          stroke="#c3a368"
          strokeWidth="3"
          opacity="0.55"
        />

        {/* Base */}
        <path
          d="M130 390
             Q210 376 290 390
             L307 420
             Q210 437 113 420
             Z"
          fill="url(#metal)"
        />

        {/* Base brass border */}
        <path
          d="M115 417
             Q210 434 305 417"
          stroke="url(#brass)"
          strokeWidth="4"
          fill="none"
        />

        {/* Base highlight */}
        <path
          d="M146 397 Q210 388 274 397"
          stroke="#c6a66b"
          strokeWidth="2"
          opacity="0.45"
        />
      </g>

      {/* ================= CENTER EMBLEM ================= */}

      <g filter="url(#glow)">
        <circle
          cx="210"
          cy="287"
          r="25"
          fill="#1c1a17"
          stroke="url(#brass)"
          strokeWidth="3"
        />

        <path
          d="M210 270
             L210 303
             M198 280
             L222 280
             M201 297
             Q210 302 219 297"
          stroke="#d1b477"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* subtle ground shadow */}
      <ellipse
        cx="210"
        cy="430"
        rx="105"
        ry="9"
        fill="#1c1a17"
        opacity="0.12"
      />
    </svg>
  );
}