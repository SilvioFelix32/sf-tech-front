/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductsCategoryDto } from '../../../dto/create-products-category.dto';
import { UpdateProductsCategoryDto } from '../../../dto/update-products-category.dto';
import { ProductsCategory } from '../../../entities/products-category.entity';
import IProductsCategoriesRepository from '../../../repositories/products-categories.repository.interface';
import { QueryProductsCategoryDto } from 'src/modules/products-categories/dto/query-products-category.dto';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { PrismaService } from 'src/shared/infra/prisma/prisma.service';

@Injectable()
export class ProductsCategoriesRepository
  implements IProductsCategoriesRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductsCategoryDto): Promise<ProductsCategory> {
    return await this.prisma.productCategory.create({
      data,
    });
  }

  async findAll(
    query: QueryProductsCategoryDto,
  ): Promise<IRespFindAllPaginateDto> {
    const { description, product_type, active, page, limit } = query;

    const where = {
      ...(description && {
        description: {
          contains: description,
          mode: 'insensitive',
        },
      }),

      ...(product_type && { product_type }),
      ...(active && { active: active === 'true' ? true : false }),
    };

    const orderBy = [{ title: 'asc' }];

    return await this.prisma.paginate({
      prismaModel: this.prisma.productCategory,
      where,
      orderBy,
      page,
      limit,
    });
  }

  async findOne(id: string): Promise<ProductsCategory> {
    return this.prisma.productCategory.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateProductsCategoryDto,
  ): Promise<ProductsCategory> {
    const { product_type } = data;
    if (product_type) {
      return this.prisma.productCategory.update({
        where: { id },
        data: {
          ...data,

          products: {
            updateMany: {
              where: {
                product_category_id: id,
              },
              data: {
                product_type,
              },
            },
          },
        },
      });
    }

    return this.prisma.productCategory.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.productCategory.delete({
      where: { id },
    });

    return null;
  }
}
