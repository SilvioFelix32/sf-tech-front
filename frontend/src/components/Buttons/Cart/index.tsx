import React from "react";
import { BiCart } from "react-icons/bi";
import { useCart } from "../../../context";
//styles
import { CartValue, Content, Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CartButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { totalItemsCount } = useCart();
  return (
    <Wrapper {...rest}>
      <Content>
        <BiCart />
        <CartValue>{totalItemsCount}</CartValue>
      </Content>
    </Wrapper>
  );
};
