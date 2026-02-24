import { ReactNode } from "react";

export interface SidebarItemConfig {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
  onClick: () => void;
}

export interface INavigationSidebarProps {
  header?: ReactNode;
  items: SidebarItemConfig[];
  showDivider?: boolean;
}
