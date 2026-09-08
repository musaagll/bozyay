const steps = [
  { n: "01", title: "Talebi Analiz Et",    desc: "Teknik çizim, numune veya sözlü talep alınarak üretim kapsamı belirlenir." },
  { n: "02", title: "Teknik Çözüm",        desc: "Uygun malzeme, boyut ve üretim yöntemi seçilir. Gerekirse alternatif önerilir." },
  { n: "03", title: "Üretim",              desc: "Onaylanan çözüm doğrultusunda üretim başlatılır, her aşamada kontrol uygulanır." },
  { n: "04", title: "Kontrol & Teslimat",  desc: "Boyutsal kontrolden geçen ürünler zamanında ve güvenli şekilde teslim edilir." },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-dark border-y border-brand-border py-20 lg:py-28" id="uretim-sureci">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
            Üretim Süreci
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-white reveal reveal-delay-1">
            FİKRİ ÜRÜNE DÖNÜŞTÜRÜYORUZ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-brand-border">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`p-8 reveal reveal-delay-${i + 1} ${
                i < steps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-brand-border" : ""
              } hover:bg-brand-card transition-colors duration-300`}
            >
              <div className="text-4xl font-black text-brand-yellow/20 leading-none mb-4" aria-hidden="true">
                {s.n}
              </div>
              <h3 className="text-xs font-bold text-brand-yellow tracking-widest uppercase mb-3">{s.title}</h3>
              <p className="text-sm text-brand-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
