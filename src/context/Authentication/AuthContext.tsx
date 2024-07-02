import { createContext, ReactNode, useState } from "react";
import Router from "next/router";
import api from "../../services/api";
import { IUser, Role } from "../../types/IUser";
import { AxiosResponse } from "axios";
import { cookiesService, userService } from "../../services";

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  user_id: string;
};

type IResponse = {
  access_token: string;
  user: IUser;
};

type signInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: signInCredentials): Promise<void>;
  signOut(): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export function signOut() {
  cookiesService?.removeCookie("nextauth.token");
  cookiesService?.removeCookie("nextauth.refreshToken");

  Router.push("/");
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const loggedUser = cookiesService?.getCookie("user");
    return loggedUser ? JSON.parse(loggedUser) : null;
  });

  const isAuthenticated = !!user;

  async function signIn({ email, password }: signInCredentials) {
    try {
      const response: AxiosResponse = await userService.login({
        email,
        password,
      });

      const { access_token, user }: IResponse = response.data;

      cookiesService?.createCookie("nextauth.token", access_token);

      const loggedUser: User = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        role: user.role,
        user_id: user.user_id,
      };

      setUser(loggedUser);

      cookiesService?.createCookie("user", JSON.stringify(loggedUser));

      api.defaults.headers["Authorization"] = `Bearer ${access_token}`;
    } catch (error) {
      //console.error("Erro ao fazer login:", error.response);

      throw new Error(error.response.data.error);
    }
  }

  async function signOut() {
    setUser(null);
    cookiesService?.removeCookie("user");
    cookiesService?.removeCookie("nextauth.token");

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
