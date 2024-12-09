import { createContext, ReactNode, Suspense, useState } from "react";
import Router from "next/router";
import api from "../../services/api";
import { Role } from "../../types/IUser";
import { getCookie, removeCookie, setCookie } from "../../services";
import {
  fetchUserAttributes,
  fetchAuthSession,
  signIn,
  signOut,
  SignInInput,
} from "aws-amplify/auth";
import { CustomError, handleApiError } from "../../utils/errorHandler";

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

  async function login({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: {
          authFlowType: "USER_SRP_AUTH",
        },
      });

      if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        setUser({
          userStatus: `Status: ${nextStep.signInStep}, "Você precisa confirmar a sua senha"`,
        });
      } else if (
        nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
      ) {
        setUser({
          userStatus: `Status: ${nextStep.signInStep}, "Você precisa trocar a sua senha"`,
        });
      }

      if (isSignedIn) {
        const [userAttributes, session] = await Promise.all([
          fetchUserAttributes(),
          fetchAuthSession({ forceRefresh: true }),
        ]);

        const {
          email,
          name,
          family_name,
          "custom:role": role,
          sub: userId,
        } = userAttributes;
        const { accessToken } = session.tokens;

        setCookie("nextauth.token", accessToken, {
          expires: defaultCookieTimeout,
        });

        const loggedUser: User = {
          name: name || "",
          lastName: family_name || "",
          email: email || "",
          role: (role as Role) || Role.USER,
          user_id: userId,
          isSignedIn: isSignedIn,
        };

        setUser(loggedUser);
        setCookie("user", JSON.stringify(loggedUser), {
          expires: defaultCookieTimeout,
        });

        api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    } catch (e) {
      const error = e as Error;
      const handledError: CustomError = handleApiError(error);
      setUser({
        userStatus: handledError.name,
      });
      if (handledError.name === "UserAlreadyAuthenticatedException") {
        await logOut();
        window.location.reload();
      }
      console.error("AuthContext Error: ", handledError);
      throw handledError;
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
