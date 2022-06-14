/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import IProductsRepository, {
  PRODUCTS_REPOSITORY_SERVICE,
} from '../repositories/products.repository.interface';
import { FindProductSkuDto } from '../dto/find-product-sku.dto';
import { Product } from '../entities/product.entity';
import { ProductItem } from '../entities/product-item.entity';
import { QueryProductDto } from '../dto/query-product.dto';
import { ProductsCategoriesService } from 'src/modules/products-categories/services/products-categories.service';
import { TenantsService } from 'src/modules/tenants/services/tenants.service';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY_SERVICE)
    private readonly repository: IProductsRepository,
    private readonly tenantService: TenantsService,
    private readonly categoryService: ProductsCategoriesService,
  ) {}

  private async validateItemsCombo(
    combo: boolean,
    items: ProductItem[],
    id: string,
  ) {
    if (combo && (!items || items.length === 0)) {
      throw new BadRequestException('Combo product must have some item');
    }

    if (!combo && items) {
      throw new BadRequestException('Items only allowed in combo products');
    }

    if (items) {
      const company = await this.tenantService.tenant();

      for (const [index, { item_id }] of items.entries()) {
        if (item_id === id) {
          throw new BadRequestException('Combo product cannot contain itself');
        }

        const duplicate = items.some(
          (anotherItem, anotherIndex) =>
            anotherItem.item_id === item_id && index !== anotherIndex,
        );

        if (duplicate) {
          throw new BadRequestException('Duplicate item');
        }

        const findItem = await this.repository.findOne(item_id);
        if (!findItem) {
          throw new BadRequestException('Item not found');
        }

        if (findItem.company_id !== company.id) {
          throw new BadRequestException('Invalid Item');
        }
      }
    }
  }

  async create(data: CreateProductDto) {
    const { product_category_id, combo, items, sku } = data;

    await this.validateItemsCombo(combo, items, null);

    const category = await this.categoryService.findOne(product_category_id);
    const company = await this.tenantService.tenant();

    if (!category || category.company_id !== company.id) {
      throw new BadRequestException('Invalid product category');
    }

    const productSku = await this.findBySku({
      sku,
      company_id: company.id,
    });

    if (productSku) {
      throw new BadRequestException('Product with SKU already informed');
    }

    data.company_id = company.id;
    data.product_type = category.product_type;

    return await this.repository.create(data);
  }

  async findAll(query: QueryProductDto) {
    const company_id = this.tenantService.tenant();

    return await this.repository.findAll(company_id, query);
  }

  async findBySku(data: FindProductSkuDto): Promise<Product | undefined> {
    return await this.repository.findBySku(data);
  }

  async findOne(id: string) {
    const product = await this.repository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    const updateProduct = await this.findOne(id);

    if (!updateProduct) {
      throw new NotFoundException('Product not found');
    }

    const company = await this.tenantService.tenant();
    if (updateProduct.company_id !== company.id) {
      throw new BadRequestException('Invalid Product');
    }

    const { combo, items } = data;
    await this.validateItemsCombo(combo, items, id);

    let categoryId = data.product_category_id;
    if (categoryId === null) {
      throw new BadRequestException('Invalid Product Category');
    }

    categoryId = categoryId || updateProduct.product_category_id;
    const category = await this.categoryService.findOne(categoryId);

    if (!category || category.company_id !== company.id) {
      throw new BadRequestException('Invalid product category');
    }

    const { sku } = data;
    if (sku === null) {
      throw new BadRequestException('Invalid SKU');
    }

    if (sku) {
      const productSku = await this.findBySku({
        sku,
        company_id: company.id,
      });

      if (productSku && productSku.id !== updateProduct.id) {
        throw new BadRequestException('Product with SKU already informed');
      }
    }

    return await this.repository.update(id, data);
  }

  async remove(id: string) {
    const deleteProduct = await this.findOne(id);
    if (!deleteProduct) {
      throw new NotFoundException('Product not found');
    }

    const company = await this.tenantService.tenant();
    if (deleteProduct.company_id !== company.id) {
      throw new BadRequestException('Invalid Product');
    }

    return this.repository.remove(id);
  }
}
