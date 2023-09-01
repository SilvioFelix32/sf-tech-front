import { useState, useEffect } from "react";
import { userService } from "../services";
import { IUser, IProduct } from "../types";

export function useUser(company_id: string, user_id: string) {
  const [myUser, setMyUser] = useState<IUser | null>(null);

  useEffect(() => {
    console.log("company", company_id);
    console.log("user_id", user_id);
    if (company_id && user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setMyUser(data);
      });
    }
  }, [company_id, user_id]);

  console.log("myUser", myUser);
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

export function formatNumber(value: number | string) {
  // Formata o número com ponto para separação de milhares e vírgula com duas casas decimais
  let formatedNumber = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Substitui a vírgula por zeros quando os dois últimos dígitos são zero
  formatedNumber = formatedNumber.replace(/,00$/, ",0").replace(/,0$/, ",00");

  return formatedNumber;
}
