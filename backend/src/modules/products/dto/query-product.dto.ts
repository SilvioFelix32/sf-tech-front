/* eslint-disable prettier/prettier */
import { IsBooleanString, IsOptional, IsString } from 'class-validator';
import { ProductType } from 'src/modules/products-categories/entities/products-category.entity';
import { QueryPaginateDto } from 'src/shared/dto/query-paginate.dto';

export class QueryProductDto extends QueryPaginateDto {
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
  active?: string;

  @IsOptional()
  @IsBooleanString()
  combo?: string;

  @IsOptional()
  @IsBooleanString()
  for_sale?: string;

  @IsOptional()
  @IsBooleanString()
  promotion?: string;

  @IsOptional()
  @IsString()
  product_type?: ProductType;
}
