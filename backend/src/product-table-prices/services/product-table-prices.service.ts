/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateProductItemPriceDto } from '../dto/create-product-item-price.dto';
import { tableItemResponse } from '../dto/table-item-response';
import { UpdateProductPriceDto } from '../dto/update-product-item-price.dto';
import { ProductItemPrice } from '../entities/product-price-items.entity';

@Injectable()
export class ProductTablePricesService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    price_table_id: string,
    dto: CreateProductItemPriceDto,
  ): Promise<ProductItemPrice> {
    const data: Prisma.ProductPricesTableCreateInput = {
      price_table_id,
      ...dto,
    };

    return this.prisma.productPricesTable.create({ data });
  }

  findAll() {
    return this.prisma.productPricesTable.findMany();
  }

  findOne(item_price_id: string) {
    return this.prisma.productPricesTable.findUnique({
      where: {
        item_price_id,
      },
      select: {
        ...tableItemResponse,
      },
    });
  }

  update(item_price_id: string, dto: UpdateProductPriceDto) {
    return this.prisma.productPricesTable.update({
      where: {
        item_price_id,
      },
      data: {
        ...dto,
      },
    });
  }

  remove(item_price_id: string) {
    return this.prisma.productPricesTable.delete({
      where: {
        item_price_id,
      },
    });
  }
}
