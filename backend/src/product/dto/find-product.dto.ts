import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductCategory } from 'src/product-categories/entities/product-category.entity';
import { ProductType } from '../entities/product-type.entity';

export class FindProductDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  product_id?: string;

  @IsString()
  @IsOptional()
  product_category?: ProductCategory;

  @IsString()
  @IsUUID()
  @IsOptional()
  category_id?: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  company_id?: string;

  @IsString()
  @IsOptional()
  product_type?: ProductType;

  @IsString()
  @IsOptional()
  sku?: string | null;

  @IsString()
  @IsOptional()
  title?: string | null;

  @IsString()
  @IsOptional()
  subtitle?: string | null;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  url_banner?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean | null;

  @IsBoolean()
  @IsOptional()
  combo?: boolean | null;

  @IsNumber()
  @IsOptional()
  amount_min_sale?: number | null;

  @IsNumber()
  @IsOptional()
  amount_max_sale?: number | null;

  @IsBoolean()
  @IsOptional()
  highlighted?: boolean | null;

  @IsNumber()
  @IsOptional()
  order_on_menu?: number | null;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean | null;

  @IsBoolean()
  @IsOptional()
  discount?: boolean | null;

  @IsDate()
  @IsOptional()
  created_at?: Date | string;

  @IsDate()
  @IsOptional()
  updated_at?: Date | string;
}
