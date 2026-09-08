export default function QualitySection() {
  return (
    <section className="bg-brand-dark border-y border-brand-border py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
              Kalite Anlayışımız
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-white leading-tight mb-6 reveal reveal-delay-1">
              KALİTE, ÜRETİMİN<br />TEMELİDİR.
            </h2>
            <p className="text-base text-brand-light leading-relaxed reveal reveal-delay-2">
              BOZ YAY olarak üretimin her aşamasında hassasiyet, malzeme kalitesi
              ve müşteri beklentilerini ön planda tutan bir üretim anlayışı benimsenmektedir.
            </p>
          </div>

          {/* Right: list */}
          <div className="space-y-0 border border-brand-border reveal reveal-delay-2">
            {[
              ["Hammadde Seçimi",    "Nihai ürünün performansını doğrudan etkileyen malzeme tercihlerinde kaliteden taviz verilmez."],
              ["Boyutsal Kontrol",   "Üretilen her parça müşteri teknik çizimine göre boyutsal olarak doğrulanır."],
              ["Süreç Güvenilirliği","Her üretim aşaması sistematik biçimde takip edilir, sapma oluşmadan önlem alınır."],
              ["Tutarlılık",         "Aynı spesifikasyonla verilen siparişlerde her partide aynı kalite hedeflenir."],
            ].map(([title, desc], i, arr) => (
              <div
                key={i}
                className={`px-7 py-6 hover:bg-brand-card transition-colors duration-200 ${i < arr.length - 1 ? "border-b border-brand-border" : ""}`}
              >
                <h3 className="text-xs font-bold text-brand-white tracking-wide mb-1.5">{title}</h3>
                <p className="text-sm text-brand-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
