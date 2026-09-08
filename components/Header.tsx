"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",         label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/urunler",  label: "Ürünler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="BOZ YAY Ana Sayfa">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/logo/logo-opt.png"
                alt="BOZ YAY Logo"
                fill
                sizes="40px"
                className="object-contain"
                style={{ mixBlendMode: "screen" }}
                priority
              />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-lg text-brand-white tracking-tight leading-none">BOZ</span>
              <span className="font-black text-lg text-brand-yellow tracking-tight leading-none">YAY</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana menü">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold tracking-widest uppercase text-brand-light hover:text-brand-yellow transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: Phone + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+905315012584"
              className="hidden lg:flex items-center gap-2 text-xs font-bold text-brand-white hover:text-brand-yellow transition-colors duration-200"
              aria-label="Ara: 0531 501 25 84"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.13 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              0531 501 25 84
            </a>

            <a
              href="https://wa.me/905315012584"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-primary items-center gap-2"
              aria-label="WhatsApp ile iletişim"
            >
              <WaIcon size={14} />
              WhatsApp
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-px bg-brand-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-brand-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-brand-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-brand-black/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <nav className="absolute top-20 left-0 right-0 px-6 py-8 flex flex-col gap-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-4 border-b border-brand-border text-lg font-bold text-brand-white hover:text-brand-yellow transition-colors duration-200"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
              <span className="text-brand-yellow text-sm">→</span>
            </Link>
          ))}
          <div className="pt-6 flex flex-col gap-3">
            <a href="tel:+905315012584" className="btn-primary justify-center text-center">
              0531 501 25 84
            </a>
            <a
              href="https://wa.me/905315012584"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center text-center inline-flex items-center gap-2"
            >
              <WaIcon size={14} />
              WhatsApp ile Yaz
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile sticky WhatsApp */}
      <a
        href="https://wa.me/905315012584"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 lg:hidden w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg"
        aria-label="WhatsApp ile yaz"
      >
        <WaIcon size={20} color="#0A0A0A" />
      </a>
    </>
  );
}

function WaIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.102 1.523 5.824L.057 23.887a.5.5 0 00.609.61l6.204-1.488A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.378l-.36-.214-3.733.896.944-3.63-.235-.374A9.86 9.86 0 012.1 12c0-5.468 4.432-9.9 9.9-9.9 5.467 0 9.9 4.432 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
    </svg>
  );
}
