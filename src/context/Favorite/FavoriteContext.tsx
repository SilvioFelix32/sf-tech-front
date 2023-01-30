import React, { useContext, useMemo, useState } from "react";
import nookies, { destroyCookie, setCookie } from "nookies";
import { IFavoriteItem } from "../../types/IFavorite";

const FavoriteContext = React.createContext(null);

export function FavoriteProvider(props) {
  const [favoriteItems, setFavoriteItems] = useState([] as IFavoriteItem[]);

  const cookies = nookies.get();
  const favoriteCookies = cookies["favorite-items"];

  const totalItemsCount = useMemo(() => {
    return favoriteItems.reduce((acumulator, item) => {
      return acumulator + item.amount;
    }, 0);
  }, [favoriteItems]);

  const getTotalItems = (items: IFavoriteItem[]) => {
    return items.reduce(
      (acumulator: number, item) => acumulator + item.amount,
      0
    );
  };

  function handleAddToFavorites(clickedItem: IFavoriteItem) {
    const favoriteProducts = favoriteItems.map((item) => item.product_id);
    const favoriteArray = JSON.stringify(favoriteProducts);
    setCookie(undefined, "favorite-items", favoriteArray, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    setFavoriteItems((previousState) => {
      return [...previousState, { ...clickedItem, amount: 1 }];
    });
  }

  function removeItemFromFavorites(product_id: string) {
    // retrieve the cookie value and parse it back to an array
    const favoritedArray = JSON.parse(favoriteCookies);
    // remove the object with a specific name
    const filteredArray = favoritedArray.filter(
      (item: IFavoriteItem) => item.product_id !== product_id
    );
    //store the modified array back in the cookie
    const filteredArrayAsString = JSON.stringify(filteredArray);
    setCookie({}, "favorite-items", filteredArrayAsString);

    return setFavoriteItems((previousState) =>
      previousState.filter((item) => item.product_id !== product_id)
    );
  }

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        handleAddToFavorites,
        getTotalItems,
        removeItemFromFavorites,
        totalItemsCount,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
