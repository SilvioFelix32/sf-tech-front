/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Company } from 'src/modules/companies/entities/company.entity';
import { CreateProductDto } from 'src/modules/products/dto/create-product.dto';
import { FindProductSkuDto } from 'src/modules/products/dto/find-product-sku.dto';
import { QueryProductDto } from 'src/modules/products/dto/query-product.dto';
import { UpdateProductDto } from 'src/modules/products/dto/update-product.dto';
import { Product } from 'src/modules/products/entities/product.entity';
import IProductsRepository from 'src/modules/products/repositories/products.repository.interface';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';

@Injectable()
export class ProductsRepository implements IProductsRepository {
  private includeOne = {
    product_category: {
      select: {
        title: true,
        active: true,
      },
    },
    items: {
      include: {
        item: {
          select: {
            id: true,
            sku: true,
            title: true,
            product_type: true,
          },
        },
      },
    },

    availability_exception: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    const itemsCombo = data.items;

    delete data.items;

    const parsedData = JSON.parse(JSON.stringify(data)) as PrismaClient;

    let createManyItems = {};

    if (itemsCombo && itemsCombo.length > 0) {
      createManyItems = {
        items: {
          createMany: {
            data: itemsCombo,
          },
        },
      };
    }

    return this.prisma.product.create({
      data: {
        ...parsedData,
        ...createManyItems,
      },
      include: this.includeOne,
    });
  }

  async findAll(
    company_id: Promise<Company>,
    query: QueryProductDto,
  ): Promise<IRespFindAllPaginateDto> {
    const {
      sku,
      title,
      subtitle,
      description,
      product_type,
      active,
      for_sale,
      promotion,
      page,
      limit,
    } = query;

    const where = {
      company: { company_id },
      ...(sku && { sku }),
      ...(title && {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      }),

      ...(subtitle && {
        subtitle: {
          contains: subtitle,
          mode: 'insensitive',
        },
      }),

      ...(description && {
        description: {
          contains: description,
          mode: 'insensitive',
        },
      }),

      ...(product_type && { product_type }),
      ...(active && { active: active === 'true' ? true : false }),
      ...(for_sale && { for_sale: for_sale === 'true' ? true : false }),
      ...(promotion && { promotion: promotion === 'true' ? true : false }),
    };

    const include = {
      categoria_product: {
        select: {
          titulo: true,
          ativo: true,
        },
      },
    };

    const orderBy = [{ ordem_menu: 'asc' }, { titulo: 'asc' }];

    return await this.prisma.paginate({
      prismaModel: this.prisma.product,
      where,
      orderBy,
      include,
      page,
      limit,
    });
  }

  async findBySku({
    company_id,
    sku,
  }: FindProductSkuDto): Promise<Product | undefined> {
    return this.prisma.product.findFirst({
      where: {
        sku,
        company: { company_id },
      },

      include: this.includeOne,
    });
  }

  async findOne(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
      include: this.includeOne,
    });
  }

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    const itemsCombo = data.items;

    delete data.items;

    const parsedData = JSON.parse(JSON.stringify(data)) as PrismaClient;

    let createManyItems = {};

    if (itemsCombo !== undefined) {
      if (itemsCombo && itemsCombo.length > 0) {
        createManyItems = {
          items: {
            deleteMany: {
              product_id: id,
            },

            createMany: {
              data: itemsCombo,
            },
          },
        };
      } else {
        createManyItems = {
          items: {
            deleteMany: {
              product_id: id,
            },
          },
        };
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        ...parsedData,
        ...createManyItems,
      },

      include: this.includeOne,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });

    return null;
  }
}
