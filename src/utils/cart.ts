import { IProduct } from "../types";

export function calculateCartTotals(cartItems: IProduct[]) {
  const cartSubtotal = cartItems.reduce((acc, item: IProduct) => {
    acc += item?.price;
    return acc;
  }, 0);

  const cartDiscount = cartItems.reduce((acc, item: IProduct) => {
    acc += item?.discount;
    return acc;
  }, 0);

  const cartTotal = cartSubtotal - cartDiscount;

  return { cartSubtotal, cartDiscount, cartTotal };
}
