const pillars = [
  {
    title: "Özel Üretim",
    desc: "Teknik çizim, numune veya tarif ile başlayan üretim süreci. Her müşterinin ihtiyacına özel.",
  },
  {
    title: "Hassas Üretim",
    desc: "Kontrollü süreçler ve titiz kalite anlayışıyla her üründe tutarlı hassasiyet.",
  },
  {
    title: "Kaliteli Malzeme",
    desc: "Üretim performansını doğrudan etkileyen hammadde seçiminde kaliteden ödün verilmez.",
  },
  {
    title: "Zamanında Teslimat",
    desc: "Planlı üretim ve koordineli lojistik ile müşteri teslim takvimlerine tam uyum.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-brand-dark border-y border-brand-border py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
            Neden BOZ YAY?
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-white leading-tight reveal reveal-delay-1">
            Mühendislikten Üretime,<br />
            Her Detayda Hassasiyet.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-border">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`p-8 reveal reveal-delay-${i + 1} ${
                i < pillars.length - 1 ? "border-b lg:border-b-0 lg:border-r border-brand-border" : ""
              } hover:bg-brand-card transition-colors duration-300`}
            >
              <div className="w-6 h-px bg-brand-yellow mb-5" aria-hidden="true" />
              <h3 className="text-sm font-bold text-brand-white mb-3">{p.title}</h3>
              <p className="text-sm text-brand-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
