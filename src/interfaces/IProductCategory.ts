import { IProduct } from "./IProducts";

export interface IProductCategory {
  category_id: string;
  company_id: string;
  title: string;
  description?: string;
  products?: IProduct[];

  createdAt?: Date | string;
  updatedAt?: Date | string;
}
