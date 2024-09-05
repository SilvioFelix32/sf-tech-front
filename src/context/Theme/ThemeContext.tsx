import { createContext, useState, useEffect, ReactNode } from "react";
import { getCookie, setCookie } from "../../services/cookie-service";

interface IThemeContext {
  theme: string;

  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});

interface ThemePreferenceProviderProps {
  children: ReactNode;
}

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
