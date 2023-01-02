import { IProduct } from "./IProducts";
import { ProductType } from "./IProductType";

export interface IProductCategories {
  category_id: string;
  company_id: string;
  product_type: ProductType;
  config_type_id: string;
  title: string;
  description: string;
  active: boolean;

  products: IProduct[];
}
