import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsSection() {
  return (
    <section className="bg-brand-black py-20 lg:py-28" id="urunler">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
              Ürün Kategorileri
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-white reveal reveal-delay-1">
              ÜRETİM KABİLİYETLERİMİZ
            </h2>
          </div>
          <p className="text-sm text-brand-light reveal reveal-delay-2">
            İhtiyaca özel, hassas ve güvenilir yay çözümleri.
          </p>
        </div>

        {/* Product list */}
        <div className="border border-brand-border">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              href={`/urunler/${p.slug}`}
              className={`flex items-center justify-between px-7 py-6 group hover:bg-brand-card transition-colors duration-200 reveal reveal-delay-${Math.min(i + 1, 6)} ${
                i < products.length - 1 ? "border-b border-brand-border" : ""
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-mono text-brand-muted w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors duration-200 mb-0.5">
                    {p.name}
                  </h3>
                  <p className="text-xs text-brand-light">{p.shortDesc}</p>
                </div>
              </div>
              <span className="text-brand-yellow text-sm shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 reveal">
          <Link href="/urunler" className="btn-outline">
            Tüm Ürünler →
          </Link>
        </div>
      </div>
    </section>
  );
}
