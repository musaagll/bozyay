export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  cardImage: string;
  alt?: string;
  usageAreas: string[];
  productionFeatures: string[];
  metaTitle: string;
  metaDesc: string;
  h1: string;
}

export const products: Product[] = [
  {
    slug: "baski-yaylari",
    name: "Baskı Yayları",
    shortDesc: "Basınç altında çalışan özel tasarım yay çözümleri.",
    fullDesc:
      "Baskı yayları (sıkıştırma yayları), iki kuvvet noktası arasında basınç altında enerji depolayan ve serbest bırakıldığında bu enerjiyi geri veren helisel yapılı mekanik elemanlardır. BOZ YAY, müşteri teknik çizimi veya numunesine göre farklı çap, uzunluk ve malzeme seçeneklerinde özel baskı yayı üretimi gerçekleştirmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1565793979007-eee849e3d0fd?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Otomotiv ve araç sistemleri",
      "Makina ve ekipman üretimi",
      "Beyaz eşya ve dayanıklı tüketim",
      "Endüstriyel valf ve pnömatik sistemler",
      "Tarım makineleri",
      "Mobilya ve aksesuar",
    ],
    productionFeatures: [
      "Müşteri çizimi veya numunesine göre üretim",
      "Farklı tel çapı seçenekleri",
      "Çeşitli malzeme alternatifleri (yay çeliği, paslanmaz çelik vb.)",
      "Özel son işlem ve yüzey kaplama seçenekleri",
      "Seri ve prototip üretim imkânı",
    ],
    metaTitle: "Baskı Yayları — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa'da baskı yayı üreticisi BOZ YAY. Otomotiv, makina, beyaz eşya ve endüstriyel uygulamalar için müşteri çizimine göre özel baskı yayı imalatı.",
    h1: "Özel Üretim Baskı Yayları",
  },
  {
    slug: "cekme-yaylari",
    name: "Çekme Yayları",
    shortDesc: "Çekme kuvvetlerine yönelik hassas yay çözümleri.",
    fullDesc:
      "Çekme yayları (gerilme yayları), iki nokta arasında çekme kuvvetine karşı direnç gösteren, çekilince uzayan ve bırakıldığında eski konumuna dönen mekanik elemanlardır. Genellikle kanca veya halka uçlu olarak üretilen bu yaylar, geniş endüstriyel uygulama alanı bulmaktadır. BOZ YAY, çekme yaylarını müşteri spesifikasyonlarına göre üretmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Kapı ve güvenlik mekanizmaları",
      "Tarım makineleri ve ekipmanları",
      "Endüstriyel ekipman ve makineler",
      "Otomotiv bileşenleri",
      "Mobilya mekanizmaları",
      "Özel proje ve uygulamalar",
    ],
    productionFeatures: [
      "Çeşitli uç geometrisi seçenekleri (kanca, halka, özel form)",
      "Müşteri çizimi veya numunesine göre üretim",
      "Farklı tel çapı ve malzeme seçenekleri",
      "Prototip ve seri üretim imkânı",
      "Özel yüzey işlem seçenekleri",
    ],
    metaTitle: "Çekme Yayları — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa çekme yayı üreticisi BOZ YAY. Endüstriyel, otomotiv ve tarım makineleri için müşteri spesifikasyonuna göre özel çekme yayı imalatı.",
    h1: "Özel Üretim Çekme Yayları",
  },
  {
    slug: "bukumlu-yaylar",
    name: "Bükümlü / Kurma Yayları",
    shortDesc: "Özel açılarda ve geometrilerde üretilen yay çözümleri.",
    fullDesc:
      "Bükümlü yaylar (torsiyon/burulma yayları), dönme veya açısal hareket kuvvetlerine karşı çalışan mekanik elemanlardır. Kurma yayı olarak da bilinen bu ürünler; kapı menteşeleri, kilit mekanizmaları, klipsler ve pek çok mekanik bileşende kullanılmaktadır. BOZ YAY, farklı açı ve geometride özel bükümlü yay üretimi yapmaktadır.",
    heroImage:
      "https://images.unsplash.com/photo-1565793979007-eee849e3d0fd?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Kilit ve menteşe mekanizmaları",
      "Klips ve bağlantı elemanları",
      "Kapı ve dolap sistemleri",
      "Elektrik & elektronik bileşenler",
      "Otomotiv iç mekanizmaları",
      "Özel makina tasarımları",
    ],
    productionFeatures: [
      "İstenilen açı ve geometride üretim",
      "Tek veya çift sargı seçeneği",
      "Müşteri çizimi veya numunesine göre üretim",
      "Farklı tel çapı ve malzeme alternatifleri",
      "Seri üretim kapasitesi",
    ],
    metaTitle: "Bükümlü & Kurma Yayları — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa bükümlü yay ve kurma yayı üreticisi BOZ YAY. Torsiyon yayları, menteşe yayları ve özel açılı yay çözümleri için teklif alın.",
    h1: "Bükümlü ve Kurma Yayları",
  },
  {
    slug: "tel-formlar",
    name: "Tel Formlar",
    shortDesc: "Müşteri çizimine veya numunesine özel tel şekillendirme çözümleri.",
    fullDesc:
      "Tel formlar; belirli bir geometri, profil veya işleve göre şekillendirilmiş metal tel ürünleridir. Yay özelliği taşımayan ancak mekanik veya yapısal fonksiyon gören bu ürünler, geniş bir uygulama yelpazesine sahiptir. BOZ YAY, müşteri teknik çizimi veya mevcut numuneye göre özel tel form üretimi gerçekleştirmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Mobilya ve dekorasyon ürünleri",
      "Beyaz eşya bileşenleri",
      "Otomotiv iç aksesuarları",
      "Raf ve sepet sistemleri",
      "Endüstriyel tutucular ve bağlantı elemanları",
      "Tıbbi cihaz ve ekipmanlar",
    ],
    productionFeatures: [
      "2D ve 3D tel form üretim kapasitesi",
      "Müşteri çizimi veya numunesine göre üretim",
      "Farklı çap ve malzeme seçenekleri",
      "Kaynakla birleştirme imkânı",
      "Yüzey işlem ve kaplama alternatifleri",
    ],
    metaTitle: "Tel Formlar — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa tel form üreticisi BOZ YAY. Müşteri çizimi veya numunesine göre 2D ve 3D özel tel form imalatı. Mobilya, beyaz eşya, otomotiv ve endüstriyel uygulamalar.",
    h1: "Özel Üretim Tel Formlar",
  },
  {
    slug: "demir-bukum",
    name: "Demir Büküm",
    shortDesc: "Özel ölçü ve geometrilerde metal/tel büküm çözümleri.",
    fullDesc:
      "Demir büküm; çubuk, profil veya kalın tel malzemelerin belirli açı, form ve geometride şekillendirilmesi işlemidir. Yapısal bileşenlerden dekoratif elemanlara kadar geniş bir kullanım alanı sunan demir büküm ürünleri, BOZ YAY tarafından müşteri ihtiyaçlarına göre üretilmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1565793979007-eee849e3d0fd?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "İnşaat ve yapı sektörü",
      "Dekorasyon ve ferforje ürünleri",
      "Endüstriyel taşıyıcı ve raf sistemleri",
      "Tarım ve hayvancılık ekipmanları",
      "Özel mimari uygulamalar",
      "Metal mobilya bileşenleri",
    ],
    productionFeatures: [
      "Farklı profil ve çap seçeneklerinde üretim",
      "Müşteri çizimi veya numunesine göre üretim",
      "Tek parça veya bağlantılı üretim",
      "Yüzey işlem seçenekleri",
      "Seri ve tekil üretim imkânı",
    ],
    metaTitle: "Demir Büküm — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa demir büküm üreticisi BOZ YAY. Müşteri talebine göre özel demir büküm ve metal şekillendirme çözümleri. Teklif almak için iletişime geçin.",
    h1: "Özel Demir Büküm Çözümleri",
  },
  {
    slug: "bukumlu-miller",
    name: "Bükümlü Miller",
    shortDesc: "İhtiyaca özel şekillendirilmiş mil ve metal komponent çözümleri.",
    fullDesc:
      "Bükümlü miller; torsiyon veya özel geometrik formlara göre şekillendirilmiş mil ve eksen elemanlarıdır. Güç iletimi, titreşim sönümleme veya yapısal bağlantı amacıyla kullanılan bu ürünler, endüstriyel makina ve ekipman tasarımında kritik bir rol üstlenir. BOZ YAY, müşteri spesifikasyonlarına göre özel mil üretimi gerçekleştirmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Endüstriyel makina ve ekipman",
      "Otomotiv aktarma organları",
      "Tarım makineleri bileşenleri",
      "Güç iletim sistemleri",
      "Özel mekanik tasarımlar",
      "Yapısal bağlantı elemanları",
    ],
    productionFeatures: [
      "Müşteri çizimi veya numunesine göre üretim",
      "Farklı malzeme ve çap alternatifleri",
      "Özel form ve büküm geometrisi",
      "Yüzey sertleştirme ve kaplama seçenekleri",
      "Prototip ve seri üretim",
    ],
    metaTitle: "Bükümlü Miller — Özel Üretim | BOZ YAY Bursa",
    metaDesc:
      "Bursa bükümlü mil üreticisi BOZ YAY. Endüstriyel makina, otomotiv ve güç iletim sistemleri için özel mil ve metal komponent üretimi.",
    h1: "Özel Üretim Bükümlü Miller",
  },
  {
    slug: "ozel-uretim",
    name: "Özel Üretim Parçalar",
    shortDesc: "Teknik çizim, numune veya müşteri talebine göre özel üretim.",
    fullDesc:
      "BOZ YAY; standart ürün kategorilerinin dışında kalan, tamamen müşteriye özel tasarım ve üretim gerektiren parça ve bileşenler için de çözüm üretmektedir. Teknik çiziminiz, numuneniz veya ihtiyacınızı tarif eden açıklamanız yeterlidir — BOZ YAY ekibi en uygun üretim çözümünü sizinle birlikte geliştirmektedir.",
    heroImage:
      "https://images.unsplash.com/photo-1565793979007-eee849e3d0fd?w=1400&q=80&auto=format&fit=crop",
    cardImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
    usageAreas: [
      "Tüm endüstriyel sektörler",
      "Ar-Ge ve prototip çalışmaları",
      "Makina revizyonu ve yedek parça",
      "Özel proje ve tasarımlar",
      "Küçük seri ve tekil üretim",
      "İhracat ve uluslararası projeler",
    ],
    productionFeatures: [
      "Her türlü teknik çizim formatı kabul edilir",
      "Numune alınarak üretim yapılabilir",
      "Teknik çözüm önerisi ve değerlendirme",
      "Hızlı prototipleme imkânı",
      "Seri üretime geçiş desteği",
    ],
    metaTitle: "Özel Üretim — Teknik Çizime Göre | BOZ YAY Bursa",
    metaDesc:
      "Teknik çiziminize veya numunenize göre özel yay ve metal parça üretimi. Bursa yay üreticisi BOZ YAY ile üretim çözümünüzü birlikte geliştirin.",
    h1: "Teknik Çizime Göre Özel Üretim",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
