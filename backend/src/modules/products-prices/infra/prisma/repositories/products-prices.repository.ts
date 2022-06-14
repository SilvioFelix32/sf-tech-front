/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Company } from 'src/modules/companies/entities/company.entity';
import { CreateProductsPriceDto } from 'src/modules/products-prices/dto/create-products-price.dto';
import { QueryProductsPriceDto } from 'src/modules/products-prices/dto/query-products-price.dto';
import { UpdateProductsPriceDto } from 'src/modules/products-prices/dto/update-products-price.dto';
import { ProductsPrice } from 'src/modules/products-prices/entities/products-price.entity';
import IProductsPricesRepository from 'src/modules/products-prices/repositories/produtcs-prices.repository.interface';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';

@Injectable()
export class ProductsPricesRepository implements IProductsPricesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductsPriceDto): Promise<ProductsPrice> {
    const { products } = data;

    delete data.products;

    let createManyProducts = {};

    if (products && products.length > 0) {
      createManyProducts = {
        products: {
          createMany: {
            data: products,
          },
        },
      };
    }

    return this.prisma.priceTable.create({
      data: {
        ...data,
        ...createManyProducts,
      },
      include: {
        products: {
          include: {
            product: {
              select: {
                id: true,
                sku: true,
                title: true,
              },
            },
          },
        },
      },
    });
  }

  async findAll(
    company_id: Company,
    query: QueryProductsPriceDto,
  ): Promise<IRespFindAllPaginateDto> {
    const { description, initial_date, final_date, page, limit } = query;

    const where = {
      company: { company_id },

      ...(description && {
        description: {
          contains: description,
          mode: 'insensitive',
        },
      }),

      ...(initial_date && {
        initial_date: {
          gte: initial_date,
        },
      }),

      ...(final_date && {
        final_date: {
          lte: final_date,
        },
      }),
    };

    const orderBy = { initial_date: 'asc' };

    return await this.prisma.paginate({
      prismaModel: this.prisma.priceTable,
      where,
      orderBy,
      page,
      limit,
    });
  }

  async findOne(id: string): Promise<ProductsPrice | undefined> {
    return this.prisma.priceTable.findUnique({
      where: { id },
      include: {
        products: {
          include: {
            product: {
              select: {
                id: true,
                sku: true,
                title: true,
              },
            },
          },
        },
      },
    });
  }

  async update(
    id: string,
    data: UpdateProductsPriceDto,
  ): Promise<ProductsPrice | undefined> {
    const { products } = data;

    delete data.products;

    const parsedData = JSON.parse(JSON.stringify(data)) as PrismaClient;

    let createManyProducts = {};

    if (products !== undefined) {
      if (products && products.length > 0) {
        createManyProducts = {
          products: {
            deleteMany: {
              price_table_id: id,
            },

            createMany: {
              data: products,
            },
          },
        };
      } else {
        createManyProducts = {
          products: {
            deleteMany: {
              product_id: id,
            },
          },
        };
      }
    }

    return this.prisma.priceTable.update({
      where: { id },
      data: {
        ...parsedData,
        ...createManyProducts,
      },
      include: {
        products: {
          include: {
            product: {
              select: {
                id: true,
                sku: true,
                title: true,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.priceTable.delete({
      where: { id },
    });

    return null;
  }
}
