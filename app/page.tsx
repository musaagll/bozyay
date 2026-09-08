import type { Metadata } from "next";
import Hero            from "@/components/sections/Hero";
import TrustSection    from "@/components/sections/TrustSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProcessSection  from "@/components/sections/ProcessSection";
import SectorsSection  from "@/components/sections/SectorsSection";
import QualitySection  from "@/components/sections/QualitySection";
import QuoteSection    from "@/components/sections/QuoteSection";
import ContactSection  from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "BOZ YAY — Bursa Yay Üreticisi | Precision Spring & Wire Forming",
  description:
    "Bursa yay üreticisi BOZ YAY; baskı yayı, çekme yayı, bükümlü yay, tel form ve özel metal şekillendirme çözümleri. Nilüfer/Bursa.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ProductsSection />
      <ProcessSection />
      <SectorsSection />
      <QualitySection />
      <QuoteSection />
      <ContactSection />
    </>
  );
}
