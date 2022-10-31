import React, { useState } from "react";
import { useCart } from "../../../context";
//components
import { CartModal } from "../..";
import { BiCart } from "react-icons/bi";
//styles
import { CartValue, Content, Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CartButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { totalItemsCount } = useCart();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper {...rest} onClick={() => setOpenModal(true)}>
        <Content>
          <BiCart />
          <CartValue>{totalItemsCount}</CartValue>
        </Content>
      </Wrapper>
      <CartModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
