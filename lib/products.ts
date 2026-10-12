import content from "../content/urunler.json";

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

// Edited from the Gomp panel (content/urunler.json).
export const products: Product[] = content.products;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
