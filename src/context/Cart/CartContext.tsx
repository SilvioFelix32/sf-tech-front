import React, { createContext, useContext, useMemo, useState } from "react";
import { CartItemType, ICartContext, CartProviderProps } from "./types";
import { getCookie, setCookie } from "../../services";

const CartContext = createContext({} as ICartContext);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const savedCart = getCookie("shop-cart");

    try {
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("CartProvider.Parse Cart:", error);
      return [];
    }
  });

  const updateCartCookie = (newCart: CartItemType[]) => {
    setCookie("shop-cart", JSON.stringify(newCart), {
      expires: 7,
      path: "/",
    });
  };

  const totalItemsCount = useMemo(() => {
    if (!Array.isArray(cartItems)) return 0;

    return cartItems.reduce((acumulator, item) => acumulator + item.amount, 0);
  }, [cartItems]);

  const cartTotalPrice = useMemo(() => {
    return cartItems
      .reduce((acumulator, item) => {
        const totalPrice = item.amount * item.price - item.discount;
        return acumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [cartItems]);

  const cartTotalPriceWithoutDiscount = useMemo(() => {
    return cartItems
      .reduce((acumulator, item) => {
        const totalPrice = item.amount * item.price;
        return acumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [cartItems]);

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce(
      (acumulator: number, item) => acumulator + item.amount,
      0
    );
  };

  function handleAddToCart(clickedItem: CartItemType) {
    return setCartItems((previousState) => {
      const newCart = [...previousState, { ...clickedItem, amount: 1 }];
      updateCartCookie(newCart);
      return newCart;
    });
  }

  function handleUpdateAmountProduct(clickedItem: CartItemType) {
    setCartItems((previousState) => {
      const isItemInCart = previousState.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        const newCart = previousState.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        updateCartCookie(newCart);

        return newCart;
      }
      return previousState;
    });
  }

  function handleRemoveFromCart(product_id: string) {
    setCartItems((previousState) => {
      const newCart = previousState.reduce((acumulator, item) => {
        if (item.product_id === product_id) {
          if (item.amount === 1) return acumulator;
          return [...acumulator, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acumulator, item];
        }
      }, [] as CartItemType[]);

      updateCartCookie(newCart);

      return newCart;
    });
  }

  function deleteItemFromCart(product_id: string) {
    return setCartItems((previousState) => {
      const newCart = previousState.filter(
        (item) => item.product_id !== product_id
      );
      setCookie("shop-cart", JSON.stringify(newCart), {
        expires: 7,
        path: "/",
      });
      return newCart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        getTotalItems,
        handleRemoveFromCart,
        handleUpdateAmountProduct,
        deleteItemFromCart,
        totalItemsCount,
        cartTotalPrice,
        cartTotalPriceWithoutDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
