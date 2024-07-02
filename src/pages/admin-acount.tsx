import { useState } from "react";
//components
import { Footer, HeaderClean, NavHeader } from "../components";
import { useProSidebar } from "react-pro-sidebar";
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
  const { collapseSidebar } = useProSidebar();
  const [actualPage, setActualPage] = useState("myaccount");

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <HeaderClean />
        <Content>
          <>
            <CustomSidebar>
              <CustomMenu>
                <CustomMenuItem onClick={() => collapseSidebar()}>
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
