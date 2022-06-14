/* eslint-disable prettier/prettier */
// This will be our injection token.
export const PRODUCTS_PRICES_REPOSITORY_SERVICE =
  'PRODUCTS_PRICES_REPOSITORY_SERVICE';

import { Company } from 'src/modules/companies/entities/company.entity';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateProductsPriceDto } from '../dto/create-products-price.dto';
import { QueryProductsPriceDto } from '../dto/query-products-price.dto';
import { UpdateProductsPriceDto } from '../dto/update-products-price.dto';
import { ProductsPrice } from '../entities/products-price.entity';

export default interface IProductsPricesRepository {
  create(data: CreateProductsPriceDto): Promise<ProductsPrice>;
  findAll(
    company_id: Company,
    query: QueryProductsPriceDto,
  ): Promise<IRespFindAllPaginateDto | undefined>;
  findOne(id: string): Promise<ProductsPrice | undefined>;
  update(
    id: string,
    data: UpdateProductsPriceDto,
  ): Promise<ProductsPrice | undefined>;
  remove(id: string): void;
}
