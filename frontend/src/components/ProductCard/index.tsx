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
  const [productPrice, setProductPrice] = useState<IProductPrices[]>([]);
  const company_id = "f1a87c2b-f81a-4d28-a24d-15bb3d0aac7b";

  useEffect(() => {
    productsService.getAll(company_id).then((data) => {
      setProducts(data);
    });
    productsPricesService.getAll(company_id).then((data) => {
      setProductPrice(data);
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

            {productPrice
              .filter((productitem) =>
                productitem.products.map((product) => product.product_id)
              )
              .map((itemPrice) =>
                itemPrice?.products.map((product) => (
                  <ProductPrices key={product.item_price_id}>
                    <Text>
                      {t("main.mainSection.priceFilterCard.priceType")}{" "}
                      {product?.value.toFixed(2).replace(".", ",")}
                    </Text>
                    <BuyButton>Comprar</BuyButton>
                    <FavoriteButton>Favoritar</FavoriteButton>
                  </ProductPrices>
                ))
              )}
          </Wrapper>
        ))}
    </>
  );
}
