import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useFavorite, useFilterContext } from "../../context";
import { useCan } from "../../context/Authentication/hooks/useCan";
import { productCategoryService } from "../../services";
import { IProduct } from "../../types";
import { IProductCategories } from "../../types/IProductCategories";
import { BuyButton } from "../Buttons";
//styles
import {
  Wrapper,
  Text,
  FavoritedButton,
  NotFavoriteButton,
  Picture,
  ProductInfo,
  Title,
  ProductValue,
  ProductDescription,
} from "./styles";

interface CategorySelector {
  filter: string;
}

export function ProductCard({ filter }: CategorySelector) {
  const {
    query: { company_id },
  } = useRouter();
  const {
    filters: { price },
  } = useFilterContext();
  const { removeItemFromFavorites, handleAddToFavorites } = useFavorite();
  const [categories, setCategories] = useState<IProductCategories[]>([]);
  const [buttonType, setButtonType] = useState("isNotFavorited");
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN"] });

  useEffect(() => {
    productCategoryService
      .getAll(company_id as string)
      .then((data) => setCategories(data));
  }, [company_id]);

  const categoryOfProducts = categories.reduce((acc, cur) => {
    if (cur.title !== filter && filter !== "") {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  return (
    <>
      {categoryOfProducts
        .filter((produdct: IProduct) => produdct.value <= price)
        .map((product: IProduct) => (
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
            {userIsAuthenticated && buttonType === "isNotFavorited" && (
              <NotFavoriteButton
                className="favorite"
                onClick={() => {
                  handleAddToFavorites(product), setButtonType("isFavorited");
                }}
              >
                <MdFavoriteBorder />
              </NotFavoriteButton>
            )}
            {userIsAuthenticated && buttonType === "isFavorited" && (
              <FavoritedButton
                className="favorite"
                onClick={() => {
                  removeItemFromFavorites(product.product_id),
                    setButtonType("isNotFavorited");
                }}
              >
                <MdFavoriteBorder />
              </FavoritedButton>
            )}
          </Wrapper>
        ))}
    </>
  );
}
