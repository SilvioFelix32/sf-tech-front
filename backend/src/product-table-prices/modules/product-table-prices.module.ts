import { Module } from '@nestjs/common';
import { CompaniesService } from 'src/companies/services/companies.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { ProductTablePricesController } from '../infra/product-table-prices.controller';
import { ProductTablePricesService } from '../services/product-table-prices.service';

@Module({
  controllers: [ProductTablePricesController],
  providers: [ProductTablePricesService, PrismaService, CompaniesService],
  exports: [ProductTablePricesService],
})
export class ProductTablePricesModule {}
