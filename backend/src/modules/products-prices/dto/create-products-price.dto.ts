/* eslint-disable prettier/prettier */
import { ProductsPrice } from '../entities/products-price.entity';
import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateProductsPriceItemDto } from './create-products-price-item.dto';

export class CreateProductsPriceDto extends ProductsPrice {
  @IsString()
  id?: string;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;

  @IsString()
  company_id: string;

  @IsString()
  @IsOptional()
  descrption: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  initial_date?: Date | string | null;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  final_date?: Date | string | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProductsPriceItemDto)
  products?: CreateProductsPriceItemDto[];
}
