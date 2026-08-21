"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const servicesNav = [
  {
    href: "/services/ma-europe",
    label: "M&A & Europe",
    desc: "Corporate transactions & cross-border law",
    icon: "🌍",
  },
  {
    href: "/services/disputes",
    label: "Disputes",
    desc: "Civil litigation & dispute resolution",
    icon: "⚖",
  },
  {
    href: "/services/personal-injury",
    label: "Personal Injury",
    desc: "Accident & injury compensation",
    icon: "🏥",
  },
  {
    href: "/services/cica",
    label: "CICA Claims",
    desc: "Criminal injuries compensation",
    icon: "🛡",
  },
  {
    href: "/services/immigration",
    label: "Immigration",
    desc: "Visas, settlement & nationality law",
    icon: "🛂",
  },
  {
    href: "/contact",
    label: "Contact & Enquiry",
    desc: "Speak to our legal team",
    icon: "💬",
    highlight: true,
  },
];

// ─── Services dropdown ────────────────────────────────────────────────────────
function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="services-menu-btn"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 xl:text-base ${
          open ? "text-oxblood" : "text-[#111827] hover:text-oxblood"
        }`}
      >
        Services
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180 text-oxblood" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel — anchored to the right to avoid overflow */}
      {open && (
        <div
          role="menu"
          aria-labelledby="services-menu-btn"
          className="absolute right-0 top-full mt-3 w-[min(480px,90vw)] rounded-2xl border border-paper-line bg-white p-3 shadow-[0_20px_60px_-15px_rgba(28,26,23,0.20)] ring-1 ring-black/5"
          style={{
            animation: "dropdownIn 180ms ease both",
          }}
        >
          {/* Header row */}
          <div className="mb-2 flex items-center justify-between border-b border-paper-line px-3 pb-3 pt-1">
            <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-muted">
              Practice Areas
            </span>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="font-mono text-[0.68rem] font-semibold text-oxblood hover:underline"
            >
              All Services →
            </Link>
          </div>

          {/* 2-col grid */}
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
            {servicesNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`group flex items-start gap-3 rounded-xl px-3.5 py-3 transition-all duration-150 ${
                  item.highlight
                    ? "border border-oxblood/20 bg-oxblood/5 hover:bg-oxblood/10"
                    : "hover:bg-parchment-2"
                }`}
              >
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-parchment-2 text-base group-hover:bg-oxblood/10 transition-colors duration-150">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span
                    className={`text-[0.85rem] font-bold leading-snug transition-colors duration-150 ${
                      item.highlight ? "text-oxblood" : "text-ink group-hover:text-oxblood"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-[0.75rem] leading-snug text-muted">
                    {item.desc}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Header ─────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-spring ${
        scrolled
          ? "border-paper-line bg-parchment/95 shadow-[0_12px_28px_-22px_rgba(28,26,23,0.45)] backdrop-blur-md"
          : "border-transparent bg-parchment"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex flex-shrink-0 items-center transition-transform duration-200 ease-spring hover:scale-[1.03]"
          aria-label="SFR Solicitors home"
        >
          <Image src={logo} alt="SFR Solicitors" height={38} className="h-9 w-auto lg:h-10" priority />
        </Link>

        {/* ── Desktop Nav (lg+) ── */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          <Link
            href="/"
            className="text-sm font-semibold text-[#111827] transition-colors hover:text-oxblood xl:text-base"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-semibold text-[#111827] transition-colors hover:text-oxblood xl:text-base"
          >
            About Us
          </Link>

          {/* Services dropdown */}
          <ServicesDropdown />

          {/* Resources hover-dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 text-sm font-semibold text-[#111827] transition-colors hover:text-oxblood xl:text-base">
              Resources
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full mt-2 flex w-48 flex-col rounded-xl bg-white py-2 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-spring group-hover:visible group-hover:opacity-100">
              <Link href="/faqs" className="mx-1 rounded-lg px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-parchment-2 hover:text-oxblood">
                FAQs
              </Link>
              <Link href="/blog" className="mx-1 rounded-lg px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-parchment-2 hover:text-oxblood">
                Blog &amp; Articles
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm font-semibold text-[#111827] transition-colors hover:text-oxblood xl:text-base"
          >
            Contact
          </Link>
        </nav>

        {/* ── Right side: CTA + hamburger ── */}
        <div className="flex items-center gap-3">
          {/* CTA — shown at md+ */}
          <Link
            href="/contact"
            className="hidden md:inline-flex whitespace-nowrap rounded bg-oxblood px-4 py-2.5 font-mono text-[0.75rem] font-semibold tracking-wide text-parchment transition-[background-color,transform,box-shadow] duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood active:translate-y-0 active:scale-[0.97] xl:px-5 xl:py-[11px] xl:text-[0.78rem]"
          >
            Speak to a Solicitor
          </Link>

          {/* Hamburger — shown below lg */}
          <button
            className="flex lg:hidden items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-parchment-2 active:scale-95"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-paper-line bg-white shadow-xl lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-h-[80vh] max-w-7xl flex-col overflow-y-auto px-5 py-4 sm:px-8"
          >
            {/* Primary links */}
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-parchment-2 hover:text-oxblood"
              >
                {item.label}
              </Link>
            ))}

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[0.95rem] font-semibold text-ink transition-colors hover:bg-parchment-2 hover:text-oxblood"
              >
                Our Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-oxblood" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="mb-1 ml-4 flex flex-col gap-0.5 border-l-2 border-paper-line pl-3">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-bold text-oxblood transition-colors hover:bg-parchment-2"
                  >
                    All Services →
                  </Link>
                  {servicesNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-parchment-2 hover:text-oxblood"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources & contact */}
            {[
              { href: "/faqs", label: "FAQs" },
              { href: "/blog", label: "Blog & Articles" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-parchment-2 hover:text-oxblood"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-lg bg-oxblood px-4 py-3.5 text-center font-mono text-sm font-semibold text-parchment transition-colors hover:bg-oxblood-dark"
            >
              Speak to a Solicitor
            </Link>
          </nav>
        </div>
      )}

      {/* Keyframe for dropdown */}
      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}