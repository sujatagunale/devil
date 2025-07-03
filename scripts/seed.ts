import { db } from '../db';
import { categories, products } from '../db/schema';

async function seed() {
  console.log('Seeding database...');

  const categoryData = [
    { name: 'T-Shirts', slug: 't-shirts' },
    { name: 'Hoodies', slug: 'hoodies' },
    { name: 'Stickers', slug: 'stickers' },
    { name: 'Mugs', slug: 'mugs' },
    { name: 'Accessories', slug: 'accessories' },
    { name: 'Desk Accessories', slug: 'desk-accessories' },
  ];

  const insertedCategories = await db.insert(categories).values(categoryData).returning();
  console.log('Categories inserted:', insertedCategories.length);

  const tshirtCategory = insertedCategories.find(c => c.slug === 't-shirts')?.id;
  const hoodieCategory = insertedCategories.find(c => c.slug === 'hoodies')?.id;
  const stickerCategory = insertedCategories.find(c => c.slug === 'stickers')?.id;
  const mugCategory = insertedCategories.find(c => c.slug === 'mugs')?.id;
  const accessoryCategory = insertedCategories.find(c => c.slug === 'accessories')?.id;
  const deskCategory = insertedCategories.find(c => c.slug === 'desk-accessories')?.id;

  const productData = [
    {
      name: 'Frontend Dev Tee',
      slug: 'frontend-dev-tee',
      description: 'Comfortable cotton t-shirt for frontend developers',
      price: '29.00',
      categoryId: tshirtCategory,
      isNew: true,
      images: ['/images/frontend-tee.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      name: 'Code & Coffee Mug',
      slug: 'code-coffee-mug',
      description: 'Perfect mug for coding sessions',
      price: '25.00',
      salePrice: '21.00',
      isOnSale: true,
      categoryId: mugCategory,
      images: ['/images/coffee-mug.jpg'],
    },
    {
      name: 'React Sticker Pack',
      slug: 'react-sticker-pack',
      description: 'Collection of React-themed stickers',
      price: '8.00',
      categoryId: stickerCategory,
      images: ['/images/react-stickers.jpg'],
    },
    {
      name: 'Developer Hoodie',
      slug: 'developer-hoodie',
      description: 'Cozy hoodie for long coding sessions',
      price: '65.00',
      categoryId: hoodieCategory,
      isNew: true,
      images: ['/images/dev-hoodie.jpg'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      name: 'Laptop Stand',
      slug: 'laptop-stand',
      description: 'Ergonomic laptop stand for better posture',
      price: '45.00',
      categoryId: deskCategory,
      images: ['/images/laptop-stand.jpg'],
    },
    {
      name: 'Mechanical Keyboard',
      slug: 'mechanical-keyboard',
      description: 'Premium mechanical keyboard for developers',
      price: '120.00',
      salePrice: '96.00',
      isOnSale: true,
      categoryId: deskCategory,
      images: ['/images/keyboard.jpg'],
    },
    {
      name: 'Git Commit Poster',
      slug: 'git-commit-poster',
      description: 'Motivational poster for your workspace',
      price: '18.00',
      categoryId: accessoryCategory,
      images: ['/images/git-poster.jpg'],
    },
    {
      name: 'Desk Lamp',
      slug: 'desk-lamp',
      description: 'Adjustable LED desk lamp',
      price: '85.00',
      categoryId: deskCategory,
      isNew: true,
      images: ['/images/desk-lamp.jpg'],
    },
    {
      name: 'Pomodoro Timer',
      slug: 'pomodoro-timer',
      description: 'Physical timer for productivity sessions',
      price: '24.50',
      categoryId: deskCategory,
      images: ['/images/pomodoro-timer.jpg'],
    },
    {
      name: 'Desk Organizer',
      slug: 'desk-organizer',
      description: 'Keep your workspace tidy',
      price: '45.00',
      categoryId: deskCategory,
      images: ['/images/desk-organizer.jpg'],
    },
    {
      name: 'Standing Desk',
      slug: 'standing-desk',
      description: 'Adjustable height standing desk',
      price: '299.00',
      categoryId: deskCategory,
      images: ['/images/standing-desk.jpg'],
    },
    {
      name: 'Rubber Duck',
      slug: 'rubber-duck',
      description: 'Classic debugging companion',
      price: '12.50',
      categoryId: deskCategory,
      images: ['/images/rubber-duck.jpg'],
    },
    {
      name: 'Monitor Stand',
      slug: 'monitor-stand',
      description: 'Elevate your monitor for better ergonomics',
      price: '67.50',
      categoryId: deskCategory,
      images: ['/images/monitor-stand.jpg'],
    },
    {
      name: 'Wireless Mouse',
      slug: 'wireless-mouse',
      description: 'Ergonomic wireless mouse',
      price: '45.00',
      categoryId: deskCategory,
      images: ['/images/wireless-mouse.jpg'],
    },
    {
      name: 'Desk Pad',
      slug: 'desk-pad',
      description: 'Large desk pad for mouse and keyboard',
      price: '35.00',
      categoryId: deskCategory,
      images: ['/images/desk-pad.jpg'],
    },
    {
      name: 'Cable Management',
      slug: 'cable-management',
      description: 'Organize your cables efficiently',
      price: '22.00',
      categoryId: deskCategory,
      images: ['/images/cable-management.jpg'],
    },
  ];

  await db.insert(products).values(productData);
  console.log('Products inserted:', productData.length);
  console.log('Database seeded successfully!');
}

seed().catch(console.error);
