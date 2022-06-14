/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TenantsGuard } from 'src/modules/tenants/guards/tenants.guard';
import { CreateProductsPriceItemDto } from '../../dto/create-products-price-item.dto';
import { QueryProductPriceItemDto } from '../../dto/query-products-price-item.dto';
import { UpdateProductsPriceItemDto } from '../../dto/update-products-price-item.dto';
import { ProductPricesItemsService } from '../../services/product-prices-items.service';

@UseGuards(TenantsGuard)
@Controller(':realm/products/prices/:price/items')
export class ProductPricesItemsController {
  constructor(
    private readonly productPricesItemsService: ProductPricesItemsService,
  ) {}

  @Post()
  create(
    @Param('price') price_id: string,
    @Body() data: CreateProductsPriceItemDto[],
  ) {
    return this.productPricesItemsService.create(price_id, data);
  }

  @Get()
  findAll(
    @Param('price') price_id: string,
    @Query() query: QueryProductPriceItemDto,
  ) {
    return this.productPricesItemsService.findAll(price_id, query);
  }

  @Get(':id')
  findOne(@Param('price') price_id: string, @Param('id') id: string) {
    return this.productPricesItemsService.findOne(price_id, id);
  }

  @Patch(':id')
  update(
    @Param('price') price_id: string,
    @Param('id') id: string,
    @Body() data: UpdateProductsPriceItemDto,
  ) {
    return this.productPricesItemsService.update(price_id, id, data);
  }

  @Delete(':id')
  remove(@Param('price') price_id: string, @Param('id') id: string) {
    return this.productPricesItemsService.remove(price_id, id);
  }
}
