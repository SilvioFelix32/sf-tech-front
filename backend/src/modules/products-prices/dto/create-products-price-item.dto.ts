/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { ProductsPriceItem } from '../entities/products-price-items.entity';

export class CreateProductsPriceItemDto extends ProductsPriceItem {
  @IsString()
  id?: string;

  @IsString()
  price_table_id: string;

  @IsUUID()
  product_id: string;

  @IsNumber()
  value: number;

  @IsNumber()
  value_promotion: number;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;
}
