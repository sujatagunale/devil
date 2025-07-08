import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

function isValidDatabaseUrl(url: string | undefined): boolean {
  if (!url) return false;
  if (url.includes('placeholder') || url.includes('your_')) return false;
  return /^postgres(ql)?:\/\//.test(url);
}

let db: ReturnType<typeof drizzle> | null = null;

if (isValidDatabaseUrl(process.env.DATABASE_URL)) {
  const sql = neon(process.env.DATABASE_URL!);
  db = drizzle(sql, { schema });
}

export { db };

export type Product = typeof schema.products.$inferSelect;
export type Category = typeof schema.categories.$inferSelect;
export type CartItem = typeof schema.cartItems.$inferSelect;
