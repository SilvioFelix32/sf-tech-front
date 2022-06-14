/* eslint-disable prettier/prettier */

import { ProductType } from 'src/modules/products-categories/entities/products-category.entity';
import { ProductAvailabilityException } from './product-availability-exception.entity';
import { ProductItem } from './product-item.entity';

export class Product {
  id?: string;

  product_category: string;
  product_category_id: string;
  company_id: string;
  product_type: ProductType;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner?: string;
  active?: boolean;
  combo?: boolean | null;
  amount_min_sale?: number | null;
  amount_max_sale?: number | null;
  amount_max_total_diary?: number | null;
  highlighted?: boolean | null;
  order_on_menu?: number | null;
  for_sale?: boolean | null;
  age_group?: string | null;
  promotion?: boolean | null;

  created_at?: Date | string;
  updated_at?: Date | string;

  items?: ProductItem[];
  availability_exception?: ProductAvailabilityException[];
}
