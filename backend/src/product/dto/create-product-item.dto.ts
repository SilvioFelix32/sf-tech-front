import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductItem } from '../entities/product-item.entity';

export class CreateProductItemDto extends ProductItem {
  @IsUUID()
  @IsString()
  @IsOptional()
  product_id?: string;

  @IsUUID()
  @IsString()
  @IsOptional()
  item_id: string;

  @IsUUID()
  @IsNumber()
  @IsOptional()
  amount: number;

  @IsDate()
  @IsString()
  @IsOptional()
  created_at?: Date | string;

  @IsDate()
  @IsString()
  @IsOptional()
  updated_at?: Date | string;
}
