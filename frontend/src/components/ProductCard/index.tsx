import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdFavoriteBorder } from "react-icons/md";
import { productsService } from "../../services";
import { IProduct } from "../../types";
import { BtnAddOrRemove, BuyButton } from "../Buttons";
//styles
import {
  Wrapper,
  Text,
  FavoriteButton,
  Picture,
  ProductInfo,
  Title,
  ProductValue,
  ProductDescription,
} from "./styles";

export function ProductCard() {
  const { t } = useTranslation();
  const {
    query: { company_id },
  } = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    productsService.getAll(company_id as string).then((data) => {
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
              <Title>{product.title}</Title>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductValue>
                <Text
                  style={{ textDecoration: "line-through", fontSize: "14px" }}
                >
                  De {t("main.mainSection.priceFilterCard.priceType")}{" "}
                  {product?.value.toFixed(2).replace(".", ",")}
                </Text>
                <Text>
                  Por {t("main.mainSection.priceFilterCard.priceType")}
                  {(product?.value - product?.discount)
                    .toFixed(2)
                    .replace(".", ",")}
                </Text>
              </ProductValue>
              <BuyButton product={product} />
            </ProductInfo>
            <FavoriteButton className="favorite">
              <MdFavoriteBorder />
            </FavoriteButton>
          </Wrapper>
        ))}
    </>
  );
}
