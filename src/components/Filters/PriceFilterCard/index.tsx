import { useFilterContext } from "../../../context";
import { formatPrice } from "../../../utils/formatPrice";
//styles
import {
  Wrapper,
  Text,
  ProductInfo,
  ProductFilter,
  RangeInput,
  SliderWrapper,
  SliderTrack,
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
        <SliderWrapper>
          <SliderTrack />
          <RangeInput
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </SliderWrapper>
      </ProductFilter>
    </Wrapper>
  );
}

