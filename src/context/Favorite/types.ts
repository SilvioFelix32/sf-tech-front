import { ReactNode } from "react";
import { IFavoriteItem } from "../../types";

export interface IFavoriteContext {
  favoriteItems: IFavoriteItem[];
  handleAddToFavorites: (clickedItem: IFavoriteItem) => void;
  getTotalItems: (items: IFavoriteItem[]) => number;
  removeItemFromFavorites: (product_id: string) => void;
  totalItemsCount: number;
}

export interface FavoriteProviderProviderProps {
  children: ReactNode;
}
