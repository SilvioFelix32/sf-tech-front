import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { productCategoryService } from "../../../services";
import { IProductCategories } from "../../../types/IProductCategories";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";

export function CategoriesFilterCard() {
  const { t } = useTranslation();
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
      console.log();
      router.push("/");
    }
  }, [company_id, router]);

  return (
    <Wrapper>
      <ProductInfo>
        <Text>{t("main.mainSection.categoriesFilterCard.title")}</Text>
      </ProductInfo>
      <ProductFilter>
        {productCategories
          .filter((category) => category.active)
          .map((category) => (
            <Button key={category.category_id}>{category.title}</Button>
          ))}
      </ProductFilter>
    </Wrapper>
  );
}
