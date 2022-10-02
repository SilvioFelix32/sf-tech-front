import { useTranslation } from "react-i18next";
//styles
import { Wrapper, Text, ProductInfo, ProductFilter } from "./styles";

export function BrandsFilterCard() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ProductInfo>
        <Text>{t("main.mainSection.brandsFilterCard.title")}</Text>
      </ProductInfo>

      <ProductFilter>
        <div className="field">
          <input type="checkbox" />
          <Text>{t("main.mainSection.brandsFilterCard.body")}</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>{t("main.mainSection.brandsFilterCard.body")}</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>{t("main.mainSection.brandsFilterCard.body")}</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>{t("main.mainSection.brandsFilterCard.body")}</Text>
        </div>
      </ProductFilter>
    </Wrapper>
  );
}
