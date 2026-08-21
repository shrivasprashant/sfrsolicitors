"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-spring ${scrolled
          ? "border-paper-line bg-parchment/90 shadow-[0_12px_28px_-22px_rgba(28,26,23,0.45)] backdrop-blur-md"
          : "border-transparent bg-parchment"
        }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-5 py-[18px] sm:px-8">

        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-200 ease-spring hover:scale-[1.03]"
          aria-label="SFR Solicitors home"
        >
          <Image src={logo} alt="SFR Solicitors" height={42} className="h-[42px] w-auto" priority />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-[#111827]">
          <Link href="/" className="transition-colors hover:text-oxblood">
            Home
          </Link>
          <Link href="/about-us" className="transition-colors hover:text-oxblood">
            About Us
          </Link>
          <Link href="/services" className="transition-colors hover:text-oxblood">
            Our Services
          </Link>

          {/* Resources Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 transition-colors hover:text-oxblood">
              Resources
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="invisible absolute left-0 top-full mt-2 flex w-48 flex-col rounded-md bg-white py-2 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-spring group-hover:visible group-hover:opacity-100">
              <Link
                href="/faqs"
                className="px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-oxblood"
              >
                FAQs
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-oxblood"
              >
                Blog & Articles
              </Link>
            </div>
          </div>

          <Link href="/contact" className="transition-colors hover:text-oxblood">
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="relative hidden overflow-hidden whitespace-nowrap rounded bg-oxblood px-5 py-[11px] font-mono text-[0.78rem] font-semibold tracking-[0.03em] text-parchment transition-[background-color,transform,box-shadow] duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood active:translate-y-0 active:scale-[0.97] lg:block"
        >
          Speak to a Solicitor
        </Link>
      </div>
    </header>
  );
}