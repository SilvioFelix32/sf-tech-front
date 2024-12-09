import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFavorite } from "../context";
import { BuyButton } from "../components";
import { IFavoriteItem } from "../types/IFavorite";
import { MdFavorite } from "react-icons/md";
//styles
import {
  Wrapper,
  Content,
  Title,
  Text,
  Picture,
  ProductInfo,
  ProductValue,
  FavoritedButton,
  Description,
} from "../styles/pages/favorites";

export default function MyFavorites() {
  const router = useRouter();
  const { removeItemFromFavorites, favoriteItems } = useFavorite();
  const favoriteProduct = favoriteItems?.map(
    (favorite: IFavoriteItem) => favorite
  );

  return favoriteProduct.length >= 1 ? (
    <Wrapper>
      {favoriteItems?.map((favorite: IFavoriteItem) => (
        <Content key={favorite.product_id}>
          <Picture
            onClick={() => router.push(`/product/${favorite.product_id}`)}
          >
            <Image
              src={
                favorite.urlBanner
                  ? favorite.urlBanner
                  : "https://i.imgur.com/2HFGvvT.png"
              }
              alt={favorite?.title}
              width="200"
              height="200"
              priority
            ></Image>
          </Picture>
          <ProductInfo>
            <Title>{favorite.title}</Title>
            <Description
              onClick={() => router.push(`/product/${favorite.product_id}`)}
            >
              {favorite.description}
            </Description>
            <ProductValue>
              <Text
                style={{ textDecoration: "line-through", fontSize: "14px" }}
              >
                De R$
                {favorite?.price.toFixed(2).replace(".", ",")}
              </Text>
              <Text>
                Por R$
                {(favorite?.price - favorite?.discount)
                  .toFixed(2)
                  .replace(".", ",")}
              </Text>
            </ProductValue>
            <BuyButton product={favorite} />
          </ProductInfo>
          <FavoritedButton
            onClick={() => {
              removeItemFromFavorites(favorite.product_id);
            }}
          >
            <MdFavorite />
          </FavoritedButton>
        </Content>
      ))}
    </Wrapper>
  ) : (
    <Wrapper>
      <Title
        style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "3rem" }}
      >
        Nenhum favorito ainda
      </Title>
    </Wrapper>
  );
}
