import { IsOptional, IsString, IsNumber, IsDate } from 'class-validator';

export class UpdateProductPriceDto {
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
