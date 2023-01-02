import React from "react";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
import { Wrapper, Content } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  product: CartItemType;
}

export const BtnAddOrRemove = ({ product }: ButtonProps) => {
  const { handleRemoveFromCart, handleUpdateAmountProduct } = useCart();

  return (
    <Wrapper>
      <button
        className="Remove"
        onClick={() => {
          handleRemoveFromCart(product.product_id);
        }}
      >
        -
      </button>
      <Content>{product.amount}</Content>
      <button
        className="Add"
        onClick={() => handleUpdateAmountProduct(product)}
      >
        +
      </button>
    </Wrapper>
  );
};
