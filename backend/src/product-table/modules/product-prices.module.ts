import { Module } from '@nestjs/common';
import { CompaniesService } from 'src/companies/services/companies.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductPricesController } from '../infra/product-prices.controller';
import { ProductPricesService } from '../services/product-prices.service';

@Module({
  controllers: [ProductPricesController],
  providers: [ProductPricesService, PrismaService, CompaniesService],
  exports: [ProductPricesService],
})
export class ProductPricesModule {}
