import {
  signIn,
  signOut,
  confirmSignUp,
  resetPassword,
  confirmResetPassword,
  fetchUserAttributes,
  fetchAuthSession,
  SignInInput,
} from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import { awsConfig } from "../aws/aws-config";
import { getCookie, setCookie, removeCookie } from "./cookie-service";
import api from "./api";
import { buildUserAttributes, User } from "./auth";

Amplify.configure(awsConfig);

const defaultCookieTimeout = 60 * 60 * 24 * 7;

export const authService = {
  async signIn({ username, password }: SignInInput) {
    try {
      try {
        const session = await fetchAuthSession({ forceRefresh: false });
        if (session.tokens?.accessToken) {
          await signOut();
          removeCookie("nextauth.token");
          removeCookie("user");
        }
      } catch {
      }

      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
        options: {
          authFlowType: "USER_SRP_AUTH",
        },
      });

      if (!isSignedIn) {
        return { isSignedIn, nextStep };
      }

      const session = await fetchAuthSession({ forceRefresh: true });
      if (!session.tokens?.accessToken) {
        throw new Error("Erro ao obter tokens de autenticação");
      }

      const accessToken = session.tokens.accessToken.toString();

      setCookie("nextauth.token", accessToken, {
        expires: defaultCookieTimeout,
      });

      const [userAttributes] = await Promise.all([fetchUserAttributes()]);

      const loggedUser = buildUserAttributes(userAttributes, isSignedIn);
      setCookie("user", JSON.stringify(loggedUser), {
        expires: defaultCookieTimeout,
      });

      api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

      return { isSignedIn, nextStep };
    } catch (error: any) {
      removeCookie("nextauth.token");
      removeCookie("user");
      throw new Error("Erro ao fazer login: " + error.message);
    }
  },

  async signOut(): Promise<void> {
    try {
      if (typeof window !== "undefined") {
        const userCookie = getCookie("user");
        if (userCookie) {
          try {
            const user: User = JSON.parse(userCookie);
            if (user.user_id) {
              removeCookie(`user_synced_${user.user_id}`);
            }
          } catch {
          }
        }
      }

      await signOut();
      removeCookie("nextauth.token");
      removeCookie("user");
      delete api.defaults.headers["Authorization"];
    } catch (error: any) {
      throw new Error("Erro ao fazer logout: " + error.message);
    }
  },

  async getUserAttributes() {
    try {
      const attributes = await fetchUserAttributes();
      return attributes;
    } catch (error: any) {
      throw new Error("Erro ao obter atributos do usuário: " + error.message);
    }
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const attributes = await fetchUserAttributes();
      const isSignedIn = true;
      return buildUserAttributes(attributes, isSignedIn);
    } catch {
      return null;
    }
  },

  async getUserDataFromToken(): Promise<User | null> {
    try {
      const userCookie = getCookie("user");
      if (!userCookie) {
        return null;
      }

      const user: User = JSON.parse(userCookie);
      return user;
    } catch {
      return null;
    }
  },

  async fetchUserSession() {
    try {
      const session = await fetchAuthSession({ forceRefresh: true });
      return session.tokens;
    } catch (error: any) {
      throw new Error("Erro ao obter a sessão do usuário: " + error.message);
    }
  },

  async refreshSession() {
    try {
      const session = await fetchAuthSession({ forceRefresh: true });
      if (session.tokens?.accessToken) {
        const accessToken = session.tokens.accessToken.toString();
        setCookie("nextauth.token", accessToken, {
          expires: defaultCookieTimeout,
        });
        api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return session.tokens;
    } catch (error: any) {
      throw new Error("Erro ao atualizar a sessão do usuário: " + error.message);
    }
  },

  async getAccessToken(): Promise<string | null> {
    try {
      const session = await fetchAuthSession({ forceRefresh: false });
      return session.tokens?.accessToken?.toString() || null;
    } catch {
      return null;
    }
  },

  async confirmSignUp({ email, confirmationCode }: { email: string; confirmationCode: string }) {
    try {
      const result = await confirmSignUp({
        username: email,
        confirmationCode,
      });
      return result;
    } catch (error: any) {
      throw new Error("Erro ao confirmar cadastro: " + error.message);
    }
  },

  async forgotPassword({ email }: { email: string }) {
    try {
      const result = await resetPassword({
        username: email,
      });
      return result;
    } catch (error: any) {
      throw new Error("Erro ao solicitar redefinição de senha: " + error.message);
    }
  },

  async confirmForgotPassword({
    email,
    confirmationCode,
    newPassword,
  }: {
    email: string;
    confirmationCode: string;
    newPassword: string;
  }) {
    try {
      const result = await confirmResetPassword({
        username: email,
        confirmationCode,
        newPassword,
      });
      return result;
    } catch (error: any) {
      throw new Error("Erro ao confirmar redefinição de senha: " + error.message);
    }
  },

  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    return !!getCookie("nextauth.token");
  },

  async checkAuthSession(): Promise<boolean> {
    try {
      const session = await fetchAuthSession({ forceRefresh: false });
      return !!session.tokens?.accessToken;
    } catch {
      return false;
    }
  },

  getToken(): string | null {
    return getCookie("nextauth.token");
  },

  isTokenExpired(token: string): boolean {
    try {
      const { exp } = JSON.parse(atob(token.split(".")[1]));
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },
};

