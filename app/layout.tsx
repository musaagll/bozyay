import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://www.bozyay.com";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BOZ YAY — Bursa Yay Üreticisi | Yay ve Şekilli Tel İmalatı",
    template: "%s | BOZ YAY",
  },
  description:
    "Bursa yay üreticisi BOZ YAY; baskı yayı, çekme yayı, bükümlü yay, tel form ve özel metal şekillendirme. Nilüfer/Bursa.",
  keywords: [
    "Bursa yay üreticisi",
    "baskı yayı",
    "çekme yayı",
    "tel form",
    "bükümlü yay",
    "özel yay üretimi",
    "yay imalatı",
    "Nilüfer yay fabrikası",
    "metal şekillendirme Bursa",
    "helisel yay",
  ],
  icons: {
    icon: [
      { url: "/logo/logo-opt.png", type: "image/png" },
    ],
    apple: "/logo/logo-opt.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "4Zg_qsPV49QzFd1aWI8mIWsYgSXyWibQf4lFEiNGeIo",
  },
  alternates: {
    canonical: BASE_URL,
    languages: { "tr-TR": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "BOZ YAY",
    title: "BOZ YAY — Bursa Yay Üreticisi | Yay ve Şekilli Tel İmalatı",
    description:
      "Bursa yay üreticisi BOZ YAY; baskı yayı, çekme yayı, bükümlü yay, tel form ve özel metal şekillendirme. Nilüfer/Bursa.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "BOZ YAY — Bursa Yay Üreticisi",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOZ YAY — Bursa Yay Üreticisi",
    description:
      "Baskı yayı, çekme yayı, bükümlü yay, tel form ve özel metal şekillendirme. Nilüfer/Bursa.",
    images: [OG_IMAGE],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "BOZ YAY",
  legalName: "BOZ YAY",
  description:
    "Özel yay, tel form ve metal şekillendirme çözümleri. Yay ve Şekilli Tel İmalatı. Nilüfer, Bursa.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo/logo-opt.png`,
    width: 200,
    height: 200,
  },
  image: OG_IMAGE,
  telephone: "+90-531-501-25-84",
  email: "info@bozyay.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çalı Mahallesi 2. (410) Sokak No:6",
    postalCode: "16110",
    addressLocality: "Nilüfer",
    addressRegion: "Bursa",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.2267",
    longitude: "28.9795",
  },
  sameAs: [
    `https://wa.me/905315012584`,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-531-501-25-84",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-brand-black text-brand-white antialiased">
        <Header />
        <main>
          <ScrollRevealInit />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
