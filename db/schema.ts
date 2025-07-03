import { pgTable, serial, text, decimal, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  images: text('images').array(),
  categoryId: integer('category_id').references(() => categories.id),
  inStock: boolean('in_stock').default(true),
  sizes: text('sizes').array(),
  isOnSale: boolean('is_on_sale').default(false),
  salePrice: decimal('sale_price', { precision: 10, scale: 2 }),
  isNew: boolean('is_new').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull(),
  productId: integer('product_id').references(() => products.id),
  quantity: integer('quantity').notNull().default(1),
  createdAt: timestamp('created_at').defaultNow(),
});
