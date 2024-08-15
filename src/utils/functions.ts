import { useState, useEffect } from "react";
import { userService } from "../services";
import { IUser, IProduct } from "../types";

export function useUser(company_id: string, user_id: string) {
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

export function formatNumber(value: number | string) {
  const formatedValueToNumber = Number(value);
  let formatedNumber = formatedValueToNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  formatedNumber = formatedNumber.replace(/,00$/, ",0").replace(/,0$/, ",00");

  return formatedNumber;
}
