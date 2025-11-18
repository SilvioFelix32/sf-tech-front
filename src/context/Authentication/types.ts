import { SignInInput } from "aws-amplify/auth";
import { ReactNode } from "react";
import { Role } from "../../interfaces";

export type User = {
  name?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  user_id?: string;
  isSignedIn?: boolean;
  userStatus?: string;
};

export type AuthContextData = {
  login(credentials: SignInInput): Promise<void>;
  logOut(): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
