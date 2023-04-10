import React from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useFavorite } from "../context";
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
  FavoritedButton,
} from "../styles/pages/favorites";
import { MdFavoriteBorder } from "react-icons/md";

export default function Favorites() {
  const { removeItemFromFavorites } = useFavorite();
  const favoritesArray = Cookies.get("favorite-items");
  const favorites = JSON.parse(favoritesArray);
  const favoriteProduct = favorites.map(
    (favorite: IFavoriteItem[]) => favorite
  );

  return favoriteProduct.length >= 1 ? (
    <Wrapper>
      {favorites?.map((favorite: IFavoriteItem) => (
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
          <FavoritedButton
            className="favorite"
            onClick={() => removeItemFromFavorites(favorite.product_id)}
          >
            <MdFavoriteBorder />
          </FavoritedButton>
          ))
        </Content>
      ))}
    </Wrapper>
  ) : (
    <Wrapper>
      <Title>Nenhum favorito ainda</Title>
    </Wrapper>
  );
}
