import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
//styles
import "react-pro-sidebar/dist/css/styles.css";
interface SideBarProps {
  isToggled?: boolean;
  setIsToggled: () => void;
}

export function Sidebar({ isToggled }: SideBarProps) {
  return (
    <ProSidebar collapsed={false} toggled={isToggled}>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
      </Menu>
    </ProSidebar>
  );
}
