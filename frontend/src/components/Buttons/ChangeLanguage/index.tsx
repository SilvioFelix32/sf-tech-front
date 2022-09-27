import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { BsGlobe } from "react-icons/bs";
import i18next from "../../../translations/ii18n";

//styles
import { Wrapper } from "./styled";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../../../styles/global";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { t } = useTranslation();

  const languages = [
    {
      code: "pt-BR",
      name: t("main.header.dropdown.ptBR"),
      flag: "",
      country_code: "br",
    },
    {
      code: "en-US",
      flag: "",
      name: t("main.header.dropdown.enUS"),
      country_code: "en",
    },
  ];

  return (
    <Wrapper>
      <CDropdown className="Wrapper">
        <CDropdownToggle className="GlobeBtn">
          <BsGlobe />
        </CDropdownToggle>
        <CDropdownMenu>
          {languages.map(({ code, name, country_code }) => (
            <CDropdownItem
              key={country_code}
              onClick={() => i18next.changeLanguage(code)}
              className="OptionBtn"
            >
              {name}
            </CDropdownItem>
          ))}
        </CDropdownMenu>
      </CDropdown>
    </Wrapper>
  );
}
