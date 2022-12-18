//components
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import Image from "next/image";
import { CartButton, SignInButton, ThemeToogle } from "../Buttons";
import { LanguageSelector } from "../Buttons/ChangeLanguage";
import "i18next";
//styles
import { Select, Wrapper, Logo, Button } from "./styles";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { BiStore } from "react-icons/bi";

export function Header({ toggleTheme }) {
  const router = useRouter();
  const {
    query: { company_id },
  } = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN"] });

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
        <ThemeToogle toggleTheme={toggleTheme} />
        <SignInButton />
        <CartButton />
        <LanguageSelector />
        {userHasAdminPermissions && (
          <Button
            onClick={() =>
              router.push({
                pathname: "administration",
                query: { company_id },
              })
            }
          >
            <BiStore />
          </Button>
        )}
      </Select>
    </Wrapper>
  );
}
