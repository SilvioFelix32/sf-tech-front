import { ProductType } from 'src/product/entities/product-type.entity';

export class ProductCategory {
  category_id?: string;
  company_id?: string;
  product_type?: ProductType;
  config_type_id?: string | null;
  title?: string;
  description?: string | null;
  url_banner?: string | null;
  active?: boolean;
  products?: any;

  created_at?: Date | string;
  updated_at?: Date | string;
}
