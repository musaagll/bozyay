import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  title: "Sektörler — Hizmet Verdiğimiz Endüstriler | BOZ YAY Bursa",
  description:
    "BOZ YAY hizmet sektörleri: otomotiv, makina, beyaz eşya, tarım makineleri, mobilya, elektrik-elektronik ve özel projeler için yay ve tel form üretimi.",
  alternates: { canonical: `${BASE_URL}/sektorler` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${BASE_URL}/sektorler`,
    siteName: "BOZ YAY",
    title: "Sektörler — Hizmet Verdiğimiz Endüstriler | BOZ YAY Bursa",
    description:
      "BOZ YAY hizmet sektörleri: otomotiv, makina, beyaz eşya, tarım makineleri, mobilya, elektrik-elektronik ve özel projeler için yay ve tel form üretimi.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BOZ YAY — Hizmet Sektörleri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sektörler — BOZ YAY Bursa",
    description: "Otomotiv, makina, tarım, mobilya ve daha fazlası için özel yay çözümleri.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Sektörler", item: `${BASE_URL}/sektorler` },
  ],
};

const sectors = [
  { name: "Otomotiv",              desc: "Araç sistemleri ve yan sanayi bileşenleri için özel yay ve metal çözümleri." },
  { name: "Makina",                desc: "Endüstriyel makina ve ekipman tasarımı için hassas yay bileşenleri." },
  { name: "Endüstriyel Üretim",   desc: "Üretim hattı ve proses ekipmanları için fonksiyonel yay ve tel form." },
  { name: "Beyaz Eşya",           desc: "Dayanıklı tüketim ürünleri için uzun ömürlü, yüksek performanslı yay çözümleri." },
  { name: "Tarım Makineleri",     desc: "Zorlu saha koşullarına dayanıklı tarım ekipmanı bileşenleri." },
  { name: "Mobilya",              desc: "Mobilya mekanizmaları için özel tel form ve yay çözümleri." },
  { name: "Elektrik & Elektronik", desc: "Hassas ve küçük ölçekli yay ile metal form çözümleri." },
  { name: "Özel Projeler",        desc: "Standart kategorilere girmeyen, tamamen müşteriye özel üretim." },
];

export default function SektorlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Sektörler" }]} />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">Hizmet Verdiğimiz Sektörler</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white leading-tight">
            FARKLI SEKTÖRLER,<br />TEK ÜRETİM ANLAYIŞI
          </h1>
        </div>
      </section>

      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-brand-border">
            {sectors.map((s, i) => (
              <div
                key={i}
                className={`px-8 py-7 hover:bg-brand-card transition-colors duration-200 ${
                  i % 2 === 0 ? "md:border-r border-brand-border" : ""
                } ${i < sectors.length - 2 ? "border-b border-brand-border" : ""} ${
                  sectors.length % 2 !== 0 && i === sectors.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-4 h-px bg-brand-yellow" aria-hidden="true" />
                  <h2 className="text-sm font-bold text-brand-white">{s.name}</h2>
                </div>
                <p className="text-sm text-brand-light leading-relaxed pl-7">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Kırık anchor düzeltildi: #teklif yerine /iletisim sayfasına yönlendirme */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-brand-border p-7">
            <p className="text-sm text-brand-light flex-1">Sektörünüz listede yok mu? Her talebi değerlendiriyoruz.</p>
            <Link href="/iletisim" className="btn-primary shrink-0">Talebi İletin →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
