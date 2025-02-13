import { useMemo, useState } from "react";
import { useCan } from "../hooks/useCan";
//components
import { NavHeader, Footer, Header } from "../components";
import AdminProducts from "./admin-products";
import AdminCompany from "./admin-company";
import AdminCategories from "./admin-product-category";
import { BiMenu, BiNews, BiPackage, BiStore, BiWallet } from "react-icons/bi";
//styles
import { Wrapper, Content, Section } from "../styles/pages/administration";
import { Theme } from "../styles/components";
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

  const memoizedAdminProducts = useMemo(() => <AdminProducts />, []);
  const memoizedAdminCategories = useMemo(() => <AdminCategories />, []);
  const memoizedAdminCompany = useMemo(() => <AdminCompany />, []);

  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={true}
        showSearchBar={false}
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
                {actualPage === "AdminCompany" && memoizedAdminCompany}
                {actualPage === "AdminCategories" && memoizedAdminCategories}
                {actualPage === "AdminProducts" && memoizedAdminProducts}
              </Section>
            </>
          )}
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
