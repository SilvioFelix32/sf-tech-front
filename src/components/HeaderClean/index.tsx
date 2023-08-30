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
  ThemeToogle,
} from "../Buttons";
//styles
import { Select, Wrapper, LogoL, LogoS, Button } from "./styles";

export function HeaderClean() {
  const router = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  return (
    <Wrapper>
      <LogoL onClick={() => router.push("/")}>
        <Image
          src="/images/logo_sftech.png"
          alt="sftech"
          width={200}
          height={60}
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
      <SmallDevices />
      <Select>
        <ThemeToogle />
        <SignInButton />
        {userIsAuthenticated && <FavoritesButton />}
        <CartButton />
        {userHasAdminPermissions && (
          <Button
            onClick={() =>
              router.push({
                pathname: "administration",
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