import { AxiosResponse } from "axios";
import { IUser } from "./IUser";
import { IParamsRequest } from "./IParamsRequest";

export interface IUsersResponse {
  message: string;
  data: {
    data: IUser[];
    meta: {
      total: number;
      lastPage?: number;
      currentPage: number;
      perPage: number;
      prev?: number | null;
      next: number;
    };
  };
}

export interface IUserLoginParams {
  email: string;
  password: string;
}

export interface UserService {
  login: (params: IUserLoginParams) => Promise<AxiosResponse>;
  getAll: (
    company_id: string,
    params: IParamsRequest
  ) => Promise<IUsersResponse>;
  getById: (company_id: string, user_id: string) => Promise<IUser>;
  create: (company_id: string, params: IUser) => Promise<IUser>;
  update: (
    company_id: string,
    user_id: string,
    params: IUser
  ) => Promise<IUser>;
  delete: (company_id: string, user_id: string) => Promise<void>;
}
