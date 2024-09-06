import Image from "next/image";
import { CSSProperties } from "react";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { BiStore } from "react-icons/bi";
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import {
  CartButton,
  FavoritesButton,
  SignInButton,
  ThemeToggle,
} from "../Buttons";
//styles
import { Select, Wrapper, Button, Content, Logo } from "./styles";

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
        <Logo onClick={() => router.push("/")}>
          <Image
            src="/images/logo_sftech.png"
            alt="sftech"
            width={200}
            height={60}
            priority={true}
          ></Image>
        </Logo>
        <SearchBar />
        <ThemeToggle />
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
