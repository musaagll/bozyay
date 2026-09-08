import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | BOZ YAY",
  description: "Aradığınız sayfa mevcut değil.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black px-6">
      <div className="text-center">
        <p className="text-8xl font-black text-brand-yellow/10 leading-none mb-6" aria-hidden="true">404</p>
        <h1 className="text-2xl font-black text-brand-white mb-3">Sayfa Bulunamadı</h1>
        <p className="text-sm text-brand-light mb-8">Aradığınız sayfa mevcut değil.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Ana Sayfa</Link>
          <Link href="/urunler" className="btn-outline">Ürünler</Link>
        </div>
      </div>
    </div>
  );
}
