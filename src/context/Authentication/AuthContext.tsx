import { createContext, ReactNode, useContext, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import Router, { useRouter } from "next/router";
import { userService } from "../../services";
import api from "../../services/api";
import { IUser, Role } from "../../types/IUser";
import { ThemeContext } from "../Theme/ThemeContext";

type User = {
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: Role;
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
  destroyCookie(undefined, "nextauth.token");
  destroyCookie(undefined, "nextauth.refreshToken");

  Router.push("/");
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const {
    query: { company_id },
  } = useRouter();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: signInCredentials) {
    try {
      const response: IResponse = await userService.login({
        email,
        password,
      });

      const { access_token, user } = response;

      //using nookies to create the nextJS cookies
      setCookie(undefined, "nextauth.token", access_token, {
        maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
        path: "/", //any adres you have acces to this cookie, this means that this is a global cookie
      });

      setUser({
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        role: user.role,
      });

      api.defaults.headers["Authorization"] = `Bearer ${access_token}`;

      const userHasAdminPermissions = user.role === "ADMIN";

      if (userHasAdminPermissions) {
        Router.push({
          pathname: "filters",
          query: { company_id },
        }); //THIS PAGE WIL OPEN IF USER IS ADMIN
      } else {
        Router.push({
          pathname: "filters",
          query: { company_id },
        }); //SELECT THE PAGE YOU WANT TO OPEN NEXT
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    setUser(null);

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
