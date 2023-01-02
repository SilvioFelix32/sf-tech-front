import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
//styles
import "react-pro-sidebar/dist/css/styles.css";
interface SideBarProps {
  isToggled?: boolean;
  setIsToggled: () => void;
}

export function ProSidebar({ isToggled }: SideBarProps) {
  
  return (
    <Sidebar>
      <Menu>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
      </Menu>
    </Sidebar>
  );
}
