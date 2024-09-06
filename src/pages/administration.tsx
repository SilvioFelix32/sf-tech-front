import { useState } from "react";
import { NavHeader, Footer, Header } from "../components";
import { useProSidebar } from "react-pro-sidebar";
import { useCan } from "../context/Authentication/hooks/useCan";
import AdminProducts from "./admin-products";
import AdminCompany from "./admin-company";
import AdminCategories from "./admin-product-category";
import { BiMenu, BiNews, BiPackage, BiStore, BiWallet } from "react-icons/bi";
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
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={true}
      />
      <Wrapper>
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
