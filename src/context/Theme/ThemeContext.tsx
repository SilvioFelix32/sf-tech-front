import { createContext, useState, useEffect } from "react";
import { getCookie, setCookie } from "../../services/cookie-service";
import { IThemeContext, ThemePreferenceProviderProps } from "./types";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});

const ThemePreferenceProvider: React.FC<ThemePreferenceProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = getCookie("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  function handleTheme(value: string): void {
    setTheme(value);
    setCookie("color-theme", value, { expires: 7, path: "/" });
  }

  const contextValue: IThemeContext = { theme, setTheme: handleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemePreferenceProvider;
