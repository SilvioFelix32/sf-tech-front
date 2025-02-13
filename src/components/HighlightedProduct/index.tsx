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
import { IProduct } from "../../types";
import { useContext } from "react";
import { ProductContext } from "../../context";

export function HighlightedProduct() {
  const { filteredProducts } = useContext(ProductContext);
  const filteredArray = filteredProducts.filter(
    (item) => item.highlighted === true
  );
  const firstThreeItems = filteredArray.slice(0, 3);

  return (
    <Section>
      <Categories>
        {firstThreeItems.map((product: IProduct) => (
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
                alt={product?.title}
                width="100"
                height="100"
                priority
                style={{ objectFit: "contain" }}
              ></Image>
            </Picture>
            <Title
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                margin: "0",
                padding: "0",
              }}
            >
              {product.title}
            </Title>
            <Text style={{ fontSize: "1.2rem" }}>
              {formatPrice(product?.price - product?.discount)}
            </Text>
          </SectionProduct>
        ))}
      </Categories>
    </Section>
  );
}
