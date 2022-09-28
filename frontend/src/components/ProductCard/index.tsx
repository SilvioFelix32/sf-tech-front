import Image from "next/image";
//styles
import { Wrapper, Text, Picture, ProductInfo, ProductPrices } from "./styles";

export function ProductCard() {
  return (
    <Wrapper>
      <Picture>
        <Image
          src="/images/computer.jpg"
          alt="sftech"
          width={200}
          height={300}
        ></Image>
      </Picture>
      <ProductInfo>
        <Text>computador</Text>
        <Text>completo</Text>
        <Text>tela completa</Text>
      </ProductInfo>

      <ProductPrices>
        <Text>preço</Text>
        <Text>valor</Text>
        <Text>mais info</Text>
      </ProductPrices>
    </Wrapper>
  );
}
