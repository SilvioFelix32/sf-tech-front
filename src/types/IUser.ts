import { IPagination } from "./IPaganation";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  MASTER = "MASTER",
}
export interface IUser {
  user_id?: string;
  company_id: string;
  document: string;
  name: string;
  last_name: string;
  sex_type?: Sex;
  birth_date?: string;
  celphone?: string | null;
  email: string;
  cep?: string | null;
  state?: string | null;
  city?: string | null;
  neighborhood?: string | null;
  address?: string | null;
  address_number?: string | null;
  address_complement?: string | null;
  active?: boolean | null;
  role?: Role;
  password: string;
  total_count: number;
  pagination_options: IPagination;
}
