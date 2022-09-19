import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductTablePriceDto } from '../dto/create-product-price.dto';
import { tableResponse } from '../dto/table-response';
import { UpdateProductTablePriceDto } from '../dto/update-product-price.dto';
import { ProductPriceTable } from '../entities/product-price.entity';

@Injectable()
export class ProductPricesService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    company_id: string,
    dto: CreateProductTablePriceDto,
  ): Promise<ProductPriceTable> {
    const data: Prisma.PriceTableCreateInput = {
      company_id,
      ...dto,
    };

    return this.prisma.priceTable.create({ data });
  }

  findAll() {
    return this.prisma.priceTable.findMany({
      select: {
        ...tableResponse,
      },
    });
  }

  findOne(price_table_id: string) {
    return this.prisma.priceTable.findUnique({
      where: {
        price_table_id,
      },
      select: {
        ...tableResponse,
      },
    });
  }

  update(
    company_id: string,
    price_table_id: string,
    dto: UpdateProductTablePriceDto,
  ) {
    return this.prisma.priceTable.update({
      where: {
        price_table_id,
      },
      data: {
        company_id,
        ...dto,
      },
    });
  }

  remove(price_table_id: string) {
    return this.prisma.priceTable.delete({
      where: {
        price_table_id,
      },
    });
  }
}
