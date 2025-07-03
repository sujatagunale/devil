'use server';

import { db } from '@/db';
import { cartItems, products } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

async function getSessionId() {
  const cookieStore = await cookies();
  let sessionId = cookieStore.get('session_id')?.value;
  
  if (!sessionId) {
    sessionId = uuidv4();
    cookieStore.set('session_id', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
    });
  }
  
  return sessionId;
}

export async function addToCart(productId: number, quantity: number = 1) {
  const sessionId = await getSessionId();
  
  const existingItem = await db.select()
    .from(cartItems)
    .where(and(eq(cartItems.sessionId, sessionId), eq(cartItems.productId, productId)))
    .limit(1);
  
  if (existingItem.length > 0) {
    return await db.update(cartItems)
      .set({ quantity: existingItem[0].quantity + quantity })
      .where(eq(cartItems.id, existingItem[0].id))
      .returning();
  } else {
    return await db.insert(cartItems)
      .values({ sessionId, productId, quantity })
      .returning();
  }
}

export async function updateCartItem(itemId: number, quantity: number) {
  return await db.update(cartItems)
    .set({ quantity })
    .where(eq(cartItems.id, itemId))
    .returning();
}

export async function removeFromCart(itemId: number) {
  return await db.delete(cartItems)
    .where(eq(cartItems.id, itemId))
    .returning();
}

export async function getCartItems() {
  const sessionId = await getSessionId();
  
  return await db.select()
    .from(cartItems)
    .leftJoin(products, eq(cartItems.productId, products.id))
    .where(eq(cartItems.sessionId, sessionId));
}

export async function getCartCount() {
  const items = await getCartItems();
  return items.reduce((total, item) => total + item.cart_items.quantity, 0);
}
