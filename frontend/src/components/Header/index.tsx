//components
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import Image from "next/image";
import { CartButton, SignInButton, SwitchToggle } from "../Buttons";
import { LanguageSelector } from "../Buttons/ChangeLanguage";
import "i18next";
//styles
import { Select, Wrapper, Logo } from "./styles";

export function Header({ toggleTheme }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>
        <Image
          src="/images/logo_sftech.jpg"
          alt="sftech"
          width={200}
          height={60}
        ></Image>
      </Logo>
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
