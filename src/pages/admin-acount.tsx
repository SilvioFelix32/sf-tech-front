import { useState } from "react";
import { Footer, Header, NavHeader } from "../components";
import MyAccount from "./myaccount";
import Favorites from "./favorites";
import MyShopping from "./shopping";
import { BiMenu, BiStore, BiHeart, BiUser } from "react-icons/bi";
//styles
import {
  Wrapper,
  Theme,
  Content,
  Section,
} from "../styles/pages/administration";
import {
  CustomSidebar,
  CustomMenuItem,
  CustomMenu,
} from "../styles/customSideBar";

export default function Administration() {
  const [actualPage, setActualPage] = useState("myaccount");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={true}
        showFavoritesButton={true}
        showAdminButton={true}
      />
      <Wrapper>
        <Content>
          <>
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
            <Section>
              {actualPage === "myaccount" && <MyAccount />}
              {actualPage === "favorites" && <Favorites />}
              {actualPage === "shopping" && <MyShopping />}
            </Section>
          </>
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
