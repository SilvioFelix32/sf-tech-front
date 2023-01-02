import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { BsHeart } from "react-icons/bs";

//styles
import { Wrapper } from "./styled";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../../../styles/global";

export function FavoritesButton() {
  return (
    <Wrapper>
      <CDropdown className="Wrapper">
        <CDropdownToggle className="Button">
          <BsHeart />
        </CDropdownToggle>
        <CDropdownMenu className="DropMenu">
          <CDropdownItem className="OptionBtn">teste</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </Wrapper>
  );
}
