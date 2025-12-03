import { useState } from "react";
import { useCan } from "../../hooks/useCan";
import { PageLayout } from "../../components";
import AdminProducts from "./products";
import AdminCompany from "./company";
import AdminCategories from "./categories";
import AdminSales from "./sales";
import { BiMenu, BiNews, BiPackage, BiStore, BiWallet } from "react-icons/bi";
import {
  CustomSidebar,
  CustomMenuItem,
  CustomMenu,
} from "../../styles/customSideBar";
import { AdminContainer, AdminSection } from "../../styles/pages/admin";

export default function Administration() {
  const [actualPage, setActualPage] = useState("AdminCompany");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });

  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={false}
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
      {userHasAdminPermissions ? (
        <AdminContainer>
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
              <CustomMenuItem
                onClick={() => setActualPage("AdminSales")}
              >
                <BiWallet /> Vendas
              </CustomMenuItem>
            </CustomMenu>
          </CustomSidebar>
          <AdminSection>
            {actualPage === "AdminCompany" && <AdminCompany />}
            {actualPage === "AdminCategories" && <AdminCategories />}
            {actualPage === "AdminProducts" && <AdminProducts />}
            {actualPage === "AdminSales" && <AdminSales />}
          </AdminSection>
        </AdminContainer>
      ) : null}
    </PageLayout>
  );
}

