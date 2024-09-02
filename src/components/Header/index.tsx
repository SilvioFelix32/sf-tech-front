import Image from "next/image";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { BiStore } from "react-icons/bi";
//components
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import { SmallDevices } from "../Buttons/SmallDevices";
import {
  CartButton,
  FavoritesButton,
  SignInButton,
  ThemeToggle,
} from "../Buttons";
//styles
import { Select, Wrapper, LogoL, LogoS, Button, Content } from "./styles";
import { CSSProperties } from "react";

interface HeaderProps {
  showSignInButton?: boolean;
  showCartButton?: boolean;
  showFavoritesButton?: boolean;
  showAdminButton?: boolean;
  styles?: CSSProperties;
}

export function Header({
  showSignInButton = true,
  showCartButton = true,
  showFavoritesButton = true,
  showAdminButton = false,
  styles,
}: HeaderProps) {
  const router = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  return (
    <Wrapper>
      <Content style={styles}>
        <LogoL onClick={() => router.push("/")}>
          <Image
            src="/images/logo_sftech.png"
            alt="sftech"
            width={200}
            height={60}
            priority={true}
          ></Image>
        </LogoL>
        <LogoS onClick={() => router.push("/")}>
          <Image
            src="/images/logo_60x60.png"
            alt="sftech"
            width={60}
            height={60}
          ></Image>
        </LogoS>
        <SearchBar />
        <ThemeToggle />
        <SmallDevices />
        <Select>
          {showSignInButton && <SignInButton />}
          {userIsAuthenticated && showFavoritesButton && <FavoritesButton />}
          {showCartButton && <CartButton />}
          {userHasAdminPermissions && showAdminButton && (
            <Button onClick={() => router.push("/administration")}>
              <BiStore />
            </Button>
          )}
        </Select>
      </Content>
    </Wrapper>
  );
}
