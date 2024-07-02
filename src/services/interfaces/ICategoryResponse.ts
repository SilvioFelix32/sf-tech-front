import { IProductCategory } from "../../types";
import { IParamsRequest } from "./IParamsRequest";

export interface ICategoryResponse {
  message: string;
  data: IProductCategories;
}

export interface IProductCategories {
  data: IProductCategory[];
  meta: {
    total: number;
    lastPage?: number;
    currentPage: number;
    perPage: number;
    prev?: number | null;
    next: number;
  };
}

export interface CategoryService {
  getAll: (
    company_id: string,
    params: IParamsRequest
  ) => Promise<IProductCategories>;
  getById: (category_id: string) => Promise<IProductCategory>;
  create: (
    company_id: string,
    params: IProductCategory
  ) => Promise<IProductCategory>;
  update: (
    company_id: string,
    category_id: string,
    params: IProductCategory
  ) => Promise<IProductCategory>;
  delete: (category_id: string) => Promise<void>;
}
