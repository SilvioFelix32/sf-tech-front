import { createContext, Suspense, useEffect, useState } from "react";
import Router from "next/router";
import api from "../../services/api";
import { getCookie, setCookie } from "../../services";
import { CustomError, handleApiError } from "../../errors/errorHandler";
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
} from "./helpers/tokenHelper";
import { buildUserAttributes } from "./helpers/buildUserAttributes";
import { AuthContextData, AuthProviderProps, User } from "./types";

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const loggedUser = getCookie("user");
    return loggedUser ? JSON.parse(loggedUser) : null;
  });
  const defaultCookieTimeout = 60 * 60 * 24 * 7; // 7 days
  const isAuthenticated = !!user;

  // TODO: Revisar esse useEffect, talvez haja uma melhor maneira de fazer isso
  useEffect(() => {
    const token = getToken();
    if (token && isTokenExpired(token)) {
      console.info("Token expirado, tentando atualizar...");
      refreshAuthToken()
        .then((newToken) => {
          console.info("Token atualizado com sucesso!");
          if (!newToken) logOut();
        })
        .catch((error) => {
          console.error("Erro ao tentar atualizar o token", error);
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
