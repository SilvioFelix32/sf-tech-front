import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { productCategoryService } from "../../services";
import { IProductCategories } from "../../types/IProductCategories";
//styles
import { Search, SearchInput, SearchSelect, InputContainer } from "./styles";

export function SearchBar() {
  const {
    query: { company_id },
  } = useRouter();
  const router = useRouter();
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);

  useEffect(() => {
    if (company_id) {
      productCategoryService
        .getAll(company_id as string)
        .then((data) => setProductCategories(data));
    } else {
    }
  }, [company_id, router]);

  return (
    <Search>
      <SearchSelect>
        {productCategories
          .filter((category) => category.active)
          .map((category) => (
            <option key={category.category_id}>
              {category.title.toLocaleLowerCase()}
            </option>
          ))}
      </SearchSelect>
      <InputContainer>
        <SearchInput placeholder="Procure um produto ou categoria..." />
        <BiSearch />
      </InputContainer>
    </Search>
  );
}
