import { IProduct } from "./IProducts";

export interface IProductResponse {
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
