import { useFilterContext } from "../../../context";
//styles
import {
  Wrapper,
  Text,
  ProductInfo,
  ProductFilter,
  Input,
} from "./styles";

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
          {price},00
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
