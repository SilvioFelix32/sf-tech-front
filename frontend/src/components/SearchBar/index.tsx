import { Search, SearchInput, SearchSelect, InputContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export function SearchBar() {
  const { t } = useTranslation();
  return (
    <Search>
      <SearchSelect>
        <option value="computador">computador</option>
        <option value="celular">celular</option>
        <option value="impressora">impressora</option>
        <option value="monitor">monitor</option>
        <option value="notebook">notebook</option>
      </SearchSelect>
      <InputContainer>
        <SearchInput placeholder={t("main.searchbar.serchfield")} />
        <BiSearch />
      </InputContainer>
    </Search>
  );
}
