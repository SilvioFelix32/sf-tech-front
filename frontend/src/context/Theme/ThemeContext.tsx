import nookies, { setCookie } from "nookies";
import { createContext, useState } from "react";
type ITheme = {
  theme: string;
  setTheme(theme: string): void;
};

export const ThemeContext = createContext({} as ITheme);

export function ThemePreferenceProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const cookies = nookies.get();
    if (cookies["color-theme"] === "light") return "light";
    if (cookies["color-theme"] === "dark") return "dark";
    return "light";
  });

  function handleTheme(value: string) {
    setTheme(value);
    setCookie(undefined, "color-theme", value, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
