import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IFavoriteItem } from "../interfaces/IFavorite";
import { IFavoriteContext } from "../services/favorite";
import { getCookie, setCookie } from "../services/cookie-service";

interface FavoriteState {
  favoriteItems: IFavoriteItem[];
  handleAddToFavorites: (clickedItem: IFavoriteItem) => void;
  getTotalItems: (items: IFavoriteItem[]) => number;
  removeItemFromFavorites: (product_id: string) => void;
}

const updateFavoriteCookie = (newFavorites: IFavoriteItem[]) => {
  if (typeof window === "undefined") return;
  setCookie("favorite-items", JSON.stringify(newFavorites), {
    expires: 7,
    path: "/",
  });
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favoriteItems: [],

      getTotalItems: (items: IFavoriteItem[]): number => {
        return items.reduce(
          (accumulator: number, item) => accumulator + (item.amount || 0),
          0
        );
      },

      handleAddToFavorites: (clickedItem: IFavoriteItem) => {
        const { favoriteItems } = get();
        const isItemInFavorites = favoriteItems.some(
          (item) => item.product_id === clickedItem.product_id
        );

        if (isItemInFavorites) {
          const updatedFavoriteItems = favoriteItems.map((item) =>
            item.product_id === clickedItem.product_id
              ? { ...item, amount: (item.amount || 0) + 1 }
              : item
          );
          updateFavoriteCookie(updatedFavoriteItems);
          set({ favoriteItems: updatedFavoriteItems });
        } else {
          const newFavoriteItem = { ...clickedItem, amount: 1 };
          const newFavoriteItems = [...favoriteItems, newFavoriteItem];
          updateFavoriteCookie(newFavoriteItems);
          set({ favoriteItems: newFavoriteItems });
        }
      },

      removeItemFromFavorites: (product_id: string) => {
        const { favoriteItems } = get();
        const filteredFavoriteItems = favoriteItems.filter(
          (item) => item.product_id !== product_id
        );
        updateFavoriteCookie(filteredFavoriteItems);
        set({ favoriteItems: filteredFavoriteItems });
      },
    }),
    {
      name: "favorite-storage",
      storage: {
        getItem: (name) => {
          if (typeof window === "undefined") return null;
          const value = getCookie("favorite-items");
          if (!value) return null;
          try {
            const parsed = JSON.parse(value);
            return {
              state: { favoriteItems: Array.isArray(parsed) ? parsed : [] },
            };
          } catch {
            return { state: { favoriteItems: [] } };
          }
        },
        setItem: (name, value) => {
          if (typeof window === "undefined") return;
          updateFavoriteCookie(value.state.favoriteItems);
        },
        removeItem: (name) => {
          if (typeof window === "undefined") return;
          updateFavoriteCookie([]);
        },
      },
    }
  )
);

