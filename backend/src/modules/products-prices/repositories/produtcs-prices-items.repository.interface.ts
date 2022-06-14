/* eslint-disable prettier/prettier */
import { IRespFindAllPaginateDto } from 'src/shared/dto/resp-find-all-paginate.interface.dto';
import { CreateProductsPriceItemDto } from '../dto/create-products-price-item.dto';
import { QueryProductPriceItemDto } from '../dto/query-products-price-item.dto';
import { UpdateProductsPriceItemDto } from '../dto/update-products-price-item.dto';
import { ProductsPriceItem } from '../entities/products-price-items.entity';

// This will be our injection token.
export const PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE =
  'PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE';

export default interface IProductsPricesItemsRepository {
  createMany(
    price_id: string,
    data: CreateProductsPriceItemDto[],
  ): Promise<number>;
  create(
    price_id: string,
    data: CreateProductsPriceItemDto,
  ): Promise<ProductsPriceItem>;
  findAll(
    price_id: string,
    query: QueryProductPriceItemDto,
  ): Promise<IRespFindAllPaginateDto | undefined>;
  findOne(id: string): Promise<ProductsPriceItem | undefined>;
  update(
    id: string,
    data: UpdateProductsPriceItemDto,
  ): Promise<ProductsPriceItem | undefined>;
  remove(id: string): void;
}
