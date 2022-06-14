/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/infra/prisma/prisma.service';
import { ProductsCategoriesController } from './infra/http/products-categories.controller';
import { ProductsCategoriesRepository } from './infra/prisma/repositories/products-categories.repository';
import { PRODUCTS_CATEGORIES_REPOSITORY_SERVICE } from './repositories/products-categories.repository.interface';
import { ProductsCategoriesService } from './services/products-categories.service';

@Module({
  imports: [],
  controllers: [ProductsCategoriesController],
  providers: [
    ProductsCategoriesService,
    PrismaService,
    {
      // You can switch useClass to different implementation
      useClass: ProductsCategoriesRepository,
      provide: PRODUCTS_CATEGORIES_REPOSITORY_SERVICE,
    },
  ],
  exports: [
    ProductsCategoriesService,
    {
      // You can switch useClass to different implementation
      useClass: ProductsCategoriesRepository,
      provide: PRODUCTS_CATEGORIES_REPOSITORY_SERVICE,
    },
  ],
})
export class ProductsCategoriesModule {}
