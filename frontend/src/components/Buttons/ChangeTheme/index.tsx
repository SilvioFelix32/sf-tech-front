import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "styled-components";
//styles
import { Button, Wrapper } from "./styled";

export function ThemeToogle({ toggleTheme }) {
  const { title } = useContext(ThemeContext);
  const [themeMode, setThemeMode] = useState("light");

  console.log("title", title);

  return (
    <Wrapper>
      {themeMode === "light" && (
        <Button
          onClick={() => {
            setThemeMode("dark"), title === "dark";
            toggleTheme();
          }}
        >
          <MdOutlineLightMode />
        </Button>
      )}
      {themeMode === "dark" && (
        <Button
          onClick={() => {
            setThemeMode("light"), title === "light";
            toggleTheme();
          }}
        >
          <MdDarkMode />
        </Button>
      )}
    </Wrapper>
  );
}
