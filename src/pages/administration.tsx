import { useState } from "react";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { useProSidebar } from "react-pro-sidebar";
import { useCan } from "../context/Authentication/hooks/useCan";
import AdminProducts from "./admin-products";
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
import {
  CustomSidebar,
  CustomMenuItem,
  CustomMenu,
} from "../styles/customSideBar";

export default function Administration() {
  const { collapseSidebar } = useProSidebar();
  const [actualPage, setActualPage] = useState("AdminCompany");

  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          {userHasAdminPermissions && (
            <>
              <CustomSidebar>
                <CustomMenu>
                  <CustomMenuItem onClick={() => collapseSidebar()}>
                    <BiMenu />
                  </CustomMenuItem>
                  <CustomMenuItem onClick={() => setActualPage("AdminCompany")}>
                    <BiStore /> Empresa
                  </CustomMenuItem>
                  <CustomMenuItem onClick={() => setActualPage("AdminUsers")}>
                    <BiUser /> Usuários
                  </CustomMenuItem>
                  <CustomMenuItem
                    onClick={() => setActualPage("AdminCategories")}
                  >
                    <BiNews /> Categorias
                  </CustomMenuItem>
                  <CustomMenuItem
                    onClick={() => setActualPage("AdminProducts")}
                  >
                    <BiPackage /> Produtos
                  </CustomMenuItem>
                  <CustomMenuItem>
                    <BiWallet /> Vendas
                  </CustomMenuItem>
                </CustomMenu>
              </CustomSidebar>
              <Section>
                {actualPage === "AdminProducts" && <AdminProducts />}
                {actualPage === "AdminUsers" && <AdminUsers />}
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
