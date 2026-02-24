import { Dispatch, SetStateAction } from "react";
import {
  SidebarAvatar,
  SidebarBadge,
  SidebarProfile,
  SidebarUserEmail,
  SidebarUserName,
} from "../../../styles/pages/account";
import {
  BiStore,
  BiHeart,
  BiUser,
  BiMap,
  BiCreditCard,
  BiBell,
  BiCog,
} from "react-icons/bi";
import { Role } from "../../../interfaces/IUser";
import {
  NavigationSidebar,
  SidebarItemConfig,
} from "../../Sidebar";

interface AccountSidebarProps {
  actualPage: string;
  setActualPage: Dispatch<SetStateAction<string>>;
  name: string;
  email: string;
  role?: Role;
}

const getBadgeText = (role?: Role): string => {
  switch (role) {
    case Role.USER:
      return "Cliente Premium";
    case Role.ADMIN:
      return "Administrador";
    case Role.MASTER:
      return "Administrador Master";
    default:
      return "Cliente";
  }
};

export function AccountSidebar({
  actualPage,
  setActualPage,
  name,
  email,
  role,
}: AccountSidebarProps) {
  const badgeText = getBadgeText(role);

  const items: SidebarItemConfig[] = [
    {
      id: "myaccount",
      label: "Meu Perfil",
      icon: <BiUser />,
      active: actualPage === "myaccount",
      onClick: () => setActualPage("myaccount"),
    },
    {
      id: "favorites",
      label: "Favoritos",
      icon: <BiHeart />,
      active: actualPage === "favorites",
      onClick: () => setActualPage("favorites"),
    },
    {
      id: "shopping",
      label: "Minhas Compras",
      icon: <BiStore />,
      active: actualPage === "shopping",
      onClick: () => setActualPage("shopping"),
    },
    {
      id: "addresses",
      label: "Endereços",
      icon: <BiMap />,
      active: actualPage === "addresses",
      onClick: () => setActualPage("addresses"),
    },
    {
      id: "payments",
      label: "Pagamentos",
      icon: <BiCreditCard />,
      active: actualPage === "payments",
      onClick: () => setActualPage("payments"),
    },
    {
      id: "notifications",
      label: "Notificações",
      icon: <BiBell />,
      active: actualPage === "notifications",
      onClick: () => setActualPage("notifications"),
    },
    {
      id: "settings",
      label: "Configurações",
      icon: <BiCog />,
      active: actualPage === "settings",
      onClick: () => setActualPage("settings"),
    },
  ];

  const header = (
    <SidebarProfile>
      <SidebarAvatar>
        <BiUser />
      </SidebarAvatar>
      <div>
        <SidebarUserName>{name}</SidebarUserName>
        <SidebarUserEmail>{email}</SidebarUserEmail>
        <SidebarBadge>{badgeText}</SidebarBadge>
      </div>
    </SidebarProfile>
  );

  return <NavigationSidebar header={header} items={items} />;
}
