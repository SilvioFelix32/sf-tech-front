/* eslint-disable prettier/prettier */
import { IsBooleanString, IsOptional, IsString } from 'class-validator';
import { QueryPaginateDto } from 'src/shared/dto/query-paginate.dto';
import { ProductType } from '../entities/products-category.entity';

export class QueryProductsCategoryDto extends QueryPaginateDto {
  @IsOptional()
  @IsString()
  product_type?: ProductType;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBooleanString()
  active?: string;
}
