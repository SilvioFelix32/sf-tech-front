import Cookies, { CookieAttributes } from "js-cookie";

export const setCookie = (
  key: string,
  value: any,
  options?: CookieAttributes
): void => {
  if (typeof window !== "undefined") {
    try {
      Cookies.set(key, value, options);
    } catch (error) {
      console.error(`Failed to set cookie ${key}:`, error);
    }
  }
};

export const getCookie = (name: string) => {
  if (typeof window !== "undefined") {
    try {
      return Cookies.get(name);
    } catch (error) {
      console.error(`Failed to get cookie ${name}:`, error);
      return null;
    }
  }
  return null;
};

export const removeCookie = (name: string, options?: CookieAttributes) => {
  if (typeof window !== "undefined") {
    try {
      Cookies.remove(name, options);
    } catch (error) {
      console.error(`Failed to remove cookie ${name}:`, error);
    }
  }
};
