import { useState } from "react";
import { PageLayout } from "../../components";
import { MyAccount, MyFavorites, MyShopping } from "../../components/Account";
import { BiMenu, BiStore, BiHeart, BiUser } from "react-icons/bi";
import {
  CustomSidebar,
  CustomMenuItem,
  CustomMenu,
} from "../../styles/customSideBar";
import { AccountContainer, AccountSection } from "../../styles/pages/account";

export default function Account() {
  const [actualPage, setActualPage] = useState("myaccount");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={true}
      showFavoritesButton={false}
      showAdminButton={true}
      showSearchBar={false}
      wrapperWidth="80%"
      contentProps={{
        direction: "row",
        align: "stretch",
        justify: "flex-start",
        minHeight: "100%",
        height: "100%",
        padding: "0",
        fullWidth: true,
      }}
    >
      <AccountContainer>
        <CustomSidebar collapsed={collapsed} transitionDuration={500}>
          <CustomMenu>
            <CustomMenuItem onClick={toggleSidebar}>
              <BiMenu />
            </CustomMenuItem>
            <CustomMenuItem onClick={() => setActualPage("myaccount")}>
              <BiUser /> Meu Perfil
            </CustomMenuItem>
            <CustomMenuItem onClick={() => setActualPage("favorites")}>
              <BiHeart /> Favoritos
            </CustomMenuItem>
            <CustomMenuItem onClick={() => setActualPage("shopping")}>
              <BiStore /> Compras
            </CustomMenuItem>
          </CustomMenu>
        </CustomSidebar>
        <AccountSection>
          {actualPage === "myaccount" && <MyAccount />}
          {actualPage === "favorites" && <MyFavorites />}
          {actualPage === "shopping" && <MyShopping />}
        </AccountSection>
      </AccountContainer>
    </PageLayout>
  );
}

