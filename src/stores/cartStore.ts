import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItemType, ICartContext } from "../services/cart";
import { getCookie, setCookie } from "../services/cookie-service";

interface CartState {
  cartItems: CartItemType[];
  getTotalItems: (items: CartItemType[]) => number;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleUpdateAmountProduct: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (product_id: string) => void;
  deleteItemFromCart: (product_id: string) => void;
  clearCart: () => void;
}

const updateCartCookie = (newCart: CartItemType[]) => {
  if (typeof window === "undefined") return;
  setCookie("shop-cart", JSON.stringify(newCart), {
    expires: 7,
    path: "/",
  });
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      getTotalItems: (items: CartItemType[]): number => {
        return items.reduce(
          (accumulator: number, item) => accumulator + (item.amount || 0),
          0
        );
      },

      handleAddToCart: (clickedItem: CartItemType) => {
        const { cartItems } = get();
        const newCart = [...cartItems, { ...clickedItem, amount: 1 }];
        updateCartCookie(newCart);
        set({ cartItems: newCart });
      },

      handleUpdateAmountProduct: (clickedItem: CartItemType) => {
        const { cartItems } = get();
        const isItemInCart = cartItems.find(
          (item) => item.product_id === clickedItem.product_id
        );

        if (isItemInCart) {
          const newCart = cartItems.map((item) =>
            item.product_id === clickedItem.product_id
              ? { ...item, amount: (item.amount || 0) + 1 }
              : item
          );
          updateCartCookie(newCart);
          set({ cartItems: newCart });
        }
      },

      handleRemoveFromCart: (product_id: string) => {
        const { cartItems } = get();
        const newCart = cartItems.reduce(
          (accumulator, item) => {
            if (item.product_id === product_id) {
              if ((item.amount || 0) === 1) return accumulator;
              return [...accumulator, { ...item, amount: (item.amount || 0) - 1 }];
            } else {
              return [...accumulator, item];
            }
          },
          [] as CartItemType[]
        );
        updateCartCookie(newCart);
        set({ cartItems: newCart });
      },

      deleteItemFromCart: (product_id: string) => {
        const { cartItems } = get();
        const newCart = cartItems.filter(
          (item) => item.product_id !== product_id
        );
        updateCartCookie(newCart);
        set({ cartItems: newCart });
      },

      clearCart: () => {
        updateCartCookie([]);
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: {
        getItem: (name) => {
          if (typeof window === "undefined") return null;
          const value = getCookie("shop-cart");
          if (!value) return null;
          try {
            const parsed = JSON.parse(value);
            return { state: { cartItems: Array.isArray(parsed) ? parsed : [] } };
          } catch {
            return { state: { cartItems: [] } };
          }
        },
        setItem: (name, value) => {
          if (typeof window === "undefined") return;
          updateCartCookie(value.state.cartItems);
        },
        removeItem: (name) => {
          if (typeof window === "undefined") return;
          updateCartCookie([]);
        },
      },
    }
  )
);

