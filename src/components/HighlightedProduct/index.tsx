import router from "next/router";
import { formatPrice } from "../../utils/formatPrice";
import Image from "next/image";
import {
  Categories,
  Picture,
  Section,
  SectionProduct,
  Title,
  Text,
} from "./styles";
import { IProduct } from "../../interfaces";
import { useContext } from "react";
import { CategoriesContext } from "../../context";

export function HighlightedProduct() {
  const { filteredProducts } = useContext(CategoriesContext);
  const filteredArray = filteredProducts.filter(
    (item) => item.highlighted === true
  );
  const firstFourItems = filteredArray.slice(0, 4);

  console.log(firstFourItems);

  return (
    <Section>
      <Categories>
        {firstFourItems.map((product: IProduct) => (
          <SectionProduct
            key={product.product_id}
            onClick={() => router.push(`/product/${product.product_id}`)}
          >
            <Picture>
              <Image
                src={
                  product.urlBanner
                    ? product.urlBanner
                    : "https://i.imgur.com/2HFGvvT.png"
                }
                alt={product?.title || "Produto"}
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </Picture>
            <Title>{product.title}</Title>
            <Text>R$ {formatPrice((product?.price || 0) - (product?.discount || 0))}</Text>
          </SectionProduct>
        ))}
      </Categories>
    </Section>
  );
}
