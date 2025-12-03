import { Dispatch, SetStateAction } from "react";
import {
    AccountSidebar as SidebarWrapper,
    SidebarAvatar,
    SidebarBadge,
    SidebarCard,
    SidebarDivider,
    SidebarNav,
    SidebarNavIcon,
    SidebarNavItem,
    SidebarProfile,
    SidebarUserEmail,
    SidebarUserName,
} from "../../styles/pages/account";
import {
    BiStore,
    BiHeart,
    BiUser,
    BiMap,
    BiCreditCard,
    BiBell,
    BiCog,
} from "react-icons/bi";
import { Role } from "../../interfaces/IUser";

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
    const initials = name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const badgeText = getBadgeText(role);

    return (
        <SidebarWrapper>
            <SidebarCard>
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

                <SidebarDivider />

                <SidebarNav>
                    <SidebarNavItem
                        type="button"
                        $active={actualPage === "myaccount"}
                        onClick={() => setActualPage("myaccount")}
                    >
                        <SidebarNavIcon>
                            <BiUser />
                        </SidebarNavIcon>
                        Meu Perfil
                    </SidebarNavItem>

                    <SidebarNavItem
                        type="button"
                        $active={actualPage === "favorites"}
                        onClick={() => setActualPage("favorites")}
                    >
                        <SidebarNavIcon>
                            <BiHeart />
                        </SidebarNavIcon>
                        Favoritos
                    </SidebarNavItem>

                    <SidebarNavItem
                        type="button"
                        $active={actualPage === "shopping"}
                        onClick={() => setActualPage("shopping")}
                    >
                        <SidebarNavIcon>
                            <BiStore />
                        </SidebarNavIcon>
                        Minhas Compras
                    </SidebarNavItem>

                    <SidebarNavItem type="button">
                        <SidebarNavIcon>
                            <BiMap />
                        </SidebarNavIcon>
                        Endereços
                    </SidebarNavItem>

                    <SidebarNavItem type="button">
                        <SidebarNavIcon>
                            <BiCreditCard />
                        </SidebarNavIcon>
                        Pagamentos
                    </SidebarNavItem>

                    <SidebarNavItem type="button">
                        <SidebarNavIcon>
                            <BiBell />
                        </SidebarNavIcon>
                        Notificações
                    </SidebarNavItem>

                    <SidebarNavItem type="button">
                        <SidebarNavIcon>
                            <BiCog />
                        </SidebarNavIcon>
                        Configurações
                    </SidebarNavItem>
                </SidebarNav>
            </SidebarCard>
        </SidebarWrapper>
    );
}


