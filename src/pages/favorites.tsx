import React, { useState } from "react";
import Cookies from "js-cookie";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
//styles
import { Wrapper, Content, Theme } from "../styles/pages/filters";
import {} from "../styles/pages/favorites";
import { IFavoriteItem } from "../types/IFavorite";

export default function FavoritesPage() {
  const [filter, setFilter] = useState("");
  const favoritesArray = Cookies.get("favorite-items");
  const favorites = JSON.parse(favoritesArray);
  console.log(favorites);

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header filter={filter} setFilter={setFilter} />
        <Content>
          {favorites.map((favorite: IFavoriteItem) => (
            <>
              <div>Produto: {favorite.title}</div>
              <div>R$ {favorite.value.toFixed(2).replace(".", ",")}</div>
              <div>Descrição: {favorite.description}</div>
            </>
          ))}
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
