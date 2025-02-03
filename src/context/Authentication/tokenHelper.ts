import { JWT } from "aws-amplify/auth";
import { getCookie, setCookie, removeCookie } from "../../services";
import api from "../../services/api";
import { refreshSession } from "../../services/auth-service";

const defaultCookieTimeout = 60 * 60 * 24 * 7; // 7 dias

export const getToken = () => getCookie("nextauth.token");

export const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
};

export const refreshAuthToken = async (): Promise<JWT | null> => {
  try {
    const { accessToken } = await refreshSession();
    setCookie("nextauth.token", accessToken, { expires: defaultCookieTimeout });
    api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    return accessToken;
  } catch (error) {
    console.error("Erro ao tentar atualizar o token", error);
    return null;
  }
};

export const clearAuthData = () => {
  removeCookie("nextauth.token");
  removeCookie("user");
};
