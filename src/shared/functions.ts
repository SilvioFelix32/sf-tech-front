import { useState, useEffect } from "react";
import { userService } from "../services";
import { IUser, IProduct } from "../types";

export function useUser(company_id, user_id) {
  const [myUser, setMyUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (company_id && user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setMyUser(data);
      });
    }
  }, [company_id, user_id]);

  return myUser;
}

// Extrair a lógica para calcular o subtotal e desconto do carrinho
export function calculateCartTotals(cartItems: IProduct[]) {
  const cartSubtotal = cartItems.reduce((acc, item: IProduct) => {
    acc += item?.value;
    return acc;
  }, 0);

  const cartDiscount = cartItems.reduce((acc, item: IProduct) => {
    acc += item?.discount;
    return acc;
  }, 0);

  const cartTotal = cartSubtotal - cartDiscount;

  return { cartSubtotal, cartDiscount, cartTotal };
}
