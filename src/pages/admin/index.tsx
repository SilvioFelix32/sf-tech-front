import { useState } from "react";
import { useCan } from "../../hooks/useCan";
import { NavigationSidebar, SidebarItemConfig, PageLayout } from "../../components";
import AdminDashboard from "./dashboard";
import AdminProducts from "./products";
import AdminCompany from "./company";
import AdminCategories from "./categories";
import AdminSales from "./sales";
import { BiNews, BiPackage, BiStore, BiWallet, BiGridAlt } from "react-icons/bi";
import { AdminContainer, AdminSection } from "../../styles/pages/admin";

type AdminPage = "Dashboard" | "AdminCompany" | "AdminCategories" | "AdminProducts" | "AdminSales";

export default function Administration() {
  const [actualPage, setActualPage] = useState<AdminPage>("Dashboard");

  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });

  const sidebarItems: SidebarItemConfig[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <BiGridAlt />,
      active: actualPage === "Dashboard",
      onClick: () => setActualPage("Dashboard"),
    },
    {
      id: "company",
      label: "Empresa",
      icon: <BiStore />,
      active: actualPage === "AdminCompany",
      onClick: () => setActualPage("AdminCompany"),
    },
    {
      id: "categories",
      label: "Categorias",
      icon: <BiNews />,
      active: actualPage === "AdminCategories",
      onClick: () => setActualPage("AdminCategories"),
    },
    {
      id: "products",
      label: "Produtos",
      icon: <BiPackage />,
      active: actualPage === "AdminProducts",
      onClick: () => setActualPage("AdminProducts"),
    },
    {
      id: "sales",
      label: "Vendas",
      icon: <BiWallet />,
      active: actualPage === "AdminSales",
      onClick: () => setActualPage("AdminSales"),
    },
  ];

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
          <NavigationSidebar items={sidebarItems} />
          <AdminSection>
            {actualPage === "Dashboard" && <AdminDashboard />}
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
