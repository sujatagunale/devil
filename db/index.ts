import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });

export type Product = typeof schema.products.$inferSelect;
export type Category = typeof schema.categories.$inferSelect;
export type CartItem = typeof schema.cartItems.$inferSelect;
