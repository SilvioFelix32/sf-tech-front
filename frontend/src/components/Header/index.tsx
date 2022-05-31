import { useState } from "react";
//components
import { FaBars } from "react-icons/fa";
import { Sidebar } from "../Sidebar";
import { CartButton, SignInButton, SwitchToggle } from "../Buttons";
//styles
import {
  SearchBar,
  SearchInput,
  SearchSelect,
  Select,
  InputContainer,
  Wrapper,
} from "./styles";
import { BiSearch } from "react-icons/bi";

export function Header({ toggleTheme }) {
  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Wrapper>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <SearchBar>
        <SearchSelect>
          <option value="computador">computador</option>
          <option value="celular">celular</option>
          <option value="impressora">impressora</option>
          <option value="monitor">monitor</option>
          <option value="notebook">notebook</option>
        </SearchSelect>
        <InputContainer>
          <SearchInput placeholder="Procure um produto ou categoria..."/>
          <BiSearch />
        </InputContainer>
      </SearchBar>
      <Select>
        <SwitchToggle toggleTheme={toggleTheme} />
        <SignInButton />
        <CartButton />
      </Select>
    </Wrapper>
  );
}
