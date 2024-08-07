import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";
import { CartItemType } from "./types";

const CartContext = React.createContext(null);

interface ProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: ProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  useEffect(() => {
    const savedCart = Cookies.get("shop-cart");

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
      Cookies.set("shop-cart", JSON.stringify(newCart), {
        expires: 7,
        path: "/",
      });
      return newCart;
    });
  }

  function handleUpdateAmountProduct(clickedItem: CartItemType) {
    return setCartItems((previousState) => {
      //1. Is the item already added in the cart? // se já tiver um, vai adicionar mais um item
      const isItemInCart = previousState.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        const newCart = previousState.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 } //fiz um spread(...) do item, pego o valor, e adiciono +1 ao clique
            : item
        );
        //se ja houver retorna esse função
        Cookies.set("shop-cart", JSON.stringify(newCart), {
          expires: 7,
          path: "/",
        });
        return newCart;
      }
    });
  }

  function handleRemoveFromCart(product_id: string) {
    return setCartItems(
      (
        previousState //valor antigo
      ) =>
        previousState.reduce((acumulator, item) => {
          //damos um reduce no valor antigo
          if (item.product_id === product_id) {
            //se o id do item for igual ao (id:number) da função handleRemoveFromCart então retorna
            if (item.amount === 1) return acumulator; //se o valor for 1, retorna o acumulador e para aqui, deletando o item do array
            return [...acumulator, { ...item, amount: item.amount - 1 }]; // do contrario dou um spread(...) no item e tiro um -1 do valor total
          } else {
            return [...acumulator, item]; // e então retornamos o valor do array
          }
        }, [] as CartItemType[]) // o acumulador começa com um array[] vazio, to tipo CartItemType
    );
  }

  function deleteItemFromCart(product_id: string) {
    return setCartItems((previousState) => {
      const newCart = previousState.filter(
        (item) => item.product_id !== product_id
      );
      Cookies.set("shop-cart", JSON.stringify(newCart), {
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
