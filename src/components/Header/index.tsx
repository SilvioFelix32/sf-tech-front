import React, { memo } from "react";
import Image from "next/image";
import { CSSProperties } from "react";
import { useCan } from "../../hooks/useCan";
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
import {
  HeaderWrapper,
  HeaderContent,
  DesktopLogoButton,
  MobileLogoButton,
  HeaderActions,
  AdminButton,
} from "./styles";

interface HeaderProps {
  showSignInButton?: boolean;
  showCartButton?: boolean;
  showFavoritesButton?: boolean;
  showAdminButton?: boolean;
  showSearchBar?: boolean;
  styles?: CSSProperties;
}

export const Header = memo(function Header({
  showSignInButton = true,
  showCartButton = true,
  showFavoritesButton = true,
  showAdminButton = false,
  showSearchBar = true,
  styles,
}: HeaderProps) {
  const router = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  return (
    <HeaderWrapper>
      <HeaderContent style={styles}>
        <DesktopLogoButton onClick={() => router.push("/")}>
          <Image
            src="/images/logo_sftech.png"
            alt="sftech"
            width={200}
            height={60}
            priority={true}
          />
        </DesktopLogoButton>
        <MobileLogoButton onClick={() => router.push("/")}>
          <Image
            src="/images/logo_60x60.png"
            alt="sftech"
            width={60}
            height={60}
          />
        </MobileLogoButton>
        {showSearchBar && <SearchBar />}
        <ThemeToggle styles={{ marginLeft: "auto" }} />
        <HeaderActions>
          {showSignInButton && <SignInButton />}
          {userIsAuthenticated && showFavoritesButton && <FavoritesButton />}
          {showCartButton && <CartButton />}
          {userHasAdminPermissions && showAdminButton && (
            <AdminButton onClick={() => router.push("/admin")}>
              <BiStore />
            </AdminButton>
          )}
        </HeaderActions>
      </HeaderContent>
    </HeaderWrapper>
  );
});
