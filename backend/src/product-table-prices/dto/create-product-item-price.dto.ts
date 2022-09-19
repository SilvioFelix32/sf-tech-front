import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductItemPrice } from '../entities/product-price-items.entity';

export class CreateProductItemPriceDto extends ProductItemPrice {
  @IsUUID()
  @IsOptional()
  @IsString()
  item_price_id?: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  price_table_id?: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  product_id?: string;

  @IsOptional()
  product?: any;

  @IsNumber()
  value: number;

  @IsNumber()
  descount_value: number;

  @IsDate()
  @IsString()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsString()
  @IsOptional()
  updated_at?: Date;
}
