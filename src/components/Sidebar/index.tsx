import {
  AccountSidebar as SidebarWrapper,
  SidebarCard,
  SidebarDivider,
  SidebarNav,
  SidebarNavIcon,
  SidebarNavItem,
} from "../../styles/pages/account";
import { INavigationSidebarProps } from "../../interfaces/ISidebar";

export type { SidebarItemConfig } from "../../interfaces/ISidebar";

export function NavigationSidebar({
  header,
  items,
  showDivider = true,
  footer,
}: INavigationSidebarProps) {
  return (
    <SidebarWrapper>
      <SidebarCard>
        {header}
        {showDivider && <SidebarDivider />}
        <SidebarNav>
          {items.map((item) => (
            <SidebarNavItem
              key={item.id}
              type="button"
              $active={item.active}
              onClick={item.onClick}
            >
              {item.icon && <SidebarNavIcon>{item.icon}</SidebarNavIcon>}
              {item.label}
            </SidebarNavItem>
          ))}
        </SidebarNav>
        {footer && (
          <>
            <SidebarDivider />
            {footer}
          </>
        )}
      </SidebarCard>
    </SidebarWrapper>
  );
}

