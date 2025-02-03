import { createContext, ReactNode, Suspense, useEffect, useState } from "react";
import Router from "next/router";
import api from "../../services/api";
import { Role } from "../../types/IUser";
import { getCookie, setCookie } from "../../services";
import { CustomError, handleApiError } from "../../utils/errorHandler";
import {
  fetchUserSession,
  getUserAttributes,
  signInUser,
  signOutUser,
} from "../../services/auth-service";
import { SignInInput } from "aws-amplify/auth";
import {
  clearAuthData,
  getToken,
  isTokenExpired,
  refreshAuthToken,
} from "./tokenHelper";
import { buildUserAttributes } from "./buildUserAttributes";

export type User = {
  name?: string;
  lastName?: string;
  email?: string;
  role?: Role;
  user_id?: string;
  isSignedIn?: boolean;
  userStatus?: string;
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
  const defaultCookieTimeout = 60 * 60 * 24 * 7; // 7 days
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = getToken();
    if (token && isTokenExpired(token)) {
      console.info("Token expirado, tentando atualizar...");
      refreshAuthToken().then((newToken) => {
        if (!newToken) logOut();
      });
    }
  }, []);

  async function login({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signInUser({ username, password });
      validateStep(nextStep.signInStep);

      if (isSignedIn) {
        const [userAttributes, session] = await Promise.all([
          getUserAttributes(),
          fetchUserSession(),
        ]);

        const loggedUser = buildUserAttributes(userAttributes, isSignedIn);
        setUser(loggedUser);
        setCookie("nextauth.token", session.accessToken, {
          expires: defaultCookieTimeout,
        });
        setCookie("user", JSON.stringify(loggedUser), {
          expires: defaultCookieTimeout,
        });

        api.defaults.headers["Authorization"] = `Bearer ${session.accessToken}`;
      }
    } catch (error) {
      setUser(null);
      const handledError: CustomError = handleApiError(error);
      console.error("AuthContext Error: ", handledError);
      throw handledError;
    }
  }

  async function logOut() {
    await signOutUser();
    setUser(null);
    clearAuthData();

    Router.push("/");
  }

  function validateStep(signInStep: string): void {
    switch (signInStep) {
      case "CONFIRM_SIGN_UP":
        setUser({
          userStatus: `Status: ${signInStep}, " Vocé precisa confirmar a sua senha"`,
        });
        break;
      case "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED":
        setUser({
          userStatus: `Status: ${signInStep}, " Vocé precisa trocar a sua senha"`,
        });
        break;
      default:
        break;
    }
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
