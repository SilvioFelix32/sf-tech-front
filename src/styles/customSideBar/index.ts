import styled from "styled-components";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export const CustomSidebar = styled(Sidebar)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  min-height: 76vh;
`;
export const CustomMenuItem = styled(MenuItem)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const CustomMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
`;
