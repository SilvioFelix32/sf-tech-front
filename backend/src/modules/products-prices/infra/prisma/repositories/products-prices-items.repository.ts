/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductsPriceItemDto } from 'src/modules/products-prices/dto/create-products-price-item.dto';
import { QueryProductPriceItemDto } from 'src/modules/products-prices/dto/query-products-price-item.dto';
import { UpdateProductsPriceItemDto } from 'src/modules/products-prices/dto/update-products-price-item.dto';
import { ProductsPriceItem } from 'src/modules/products-prices/entities/products-price-items.entity';
import IProductsPricesItemsRepository from 'src/modules/products-prices/repositories/produtcs-prices-items.repository.interface';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';

@Injectable()
export class ProductsPricesItemsRepository
  implements IProductsPricesItemsRepository
{
  private include = {
    product: {
      select: {
        id: true,
        sku: true,
        title: true,
        product_type: true,
        active: true,
        for_sale: true,
        promotion: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(
    price_id: string,
    data: CreateProductsPriceItemDto,
  ): Promise<ProductsPriceItem> {
    const products = await this.prisma.priceTable.update({
      where: {
        id: price_id,
      },
      data: {
        products: {
          create: data,
        },
      },
      include: {
        products: true,
      },
    });

    return products[0].products;
  }

  async createMany(
    price_id: string,
    data: CreateProductsPriceItemDto[],
  ): Promise<number> {
    const dataUpsert = data.map((productPrice) => {
      const upsert = {
        create: productPrice,
        update: productPrice,
        where: { id: productPrice.id || 'abc123' },
      };

      delete upsert.create.id;
      delete upsert.update.id;

      return upsert;
    });

    const products = await this.prisma.priceTable.update({
      where: {
        id: price_id,
      },
      data: {
        products: {
          upsert: dataUpsert,
        },
      },
      include: {
        products: true,
      },
    });

    return products.products.length;
  }

  async findAll(
    price_id: string,
    query: QueryProductPriceItemDto,
  ): Promise<IRespFindAllPaginateDto | null> {
    const {
      sku,
      title,
      product_type,
      active,
      for_sale,
      promotion,
      page,
      limit,
    } = query;

    const whereproduct =
      !!sku ||
      !!title ||
      !!product_type ||
      !!active ||
      !!for_sale ||
      !!promotion;

    const where = {
      price_table_id: price_id,

      ...(whereproduct && {
        product: {
          ...(sku && { sku }),
          ...(title && {
            title: {
              contains: title,
              mode: 'insensitive',
            },
          }),

          ...(product_type && { product_type }),
          ...(active && { active: active === 'true' ? true : false }),
          ...(for_sale && { for_sale: for_sale === 'true' ? true : false }),
          ...(promotion && { promotion: promotion === 'true' ? true : false }),
        },
      }),
    };

    const orderBy = {
      product: {
        title: 'asc',
      },
    };

    return await this.prisma.paginate({
      prismaModel: this.prisma.productPricesTable,
      where,
      include: this.include,
      orderBy,
      page,
      limit,
    });
  }

  async findOne(id: string): Promise<ProductsPriceItem | undefined> {
    return this.prisma.productPricesTable.findUnique({
      where: {
        id,
      },
      include: this.include,
    });
  }

  async update(
    id: string,
    data: UpdateProductsPriceItemDto,
  ): Promise<ProductsPriceItem | undefined> {
    return await this.prisma.productPricesTable.update({
      where: {
        id,
      },

      data,

      include: this.include,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.productPricesTable.delete({
      where: {
        id,
      },
    });
  }
}
