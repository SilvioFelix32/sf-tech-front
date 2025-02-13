import { ReactNode } from "react";

export interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface ThemePreferenceProviderProps {
  children: ReactNode;
}
