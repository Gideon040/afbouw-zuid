"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { diensten, categories } from "@/lib/diensten";

const navLinks = [
  { label: "Diensten", href: "/diensten", hasDropdown: true },
  { label: "Nieuwbouw", href: "/nieuwbouw" },
  { label: "Renovatie", href: "/renovatie" },
  { label: "Over ons", href: "/over-ons" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const grouped = Object.entries(categories).map(([key, cat]) => ({
    ...cat,
    key,
    items: diensten.filter((d) => d.categorySlug === key),
  }));

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* TOP BAR — desktop only */}
      <div className="hidden lg:flex items-center justify-between h-9 border-b border-outline-variant/20 bg-dark-navy px-6 max-w-full">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-white/60">
            <span className="text-star-gold">★</span>
            <span>9.7 beoordeling</span>
            <span className="text-white/30">·</span>
            <span>200+ projecten</span>
            <span className="text-white/30">·</span>
            <span>Brabant &amp; Limburg</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/60">
            <a href="tel:0638903004" className="flex items-center gap-1 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[14px]">call</span>
              06-38903004
            </a>
            <a href="mailto:info@afbouwzuid.nl" className="flex items-center gap-1 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              info@afbouwzuid.nl
            </a>
            <span className="text-white/20">|</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR + DROPDOWN hover wrapper */}
      <div
        onMouseLeave={closeDropdown}
      >
        <div className="bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="AfbouwZuid" className="h-7" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    onMouseEnter={openDropdown}
                  >
                    <Link
                      href={link.href}
                      className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors flex items-center gap-1 py-5 ${
                        dropdownOpen ? "text-primary" : "text-on-surface-variant hover:text-dark-navy"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`material-symbols-outlined text-[14px] transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] transition-colors py-5 text-on-surface-variant hover:text-dark-navy"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/offerte"
                className="hidden md:block skew-btn bg-primary text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em]"
              >
                <span>Offerte aanvragen</span>
              </Link>
              <button
                className="lg:hidden text-dark-navy"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* MEGA DROPDOWN */}
        {dropdownOpen && (
          <div className="hidden lg:block bg-surface border-t border-outline-variant/30 shadow-lg">
            <div className="max-w-[1400px] mx-auto grid grid-cols-[1fr_300px]">
              <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-8">
                {grouped.map((cat) => (
                  <div key={cat.key}>
                    <Link
                      href={cat.href}
                      className="flex items-center gap-2.5 mb-3 group"
                    >
                      <span className="material-symbols-outlined text-primary text-xl">
                        {cat.icon}
                      </span>
                      <span className="text-sm font-bold text-dark-navy group-hover:text-primary transition-colors">
                        {cat.label}
                      </span>
                    </Link>
                    {cat.items.length > 0 ? (
                      <div className="ml-[34px] flex flex-col gap-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/diensten/${item.slug}`}
                            className="group/item flex items-baseline gap-2 py-1.5"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span className="text-[13px] font-medium text-on-surface-variant group-hover/item:text-primary transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-outline-variant group-hover/item:text-on-surface-variant transition-colors hidden xl:inline">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-[34px]">
                        <span className="text-[11px] text-outline-variant">Bekijk opties →</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative flex flex-col justify-end overflow-hidden p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-stukadoors-nieuwbouw.webp"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/80 to-dark-navy/40" />
                <div className="relative z-10">
                  <h3 className="text-lg font-extrabold text-white uppercase leading-tight mb-3">
                    Nieuwbouw of renovatie?
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed mb-5">
                    Plan een vrijblijvend gesprek en ontvang binnen 24 uur een offerte op maat.
                  </p>
                  <Link
                    href="/offerte"
                    className="skew-btn bg-primary text-white text-[11px] font-bold uppercase tracking-[0.12em] px-6 py-3 inline-block"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      Offerte aanvragen
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </Link>
                  <div className="flex items-center gap-1.5 mt-4 text-[11px] text-white/40">
                    <span className="text-star-gold">★</span>
                    <span>9.7 beoordeling · 200+ projecten</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 py-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-[11px] text-outline-variant">
                Nieuwbouw afbouw · Alle diensten onder één dak
              </span>
              <Link
                href="/diensten"
                className="text-[11px] font-bold text-primary hover:text-dark-navy transition-colors flex items-center gap-1"
                onClick={() => setDropdownOpen(false)}
              >
                Overzicht alle diensten
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/30 max-h-[calc(100vh-64px)] overflow-y-auto shadow-lg">
          <div className="p-6 space-y-4">
            {grouped.map((cat) => (
              <div key={cat.key}>
                <Link
                  href={cat.href}
                  className="flex items-center gap-2 mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="material-symbols-outlined text-primary text-lg">{cat.icon}</span>
                  <span className="text-sm font-bold text-dark-navy">{cat.label}</span>
                </Link>
                {cat.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/diensten/${item.slug}`}
                    className="block py-2 ml-[30px] text-sm text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-outline-variant/30">
              {navLinks.filter((l) => !l.hasDropdown).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-sm font-bold text-dark-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/offerte"
              className="skew-btn bg-primary text-white text-[11px] font-bold uppercase tracking-[0.12em] px-6 py-3 block text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              <span>Offerte aanvragen</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
