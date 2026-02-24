import { useState } from "react";
import { useRouter } from "next/router";
import { useCan } from "../../hooks/useCan";
import { useAuth } from "../../hooks/useAuth";
import { NavigationSidebar, SidebarItemConfig, PageLayout } from "../../components";
import AdminDashboard from "./dashboard";
import AdminProducts from "./products";
import AdminCompany from "./company";
import AdminCategories from "./categories";
import AdminSales from "./sales";
import { BiNews, BiPackage, BiStore, BiWallet, BiGridAlt, BiLogOut } from "react-icons/bi";
import { Role } from "../../interfaces/IUser";
import {
  SidebarAvatar,
  SidebarBadge,
  SidebarProfile,
  SidebarUserEmail,
  SidebarUserName,
  SidebarNavItem,
  SidebarNavIcon,
} from "../../styles/pages/account";
import { AdminContainer, AdminSection } from "../../styles/pages/admin";

type AdminPage = "Dashboard" | "AdminCompany" | "AdminCategories" | "AdminProducts" | "AdminSales";

function getAdminBadgeText(role?: Role): string {
  switch (role) {
    case Role.MASTER:
      return "Administrador Master";
    case Role.ADMIN:
      return "Administrador";
    default:
      return "Administrador";
  }
}

function getInitials(name?: string, lastName?: string): string {
  const first = (name ?? "").trim()[0] ?? "";
  const second = (lastName ?? "").trim()[0] ?? (name ?? "").trim()[1] ?? "";
  return (first + second).toUpperCase() || "A";
}

export default function Administration() {
  const router = useRouter();
  const { user } = useAuth();
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

  const displayName = user?.name ?? "";
  const displayEmail = user?.email ?? "";
  const initials = getInitials(user?.name, user?.lastName);
  const badgeText = getAdminBadgeText(user?.role);

  const sidebarHeader = (
    <SidebarProfile>
      <SidebarAvatar>{initials}</SidebarAvatar>
      <div>
        <SidebarUserName>{displayName || "Usuário"}</SidebarUserName>
        <SidebarUserEmail>{displayEmail}</SidebarUserEmail>
        <SidebarBadge>{badgeText}</SidebarBadge>
      </div>
    </SidebarProfile>
  );

  const sidebarFooter = (
    <SidebarNavItem type="button" onClick={() => router.push("/")}>
      <SidebarNavIcon>
        <BiLogOut />
      </SidebarNavIcon>
      Voltar para a Loja
    </SidebarNavItem>
  );

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
          <NavigationSidebar
            header={sidebarHeader}
            items={sidebarItems}
            footer={sidebarFooter}
          />
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
