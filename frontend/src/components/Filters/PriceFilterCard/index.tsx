import { useState } from "react";
import { Slider } from "@mui/material";
import { useTranslation } from "react-i18next";
//styles
import { Wrapper, Text, ProductInfo, ProductFilter } from "./styles";

function valuetext(value: number) {
  return `${value}°C`;
}

export function PriceFilterCard() {
  const { t } = useTranslation();
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Wrapper>
      <ProductInfo>
        <Text>
          {t("main.mainSection.priceFilterCard.title")}: {""}
          {t("main.mainSection.priceFilterCard.priceType")} {""}
          {value},00
        </Text>
      </ProductInfo>

      <ProductFilter>
        <Slider
          getAriaLabel={() => "Value"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        ></Slider>
      </ProductFilter>
    </Wrapper>
  );
}
