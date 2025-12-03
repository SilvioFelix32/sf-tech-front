import React, { CSSProperties, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../../../hooks/useTheme";
//styles
import { Button, Wrapper } from "./styled";

interface ThemeToggleProps {
  styles?: CSSProperties;
}

export function ThemeToggle({ styles }: ThemeToggleProps) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const { setTheme } = useTheme();

  function toggleTheme() {
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    setIsDarkModeEnabled(!isDarkModeEnabled);
    setTheme(newTheme);
  }

  return (
    <Wrapper style={styles}>
      <Button onClick={toggleTheme}>
        {isDarkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
      </Button>
    </Wrapper>
  );
}
