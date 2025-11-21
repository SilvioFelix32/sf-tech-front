import { ISale, ICreateSaleRequest } from "./ISale";
import { IParamsRequest } from "./IParamsRequest";

export interface ISaleResponse {
  message: string;
  data: ISale[];
  meta: {
    total: number;
    lastPage?: number;
    currentPage: number;
    perPage: number;
    prev?: number | null;
    next: number;
  };
}

export interface ISaleSingleResponse {
  message: string;
  data: ISale;
}

export interface SaleService {
  getAll: (company_id: string, user_id?: string) => Promise<ISale[]>;
  getById: (company_id: string, saleId: string) => Promise<ISale>;
  create: (
    company_id: string,
    user_id: string,
    params: ICreateSaleRequest
  ) => Promise<ISale>;
  delete: (company_id: string, saleId: string) => Promise<void>;
}

