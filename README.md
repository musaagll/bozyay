# BOZ YAY — Premium Endüstriyel Web Sitesi

Precision Spring & Wire Forming — Bursa, Nilüfer

## Kurulum

```bash
npm install
npm run dev     # Geliştirme: http://localhost:3000
npm run build   # Production build
npm run start   # Production server
```

## Proje Yapısı

```
app/
  layout.tsx          — Root layout, font, SEO, Schema.org
  page.tsx            — Ana sayfa
  globals.css         — Global stiller, Tailwind, animasyon utilities
  sitemap.ts          — Otomatik sitemap.xml
  robots.ts           — robots.txt
  not-found.tsx       — 404 sayfası
  kurumsal/page.tsx
  urunler/
    page.tsx          — Ürün listesi
    [slug]/page.tsx   — Dinamik ürün detay sayfası
  uretim/page.tsx
  sektorler/page.tsx
  kalite/page.tsx
  iletisim/page.tsx

components/
  Header.tsx          — Sticky header, glass effect, mobile menu
  Footer.tsx          — Premium footer
  ScrollRevealInit.tsx — Intersection observer scroll reveal
  sections/
    Hero.tsx
    TrustSection.tsx
    ProductsSection.tsx
    ProcessSection.tsx
    SectorsSection.tsx
    QualitySection.tsx
    QuoteSection.tsx
    ContactSection.tsx

lib/
  products.ts         — Ürün verisi ve tipler

hooks/
  useScrollReveal.ts

tailwind.config.ts    — Brand renk paleti, tipografi, animasyonlar
```

## Görselleri Değiştirme

Tüm görseller `Image` component üzerinden yüklenmektedir.
Gerçek BOZ YAY fotoğrafları eklemek için:
1. Görseli `/public/images/` klasörüne koyun
2. İlgili sayfada `src="..."` değerini güncelleyin

## İletişim Bilgilerini Güncelleme

- Telefon: `components/Header.tsx`, `components/Footer.tsx`, `app/iletisim/page.tsx`
- Adres: `components/Footer.tsx`, `app/iletisim/page.tsx`
- Harita embed: `components/sections/ContactSection.tsx`, `app/iletisim/page.tsx`

## Ürün Verisini Güncelleme

Tüm ürün bilgileri `lib/products.ts` dosyasında merkezi olarak yönetilmektedir.

## SEO

- Her sayfa kendi `metadata` export'una sahiptir
- Schema.org Organization/LocalBusiness JSON-LD: `app/layout.tsx`
- Ürün Schema.org Product JSON-LD: `app/urunler/[slug]/page.tsx`
- Sitemap: `app/sitemap.ts` (otomatik `/sitemap.xml`)
- Robots: `app/robots.ts` (otomatik `/robots.txt`)
