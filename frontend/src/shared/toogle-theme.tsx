import react from "react";
import { ThemeProvider } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const [theme, setTheme] = react.useState(light);

export function ThemeChange() {
 //const toggleTheme(theme.title === "light" ? dark : light);
}
