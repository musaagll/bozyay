const sectors = [
  "Otomotiv",
  "Makina",
  "Endüstriyel Üretim",
  "Beyaz Eşya",
  "Tarım Makineleri",
  "Mobilya",
  "Elektrik & Elektronik",
  "Özel Projeler",
];

export default function SectorsSection() {
  return (
    <section className="bg-brand-black py-20 lg:py-28" id="sektorler">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3 reveal">
            Hizmet Verdiğimiz Sektörler
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-white leading-tight reveal reveal-delay-1">
            FARKLI SEKTÖRLER,<br />TEK ÜRETİM ANLAYIŞI
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border border-brand-border">
          {sectors.map((s, i) => (
            <div
              key={i}
              className={`px-6 py-6 reveal reveal-delay-${Math.min(i + 1, 6)} hover:bg-brand-card transition-colors duration-200 ${
                i % 4 !== 3 ? "border-r border-brand-border" : ""
              } ${i < 4 ? "border-b border-brand-border" : ""}`}
            >
              <div className="w-3 h-px bg-brand-yellow mb-3" aria-hidden="true" />
              <p className="text-sm font-semibold text-brand-white">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
