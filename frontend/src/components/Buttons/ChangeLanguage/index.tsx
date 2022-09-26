import { Dropdown, DropdownButton } from "react-bootstrap";
import { BsGlobe } from "react-icons/bs";
import i18next from "../../../translations/ii18n";

//styles
import { Wrapper } from "./styled";

const languages = [
  {
    code: "pt-BR",
    name: "Portugês",
    country_code: "br",
  },
  {
    code: "en-US",
    name: "Inglês",
    country_code: "en",
  },
];

export function LanguageSelector() {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<BsGlobe />}
      className={Wrapper}
    >
      {languages.map(({ code, name, country_code }) => (
        <Dropdown.Item
          key={country_code}
          onClick={() => i18next.changeLanguage(code)}
        >
          {/* <span className={`flag-icon flag-icon-${code} mx-2`}></span> */}
          {name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
