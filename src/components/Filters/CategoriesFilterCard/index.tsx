import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { productCategoryService } from "../../../services";
import { CompanyContext } from "../../../context";
import { IProductCategories } from "../../../types/IProductCategories";
import { VscClearAll } from "react-icons/vsc";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";

interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
}

export function CategoriesFilterCard({ filter, setFilter }: CategorySelector) {
  const company_id = useContext(CompanyContext);
  const router = useRouter();
  const [productCategories, setProductCategories] = useState<
    IProductCategories[]
  >([]);

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
        <Button onClick={() => setFilter("")}>
          Limpar
          <VscClearAll />
        </Button>
        {productCategories
          .filter((category) => category.active)
          .map((category) => (
            <Button
              key={category.category_id}
              onClick={() => setFilter(category.title)}
            >
              {category.title}
            </Button>
          ))}
      </ProductFilter>
    </Wrapper>
  );
}
