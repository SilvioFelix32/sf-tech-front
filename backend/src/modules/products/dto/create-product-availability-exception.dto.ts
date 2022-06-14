/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import {
  ProductAvailabilityException,
  TypeActionExceptionProduct,
} from '../entities/product-availability-exception.entity';

export class ProductAvailabilityExceptionDto extends ProductAvailabilityException {
  @IsString()
  id?: string;

  @IsString()
  created_at?: Date | string;

  @IsString()
  updated_at?: Date | string;

  @Type(() => Date)
  @IsDate()
  date: Date | string;

  @IsString()
  action?: TypeActionExceptionProduct;
}
