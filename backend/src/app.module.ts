import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PrismaService } from './shared/prisma/prisma.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductModule } from './product/modules/product.module';
import { ProductCategoriesModule } from './product-categories/modules/product-categories.module';
import { ProductPricesModule } from './product-table/modules/product-prices.module';
import { ProductTablePricesModule } from './product-table-prices/modules/product-table-prices.module';
import { SalesModule } from './sales/modules/sales.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    CompaniesModule,
    UsersModule,
    ProductModule,
    ProductCategoriesModule,
    ProductPricesModule,
    ProductTablePricesModule,
    SalesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
