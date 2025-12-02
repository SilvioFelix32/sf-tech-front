import { useState, useEffect, useCallback, useMemo } from "react";
import { getCookie, setCookie } from "../services/cookie-service";
import { CartItemType, ICartContext } from "../services/cart";

interface CartState {
  cartItems: CartItemType[];
}

const globalCartState: CartState = {
  cartItems: [],
};

const listeners = new Set<(state: CartState) => void>();

const updateGlobalState = (updates: Partial<CartState>) => {
  Object.assign(globalCartState, updates);
  listeners.forEach((listener) => listener({ ...globalCartState }));
};

const updateCartCookie = (newCart: CartItemType[]) => {
  setCookie("shop-cart", JSON.stringify(newCart), {
    expires: 7,
    path: "/",
  });
};

const initializeCart = (): CartItemType[] => {
  if (typeof window === "undefined") return [];

  const savedCart = getCookie("shop-cart");
  try {
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("useCart: Parse Cart error:", error);
    return [];
  }
};

export const useCart = (): ICartContext => {
  const [localState, setLocalState] = useState<CartState>(() => {
    if (globalCartState.cartItems.length === 0) {
      const initialCart = initializeCart();
      globalCartState.cartItems = initialCart;
    }
    return { ...globalCartState };
  });

  useEffect(() => {
    const listener = (state: CartState) => {
      setLocalState({ ...state });
    };

    listeners.add(listener);
    setLocalState({ ...globalCartState });

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const totalItemsCount = useMemo(() => {
    if (!Array.isArray(localState.cartItems)) return 0;
    return localState.cartItems.reduce(
      (accumulator, item) => accumulator + (item.amount || 0),
      0
    );
  }, [localState.cartItems]);

  const cartTotalPrice = useMemo(() => {
    return localState.cartItems
      .reduce((accumulator, item) => {
        const amount = item.amount || 0;
        const price = item.price || 0;
        const discount = item.discount || 0;
        const totalPrice = amount * price - discount;
        return accumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [localState.cartItems]);

  const cartTotalPriceWithoutDiscount = useMemo(() => {
    return localState.cartItems
      .reduce((accumulator, item) => {
        const amount = item.amount || 0;
        const price = item.price || 0;
        const totalPrice = amount * price;
        return accumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [localState.cartItems]);

  const getTotalItems = useCallback((items: CartItemType[]): number => {
    return items.reduce(
      (accumulator: number, item) => accumulator + (item.amount || 0),
      0
    );
  }, []);

  const handleAddToCart = useCallback((clickedItem: CartItemType) => {
    const newCart = [...globalCartState.cartItems, { ...clickedItem, amount: 1 }];
    updateCartCookie(newCart);
    updateGlobalState({ cartItems: newCart });
  }, []);

  const handleUpdateAmountProduct = useCallback(
    (clickedItem: CartItemType) => {
      const isItemInCart = globalCartState.cartItems.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        const newCart = globalCartState.cartItems.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: (item.amount || 0) + 1 }
            : item
        );
        updateCartCookie(newCart);
        updateGlobalState({ cartItems: newCart });
      }
    },
    []
  );

  const handleRemoveFromCart = useCallback((product_id: string) => {
    const newCart = globalCartState.cartItems.reduce(
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
    updateGlobalState({ cartItems: newCart });
  }, []);

  const deleteItemFromCart = useCallback((product_id: string) => {
    const newCart = globalCartState.cartItems.filter(
      (item) => item.product_id !== product_id
    );
    updateCartCookie(newCart);
    updateGlobalState({ cartItems: newCart });
  }, []);

  const clearCart = useCallback(() => {
    updateCartCookie([]);
    updateGlobalState({ cartItems: [] });
  }, []);

  return {
    cartItems: localState.cartItems,
    totalItemsCount,
    cartTotalPrice,
    cartTotalPriceWithoutDiscount,
    getTotalItems,
    handleAddToCart,
    handleUpdateAmountProduct,
    handleRemoveFromCart,
    deleteItemFromCart,
    clearCart,
  };
};

