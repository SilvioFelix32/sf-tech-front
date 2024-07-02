import { IProduct } from "../../types/IProducts";
import { IParamsRequest } from "./IParamsRequest";

export interface IProductResponse {
  message: string;
  data: IProductInterface;
}

export interface IProductInterface {
  data: IProduct[];
  meta: {
    total: number;
    lastPage?: number;
    currentPage: number;
    perPage: number;
    prev?: number | null;
    next: number;
  };
}

export interface ProductsService {
  getAll: (params: IParamsRequest) => Promise<IProductInterface>;
  search: (params: string) => Promise<IProductInterface>;
  getById: (product_id: string) => Promise<IProduct>;
  create: (category_id: string, params: IProduct) => Promise<IProduct>;
  update: (product_id: string, params: IProduct) => Promise<IProduct>;
  delete: (product_id: string) => Promise<void>;
}
