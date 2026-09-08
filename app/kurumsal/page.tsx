import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  title: "Kurumsal — BOZ YAY Hakkında",
  description:
    "BOZ YAY; Bursa Nilüfer'de yay üretimi, tel form şekillendirme ve özel metal bileşen üretimi alanlarında hizmet veren bir üretim firmasıdır.",
  alternates: { canonical: `${BASE_URL}/kurumsal` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${BASE_URL}/kurumsal`,
    siteName: "BOZ YAY",
    title: "Kurumsal — BOZ YAY Hakkında",
    description:
      "BOZ YAY; Bursa Nilüfer'de yay üretimi, tel form şekillendirme ve özel metal bileşen üretimi alanlarında hizmet veren bir üretim firmasıdır.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BOZ YAY — Kurumsal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal — BOZ YAY Hakkında",
    description: "BOZ YAY; Bursa Nilüfer'de yay üretimi ve özel metal şekillendirme alanında hizmet verir.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kurumsal", item: `${BASE_URL}/kurumsal` },
  ],
};

export default function KurumsalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Kurumsal" }]} />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">Hakkımızda</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white leading-tight">
            Teknik Çözüm Üreten<br />Üretim Ortağı
          </h1>
        </div>
      </section>

      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-black text-brand-white mb-5">BOZ YAY Kimdir?</h2>
            <div className="space-y-4 text-base text-brand-light leading-relaxed">
              <p>
                BOZ YAY; Bursa Nilüfer&apos;de faaliyet gösteren, yay üretimi, tel form şekillendirme
                ve özel metal bileşen üretimi alanlarında hizmet veren bir üretim firmasıdır.
              </p>
              <p>
                Müşteri teknik çiziminden, numunesinden veya tarifinden hareketle üretim süreci
                başlatılmaktadır. Her talebin kendine özgü teknik gereksinimleri ekip tarafından
                titizlikle değerlendirilmektedir.
              </p>
              <p>
                Otomotiv, makina, beyaz eşya, tarım makineleri, mobilya ve elektrik &amp; elektronik
                gibi farklı sektörlere hizmet verilmektedir.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+905315012584" className="btn-primary">0531 501 25 84</a>
              <a href="https://wa.me/905315012584" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
            </div>
          </div>

          <div className="space-y-0 border border-brand-border">
            {[
              ["Üretim Odaklılık",  "Tüm süreçlerin merkezinde üretim kalitesi yer alır."],
              ["Müşteri Ortaklığı", "Talepler birer sipariş değil, birlikte çözülecek teknik problemler olarak değerlendirilir."],
              ["Teknik Dürüstlük",  "Uygun olmayan talepler için doğru alternatif her zaman paylaşılır."],
              ["Sürekli Gelişim",   "Üretim süreçleri ve yöntemler sürekli iyileştirilir."],
            ].map(([title, desc], i, arr) => (
              <div
                key={i}
                className={`px-7 py-6 hover:bg-brand-card transition-colors duration-200 ${
                  i < arr.length - 1 ? "border-b border-brand-border" : ""
                }`}
              >
                <h3 className="text-sm font-bold text-brand-white mb-1.5">{title}</h3>
                <p className="text-sm text-brand-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
