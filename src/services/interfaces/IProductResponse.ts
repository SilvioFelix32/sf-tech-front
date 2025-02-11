import { IProduct, IUpdateProduct } from "../../types/IProducts";
import { IParamsRequest } from "./IParamsRequest";

export interface IProductResponse {
  message: string;
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
  getAll: (params: IParamsRequest) => Promise<IProductResponse>;
  search: (params: string) => Promise<IProductInterface>;
  getById: (product_id: string) => Promise<IProduct>;
  create: (category_id: string, params: IProduct) => Promise<IProduct>;
  update: (product_id: string, params: IUpdateProduct) => Promise<IProduct>;
  delete: (product_id: string) => Promise<void>;
}
