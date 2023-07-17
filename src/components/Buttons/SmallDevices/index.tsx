import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useCan } from "../../../context/Authentication/hooks/useCan";
import { BiListUl, BiUser } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { AuthContext } from "../../../context";
//components
import { CartModal, FavoriteModal, FavoritesButton, LoginModal } from "../..";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
//styles
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button, Svg, Text, Wrapper } from "./styles";

export const SmallDevices = () => {
  const router = useRouter();
  const userHasAdminPermissions = useCan({ role: ["ADMIN", "MASTER"] });
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user, signOut } = useContext(AuthContext);

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
              Seja bem vindo {user.name} {user.last_name.split("")[0]}.
            </CDropdownItem>
          ) : (
            <CDropdownItem
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Entrar
              <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
            Meu perfil
          </CDropdownItem>
          <CDropdownItem href="/admin-acount" className="OptionBtn">
            Favoritos
          </CDropdownItem>
          <CDropdownItem href="/admin-acount" className="OptionBtn">
            Compras
          </CDropdownItem>
          <CDropdownItem onClick={() => signOut()} className="OptionBtn">
            Sair <FiX />
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </Wrapper>
  );
};
