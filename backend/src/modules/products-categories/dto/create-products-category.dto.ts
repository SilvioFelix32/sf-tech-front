/* eslint-disable prettier/prettier */
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';
import {
  ProductsCategory,
  ProductType,
} from '../entities/products-category.entity';

export class CreateProductsCategoryDto extends ProductsCategory {
  @IsString()
  id?: string;

  @IsString()
  company_id: string;

  @IsString()
  product_type: ProductType;

  @IsOptional()
  @IsUUID()
  config_type_id?: string;

  @IsString()
  titulo: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  url_banner?: string | null;

  @IsBoolean()
  active: boolean;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;
}
