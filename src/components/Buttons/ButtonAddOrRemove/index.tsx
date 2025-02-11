import React from "react";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
import { Wrapper, Content, Text, Button } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  product: CartItemType;
}

export const BtnAddOrRemove = ({ product }: ButtonProps) => {
  const { handleRemoveFromCart, handleUpdateAmountProduct } = useCart();

  return (
    <Wrapper>
      <Text>{product.amount}</Text>
      <Content>
        <Button
          type="button"
          className="Remove"
          onClick={() => {
            handleRemoveFromCart(product.product_id);
          }}
        >
          -
        </Button>
        <Button
          type="button"
          className="Add"
          onClick={() => handleUpdateAmountProduct(product)}
        >
          +
        </Button>
      </Content>
    </Wrapper>
  );
};
