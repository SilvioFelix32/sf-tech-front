import { useContext } from "react";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { AuthContext } from "../../../context";
//components
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
//styles
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button, Svg, Text, Wrapper } from "./styles";

export const SignInButton = () => {
  const router = useRouter();
  const { user, logOut } = useContext(AuthContext);

  async function handleSingOut() {
    await logOut();
  }

  return user ? (
    <Wrapper>
      <CDropdown className="Wrapper">
        <CDropdownToggle className="Button">
          <Button>
            <Svg>
              <BiUser />
            </Svg>
            <Text style={{ textTransform: "uppercase" }}>
              {user.name?.split("")[0] ?? "U"}
              {user.lastName?.split("")[0] ?? "S"}
            </Text>
          </Button>
        </CDropdownToggle>
        <CDropdownMenu className="DropMenu">
          <CDropdownItem
            onClick={() => router.push("/admin-acount")}
            className="OptionBtn"
          >
            Minha Conta
          </CDropdownItem>
          <CDropdownItem onClick={handleSingOut} className="OptionBtn">
            Sair <FiX />
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </Wrapper>
  ) : (
    <>
      <Button onClick={() => router.push("/signIn")}>
        <Svg>
          <BiUser />
        </Svg>
        Entrar
      </Button>
    </>
  );
};
