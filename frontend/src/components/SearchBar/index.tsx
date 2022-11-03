import { Search, SearchInput, SearchSelect, InputContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export function SearchBar() {
  const { t } = useTranslation();
  return (
    <Search>
      <SearchSelect>
        <option value="">{t("main.searchbar.selectField.option")}</option>
        <option value="computador">
          {t("main.searchbar.selectField.computer")}
        </option>
        <option value="celular">
          {t("main.searchbar.selectField.cellphone")}
        </option>
        <option value="impressora">
          {t("main.searchbar.selectField.printer")}
        </option>
        <option value="monitor">
          {t("main.searchbar.selectField.monitor")}
        </option>
        <option value="notebook">
          {t("main.searchbar.selectField.notebook")}
        </option>
      </SearchSelect>
      <InputContainer>
        <SearchInput placeholder={t("main.searchbar.serchfield")} />
        <BiSearch />
      </InputContainer>
    </Search>
  );
}
