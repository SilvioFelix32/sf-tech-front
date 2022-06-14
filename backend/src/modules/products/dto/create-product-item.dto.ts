/* eslint-disable prettier/prettier */
import { IsInt, IsString, IsUUID, Min } from 'class-validator';
import { ProductItem } from '../entities/product-item.entity';

export class CreateProductItemDto extends ProductItem {
  @IsString()
  id?: string;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;

  @IsUUID()
  item_id: string;

  @IsInt()
  @Min(1)
  amount: number;
}
