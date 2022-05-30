import React, { useContext } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import Switch from "react-switch";
import { shade } from "polished";
import { ThemeContext } from "styled-components";
//styles
import { Wrapper } from "./styled";

export function SwitchToggle({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={shade(0.15, colors.secondary)}
        onColor="#A1A1A1"
        uncheckedHandleIcon={<MdDarkMode />}
        checkedHandleIcon={<MdOutlineLightMode />}
        className="handler"
      />
    </Wrapper>
  );
}
