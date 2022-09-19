import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { ProductType } from 'src/product/entities/product-type.entity';

export class UpdateProductCategoryDto {
  company?: any;

/*   @IsString()
  company_id?: string; */

  product_type?: ProductType;

  @IsString()
  @IsOptional()
  config_type_id?: string | null;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  url_banner?: string | null;

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
