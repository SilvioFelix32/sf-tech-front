//components
import { SearchBar } from "../SearchBar";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  CartButton,
  FavoritesButton,
  SignInButton,
  ThemeToogle,
} from "../Buttons";
//styles
import { Select, Wrapper, Logo, Button } from "./styles";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { BiStore } from "react-icons/bi";
import { useState } from "react";
interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
}

export function Header({ filter, setFilter }: CategorySelector) {
  const router = useRouter();
  const {
    query: { company_id },
  } = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN"] });
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN"] });

  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>
        <Image
          src="/images/logo_sftech.png"
          alt="sftech"
          width={200}
          height={60}
        ></Image>
      </Logo>
      <SearchBar filter={filter} setFilter={setFilter} />
      <Select>
        <SignInButton />
        <ThemeToogle />
        {userIsAuthenticated && <FavoritesButton />}
        <CartButton />
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
