import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";

const BASE_URL = "https://www.bozyay.com";
const DEFAULT_OG = `${BASE_URL}/og-image.svg`;

// Images uploaded from the Gomp panel are site paths; Google wants full URLs.
function absolute(src: string) {
  return !src ? DEFAULT_OG : src.startsWith("http") ? src : `${BASE_URL}${src}`;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı" };

  const ogImage = absolute(product.heroImage);
  const url = `${BASE_URL}/urunler/${slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: "BOZ YAY",
      title: product.metaTitle,
      description: product.metaDesc,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDesc,
      images: [ogImage],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDesc,
    image: absolute(product.heroImage),
    url: `${BASE_URL}/urunler/${slug}`,
    brand: {
      "@type": "Brand",
      name: "BOZ YAY",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "BOZ YAY",
    },
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/urunler/${slug}`,
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "BOZ YAY",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: `${BASE_URL}/urunler` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${BASE_URL}/urunler/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page header */}
      <section className="pt-36 pb-16 bg-brand-dark border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: product.name },
            ]}
          />
          <p className="text-[11px] font-semibold text-brand-yellow tracking-widest uppercase mb-3">
            {product.name}
          </p>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-white leading-tight mb-4">
            {product.h1}
          </h1>
          <p className="text-base text-brand-light max-w-xl">{product.shortDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main */}
            <div className="lg:col-span-2 space-y-12">

              {/* Description */}
              <div>
                <h2 className="text-xl font-black text-brand-white mb-4">Ürün Hakkında</h2>
                <div className="w-8 h-px bg-brand-yellow mb-5" />
                <p className="text-base text-brand-light leading-relaxed">{product.fullDesc}</p>
              </div>

              {/* Usage */}
              <div>
                <h2 className="text-lg font-bold text-brand-white mb-5">Kullanım Alanları</h2>
                <ul className="space-y-2">
                  {product.usageAreas.map((a, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-light">
                      <span className="w-1 h-1 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-lg font-bold text-brand-white mb-5">Üretim Özellikleri</h2>
                <div className="border border-brand-border">
                  {product.productionFeatures.map((f, i, arr) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 px-6 py-4 hover:bg-brand-card transition-colors duration-200 ${
                        i < arr.length - 1 ? "border-b border-brand-border" : ""
                      }`}
                    >
                      <span className="text-brand-yellow text-xs mt-0.5 shrink-0" aria-hidden="true">✓</span>
                      <span className="text-sm text-brand-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech note */}
              <div className="border-l-2 border-brand-yellow pl-5 py-1">
                <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-1">Teknik Bilgi</p>
                <p className="text-sm text-brand-light">
                  Teknik ölçüler, toleranslar ve malzeme özellikleri müşteri tarafından belirlenir.
                  Detay için teklif formu doldurun veya arayın.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="border border-brand-border p-7 sticky top-28">
                <h3 className="font-bold text-brand-white mb-2">Bu ürün için bilgi alın</h3>
                <p className="text-sm text-brand-light mb-6 leading-relaxed">
                  Telefon veya WhatsApp üzerinden ulaşabilirsiniz.
                </p>
                <a href={PHONE_HREF} className="btn-primary w-full justify-center mb-3">
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-sm"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-dark border-t border-brand-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-black text-brand-white mb-8">Diğer Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-brand-border">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/urunler/${r.slug}`}
                className={`p-7 group hover:bg-brand-card transition-colors duration-200 ${
                  i < 2 ? "border-b sm:border-b-0 sm:border-r border-brand-border" : ""
                }`}
              >
                <h3 className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors duration-200 mb-1">
                  {r.name}
                </h3>
                <p className="text-xs text-brand-muted">{r.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
