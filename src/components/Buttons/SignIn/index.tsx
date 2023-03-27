import { useContext, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { AuthContext } from "../../../context";
//components
import { LoginModal } from "../..";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
//styles
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button, Svg, Text, Wrapper } from "./styles";
import { useRouter } from "next/router";

export const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user, signOut } = useContext(AuthContext);

  return user ? (
    <Wrapper>
      <CDropdown className="Wrapper">
        <CDropdownToggle className="Button">
          <Button>
            <Svg>
              <BiUser />
            </Svg>
            <Text style={{ textTransform: "uppercase" }}>
              {user.name.split("")[0]}
              {user.last_name.split("")[0]}
            </Text>
          </Button>
        </CDropdownToggle>
        <CDropdownMenu className="DropMenu">
          <CDropdownItem href="/admin-acount" className="OptionBtn">
            Meu perfil
          </CDropdownItem>
          <CDropdownItem
            onClick={() => router.push({ pathname: "admin-acount" })}
            className="OptionBtn"
          >
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
  ) : (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Svg>
          <BiUser />
        </Svg>
        <Text>Entrar</Text>
      </Button>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
