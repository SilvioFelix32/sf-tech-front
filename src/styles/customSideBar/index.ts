import styled from "styled-components";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export const CustomSidebar = styled(Sidebar)`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 100%;

  div {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const CustomMenu = styled(Menu)`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const CustomMenuItem = styled(MenuItem)`
  a {
    &:hover {
      color: ${({ theme }) => theme.colors.text} !important;
      background-color: ${({ theme }) => theme.colors.tertiary} !important;
      filter: brightness(0.9);
    }
  }
`;
