export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  MASTER = "MASTER",
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  lastName: string;
  role: Role;
  user_id: string;
}

export type User = {
  name?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  user_id?: string;
  isSignedIn?: boolean;
  userStatus?: string;
};

