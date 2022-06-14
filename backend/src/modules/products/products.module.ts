/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';
import { ProductsCategoriesModule } from '../products-categories/products-categories.module';
import { ProductsController } from './infra/http/products.controller';
import { ProductsRepository } from './infra/prisma/repositories/products.repository';
import { PRODUCTS_REPOSITORY_SERVICE } from './repositories/products.repository.interface';
import { ProductsService } from './services/products.service';

@Module({
  imports: [ProductsCategoriesModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    PrismaService,
    {
      // You can switch useClass to different implementation
      useClass: ProductsRepository,
      provide: PRODUCTS_REPOSITORY_SERVICE,
    },
  ],
  exports: [
    ProductsService,
    {
      // You can switch useClass to different implementation
      useClass: ProductsRepository,
      provide: PRODUCTS_REPOSITORY_SERVICE,
    },
  ],
})
export class ProductsModule {}
