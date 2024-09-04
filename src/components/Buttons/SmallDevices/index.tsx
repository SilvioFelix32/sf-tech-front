import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useCan } from "../../../context/Authentication/hooks/useCan";
import { BiListUl } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { AuthContext } from "../../../context";
//components
import { CartModal } from "../..";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
//styles
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button, Svg, Wrapper } from "./styles";

export const SmallDevices = () => {
  const router = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });
  const [openModal, setOpenModal] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  async function handleSingOut() {
    await logOut();
  }

  return (
    <Wrapper>
      <CDropdown className="Wrapper">
        <CDropdownToggle className="Button">
          <Button>
            <Svg>
              <BiListUl />
            </Svg>
          </Button>
        </CDropdownToggle>
        <CDropdownMenu className="DropMenu">
          {user ? (
            <CDropdownItem style={{ textTransform: "capitalize" }}>
              Seja bem vindo {user.name} {user.lastName.split("")[0]}.
            </CDropdownItem>
          ) : (
            <CDropdownItem
              onClick={() => {
                router.push("/signIn");
              }}
            >
              Entrar
            </CDropdownItem>
          )}
          {userHasAdminPermissions && (
            <CDropdownItem
              onClick={() =>
                router.push({
                  pathname: "administration",
                })
              }
              className="OptionBtn"
            >
              Administração
            </CDropdownItem>
          )}
          <CDropdownItem
            onClick={() => setOpenModal(true)}
            className="OptionBtn"
          >
            Carrinho
            <CartModal openModal={openModal} setOpenModal={setOpenModal} />
          </CDropdownItem>
          <CDropdownItem href="/admin-acount" className="OptionBtn">
            Minha Conta
          </CDropdownItem>
          <CDropdownItem onClick={handleSingOut} className="OptionBtn">
            Sair <FiX />
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </Wrapper>
  );
};
