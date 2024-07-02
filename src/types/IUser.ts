import { IPagination } from "./IPaganation";

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  MASTER = "MASTER",
}
export interface IUser {
  user_id?: string;
  company_id: string;
  name: string;
  lastName: string;
  email: string;
  role?: Role;
  password: string;

  createdAt?: Date | string;
  updatedAt?: Date | string;

  total_count: number;
  pagination_options: IPagination;
}
