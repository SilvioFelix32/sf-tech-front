import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { productsService, productsPricesService } from "../../services";
import { IProduct, IProductPrices } from "../../types";
//styles
import {
  Wrapper,
  Text,
  BuyButton,
  FavoriteButton,
  Picture,
  ProductInfo,
  ProductPrices,
} from "./styles";

export function ProductCard() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const company_id = "a38bb1f1-c73f-44b0-9cdc-b4af0e5f1b9e";

  useEffect(() => {
    productsService.getAll(company_id).then((data) => {
      setProducts(data);
    });
  }, [company_id]);

  return (
    <>
      {products
        .filter((product) => product.active)
        .map((product) => (
          <Wrapper key={product.product_id}>
            <Picture>
              <Image
                src={product?.url_banner}
                alt={product?.title}
                width="300"
                height="300"
                priority
              ></Image>
            </Picture>
            <ProductInfo>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  textTransform: "capitalize",
                }}
              >
                {product.title}
              </Text>
              <Text>{product.subtitle}</Text>
              <Text>{product.description}</Text>
            </ProductInfo>

            <ProductPrices>
              <Text>
                Valor {" "}
                {t("main.mainSection.priceFilterCard.priceType")}{" "}
                {product?.value.toFixed(2).replace(".", ",")}
              </Text>
              <Text>
                Desconto{" "}
                {t("main.mainSection.priceFilterCard.priceType")}{" "}
                {product?.discount.toFixed(2).replace(".", ",")}
              </Text>
              <BuyButton>Comprar</BuyButton>
              <FavoriteButton>Favoritar</FavoriteButton>
            </ProductPrices>
          </Wrapper>
        ))}
    </>
  );
}
