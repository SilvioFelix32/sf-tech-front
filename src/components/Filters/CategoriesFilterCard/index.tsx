import { useContext } from "react";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";
import { ProductContext } from "../../../context/Products/ProductsContext";
interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
  isSelected: string;
  setisSelected: (value: string) => void;
}

export function CategoriesFilterCard({
  setFilter,
  isSelected,
  setisSelected,
}: CategorySelector) {
  const { productCategories } = useContext(ProductContext);

  const handleButtonClick = (id: string) => {
    if (isSelected === id) {
      setisSelected("");
    } else {
      setisSelected(id);
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
