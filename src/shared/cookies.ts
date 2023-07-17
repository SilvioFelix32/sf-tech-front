import Cookies from 'js-cookie';

export const setCookie = (key, value, options = {}) => {
    if (typeof window) {
        Cookies.set(key, value, options);
    }
};