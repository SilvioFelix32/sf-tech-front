/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';
import { ProductsModule } from '../products/products.module';
import { ProductPricesItemsController } from './infra/http/product-prices-items.controller';
import { ProductsPricesController } from './infra/http/products-prices.controller';
import { ProductsPricesItemsRepository } from './infra/prisma/repositories/products-prices-items.repository';
import { ProductsPricesRepository } from './infra/prisma/repositories/products-prices.repository';
import { PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE } from './repositories/produtcs-prices-items.repository.interface';
import { PRODUCTS_PRICES_REPOSITORY_SERVICE } from './repositories/produtcs-prices.repository.interface';
import { ProductPricesItemsService } from './services/product-prices-items.service';
import { ProductsPricesService } from './services/products-prices.service';

@Module({
  imports: [ProductsModule],
  controllers: [ProductPricesItemsController, ProductsPricesController],
  providers: [
    ProductsPricesService,
    ProductPricesItemsService,
    PrismaService,
    {
      // You can switch useClass to different implementation
      useClass: ProductsPricesRepository,
      provide: PRODUCTS_PRICES_REPOSITORY_SERVICE,
    },

    {
      // You can switch useClass to different implementation
      useClass: ProductsPricesItemsRepository,
      provide: PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE,
    },
  ],
})
export class ProductsPricesModule {}
