import { db } from '@/db';
import { products, categories } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllProducts() {
  if (!db) return [];
  return await db.select().from(products).leftJoin(categories, eq(products.categoryId, categories.id));
}

export async function getProductBySlug(slug: string) {
  if (!db) return null;
  const result = await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.slug, slug))
    .limit(1);
  
  return result[0] || null;
}

export async function getProductsByCategory(categorySlug: string) {
  if (!db) return [];
  return await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(categories.slug, categorySlug));
}

export async function getAllCategories() {
  if (!db) return [];
  return await db.select().from(categories);
}

export async function getFeaturedProducts(limit: number = 8) {
  if (!db) return [];
  return await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .limit(limit);
}
