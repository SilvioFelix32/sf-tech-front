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
import { TenantsGuard } from '../../../tenants/guards/tenants.guard';
import { CreateProductsCategoryDto } from '../../dto/create-products-category.dto';
import { QueryProductsCategoryDto } from '../../dto/query-products-category.dto';
import { UpdateProductsCategoryDto } from '../../dto/update-products-category.dto';
import { ProductsCategoriesService } from '../../services/products-categories.service';

@UseGuards(TenantsGuard)
@Controller(':realm/products/categories')
export class ProductsCategoriesController {
  constructor(
    private readonly productsCategoriesService: ProductsCategoriesService,
  ) {}

  @Post()
  create(@Body() data: CreateProductsCategoryDto) {
    return this.productsCategoriesService.create(data);
  }

  @Get()
  findAll(@Query() query: QueryProductsCategoryDto) {
    return this.productsCategoriesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProductsCategoryDto) {
    return this.productsCategoriesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsCategoriesService.remove(id);
  }
}
