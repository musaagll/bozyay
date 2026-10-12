import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-brand-black relative overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,197,24,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
      {/* Left yellow bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-yellow/40" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="w-5 h-px bg-brand-yellow" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase">
                Bursa · Nilüfer · Yay İmalatı
              </span>
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl lg:text-[4rem] font-black text-brand-white leading-[1.0] tracking-tight mb-6">
              HASSASİYETLE<br />
              <span className="text-brand-yellow">ŞEKİLLENEN</span><br />
              GÜÇ.
            </h1>

            <p className="reveal reveal-delay-2 text-base text-brand-light leading-relaxed mb-10 max-w-md">
              Özel tasarım yaylar, tel formlar ve hassas metal şekillendirme çözümleri.
              Teknik çiziminizden seri üretime tam çözüm ortağınız.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-4 mb-12">
              <a href={PHONE_HREF} className="btn-primary">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.13 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp →
              </a>
            </div>

            {/* Pillars */}
            <div className="reveal reveal-delay-4 grid grid-cols-3 border border-brand-border max-w-sm">
              {["Özel Üretim", "Hassas İşçilik", "Hızlı Teslimat"].map((t, i) => (
                <div
                  key={i}
                  className={`px-4 py-3 ${i < 2 ? "border-r border-brand-border" : ""}`}
                >
                  <div className="w-3 h-px bg-brand-yellow mb-2" aria-hidden="true" />
                  <p className="text-[11px] font-semibold text-brand-white tracking-wide leading-tight">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo */}
          <div className="hidden lg:flex items-center justify-center reveal reveal-delay-2">
            <div className="relative w-80 h-80 opacity-90">
              <Image
                src="/logo/logo-opt.png"
                alt="BOZ YAY — Yay ve Şekilli Tel İmalatı"
                fill
                sizes="320px"
                className="object-contain"
                style={{ mixBlendMode: "screen" }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
