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
import { ProductPriceTable } from 'src/product-table/entities/product-price.entity';
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

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsBoolean()
  @IsOptional()
  combo?: boolean;

  @IsNumber()
  @IsOptional()
  amount_min_sale?: number;

  @IsNumber()
  @IsOptional()
  amount_max_sale?: number;

  @IsBoolean()
  @IsOptional()
  highlighted: boolean;

  @IsNumber()
  @IsOptional()
  order_on_menu?: number;

  @IsBoolean()
  @IsOptional()
  for_sale?: boolean;

  @IsBoolean()
  @IsOptional()
  discount?: boolean | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  items?: any | CreateProductItemDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  total_sales?: any | ProductTotalSales[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductItemDto)
  price_table?: any | ProductPriceTable[];

  @IsString()
  @IsDate()
  @IsOptional()
  created_at: Date | string;

  @IsString()
  @IsDate()
  @IsOptional()
  updated_at: Date | string;
}
