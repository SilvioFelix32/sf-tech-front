//styles
import { Wrapper, Text, ProductInfo, ProductFilter } from "./styles";

export function BrandsFilterCard() {
  return (
    <Wrapper>
      <ProductInfo>
        <Text>Marcas</Text>
      </ProductInfo>

      <ProductFilter>
        <div className="field">
          <input type="checkbox" />
          <Text>Filtrar por essa marca</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>Filtrar por essa marca</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>Filtrar por essa marca</Text>
        </div>
        <div className="field">
          <input type="checkbox" />
          <Text>Filtrar por essa marca</Text>
        </div>
      </ProductFilter>
    </Wrapper>
  );
}
