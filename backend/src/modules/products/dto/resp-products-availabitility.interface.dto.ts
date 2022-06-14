/* eslint-disable prettier/prettier */
import { ProductType } from 'src/modules/products-categories/entities/products-category.entity';

export interface IRespProductsAvailabilityDto {
  id: string;
  product_category_id: string;
  company_id: string;
  product_type: ProductType;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner: string | null;
  active: boolean;
  combo: boolean | null;
  promotion: boolean | null;
  highlighted: boolean | null;
  order_on_menu: number | null;
  age_group: string | null;

  value: number;
  value_promotion?: number | null;
  value_sale: number;
}
