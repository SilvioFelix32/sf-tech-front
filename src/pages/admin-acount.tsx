import { useState } from "react";
import { Footer, Header, NavHeader } from "../components";
import MyAccount from "./myaccount";
import MyFavorites from "./favorites";
import MyShopping from "./shopping";
import { BiMenu, BiStore, BiHeart, BiUser } from "react-icons/bi";
//styles
import { PageWrapper, PageContent } from "../styles/pages/shared";
import styled from "styled-components";

const Wrapper = styled(PageWrapper)`
  width: 100%;
  padding: 0;
`;

const Content = styled(PageContent)`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
`;

const Section = styled.div`
  width: 100%;
  flex: 1;
  padding: 20px;
  overflow: auto;
`;
import { Theme } from "../styles/components";
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
        showFavoritesButton={false}
        showAdminButton={true}
        showSearchBar={false}
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
              {actualPage === "favorites" && <MyFavorites />}
              {actualPage === "shopping" && <MyShopping />}
            </Section>
          </>
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
