import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { productCategoryService } from "../../services";
import { IProductCategories } from "../../types/IProductCategories";
//styles
import { Search, SearchInput, SearchSelect, InputContainer } from "./styles";

interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
}

export function SearchBar({ filter, setFilter }: CategorySelector) {
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
    }
  }, [company_id, router]);

  return (
    <Search>
      <SearchSelect onChange={(e) => setFilter(e.target.value)}>
        <option value={""}>Selecionar</option>
        {productCategories
          .filter((category) => category.active)
          .map((category) => (
            <option key={category.category_id} value={category.title}>
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
