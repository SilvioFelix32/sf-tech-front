import { useFavoriteStore } from "../stores/favoriteStore";
import { IFavoriteContext } from "../interfaces/IFavorite";
import { useMemo } from "react";

export const useFavorite = (): IFavoriteContext => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);
  const handleAddToFavorites = useFavoriteStore((state) => state.handleAddToFavorites);
  const removeItemFromFavorites = useFavoriteStore((state) => state.removeItemFromFavorites);
  const getTotalItems = useFavoriteStore((state) => state.getTotalItems);

  const totalItemsCount = useMemo(() => {
    return favoriteItems.reduce(
      (accumulator, item) => accumulator + (item.amount || 0),
      0
    );
  }, [favoriteItems]);

  return {
    favoriteItems,
    handleAddToFavorites,
    getTotalItems,
    removeItemFromFavorites,
    totalItemsCount,
  };
};
