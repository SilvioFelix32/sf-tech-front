import { ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

export function MainApp({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
}
