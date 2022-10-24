import { ProductType } from "./IProductCategories";

export interface IProduct {
  company_id: string;
  product_id: string;
  category_id: string;
  sku: string;
  title: string;
  subtitle: string;
  description: string;
  url_banner: string;
  value: number;
  discount: number;
  active: boolean;
  combo: boolean;
  for_sale: boolean;
  highlighted: boolean;
  product_type: ProductType;
}
