import { createContext, ReactNode, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router, { useRouter } from "next/router";
import { userService } from "../../services";

type User = {
  name: string;
  email: string;
  password: string;
  roles: string[];
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
      const response = await userService.login(company_id as string, {
        email,
        password,
      });

      const { token, refreshToken, user } = response.data;

      //using nookies to create the nextJS cookies
      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
        path: "/", //any adres you have acces to this cookie, this means that this is a global cookie
      });
      setCookie(undefined, "nextauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
        path: "/", //any adres you have acces to this cookie, this means that this is a global cookie
      });

      setUser({
        name: user.name as string,
        email: user.email as string,
        password: user.password as string,
        roles: user.role,
      });

      /*  api.defaults.headers['Authorization'] = `Bearer ${token}` */

      Router.push("/payment"); //SELECT THE PAGE YOU WANT TO OPEN NEXT
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
