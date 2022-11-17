import { PrismaClient } from '@prisma/client';
import { companySeed } from './seeds.ts/companies';
import { productsSeed } from './seeds.ts/products';
import { productCategoriesSeed } from './seeds.ts/productsCategories';
import { userSeed } from './seeds.ts/users';

const prisma = new PrismaClient();

async function main() {
  await prisma.company.deleteMany();
  await prisma.productCategory.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  await prisma.company.createMany({
    data: companySeed,
  });
  await prisma.productCategory.createMany({
    data: productCategoriesSeed,
  });
  await prisma.product.createMany({
    data: productsSeed,
  });
  await prisma.user.createMany({
    data: userSeed,
  });
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
