import Cookies from "js-cookie";

export const cookiesService = {
  createCookie,
  getCookie,
  removeCookie,
};

function createCookie(name: string, content: any): void {
  try {
    Cookies.set(name, content, {
      expires: 60 * 60 * 24 * 30, //this set the time that the cookie will be stored = 30 days
      path: "/", //any adres you have acces to this cookie, this means that this is a global cookie
    });
  } catch (error) {
    throw error;
  }
}

function getCookie(name: string): any {
  try {
    const data = Cookies.get(name);
    return data;
  } catch (error) {
    throw error;
  }
}

function removeCookie(name: string): void {
  try {
    Cookies.remove(name, {
      path: "/",
    });
  } catch (error) {
    throw error;
  }
}
