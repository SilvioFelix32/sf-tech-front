import { useState } from "react";
//components
import { FaBars } from "react-icons/fa";
import { Sidebar } from "../Sidebar";
import { CartButton, SignInButton, SwitchToggle } from "../Buttons";
//styles
import { Select, Wrapper } from "./styles";

export function Header({ toggleTheme }) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Wrapper>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <Select>
        <SwitchToggle toggleTheme={toggleTheme} />
        <SignInButton />
        <CartButton />
      </Select>
    </Wrapper>
  );
}
