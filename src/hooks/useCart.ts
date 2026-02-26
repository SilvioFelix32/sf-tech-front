import { useCartStore } from "../stores/cartStore";
import { ICartContext } from "../interfaces/ICart";
import { useMemo } from "react";

export const useCart = (): ICartContext => {
  const cartItems = useCartStore((state) => state.cartItems);
  const handleAddToCart = useCartStore((state) => state.handleAddToCart);
  const handleUpdateAmountProduct = useCartStore((state) => state.handleUpdateAmountProduct);
  const handleRemoveFromCart = useCartStore((state) => state.handleRemoveFromCart);
  const deleteItemFromCart = useCartStore((state) => state.deleteItemFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  const totalItemsCount = useMemo(() => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce(
      (accumulator, item) => accumulator + (item.amount || 0),
      0
    );
  }, [cartItems]);

  const cartTotalPrice = useMemo(() => {
    return cartItems
      .reduce((accumulator, item) => {
        const amount = item.amount || 0;
        const price = item.price || 0;
        const discount = item.discount || 0;
        const totalPrice = amount * price - discount;
        return accumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [cartItems]);

  const cartTotalPriceWithoutDiscount = useMemo(() => {
    return cartItems
      .reduce((accumulator, item) => {
        const amount = item.amount || 0;
        const price = item.price || 0;
        const totalPrice = amount * price;
        return accumulator + totalPrice;
      }, 0)
      .toFixed(2);
  }, [cartItems]);

  return {
    cartItems,
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
