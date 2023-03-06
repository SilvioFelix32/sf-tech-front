import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../../context";
//styles
import { Button, Wrapper } from "./styled";

export function ThemeToogle() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const { setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    setTheme(isDarkTheme ? "light" : "dark");
  }

  return (
    <Wrapper>
      <Button onClick={toggleTheme}>
        {isDarkTheme ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </Wrapper>
  );
}
