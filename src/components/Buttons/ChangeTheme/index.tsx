import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../../context";
//styles
import { Button, Wrapper } from "./styled";

export function ThemeToggle() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    setIsDarkModeEnabled(!isDarkModeEnabled);
    setTheme(newTheme);
  }

  return (
    <Wrapper>
      <Button onClick={toggleTheme}>
        {isDarkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </Wrapper>
  );
}
