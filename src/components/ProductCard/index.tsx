import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { productCategoryService } from "../../services";
import { IProduct } from "../../types";
import { IProductCategories } from "../../types/IProductCategories";
import { BuyButton } from "../Buttons";
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

interface CategorySelector {
  filter: string;
  setFilter: (value: string) => void;
}

export function ProductCard({ filter, setFilter }: CategorySelector) {
  const {
    query: { company_id },
  } = useRouter();
  const [categories, setCategories] = useState<IProductCategories[]>([]);

  useEffect(() => {
    productCategoryService
      .getAll(company_id as string)
      .then((data) => setCategories(data));
  }, [company_id]);

  const products = categories.reduce((acc, cur) => {
    if (cur.title !== filter && filter !== "") {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  return (
    <>
      {products.map((product: IProduct) => (
        <Wrapper key={product.product_id}>
          <Picture>
            <Image
              src={
                product.url_banner
                  ? product.url_banner
                  : "https://i.imgur.com/2HFGvvT.png"
              }
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
                De R$
                {product?.value.toFixed(2).replace(".", ",")}
              </Text>
              <Text>
                Por R$
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
