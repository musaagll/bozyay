import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünler — Yay ve Metal Şekillendirme | BOZ YAY Bursa",
  description: "BOZ YAY ürün kategorileri: baskı yayı, çekme yayı, bükümlü yay, tel form, demir büküm, bükümlü mil ve özel üretim.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
            <Link href="/" className="hover:text-brand-yellow transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-brand-white">Ürünler</span>
          </nav>
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">Ürün Kategorileri</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white">ÜRETİM KABİLİYETLERİMİZ</h1>
        </div>
      </section>

      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-brand-border">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className={`flex items-center justify-between px-7 py-6 group hover:bg-brand-card transition-colors duration-200 ${
                  i < products.length - 1 ? "border-b border-brand-border" : ""
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[11px] font-mono text-brand-muted w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors duration-200 mb-0.5">{p.name}</h2>
                    <p className="text-xs text-brand-light">{p.shortDesc}</p>
                  </div>
                </div>
                <span className="text-brand-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-border py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div>
            <h2 className="text-xl font-black text-brand-white mb-1">İhtiyacınız listede yok mu?</h2>
            <p className="text-sm text-brand-light">Her talebi değerlendiriyor, özel üretim çözümleri geliştiriyoruz.</p>
          </div>
          <a href={PHONE_HREF} className="btn-primary shrink-0">{PHONE_DISPLAY}</a>
        </div>
      </section>
    </>
  );
}
