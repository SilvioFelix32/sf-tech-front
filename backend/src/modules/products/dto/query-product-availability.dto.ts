/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsBooleanString, IsDate, IsOptional, IsString } from 'class-validator';
import { ProductType } from 'src/modules/products-categories/entities/products-category.entity';

export class QueryProductAvailabilityDto {
  @Type(() => Date)
  @IsDate()
  date: Date | string;

  @IsOptional()
  @IsString()
  sku?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  subtitle?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBooleanString()
  combo?: string;

  @IsOptional()
  @IsBooleanString()
  promotion?: string;

  @IsOptional()
  @IsString()
  product_type?: ProductType;
}
