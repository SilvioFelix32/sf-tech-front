import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { ProductType } from 'src/product/entities/product-type.entity';

export class UpdateProductCategoryDto {
  company?: any;


  product_type?: ProductType;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsBoolean()
  @IsOptional()
  active?: boolean | null;

  products?: any;

  @IsDate()
  @IsString()
  @IsOptional()
  created_at?: Date | string;

  @IsDate()
  @IsString()
  @IsOptional()
  updated_at?: Date | string;
}
