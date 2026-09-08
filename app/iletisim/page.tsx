import type { Metadata } from "next";
import Link from "next/link";
import WaIcon from "@/components/icons/WaIcon";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  title: "İletişim | BOZ YAY Bursa",
  description:
    "BOZ YAY ile iletişime geçin. Telefon: 0531 501 25 84. Adres: Çalı, 2. Sk., 16110 Nilüfer/Bursa. WhatsApp ile de ulaşabilirsiniz.",
  alternates: { canonical: `${BASE_URL}/iletisim` },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${BASE_URL}/iletisim`,
    siteName: "BOZ YAY",
    title: "İletişim | BOZ YAY Bursa",
    description:
      "BOZ YAY ile iletişime geçin. Telefon: 0531 501 25 84. Adres: Çalı, 2. Sk., 16110 Nilüfer/Bursa.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BOZ YAY — İletişim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | BOZ YAY Bursa",
    description: "0531 501 25 84 — Çalı, 2. Sk., 16110 Nilüfer/Bursa",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "İletişim", item: `${BASE_URL}/iletisim` },
  ],
};

export default function IletisimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-36 pb-14 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]} />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">İletişim</p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white">PROJENİZİ KONUŞALIM.</h1>
        </div>
      </section>

      {/* id="teklif" anchor — sektörler sayfasındaki linki düzeltir */}
      <section id="teklif" className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-brand-border mb-10">

            {/* Phone */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-brand-border">
              <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-3">Telefon</p>
              <a
                href="tel:+905315012584"
                className="text-2xl font-black text-brand-white hover:text-brand-yellow transition-colors duration-200 block mb-5"
              >
                0531 501 25 84
              </a>
              <a href="tel:+905315012584" className="btn-primary text-xs py-3 px-5">
                HEMEN ARA
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-brand-border">
              <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-3">WhatsApp</p>
              <p className="text-brand-white font-medium leading-relaxed mb-5">
                Mesaj, teknik çizim veya fotoğrafınızı WhatsApp üzerinden iletebilirsiniz.
              </p>
              <a
                href="https://wa.me/905315012584"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-3 px-5 inline-flex items-center gap-2"
                aria-label="WhatsApp ile iletişim kur"
              >
                <WaIcon size={16} />
                WhatsApp ile Yaz
              </a>
            </div>

            {/* Address */}
            <div className="p-8">
              <p className="text-[11px] text-brand-yellow uppercase tracking-widest font-semibold mb-3">Adres</p>
              <address className="not-italic text-brand-white font-medium leading-relaxed mb-5">
                BOZ YAY Çalı, 2. Sk.,<br />
                16110, 16130 Nilüfer/Bursa
              </address>
              <a
                href="https://maps.google.com/?q=Çalı+2+Sokak+Nilüfer+Bursa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-3 px-5 inline-flex"
                aria-label="Google Maps'te görüntüle"
              >
                Haritada Gör
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="border border-brand-border overflow-hidden h-72 lg:h-96">
            <iframe
              title="BOZ YAY Konum — Nilüfer, Bursa"
              aria-label="BOZ YAY fabrika konumu haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.4!2d28.98!3d40.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNilüfer%2C%20Bursa!5e0!3m2!1str!2str!4v1700000000001!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.25) brightness(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
