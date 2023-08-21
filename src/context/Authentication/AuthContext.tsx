import { createContext, ReactNode, useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import { userService } from "../../services";
import api from "../../services/api";
import { IUser, Role } from "../../types/IUser";

type User = {
  name: string;
  last_name: string;
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
  Cookies.remove(undefined, "nextauth.token");
  Cookies.remove(undefined, "nextauth.refreshToken");

  Router.push("/");
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(() => {
    const loggedUser = Cookies.get("user");

    if (loggedUser) {
      return JSON.parse(loggedUser);
    }

    return null;
  });

  const isAuthenticated = !!user;

  async function signIn({ email, password }: signInCredentials) {
    try {
      const response: IResponse = await userService.login({
        email,
        password,
      });

      const { access_token, user } = response;

      //using nookies to create the nextJS cookies
      Cookies.set("nextauth.token", access_token, {
        expires: 60 * 60 * 24 * 30, //this set the time that the cookie will be stored = 30 days
        path: "/", //any adres you have acces to this cookie, this means that this is a global cookie
      });

      const loggedUser = {
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        role: user.role,
        user_id: user.user_id,
      };

      setUser(loggedUser);

      Cookies.set("user", JSON.stringify(loggedUser));

      api.defaults.headers["Authorization"] = `Bearer ${access_token}`;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  async function signOut() {
    setUser(null);
    Cookies.remove("user");
    Cookies.remove("nextauth.token");

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
