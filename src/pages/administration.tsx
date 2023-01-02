import { useState } from "react";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useCan } from "../context/Authentication/hooks/useCan";
import AdminProducts from "./admin-products";
import AdminCategories from "./admin-product-category";
import AdminUsers from "./admin-users";
import AdminCompany from "./admin-company";
import {
  BiMenu,
  BiNews,
  BiPackage,
  BiStore,
  BiUser,
  BiWallet,
} from "react-icons/bi";
//styles
import {
  Wrapper,
  Theme,
  Content,
  Section,
} from "../styles/pages/administration";

export default function Administration() {
  const { collapseSidebar } = useProSidebar();
  const [actualPage, setActualPage] = useState("AdminCompany");

  const userHasAdminPermissions = useCan({ role: ["ADMIN"] });

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          {userHasAdminPermissions && (
            <>
              <Sidebar>
                <Menu>
                  <MenuItem onClick={() => collapseSidebar()}>
                    <BiMenu />
                  </MenuItem>
                  <MenuItem onClick={() => setActualPage("AdminCompany")}>
                    <BiStore /> Company
                  </MenuItem>
                  <MenuItem onClick={() => setActualPage("AdminUsers")}>
                    <BiUser /> Users
                  </MenuItem>
                  <MenuItem onClick={() => setActualPage("AdminCategories")}>
                    <BiNews /> Categories
                  </MenuItem>
                  <MenuItem onClick={() => setActualPage("AdminProducts")}>
                    <BiPackage /> Products
                  </MenuItem>
                  <MenuItem>
                    <BiWallet /> Sales
                  </MenuItem>
                </Menu>
              </Sidebar>
              <Section>
                {actualPage === "AdminProducts" && <AdminProducts />}
                {actualPage === "AdminUsers" && <AdminUsers />}
                {actualPage === "AdminCategories" && <AdminCategories />}
                {actualPage === "AdminCompany" && <AdminCompany />}
              </Section>
            </>
          )}
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
