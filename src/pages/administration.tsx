import { useState } from "react";
//components
import { NavHeader, Footer, Header } from "../components";
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
  const [actualPage, setActualPage] = useState("AdminCompany");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

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
              <CustomSidebar collapsed={collapsed} transitionDuration={500}>
                <CustomMenu>
                  <CustomMenuItem onClick={toggleSidebar}>
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
