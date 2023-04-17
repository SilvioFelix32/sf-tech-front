import { BiSearch } from "react-icons/bi";
import { ProductFilterContext } from "../../context";
import { useContext } from "react";
//styles
import { Wrapper, SearchInput, InputContainer } from "./styles";

export function SearchBar() {
  const {
    setSearchTerm,
    state: { searchTerm },
  } = useContext(ProductFilterContext);

  return (
    <Wrapper>
      <InputContainer>
        <SearchInput
          placeholder="Procure um produto..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearch />
      </InputContainer>
    </Wrapper>
  );
}
