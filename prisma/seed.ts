import { PizzaType } from "./../shared/constants/pizza";
import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

// const randomDecimalNumber = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
// };

// const generateProductItem = ({
//   productId,
//   pizzaType,
//   size,
// }: {
//   productId: number;
//   pizzaType?: 1 | 2;
//   size?: 25 | 30 | 35;
// }) => {
//   return {
//     productId,
//     price: randomDecimalNumber(190, 600),
//     pizzaType,
//     size,
//   } as Prisma.ProductItemUncheckedCreateInput;
// };

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  // await prisma.product.createMany({
  //   data: products,
  // });

  await prisma.product.createMany({
    data: products.map((product, index) => ({ id: index + 1, ...product })),
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Cheese",
      imageUrl: "/pizza/fluffy/big/cheese.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Pepperoni",
      imageUrl: "/pizza/fluffy/big/pepperoni.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Chorizo fresh",
      imageUrl: "/pizza/fluffy/big/chorizo-fresh.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // cheese
      { productId: pizza1.id, pizzaType: 1, price: 5, size: 25 },
      { productId: pizza1.id, pizzaType: 1, price: 7, size: 30 },
      { productId: pizza1.id, pizzaType: 1, price: 10, size: 35 },
      { productId: pizza1.id, pizzaType: 2, price: 7, size: 30 },
      { productId: pizza1.id, pizzaType: 2, price: 10, size: 35 },

      // pepperoni
      { productId: pizza2.id, pizzaType: 1, price: 5, size: 25 },
      { productId: pizza2.id, pizzaType: 1, price: 7, size: 30 },
      { productId: pizza2.id, pizzaType: 1, price: 10, size: 35 },
      { productId: pizza2.id, pizzaType: 2, price: 7, size: 30 },
      { productId: pizza2.id, pizzaType: 2, price: 10, size: 35 },

      // chorizo fresh
      { productId: pizza3.id, pizzaType: 1, price: 5, size: 25 },
      { productId: pizza3.id, pizzaType: 1, price: 7, size: 30 },
      { productId: pizza3.id, pizzaType: 1, price: 10, size: 35 },
      { productId: pizza3.id, pizzaType: 2, price: 7, size: 30 },
      { productId: pizza3.id, pizzaType: 2, price: 10, size: 35 },

      // others products
      { productId: 1, price: 2.5 },
      { productId: 2, price: 2.5 },
      { productId: 3, price: 2.5 },
      { productId: 4, price: 2.5 },
      { productId: 5, price: 2.5 },
      { productId: 6, price: 3 },
      { productId: 7, price: 3 },
      { productId: 8, price: 2.5 },
      { productId: 9, price: 4.5 },
      { productId: 10, price: 3.5 },
      { productId: 11, price: 3.5 },
      { productId: 12, price: 4.5 },
      { productId: 13, price: 4.5 },
      { productId: 14, price: 4.5 },
      { productId: 15, price: 2.5 },
      { productId: 16, price: 2.5 },
      { productId: 17, price: 2.5 },
      { productId: 18, price: 2.5 },
      { productId: 19, price: 2.5 },
      { productId: 20, price: 2.5 },
      { productId: 21, price: 2.5 },
      { productId: 22, price: 2 },
      { productId: 23, price: 2 },
      { productId: 24, price: 2 },
      { productId: 25, price: 2 },
      { productId: 26, price: 2 },
      { productId: 27, price: 2 },
      { productId: 28, price: 2 },
      { productId: 29, price: 2 },
      { productId: 30, price: 2 },
      { productId: 31, price: 2 },
      { productId: 32, price: 2 },
      { productId: 33, price: 2 },
      { productId: 34, price: 2 },
      { productId: 35, price: 2 },
      { productId: 36, price: 2 },
      { productId: 37, price: 2 },
      { productId: 38, price: 2 },
      { productId: 39, price: 2 },
      { productId: 40, price: 2 },
      { productId: 41, price: 2 },
      { productId: 42, price: 2 },
      { productId: 43, price: 2 },
      { productId: 44, price: 2 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await up();
    await down();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
