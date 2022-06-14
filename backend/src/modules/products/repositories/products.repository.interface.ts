/* eslint-disable prettier/prettier */
// This will be our injection token.
export const PRODUCTS_REPOSITORY_SERVICE = 'PRODUCTS_REPOSITORY_SERVICE';

import { Company } from 'src/modules/companies/entities/company.entity';
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { FindProductSkuDto } from '../dto/find-product-sku.dto';
import { QueryProductDto } from '../dto/query-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

export default interface IProductsRepository {
  create(data: CreateProductDto): Promise<Product>;
  findAll(
    company_id: Promise<Company>,
    query: QueryProductDto,
  ): Promise<IRespFindAllPaginateDto | undefined>;
  findBySku(data: FindProductSkuDto): Promise<Product | undefined>;
  findOne(id: string): Promise<Product | undefined>;
  update(id: string, data: UpdateProductDto): Promise<Product | undefined>;
  remove(id: string): void;
}
