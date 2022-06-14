/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Product } from '../entities/product.entity';
import { Type } from 'class-transformer';
import { CreateProductItemDto } from './create-product-item.dto';
import { ProductAvailabilityExceptionDto } from './create-product-availability-exception.dto';
import { ProductType } from 'src/modules/products-categories/entities/products-category.entity';

export class CreateProductDto extends Product {
  @IsString()
  id?: string;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;

  @IsUUID()
  @IsString()
  company_id: string;

  @IsString()
  product_type: ProductType;

  @IsString()
  product_category: string;

  @IsUUID()
  product_category_id: string;

  @IsString()
  sku: string;

  @IsString()
  title: string;

  @IsString()
  subtitle: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  url_banner?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean | null;

  @IsBoolean()
  @IsOptional()
  promotion?: boolean | null;

  @IsBoolean()
  @IsOptional()
  combo?: boolean | null;

  @IsInt()
  @IsOptional()
  amount_min_sale?: number | null;

  @IsInt()
  @IsOptional()
  amount_max_sale?: number | null;

  @IsInt()
  @IsOptional()
  amount_max_total_diary?: number | null;

  @IsBoolean()
  @IsOptional()
  highlighted?: boolean | null;

  @IsInt()
  @IsOptional()
  order_on_menu?: number | null;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean | null;

  @IsOptional()
  @IsString()
  age_group?: string | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  items?: CreateProductItemDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProductAvailabilityExceptionDto)
  availability_exception?: ProductAvailabilityExceptionDto[];
}
