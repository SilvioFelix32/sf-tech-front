import { IUser } from "./IUser";

export interface IUserResponse {
  data: IUser[];
  meta: {
    total: number;
    lastPage?: number;
    currentPage: number;
    perPage: number;
    prev?: number | null;
    next: number;
  };
}
