import { useContext } from "react";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";
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

  const handleButtonClick = (id: string) => {
    if (isSelected === id) {
      setIsSelected("");
    } else {
      setIsSelected(id);
    }
  };

  return productCategories && productCategories.length > 0 ? (
    <Wrapper>
      <ProductInfo>
        <Text>Categorias</Text>
      </ProductInfo>
      <ProductFilter>
        {productCategories?.map((category) => (
          <Button
            key={category.category_id}
            isSelected={isSelected === category.category_id}
            onClick={() => {
              setFilter(category.title),
                handleButtonClick(category.category_id);
            }}
          >
            {category.title.toLowerCase()}
          </Button>
        ))}
      </ProductFilter>
    </Wrapper>
  ) : (
    <Wrapper>
      <ProductInfo>
        <Text>Carregando Categorias</Text>
      </ProductInfo>
      <ProductFilter></ProductFilter>
    </Wrapper>
  );
}
