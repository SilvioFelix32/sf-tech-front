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
  filter: string;
  setFilter: (value: string) => void;
  isSelected: string;
  setIsSelected: (value: string) => void;
}

export function CategoriesFilterCard({
  setFilter,
  isSelected,
  setIsSelected,
}: CategorySelector) {
  const { productCategories } = useContext(CategoriesContext);

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
            <span>{category.title}</span>
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
