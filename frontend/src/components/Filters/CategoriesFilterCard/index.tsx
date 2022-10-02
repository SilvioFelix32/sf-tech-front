import { useTranslation } from "react-i18next";
//styles
import { Wrapper, Text, Button, ProductInfo, ProductFilter } from "./styles";

export function CategoriesFilterCard() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ProductInfo>
        <Text>{t("main.mainSection.categoriesFilterCard.title")}</Text>
      </ProductInfo>

      <ProductFilter>
        <Button>{t("main.mainSection.categoriesFilterCard.body")}</Button>
        <Button>{t("main.mainSection.categoriesFilterCard.body")}</Button>
        <Button>{t("main.mainSection.categoriesFilterCard.body")}</Button>
        <Button>{t("main.mainSection.categoriesFilterCard.body")}</Button>
      </ProductFilter>
    </Wrapper>
  );
}
