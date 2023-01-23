import { useFilterContext } from "../../../context";
//styles
import { Wrapper, Text, ProductInfo, ProductFilter } from "./styles";

export function PriceFilterCard() {
  const {
    filters: { price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
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
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
        <button className="btn" onClick={clearFilters}>
          Limpar Filtros
        </button>
      </ProductFilter>
    </Wrapper>
  );
}
