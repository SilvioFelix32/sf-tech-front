import { useFilterContext } from "../../../context";
import { formatPrice } from "../../../utils/formatPrice";
//styles
import {
  Wrapper,
  Text,
  ProductInfo,
  ProductFilter,
  RangeInput,
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
          Preço: {""}
          R$ {""}
          {formatPrice(price)}
        </Text>
      </ProductInfo>

      <ProductFilter>
        <RangeInput
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

{
  /* <Button onClick={() => updateFilterValue("maxPrice", 1000)}>
        Até {formatPrice(1000)}
      </Button>
      <Button onClick={() => updateFilterValue("maxPrice", 5000)}>
        Até {formatPrice(5000)}
      </Button> */
}

{
  /* <ProductFilter>
        <Input
          type="number"
          name="minPrice"
          value={minPrice}
          min={0}
          onChange={handleMinPriceChange}
          placeholder="Mínimo"
        />
        -
        <Input
          type="number"
          name="maxPrice"
          value={maxPrice}
          min={minPrice}
          onChange={handleMaxPriceChange}
          placeholder="Máximo"
        />
      </ProductFilter> */
}
