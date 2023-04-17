import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import {
  CompanyContext,
  ProductFilterContext,
  useFavorite,
  useFilterContext,
} from "../../context";
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
  const company_id = useContext(CompanyContext);
  const {
    filters: { price },
  } = useFilterContext();
  const { filteredProduct } = useContext(ProductFilterContext);
  const { favoriteItems, removeItemFromFavorites, handleAddToFavorites } =
    useFavorite();
  const [categories, setCategories] = useState<IProductCategories[]>([]);
  const [buttonType, setButtonType] = useState("isNotFavorited");
  const userIsAuthenticated = useCan({ role: ["USER", "ADMIN", "MASTER"] });

  useEffect(() => {
    productCategoryService
      .getAll(company_id, {})
      .then((res) => setCategories(res.data));
  }, [company_id]);

  const categoryOfProducts = categories.reduce((acc, cur) => {
    if (cur.title !== filter && filter !== "") {
      return acc;
    }
    return [...acc, ...cur.products];
  }, []);

  const filteredProducts = categoryOfProducts
    .filter((produdct: IProduct) => produdct.value <= price)
    .filter((product: IProduct) => {
      if (filteredProduct.length === 0) {
        return true;
      }
      return filteredProduct.includes(product.title);
    });

  return (
    <>
      {filteredProducts.map((product: IProduct) => (
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
          {userIsAuthenticated &&
            (favoriteItems.some(
              (favoriteItem) => favoriteItem.product_id === product.product_id
            ) ? (
              <FavoritedButton
                className="favorite"
                onClick={() => {
                  removeItemFromFavorites(product.product_id),
                    setButtonType("isNotFavorited");
                }}
              >
                <MdFavoriteBorder />
              </FavoritedButton>
            ) : (
              <NotFavoriteButton
                className="favorite"
                onClick={() => {
                  handleAddToFavorites(product), setButtonType("isFavorited");
                }}
              >
                <MdFavoriteBorder />
              </NotFavoriteButton>
            ))}
        </Wrapper>
      ))}
    </>
  );
}
