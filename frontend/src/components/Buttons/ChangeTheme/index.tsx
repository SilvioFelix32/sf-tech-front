import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../../context";
//styles
import { Button, Wrapper } from "./styled";

export function ThemeToogle() {
  const [themeMode, setThemeMode] = useState("light");
  const { setTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      {themeMode === "light" && (
        <Button
          onClick={() => {
            setThemeMode("dark");
            setTheme("dark");
          }}
        >
          <MdDarkMode />
        </Button>
      )}
      {themeMode === "dark" && (
        <Button
          onClick={() => {
            setThemeMode("light");
            setTheme("light");
          }}
        >
          <MdOutlineLightMode />
        </Button>
      )}
    </Wrapper>
  );
}
