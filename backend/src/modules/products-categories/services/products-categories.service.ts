/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductsCategoryDto } from '../dto/create-products-category.dto';
import { QueryProductsCategoryDto } from '../dto/query-products-category.dto';
import { UpdateProductsCategoryDto } from '../dto/update-products-category.dto';
import IProductsCategoriesRepository, {
  PRODUCTS_CATEGORIES_REPOSITORY_SERVICE,
} from '../repositories/products-categories.repository.interface';

@Injectable()
export class ProductsCategoriesService {
  constructor(
    @Inject(PRODUCTS_CATEGORIES_REPOSITORY_SERVICE)
    private readonly repository: IProductsCategoriesRepository,
  ) {}

  async create(data: CreateProductsCategoryDto) {
    return await this.repository.create(data);
  }

  async findAll(query: QueryProductsCategoryDto) {
    return await this.repository.findAll(query);
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async update(id: string, data: UpdateProductsCategoryDto) {
    const category = await this.findOne(id);

    if (!category) {
      throw new NotFoundException('Product Category not found');
    }

    return await this.repository.update(id, data);
  }

  async remove(id: string) {
    const category = await this.findOne(id);

    if (!category) {
      throw new NotFoundException('Product Category not found');
    }

    return this.repository.remove(id);
  }
}
