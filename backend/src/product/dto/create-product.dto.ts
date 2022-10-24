import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductTotalSales } from '../entities/product-total-sales.entity';
import { ProductType } from '../entities/product-type.entity';
import { CreateProductItemDto } from './create-product-item.dto';

export class CreateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  product_id?: string;

  @IsString()
  @IsOptional()
  category_id: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  company_id?: string;

  @IsString()
  @IsNotEmpty()
  product_type: ProductType;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  url_banner?: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsBoolean()
  @IsOptional()
  combo?: boolean;

  @IsBoolean()
  @IsOptional()
  highlighted: boolean;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  items?: any | CreateProductItemDto[];

  @IsOptional()
  product_combo: any;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  total_sales?: any | ProductTotalSales[];

  @IsString()
  @IsDate()
  @IsOptional()
  created_at: Date | string;

  @IsString()
  @IsDate()
  @IsOptional()
  updated_at: Date | string;
}
