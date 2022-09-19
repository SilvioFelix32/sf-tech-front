import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestHeaders } from 'src/shared/app.headers.dto';
import { IHeaders } from 'src/shared/IHeaders';
import { CreateProductItemPriceDto } from '../dto/create-product-item-price.dto';
import { UpdateProductPriceDto } from '../dto/update-product-item-price.dto';
import { ProductTablePricesService } from '../services/product-table-prices.service';

@Controller('product-table-prices')
export class ProductTablePricesController {
  constructor(private readonly service: ProductTablePricesService) {}

  @Post()
  create(
    @RequestHeaders() header: IHeaders,
    @Body() dto: CreateProductItemPriceDto,
  ) {
    const { price_table_id } = header;

    return this.service.create(price_table_id, dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') item_price_id: string) {
    return this.service.findOne(item_price_id);
  }

  @Patch(':id')
  update(
    @Param('id') item_price_id: string,
    @Body() dto: UpdateProductPriceDto,
  ) {
    return this.service.update(item_price_id, dto);
  }

  @Delete(':id')
  remove(@Param('id') item_price_id: string) {
    return this.service.remove(item_price_id);
  }
}
