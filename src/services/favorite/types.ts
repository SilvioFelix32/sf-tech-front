import { IFavoriteItem } from "../../interfaces/IFavorite";

export interface IFavoriteContext {
  favoriteItems: IFavoriteItem[];
  handleAddToFavorites: (clickedItem: IFavoriteItem) => void;
  getTotalItems: (items: IFavoriteItem[]) => number;
  removeItemFromFavorites: (product_id: string) => void;
  totalItemsCount: number;
}

