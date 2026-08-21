"use client";

import { useEffect, useRef, useState } from "react";

export default function ScalesIllustration({ className = "" }) {
    const containerRef = useRef(null);
    const [tilt, setTilt] = useState(0);

    useEffect(() => {
        const handlePointerMove = (event) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const normalizedX = (x / rect.width) * 2 - 1;
            // Increased max tilt slightly for a better visual effect
            const nextTilt = normalizedX * 15;
            setTilt(nextTilt);
        };

        const handlePointerLeave = () => setTilt(0);

        const element = containerRef.current;
        element?.addEventListener("pointermove", handlePointerMove);
        element?.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            element?.removeEventListener("pointermove", handlePointerMove);
            element?.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, []);

    // Smooth physics-like transition for the whole balance system
    const springTransition = "transform 350ms cubic-bezier(0.25, 1, 0.5, 1)";

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-center ${className}`}
        >
            <svg
                viewBox="0 0 360 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full drop-shadow-xl"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="scale-brass" x1="80" y1="80" x2="280" y2="320" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f0d9a3" />
                        <stop offset="0.35" stopColor="#d8b876" />
                        <stop offset="0.65" stopColor="#a9824f" />
                        <stop offset="1" stopColor="#6e4e2c" />
                    </linearGradient>

                    <linearGradient id="scale-brass-bright" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#fff3d6" />
                        <stop offset="0.5" stopColor="#e6c47f" />
                        <stop offset="1" stopColor="#a9824f" />
                    </linearGradient>

                    <linearGradient id="scale-column" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#3a3530" />
                        <stop offset="0.5" stopColor="#17130f" />
                        <stop offset="1" stopColor="#3a3530" />
                    </linearGradient>

                    <linearGradient id="base-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#2b2621" />
                        <stop offset="1" stopColor="#100d0a" />
                    </linearGradient>

                    <radialGradient id="emblem-glow" cx="0.5" cy="0.4" r="0.7">
                        <stop offset="0" stopColor="#3a3128" />
                        <stop offset="1" stopColor="#0d0b08" />
                    </radialGradient>

                    {/* Pan bowl gradients for 3D depth */}
                    <radialGradient id="pan-bowl-inner" cx="0.5" cy="0.35" r="0.75">
                        <stop offset="0" stopColor="#c9ad78" />
                        <stop offset="0.55" stopColor="#e8dcc4" />
                        <stop offset="1" stopColor="#fffaf0" />
                    </radialGradient>

                    <linearGradient id="pan-bowl-outer" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#fffdf6" />
                        <stop offset="0.5" stopColor="#f2e8d3" />
                        <stop offset="1" stopColor="#d3c19a" />
                    </linearGradient>

                    <linearGradient id="pan-rim-ring" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#a9824f" />
                        <stop offset="0.5" stopColor="#fff3d6" />
                        <stop offset="1" stopColor="#a9824f" />
                    </linearGradient>

                    <filter id="scale-shadow" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="15" stdDeviation="12" floodColor="#1c1a17" floodOpacity="0.3" />
                    </filter>

                    <filter id="pan-shadow" x="-60%" y="-60%" width="220%" height="220%">
                        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#1c1a17" floodOpacity="0.35" />
                    </filter>
                </defs>

                {/* Background Floor Shadow */}
                <ellipse cx="180" cy="350" rx="130" ry="16" fill="#1c1a17" opacity="0.15" />

                <g filter="url(#scale-shadow)">
                    {/* ================= TOP FINIAL ================= */}
                    <circle cx="180" cy="55" r="9" fill="url(#scale-brass-bright)" stroke="#3a2c18" strokeWidth="1" />
                    <circle cx="180" cy="55" r="4" fill="#fff6df" opacity="0.7" />

                    {/* ================= CENTRAL COLUMN ================= */}
                    <path d="M173 63 L187 63 L184 293 L176 293Z" fill="url(#scale-column)" />
                    <path d="M177 68 L180 68 L179 288 L177.5 288Z" fill="#d8b876" opacity="0.45" />
                    <rect x="171" y="90" width="18" height="4" rx="2" fill="url(#scale-brass)" />
                    <rect x="172" y="200" width="16" height="3.5" rx="1.75" fill="url(#scale-brass)" opacity="0.85" />

                    {/* ================= UNIFIED BALANCE SYSTEM ================= */}
                    {/* Yahan par Bar aur Pans ko ek hi group mein dala gaya hai, taki wo hamesha jure (attached) rahein */}
                    <g
                        style={{
                            transform: `rotate(${tilt}deg)`,
                            transformOrigin: "180px 102px",
                            transition: springTransition,
                        }}
                    >
                        {/* ================= BALANCE BAR ================= */}
                        <rect x="70" y="97" width="220" height="10" rx="5" fill="url(#scale-brass)" stroke="#3a2c18" strokeWidth="1" />
                        <rect x="78" y="99" width="204" height="2.5" rx="1.25" fill="#fff3d6" opacity="0.6" />

                        {/* Center Pivot of Bar */}
                        <circle cx="180" cy="102" r="11" fill="url(#scale-brass-bright)" stroke="#3a2c18" strokeWidth="1" />
                        <circle cx="180" cy="102" r="4" fill="#2b2010" />
                        <circle cx="180" cy="100" r="1.5" fill="#fff6df" opacity="0.8" />

                        {/* ================= LEFT PAN ================= */}
                        {/* Counter-rotation to keep the pan hanging straight down */}
                        <g
                            style={{
                                transform: `rotate(${-tilt}deg)`,
                                transformOrigin: "78px 102px",
                                transition: springTransition,
                            }}
                        >
                            <g filter="url(#pan-shadow)">
                                {/* Hinge attachment exactly at the pivot point (78, 102) */}
                                <circle cx="78" cy="102" r="2.5" fill="#a9824f" />
                                <circle cx="78" cy="108" r="4" fill="url(#scale-brass-bright)" stroke="#3a2c18" strokeWidth="1" />
                                <path d="M78 102 L78 104" stroke="#3a2c18" strokeWidth="2" />

                                {/* Chains */}
                                <path d="M75.5 110 L52 158" stroke="url(#scale-brass)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M80.5 110 L104 158" stroke="url(#scale-brass)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M75.5 110 L60 152" stroke="url(#scale-brass)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
                                <path d="M80.5 110 L96 152" stroke="url(#scale-brass)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

                                {/* Collar Ring */}
                                <ellipse cx="78" cy="158" rx="20" ry="5" fill="none" stroke="url(#pan-rim-ring)" strokeWidth="2.2" />

                                {/* Bowl */}
                                <path
                                    d="M40 160 Q40 156 45 156 L111 156 Q116 156 116 160 Q116 178 100 192 Q90 200 78 201 Q66 200 56 192 Q40 178 40 160 Z"
                                    fill="url(#pan-bowl-outer)" stroke="#5c4726" strokeWidth="1.6"
                                />
                                <path
                                    d="M46 160 Q46 158 49 158 L107 158 Q110 158 110 160 Q110 174 97 186 Q88 193 78 194 Q68 193 59 186 Q46 174 46 160 Z"
                                    fill="url(#pan-bowl-inner)" opacity="0.9"
                                />

                                {/* Rim details */}
                                <ellipse cx="78" cy="158" rx="38" ry="8" fill="url(#pan-bowl-outer)" stroke="#5c4726" strokeWidth="1.6" />
                                <ellipse cx="78" cy="157.5" rx="32" ry="5.5" fill="none" stroke="#fff3d6" strokeWidth="1" opacity="0.7" />
                                <path d="M50 154 Q78 148 106 154" stroke="#fff8e8" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />
                                <path d="M58 178 Q78 190 98 178" stroke="#b89b6a" strokeWidth="1.2" opacity="0.5" fill="none" />
                            </g>
                        </g>

                        {/* ================= RIGHT PAN ================= */}
                        {/* Counter-rotation to keep the pan hanging straight down */}
                        <g
                            style={{
                                transform: `rotate(${-tilt}deg)`,
                                transformOrigin: "282px 102px",
                                transition: springTransition,
                            }}
                        >
                            <g filter="url(#pan-shadow)">
                                {/* Hinge attachment exactly at the pivot point (282, 102) */}
                                <circle cx="282" cy="102" r="2.5" fill="#a9824f" />
                                <circle cx="282" cy="108" r="4" fill="url(#scale-brass-bright)" stroke="#3a2c18" strokeWidth="1" />
                                <path d="M282 102 L282 104" stroke="#3a2c18" strokeWidth="2" />

                                {/* Chains */}
                                <path d="M279.5 110 L256 158" stroke="url(#scale-brass)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M284.5 110 L308 158" stroke="url(#scale-brass)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M279.5 110 L264 152" stroke="url(#scale-brass)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
                                <path d="M284.5 110 L300 152" stroke="url(#scale-brass)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />

                                {/* Collar Ring */}
                                <ellipse cx="282" cy="158" rx="20" ry="5" fill="none" stroke="url(#pan-rim-ring)" strokeWidth="2.2" />

                                {/* Bowl */}
                                <path
                                    d="M244 160 Q244 156 249 156 L315 156 Q320 156 320 160 Q320 178 304 192 Q294 200 282 201 Q270 200 260 192 Q244 178 244 160 Z"
                                    fill="url(#pan-bowl-outer)" stroke="#5c4726" strokeWidth="1.6"
                                />
                                <path
                                    d="M250 160 Q250 158 253 158 L311 158 Q314 158 314 160 Q314 174 301 186 Q292 193 282 194 Q272 193 263 186 Q250 174 250 160 Z"
                                    fill="url(#pan-bowl-inner)" opacity="0.9"
                                />

                                {/* Rim details */}
                                <ellipse cx="282" cy="158" rx="38" ry="8" fill="url(#pan-bowl-outer)" stroke="#5c4726" strokeWidth="1.6" />
                                <ellipse cx="282" cy="157.5" rx="32" ry="5.5" fill="none" stroke="#fff3d6" strokeWidth="1" opacity="0.7" />
                                <path d="M254 154 Q282 148 310 154" stroke="#fff8e8" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />
                                <path d="M262 178 Q282 190 302 178" stroke="#b89b6a" strokeWidth="1.2" opacity="0.5" fill="none" />
                            </g>
                        </g>
                    </g>

                    {/* ================= BASE ================= */}
                    <path
                        d="M143 293 Q180 281 217 293 L233 318 Q180 332 127 318 Z"
                        fill="url(#base-gradient)"
                    />
                    <path
                        d="M127 318 Q180 332 233 318 L248 332 Q180 349 112 332 Z"
                        fill="url(#pan-bowl-outer)" stroke="#3a2c18" strokeWidth="1.8"
                    />
                    <path d="M124 322 Q180 335 236 322" stroke="#a9824f" strokeWidth="2" />
                    <path d="M120 327 Q180 341 240 327" stroke="#c9ad78" strokeWidth="1" opacity="0.6" />

                    {/* Center Emblem Surround */}
                    <circle cx="180" cy="259" r="20" fill="url(#emblem-glow)" stroke="#a9824f" strokeWidth="1.2" />
                    <circle cx="180" cy="259" r="16" stroke="#d8b876" strokeWidth="1" opacity="0.7" />

                    {/* ================= CENTER EMBLEM ================= */}
                    <svg x="162" y="237" viewBox="0 0 100 120" width="36" height="43">
                        <g fill="none" stroke="#e6c47f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="50" cy="10" r="2.5" />
                            <path d="M 50 12.5 v 6.5" />
                            <path d="M 42 19 h 16" />
                            <rect x="22" y="24" width="56" height="4" rx="1" />
                            <circle cx="26" cy="30" r="2" />
                            <circle cx="74" cy="30" r="2" />
                            <path d="M 40 28 v 45 l 10 14 l 10 -14 v -45" />
                            <path d="M 54 45 c -6 -4 -10 -1 -10 3 c 0 4 10 3 10 8 c 0 5 -5 7 -10 3" />
                            <path d="M 26 32 l -12 25 m 12 -25 l 12 25" />
                            <path d="M 14 57 h 24" />
                            <path d="M 14 57 a 12 8 0 0 0 24 0" />
                            <path d="M 74 32 l -12 25 m 12 -25 l 12 25" />
                            <path d="M 62 57 h 24" />
                            <path d="M 62 57 a 12 8 0 0 0 24 0" />
                            <path d="M 6 55 c 0 30 15 45 44 55 c 29 -10 44 -25 44 -55" />
                        </g>
                    </svg>
                </g>
            </svg>
        </div>
    );
}