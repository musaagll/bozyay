import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  title: "Kalite — Üretim Kalite Anlayışı | BOZ YAY Bursa",
  description:
    "BOZ YAY kalite anlayışı: hammadde seçiminden boyutsal kontrole, süreç güvenilirliğinden sürekli gelişime kadar üretimin her aşamasında hassasiyet.",
  alternates: { canonical: `${BASE_URL}/kalite` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${BASE_URL}/kalite`,
    siteName: "BOZ YAY",
    title: "Kalite — Üretim Kalite Anlayışı | BOZ YAY Bursa",
    description:
      "BOZ YAY kalite anlayışı: hammadde seçiminden boyutsal kontrole, süreç güvenilirliğinden sürekli gelişime kadar üretimin her aşamasında hassasiyet.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BOZ YAY — Kalite Anlayışı" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalite — Üretim Kalite Anlayışı | BOZ YAY",
    description: "Üretimin her aşamasında hassasiyet ve müşteri odaklı yaklaşım.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kalite", item: `${BASE_URL}/kalite` },
  ],
};

const items = [
  { title: "Hammadde Kalitesi",      desc: "Tüm hammadde ve malzemeler nihai ürün performansına göre titizlikle seçilir." },
  { title: "Boyutsal Kontrol",       desc: "Üretilen her parça, müşteri teknik çizimine göre doğrulanır." },
  { title: "Süreç Güvenilirliği",   desc: "Her üretim aşaması sistematik takip edilir, sapma oluşmadan önlem alınır." },
  { title: "Müşteri Geri Bildirimi", desc: "Müşteri değerlendirmeleri süreç iyileştirmesi için doğrudan kullanılır." },
  { title: "Tutarlılık",             desc: "Her üretim partisinde aynı kalite ve ölçü tutarlılığı hedeflenir." },
  { title: "Sürekli Gelişim",        desc: "Üretim yöntemleri ve ekipmanlar düzenli olarak gözden geçirilir." },
];

export default function KalitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Kalite" }]} />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">Kalite Anlayışımız</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white leading-tight">
            KALİTE, ÜRETİMİN<br />TEMELİDİR.
          </h1>
        </div>
      </section>

      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-base text-brand-light leading-relaxed max-w-2xl mb-12">
            BOZ YAY olarak üretimin her aşamasında hassasiyet, malzeme kalitesi ve müşteri
            beklentilerini ön planda tutan bir üretim anlayışı benimsenmektedir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-brand-border">
            {items.map((item, i) => (
              <div
                key={i}
                className={`px-8 py-7 hover:bg-brand-card transition-colors duration-200 ${
                  i % 2 === 0 ? "md:border-r border-brand-border" : ""
                } ${i < items.length - 2 ? "border-b border-brand-border" : ""}`}
              >
                <div className="w-5 h-px bg-brand-yellow mb-3" />
                <h2 className="text-sm font-bold text-brand-white mb-2">{item.title}</h2>
                <p className="text-sm text-brand-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-brand-yellow pl-6 py-1">
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold mb-1">Sertifikasyon Bilgisi</p>
            <p className="text-sm text-brand-light">
              ISO, IATF, CE vb. sertifika bilgileri güncellendiğinde bu sayfada paylaşılacaktır.
              Güncel durum için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
