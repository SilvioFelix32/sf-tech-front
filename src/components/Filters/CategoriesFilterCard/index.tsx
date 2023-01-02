import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { productCategoryService } from "../../../services";
import { IProductCategories } from "../../../types/IProductCategories";
import { VscClearAll } from "react-icons/vsc";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";

interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
}

export function CategoriesFilterCard({ filter, setFilter }: CategorySelector) {
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
        .then((data) => setProductCategories(data))
        .catch((err) => alert(err));
    } else {
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
