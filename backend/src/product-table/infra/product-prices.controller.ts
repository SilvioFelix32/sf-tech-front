import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { RequestHeaders } from 'src/shared/app.headers.dto';
import { IHeaders } from 'src/shared/IHeaders';
import { CreateProductTablePriceDto } from '../dto/create-product-price.dto';
import { UpdateProductTablePriceDto } from '../dto/update-product-price.dto';
import { ProductPricesService } from '../services/product-prices.service';

@Controller('product-prices')
export class ProductPricesController {
  constructor(private readonly productPricesService: ProductPricesService) {}

  @Post()
  create(
    @RequestHeaders() header: IHeaders,
    @Body() dto: CreateProductTablePriceDto,
  ) {
    const { company_id } = header;

    if (!company_id) {
      throw new BadRequestException('No Company informed');
    }

    return this.productPricesService.create(company_id, dto);
  }

  @Get()
  findAll() {
    return this.productPricesService.findAll();
  }

  @Get(':price_table_id')
  findOne(@Param('id') price_table_id: string) {
    return this.productPricesService.findOne(price_table_id);
  }

  @Patch(':id')
  update(
    @RequestHeaders() header: IHeaders,
    @Param('id') price_table_id: string,
    @Body() updateProductPriceDto: UpdateProductTablePriceDto,
  ) {
    const { company_id } = header;

    if (!company_id) {
      throw new BadRequestException('No Company informed');
    }

    return this.productPricesService.update(
      company_id,
      price_table_id,
      updateProductPriceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') price_table_id: string) {
    return this.productPricesService.remove(price_table_id);
  }
}
