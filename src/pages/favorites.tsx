import React from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { IFavoriteItem } from "../types/IFavorite";
//styles
import {
  Wrapper,
  Content,
  Title,
  Text,
  Picture,
  ProductDescription,
  ProductInfo,
  ProductValue,
} from "../styles/pages/favorites";

export default function Favorites() {
  const favoritesArray = Cookies.get("favorite-items");
  const favorites = JSON.parse(favoritesArray);

  return (
    <Wrapper>
      {favorites.map((favorite: IFavoriteItem) => (
        <Content key={favorite.product_id}>
          <Picture>
            <Image
              src={
                favorite.url_banner
                  ? favorite.url_banner
                  : "https://i.imgur.com/2HFGvvT.png"
              }
              alt={favorite?.title}
              width="300"
              height="300"
              priority
            ></Image>
          </Picture>
          <ProductInfo>
            <Title>{favorite.title}</Title>
            <ProductDescription>{favorite.description}</ProductDescription>
            <ProductValue>
              <Text
                style={{ textDecoration: "line-through", fontSize: "14px" }}
              >
                De R$
                {favorite?.value.toFixed(2).replace(".", ",")}
              </Text>
              <Text>
                Por R$
                {(favorite?.value - favorite?.discount)
                  .toFixed(2)
                  .replace(".", ",")}
              </Text>
            </ProductValue>
          </ProductInfo>
          ))
        </Content>
      ))}
    </Wrapper>
  );
}
