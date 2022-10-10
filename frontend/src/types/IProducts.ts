import { ProductType } from "./IProductCategories";

export interface IProduct {
  company_id: string;
  product_id: string;
  sku: string;
  title: string;
  subtitle: string;
  url_banner: string;
  active: boolean;
  amount_max_sale: number;
  amount_min_sale: number;
  category_id: string;
  combo: boolean;
  description: string;
  discount: boolean;
  for_sale: boolean;
  highlighted: boolean;
  order_on_menu: Number;
  product_type: ProductType;
}
