import { db } from '@/db';
import { products, categories } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllProducts() {
  return await db.select().from(products).leftJoin(categories, eq(products.categoryId, categories.id));
}

export async function getProductBySlug(slug: string) {
  const result = await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.slug, slug))
    .limit(1);
  
  return result[0] || null;
}

export async function getProductsByCategory(categorySlug: string) {
  return await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(categories.slug, categorySlug));
}

export async function getAllCategories() {
  return await db.select().from(categories);
}

export async function getFeaturedProducts(limit: number = 8) {
  return await db.select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .limit(limit);
}
