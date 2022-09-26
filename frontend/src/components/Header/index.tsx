//components
import { SearchBar } from "../SearchBar";
import { CartButton, SignInButton, SwitchToggle } from "../Buttons";
import { LanguageSelector } from "../Buttons/ChangeLanguage";
import "i18next";
//styles
import { Select, Wrapper } from "./styles";

export function Header({ toggleTheme }) {
  return (
    <Wrapper>
      <SearchBar />
      <Select>
        <SwitchToggle toggleTheme={toggleTheme} />
        <SignInButton />
        <CartButton />
        <LanguageSelector />
      </Select>
    </Wrapper>
  );
}
