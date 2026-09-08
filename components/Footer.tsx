import Link from "next/link";
import Image from "next/image";

const pageLinks = [
  ["/kurumsal",  "Kurumsal"],
  ["/urunler",   "Ürünler"],
  ["/uretim",    "Üretim"],
  ["/kalite",    "Kalite"],
  ["/sektorler", "Sektörler"],
  ["/iletisim",  "İletişim"],
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/logo/logo-opt.png"
                alt="BOZ YAY Logo"
                fill
                sizes="40px"
                className="object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-lg text-brand-white tracking-tight">BOZ</span>
              <span className="font-black text-lg text-brand-yellow tracking-tight">YAY</span>
            </div>
          </div>
          <p className="text-[11px] text-brand-muted tracking-widest uppercase mb-3">Yay ve Şekilli Tel İmalatı</p>
          <p className="text-sm text-brand-light leading-relaxed">
            Özel yay, tel form ve metal şekillendirme çözümleri. Nilüfer / Bursa.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigasyonu">
          <p className="text-[11px] font-bold text-brand-yellow tracking-widest uppercase mb-5">Sayfalar</p>
          <ul className="space-y-2.5">
            {pageLinks.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-brand-light hover:text-brand-white transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-bold text-brand-yellow tracking-widest uppercase mb-5">İletişim</p>
          <div className="space-y-3">
            <a
              href="tel:+905315012584"
              className="block text-sm text-brand-light hover:text-brand-yellow transition-colors duration-200 font-medium"
            >
              0531 501 25 84
            </a>
            <a
              href="https://wa.me/905315012584"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-brand-light hover:text-brand-yellow transition-colors duration-200"
            >
              WhatsApp ile Yaz
            </a>
            <address className="not-italic text-sm text-brand-light leading-relaxed">
              Çalı, 2. Sk., 16110<br />Nilüfer / Bursa
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brand-muted">© {year} BOZ YAY. Tüm hakları saklıdır.</p>
          <p className="text-xs text-brand-muted">Yay ve Şekilli Tel İmalatı · Nilüfer, Bursa</p>
        </div>
      </div>
    </footer>
  );
}
