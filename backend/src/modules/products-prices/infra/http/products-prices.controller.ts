/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { Company } from 'src/modules/companies/entities/company.entity';
import { TenantsGuard } from 'src/modules/tenants/guards/tenants.guard';
import { CreateProductsPriceDto } from '../../dto/create-products-price.dto';
import { QueryProductsPriceDto } from '../../dto/query-products-price.dto';
import { UpdateProductsPriceDto } from '../../dto/update-products-price.dto';
import { ProductsPricesService } from '../../services/products-prices.service';

@UseGuards(TenantsGuard)
@Controller(':realm/products/prices')
export class ProductsPricesController {
  constructor(private readonly productsPricesService: ProductsPricesService) {}

  @Post()
  create(@Body() createProductsPriceDto: CreateProductsPriceDto) {
    return this.productsPricesService.create(createProductsPriceDto);
  }

  @Get()
  findAll(
    @Param('company_id') company_id: Company,
    @Query() query: QueryProductsPriceDto,
  ) {
    return this.productsPricesService.findAll(company_id, query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsPricesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsPriceDto: UpdateProductsPriceDto,
  ) {
    return this.productsPricesService.update(id, updateProductsPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsPricesService.remove(id);
  }
}
