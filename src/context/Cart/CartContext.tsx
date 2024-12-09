import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartItemType } from "./types";
import { getCookie, setCookie } from "../../services";

type ProviderProps = {
  children: ReactNode;
};

interface ICartContext {
  cartItems: CartItemType[];
  totalItemsCount: number;
  cartTotalPrice: string;
  cartTotalPriceWithoutDiscount: string;
  getTotalItems: (items: CartItemType[]) => number;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleUpdateAmountProduct: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (product_id: string) => void;
  deleteItemFromCart: (product_id: string) => void;
}

const CartContext = createContext({} as ICartContext);

function CartProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  useEffect(() => {
    const savedCart = getCookie("shop-cart");

    const savedProducts = savedCart
      ? (JSON.parse(savedCart) as CartItemType[])
      : [];

    if (savedProducts) {
      setCartItems(savedProducts);
    }
  }, []);

  const totalItemsCount = useMemo(() => {
    return cartItems.reduce((acumulator, item) => {
      return acumulator + item.amount;
    }, 0);
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
      setCookie("shop-cart", JSON.stringify(newCart), {
        expires: 7,
        path: "/",
      });
      return newCart;
    });
  }

  function handleUpdateAmountProduct(clickedItem: CartItemType) {
    return setCartItems((previousState) => {
      const isItemInCart = previousState.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        const newCart = previousState.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        setCookie("shop-cart", JSON.stringify(newCart), {
          expires: 7,
          path: "/",
        });
        return newCart;
      }
    });
  }

  function handleRemoveFromCart(product_id: string) {
    return setCartItems((previousState) =>
      previousState.reduce((acumulator, item) => {
        if (item.product_id === product_id) {
          if (item.amount === 1) return acumulator;
          return [...acumulator, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acumulator, item];
        }
      }, [] as CartItemType[])
    );
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
