/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { isAfter } from 'date-fns';
import { Company } from 'src/modules/companies/entities/company.entity';
import { ProductsService } from 'src/modules/products/services/products.service';
import { TenantsService } from 'src/modules/tenants/services/tenants.service';
import { CreateProductsPriceDto } from '../dto/create-products-price.dto';
import { QueryProductsPriceDto } from '../dto/query-products-price.dto';
import { UpdateProductsPriceDto } from '../dto/update-products-price.dto';
import { ProductsPriceItem } from '../entities/products-price-items.entity';
import IProductsPricesRepository, {
  PRODUCTS_PRICES_REPOSITORY_SERVICE,
} from '../repositories/produtcs-prices.repository.interface';

@Injectable()
export class ProductsPricesService {
  constructor(
    @Inject(PRODUCTS_PRICES_REPOSITORY_SERVICE)
    private readonly repository: IProductsPricesRepository,
    private readonly tenantService: TenantsService,
    private readonly productService: ProductsService,
  ) {}

  private async validateProducts(products: ProductsPriceItem[]) {
    const company = await this.tenantService.tenant();

    if (products) {
      for (const [index, { product_id }] of products.entries()) {
        const duplicate = products.some(
          (anotherItem, anotherIndex) =>
            anotherItem.product_id === product_id && index !== anotherIndex,
        );

        if (duplicate) {
          throw new BadRequestException('Duplicate item');
        }

        const findProduct = await this.productService.findOne(product_id);
        if (!findProduct) {
          throw new BadRequestException('Product not found');
        }

        if (findProduct.company_id !== company.id) {
          throw new BadRequestException('Invalid product');
        }
      }
    }
  }

  async create(data: CreateProductsPriceDto) {
    const tenant = await this.tenantService.tenant();
    data.company_id = tenant.id;

    const { products } = data;

    await this.validateProducts(products);

    return await this.repository.create(data);
  }

  async findAll(company_id: Company, query: QueryProductsPriceDto) {
    const { initial_date, final_date } = query;

    if ((!initial_date && final_date) || (!final_date && initial_date)) {
      throw new BadRequestException(
        'Invalid period - start date and end date must be informed',
      );
    }

    if (isAfter(new Date(initial_date), new Date(final_date))) {
      throw new BadRequestException('Invalid period');
    }

    return await this.repository.findAll(company_id, query);
  }

  async findOne(id: string) {
    const product = await this.repository.findOne(id);

    if (!product) {
      throw new NotFoundException('Table Product Price not found');
    }

    return product;
  }

  async update(id: string, data: UpdateProductsPriceDto) {
    const updateProductPrice = await this.findOne(id);
    if (!updateProductPrice) {
      throw new NotFoundException('Table Product Price not found');
    }

    const company = await this.tenantService.tenant();
    if (updateProductPrice.company_id !== company.id) {
      throw new BadRequestException('Invalid Table Product Price');
    }

    const { products } = data;

    await this.validateProducts(products);

    return await this.repository.update(id, data);
  }

  async remove(id: string) {
    const deleteProductPrice = await this.findOne(id);
    if (!deleteProductPrice) {
      throw new NotFoundException('Table Product Price not found');
    }

    const company = await this.tenantService.tenant();
    if (deleteProductPrice.company_id !== company.id) {
      throw new BadRequestException('Invalid Table Product Price');
    }

    return this.repository.remove(id);
  }
}
