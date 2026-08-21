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
    desc: "Accident & injury compensation claims",
    icon: "🏥",
  },
  {
    href: "/services/cica",
    label: "CICA Claims",
    desc: "Criminal injuries compensation authority",
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
    desc: "Speak directly to our legal team",
    icon: "💬",
    highlight: true,
  },
];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="services-menu-btn"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 font-semibold transition-colors duration-200 ${open ? "text-oxblood" : "text-[#111827] hover:text-oxblood"}`}
      >
        Our Services
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180 text-oxblood" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          role="menu"
          aria-labelledby="services-menu-btn"
          className="absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 rounded-2xl border border-paper-line bg-white p-3 shadow-[0_20px_60px_-15px_rgba(28,26,23,0.18)] ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ animation: "dropdownIn 200ms ease forwards" }}
        >
          {/* Header row */}
          <div className="mb-2 flex items-center justify-between border-b border-paper-line px-3 pb-3 pt-1">
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-widest text-muted">
              Practice Areas
            </span>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="font-mono text-[0.7rem] font-semibold text-oxblood hover:underline"
            >
              All Services →
            </Link>
          </div>

          {/* Grid of service links */}
          <div className="grid grid-cols-2 gap-1">
            {servicesNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`group flex items-start gap-3 rounded-xl px-4 py-3.5 transition-all duration-150 ${
                  item.highlight
                    ? "bg-oxblood/5 hover:bg-oxblood/10 border border-oxblood/20"
                    : "hover:bg-parchment-2"
                }`}
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-parchment-2 text-[1.1rem] group-hover:bg-oxblood/10 transition-colors duration-150">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span className={`text-[0.9rem] font-bold leading-snug ${item.highlight ? "text-oxblood" : "text-ink group-hover:text-oxblood"} transition-colors duration-150`}>
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-[0.78rem] leading-snug text-muted">
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-spring ${
        scrolled
          ? "border-paper-line bg-parchment/90 shadow-[0_12px_28px_-22px_rgba(28,26,23,0.45)] backdrop-blur-md"
          : "border-transparent bg-parchment"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-[18px] sm:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-200 ease-spring hover:scale-[1.03]"
          aria-label="SFR Solicitors home"
        >
          <Image src={logo} alt="SFR Solicitors" height={42} className="h-[42px] w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-[#111827]">
          <Link href="/" className="transition-colors hover:text-oxblood">Home</Link>
          <Link href="/about-us" className="transition-colors hover:text-oxblood">About Us</Link>

          {/* Services dropdown */}
          <ServicesDropdown />

          {/* Resources dropdown (CSS hover) */}
          <div className="group relative">
            <button className="flex items-center gap-1.5 transition-colors hover:text-oxblood">
              Resources
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 flex w-52 flex-col rounded-xl bg-white py-2 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-spring group-hover:visible group-hover:opacity-100">
              <Link href="/faqs" className="px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-parchment-2 hover:text-oxblood rounded-lg mx-1">FAQs</Link>
              <Link href="/blog" className="px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-parchment-2 hover:text-oxblood rounded-lg mx-1">Blog &amp; Articles</Link>
            </div>
          </div>

          <Link href="/contact" className="transition-colors hover:text-oxblood">Contact Us</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="relative hidden overflow-hidden whitespace-nowrap rounded bg-oxblood px-5 py-[11px] font-mono text-[0.78rem] font-semibold tracking-[0.03em] text-parchment transition-[background-color,transform,box-shadow] duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood active:translate-y-0 active:scale-[0.97] lg:block"
        >
          Speak to a Solicitor
        </Link>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-parchment-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-paper-line bg-white md:hidden">
          <nav className="mx-auto max-w-7xl flex flex-col px-5 py-4 gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/services", label: "All Services" },
              { href: "/services/ma-europe", label: "↳ M&A & Europe" },
              { href: "/services/disputes", label: "↳ Disputes" },
              { href: "/services/personal-injury", label: "↳ Personal Injury" },
              { href: "/services/cica", label: "↳ CICA Claims" },
              { href: "/services/immigration", label: "↳ Immigration" },
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
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded bg-oxblood px-4 py-3 text-center font-mono text-sm font-semibold text-parchment"
            >
              Speak to a Solicitor
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}