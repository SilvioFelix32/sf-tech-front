/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductsPriceItemDto } from '../dto/create-products-price-item.dto';
import { QueryProductPriceItemDto } from '../dto/query-products-price-item.dto';
import { UpdateProductsPriceItemDto } from '../dto/update-products-price-item.dto';
import IProductsPricesItemsRepository, {
  PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE,
} from '../repositories/produtcs-prices-items.repository.interface';
import { ProductsPricesService } from './products-prices.service';

@Injectable()
export class ProductPricesItemsService {
  constructor(
    @Inject(PRODUCTS_PRICES_ITEMS_REPOSITORY_SERVICE)
    private readonly repository: IProductsPricesItemsRepository,
    private readonly priceService: ProductsPricesService,
  ) {}

  async create(price_id: string, data: CreateProductsPriceItemDto[]) {
    const price = await this.priceService.findOne(price_id);
    if (!price) {
      throw new NotFoundException('Invalid table product price');
    }

    const products = price.products;

    if (products) {
      data.forEach((newProductPrice) => {
        const productPrice = products.find(
          (price) => price.product_id === newProductPrice.product_id,
        );
        if (productPrice) {
          newProductPrice.id = productPrice.id;
        }
      });
    }

    return await this.repository.createMany(price_id, data);
  }

  async findAll(price_id: string, query: QueryProductPriceItemDto) {
    return await this.repository.findAll(price_id, query);
  }

  async findOne(price_id: string, id: string) {
    const findProductPrice = await this.repository.findOne(id);

    if (!findProductPrice) {
      throw new NotFoundException('Product price not found');
    }

    if (findProductPrice.price_table_id !== price_id) {
      throw new BadRequestException('Invalid Product price');
    }

    return findProductPrice;
  }

  async update(price_id: string, id: string, data: UpdateProductsPriceItemDto) {
    const updateProductPrice = await this.findOne(price_id, id);
    if (!updateProductPrice) {
      throw new NotFoundException('Product price not found');
    }

    return await this.repository.update(id, data);
  }

  async remove(price_id: string, id: string) {
    const deleteProductPrice = await this.repository.findOne(id);

    if (!deleteProductPrice) {
      throw new NotFoundException('Product price not found');
    }

    if (deleteProductPrice.price_table_id !== price_id) {
      throw new BadRequestException('Invalid Product price');
    }

    return this.repository.remove(id);
  }
}
