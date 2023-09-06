import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { productCategoryService } from "../../../services";
import { CompanyContext } from "../../../context";
import { IProductCategories } from "../../../types/IProductCategories";
import { VscClearAll } from "react-icons/vsc";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: (value: boolean) => void;
}
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
  const company_id = useContext(CompanyContext);
  const router = useRouter();
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);

  const handleButtonClick = (id: string) => {
    if (isSelected === id) {
      setIsSelected("");
    } else {
      setIsSelected(id);
    }
  };

  useEffect(() => {
    if (company_id) {
      productCategoryService
        .getAll(company_id, {
          page: 1,
          limit: 20,
        })
        .then((res) => setProductCategories(res.data));
    }
  }, [company_id, router]);

  return (
    <Wrapper>
      <ProductInfo>
        <Text>Categorias</Text>
      </ProductInfo>
      <ProductFilter>
        {productCategories
          .filter((category) => category.active)
          .map((category) => (
            <Button
              key={category.category_id}
              isSelected={isSelected === category.category_id}
              onClick={() => {
                setFilter(category.title),
                  handleButtonClick(category.category_id);
              }}
            >
              {category.title}
            </Button>
          ))}
      </ProductFilter>
    </Wrapper>
  );
}
