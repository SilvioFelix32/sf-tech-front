import { useFilterContext } from "../../../context";
import { formatNumber } from "../../../shared/functions";
//styles
import { Wrapper, Text, ProductInfo, ProductFilter, Input } from "./styles";

export function PriceFilterCard() {
  const {
    filters: { price, maxPrice, minPrice },
    updateFilterValue,
  } = useFilterContext();

  return (
    <Wrapper>
      <ProductInfo>
        <Text>
          Filtrar por preço: {""}
          R$ {""}
          {formatNumber(price)}
        </Text>
      </ProductInfo>

      <ProductFilter>
        <Input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </ProductFilter>
    </Wrapper>
  );
}
