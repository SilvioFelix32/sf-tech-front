import { useContext } from "react";
//styles
import {
  Wrapper,
  Text,
  TopBar,
  ProductInfo,
  ProductFilter,
  CategoryItem,
  Checkbox,
} from "./styles";
import { CategoriesContext } from "../../../context/Categories/CategoriesContext";

interface CategorySelector {
  filter?: string;
  isSelected: string;
  setIsSelected: (value: string) => void;
}

const formatCategoryTitle = (title: string) =>
  title
    ?.toLocaleLowerCase("pt-BR")
    .replace(/\b\w/g, (char) => char.toLocaleUpperCase("pt-BR"));

export function CategoriesFilterCard({
  isSelected,
  setIsSelected,
}: CategorySelector) {
  const { productCategories, setFilter } = useContext(CategoriesContext);

  const handleCheckboxChange = (id: string, title: string) => {
    if (isSelected === id) {
      setIsSelected("");
      setFilter("");
    } else {
      setIsSelected(id);
      setFilter(title);
    }
  };

  return productCategories && productCategories.length > 0 ? (
    <Wrapper>
      <TopBar />
      <ProductInfo>
        <Text>Categorias</Text>
      </ProductInfo>
      <ProductFilter>
        {productCategories?.map((category) => (
          <CategoryItem key={category.category_id}>
            <Checkbox
              checked={isSelected === category.category_id}
              onChange={() =>
                handleCheckboxChange(category.category_id, category.title)
              }
            />
            <span>{formatCategoryTitle(category.title)}</span>
          </CategoryItem>
        ))}
      </ProductFilter>
    </Wrapper>
  ) : (
    <Wrapper>
      <TopBar />
      <ProductInfo>
        <Text>Carregando Categorias</Text>
      </ProductInfo>
      <ProductFilter></ProductFilter>
    </Wrapper>
  );
}
