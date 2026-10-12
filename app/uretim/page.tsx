import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  title: "Üretim Süreci — Talep'ten Teslimat'a | BOZ YAY Bursa",
  description:
    "BOZ YAY üretim süreci: talep analizi, teknik çözüm, üretim ve kontrol & teslimat. Müşteri çizimi veya numunesinden başlayan, zamanında teslimatta biten süreç.",
  alternates: { canonical: `${BASE_URL}/uretim` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${BASE_URL}/uretim`,
    siteName: "BOZ YAY",
    title: "Üretim Süreci — Talep'ten Teslimat'a | BOZ YAY Bursa",
    description:
      "BOZ YAY üretim süreci: talep analizi, teknik çözüm, üretim ve kontrol & teslimat. Müşteri çizimi veya numunesinden başlayan, zamanında teslimatta biten süreç.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BOZ YAY — Üretim Süreci" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Üretim Süreci | BOZ YAY Bursa",
    description: "Talep analizinden teknik çözüme, üretimden kontrole 4 adımlı süreç.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Üretim", item: `${BASE_URL}/uretim` },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "BOZ YAY Üretim Süreci",
  description: "Müşteri talebinden ürün teslimatına kadar 4 adımlı üretim süreci.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Talebi Analiz Et",
      text: "Teknik çizim, numune veya sözlü talep alınarak ihtiyaç detaylı biçimde değerlendirilir. PDF, DWG, DXF, STEP, fiziksel numune veya detaylı açıklama kabul edilir.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Teknik Çözüm",
      text: "Uygun malzeme, boyut ve üretim yöntemi belirlenir. Gerekirse alternatif çözüm önerileri sunulur. Teknik değerlendirme tamamlandıktan sonra müşteri onayı alınır.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Üretim",
      text: "Onaylanan çözüm doğrultusunda üretim süreci başlatılır. Her aşamada kontrol uygulanır. Prototip, numune onayı ve seri üretim aşamaları koordineli yürütülür.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Kontrol & Teslimat",
      text: "Boyutsal ve görsel kontrolden geçen ürünler zamanında ve güvenli şekilde teslim edilir. Kaliteli paketleme ve güvenilir lojistik ile teslimat gerçekleştirilir.",
    },
  ],
};

const steps = [
  {
    n: "01",
    title: "Talebi Analiz Et",
    desc: "Teknik çizim, numune veya sözlü talep alınarak ihtiyaç detaylı biçimde değerlendirilir.",
    detail: "PDF, DWG, DXF, STEP, fiziksel numune veya detaylı açıklama kabul edilir.",
  },
  {
    n: "02",
    title: "Teknik Çözüm",
    desc: "Uygun malzeme, boyut ve üretim yöntemi belirlenir. Gerekirse alternatif çözüm önerileri sunulur.",
    detail: "Teknik değerlendirme tamamlandıktan sonra müşteri onayı alınır.",
  },
  {
    n: "03",
    title: "Üretim",
    desc: "Onaylanan çözüm doğrultusunda üretim süreci başlatılır. Her aşamada kontrol uygulanır.",
    detail: "Prototip, numune onayı ve seri üretim aşamaları koordineli yürütülür.",
  },
  {
    n: "04",
    title: "Kontrol & Teslimat",
    desc: "Boyutsal ve görsel kontrolden geçen ürünler zamanında ve güvenli şekilde teslim edilir.",
    detail: "Kaliteli paketleme ve güvenilir lojistik ile teslimat gerçekleştirilir.",
  },
];

export default function UretimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Üretim" }]} />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">Nasıl Çalışırız</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white">FİKRİ ÜRÜNE DÖNÜŞTÜRÜYORUZ</h1>
        </div>
      </section>

      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="border border-brand-border grid grid-cols-1 lg:grid-cols-12 hover:border-brand-border-hover transition-colors duration-200"
              >
                <div className="lg:col-span-2 flex items-center justify-center p-8 bg-brand-card">
                  <span className="text-5xl font-black text-brand-yellow/20" aria-hidden="true">{s.n}</span>
                </div>
                <div className="lg:col-span-10 p-8">
                  <h2 className="text-sm font-black text-brand-yellow tracking-widest uppercase mb-3">{s.title}</h2>
                  <p className="text-base text-brand-light leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-xs text-brand-muted">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-brand-border p-8">
            <div>
              <h2 className="text-lg font-black text-brand-white mb-1">Üretime başlamaya hazır mısınız?</h2>
              <p className="text-sm text-brand-light">Telefon veya WhatsApp üzerinden ulaşabilirsiniz.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={PHONE_HREF} className="btn-primary">{PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
