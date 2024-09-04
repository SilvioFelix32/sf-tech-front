import { createContext, ReactNode, Suspense, useEffect, useState } from "react";
import Router from "next/router";
import api from "../../services/api";
import { IUser, Role } from "../../types/IUser";
import { getCookie, removeCookie, setCookie } from "../../services";
import {
  fetchUserAttributes,
  confirmSignIn,
  fetchAuthSession,
  signIn,
  signOut,
  SignInInput,
  SignInOutput,
} from "aws-amplify/auth";

export type User = {
  name: string;
  lastName: string;
  email: string;
  role: Role;
  user_id: string;
  isSignedIn: boolean;
};

type IResponse = {
  access_token: string;
  user: IUser;
};

type AuthContextData = {
  login(credentials: SignInInput): Promise<void>;
  logOut(): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const loggedUser = getCookie("user");
    return loggedUser ? JSON.parse(loggedUser) : null;
  });
  const isAuthenticated = !!user;

  async function login({ username, password }: SignInInput) {
    console.log("login", username, password);
    try {
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: {
          authFlowType: "USER_SRP_AUTH",
        },
      });

      if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        await confirmSignIn({
          challengeResponse: "12345", // trocar depois
        });
      } else if (
        nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
      ) {
        await confirmSignIn({
          challengeResponse: "12345", // trocar pelo valor da nova senha
        });
      }

      if (isSignedIn) {
        const {
          email,
          name,
          family_name,
          "custom:role": role,
          sub: userId,
        } = await fetchUserAttributes();

        const session = await fetchAuthSession({ forceRefresh: true });
        const { accessToken } = session.tokens;
        setCookie("nextauth.token", accessToken);

        const loggedUser: User = {
          name: name,
          lastName: family_name || "",
          email: email || "",
          role: (role as Role) || Role.USER,
          user_id: userId,
          isSignedIn: isSignedIn,
        };

        setUser(loggedUser);
        setCookie("user", JSON.stringify(loggedUser));

        api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error(error.response.data.error);
    }
  }

  async function logOut() {
    await signOut();
    setUser(null);
    removeCookie("user");
    removeCookie("nextauth.token");

    Router.push("/");
  }

  return (
    <Suspense>
      <AuthContext.Provider value={{ login, logOut, isAuthenticated, user }}>
        {children}
      </AuthContext.Provider>
    </Suspense>
  );
}

export { AuthContext, AuthProvider };
