/* eslint-disable prettier/prettier */
// This will be our injection token.
export const PRODUCTS_CATEGORIES_REPOSITORY_SERVICE =
  'PRODUCTS_CATEGORIES_REPOSITORY_SERVICE';

import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateProductsCategoryDto } from '../dto/create-products-category.dto';
import { QueryProductsCategoryDto } from '../dto/query-products-category.dto';
import { UpdateProductsCategoryDto } from '../dto/update-products-category.dto';
import { ProductsCategory } from '../entities/products-category.entity';

export default interface IProductsCategoriesRepository {
  create(data: CreateProductsCategoryDto): Promise<ProductsCategory>;
  findAll(
    query: QueryProductsCategoryDto,
  ): Promise<IRespFindAllPaginateDto | undefined>;
  findOne(id: string): Promise<ProductsCategory | undefined>;
  update(
    id: string,
    data: UpdateProductsCategoryDto,
  ): Promise<ProductsCategory | undefined>;
  remove(id: string): void;
}
