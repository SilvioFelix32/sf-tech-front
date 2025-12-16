import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  margin-top: 20px;
`;

export const AccountSidebar = styled.aside`
  height: 100%;
`;

export const SidebarCard = styled.div`
  border-radius: 8px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  /* PageWrapper usa overflow: hidden, então usamos sombra interna na esquerda
     para não ser cortada, e externa na direita para manter a profundidade */
  box-shadow:
    inset 6px 0 10px -8px rgba(0, 0, 0, 0.35), /* esquerda (interna) */
    4px 0 12px -6px rgba(0, 0, 0, 0.28);       /* direita (externa) */
  padding: 24px;
  height: 90%;
`;

export const SidebarProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const SidebarAvatar = styled.div`
  height: 96px;
  width: 96px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  svg {
    font-size: 3rem;
  }
`;

export const SidebarUserName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
`;

export const SidebarUserEmail = styled.p`
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.title};
`;

export const SidebarBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.title};
`;

export const SidebarDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  margin: 24px 0 16px;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface SidebarNavItemProps {
  $active?: boolean;
}

export const SidebarNavItem = styled.button<SidebarNavItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? "rgba(2, 132, 199, 0.1)" : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.title : theme.colors.tertiary};
  font-size: 0.9rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: ${({ $active }) =>
    $active ? "rgba(2, 132, 199, 0.12)" : "rgba(15, 23, 42, 0.04)"};
  }
`;

export const SidebarNavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

export const AccountSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 20px 0;
`;

