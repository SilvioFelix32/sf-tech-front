import React, { useContext, useEffect, useMemo, useState } from "react";
import { IFavoriteItem } from "../../types/IFavorite";
import { getCookie, setCookie } from "../../services";
import { IFavoriteContext, FavoriteProviderProviderProps } from "./types";

const FavoriteContext = React.createContext<IFavoriteContext | null>(null);

export function FavoriteProvider({ children }: FavoriteProviderProviderProps) {
  const [favoriteItems, setFavoriteItems] = useState<IFavoriteItem[]>([]);

  useEffect(() => {
    const savedFavorites = getCookie("favorite-items");

    const favoriteProducts = savedFavorites
      ? (JSON.parse(savedFavorites) as IFavoriteItem[])
      : [];

    if (favoriteProducts) {
      setFavoriteItems(favoriteProducts);
    }
  }, []);

  const totalItemsCount = useMemo(() => {
    return favoriteItems.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);
  }, [favoriteItems]);

  const getTotalItems = (items: IFavoriteItem[]) => {
    return items.reduce(
      (acumulator: number, item) => acumulator + item.amount,
      0
    );
  };

  function handleAddToFavorites(clickedItem: IFavoriteItem) {
    const isItemInFavorites = favoriteItems.some(
      (item) => item.product_id === clickedItem.product_id
    );

    if (isItemInFavorites) {
      const updatedFavoriteItems = favoriteItems.map((item) =>
        item.product_id === clickedItem.product_id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setFavoriteItems(updatedFavoriteItems);
    } else {
      const newFavoriteItem = { ...clickedItem, amount: 1 };
      const newFavoriteItems = [...favoriteItems, newFavoriteItem];
      setFavoriteItems(newFavoriteItems);
      const favoriteArray = JSON.stringify(newFavoriteItems);
      setCookie("favorite-items", favoriteArray, {
        expires: 7,
        path: "/",
      });
    }
  }

  const removeItemFromFavorites = (product_id: string) => {
    const filteredFavoriteItems = favoriteItems.filter(
      (item) => item.product_id !== product_id
    );
    const favoriteArray = JSON.stringify(filteredFavoriteItems);
    setCookie("favorite-items", favoriteArray, {
      expires: 7,
      path: "/",
    });
    setFavoriteItems(filteredFavoriteItems);
  };

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
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
