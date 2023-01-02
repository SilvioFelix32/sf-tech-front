import React, { useState } from "react";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
//styles
import {
  Button,
  ButtonAdd,
  ButtonRemove,
  Content,
  ShopButton,
  Wrapper,
  Text,
} from "./styles";

interface ButtonProps {
  product: CartItemType;
}

export function BuyButton({ product }: ButtonProps) {
  const [buttonType, setButtonType] = useState("buy");
  const {
    cartItems,
    handleRemoveFromCart,
    handleAddToCart,
    handleUpdateAmountProduct,
  } = useCart();

  function handleReset() {
    if (
      cartItems.length === 0 ||
      !cartItems.some(
        (cartItem: CartItemType) => cartItem.product_id === product.product_id
      )
    )
      setButtonType("buy");
  }

  return (
    <Wrapper>
      {buttonType === "buy" && (
        <Button
          onClick={() => {
            handleAddToCart(product);
            setButtonType("howMany");
          }}
        >
          <ShopButton>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Comprar
          </ShopButton>
        </Button>
      )}

      {buttonType === "howMany" && (
        <Content>
          <ButtonRemove
            onClick={() => {
              handleRemoveFromCart(product.product_id);
              handleReset();
            }}
          >
            -
          </ButtonRemove>
          <Text>
            {cartItems.find(
              (cartItem: CartItemType) =>
                cartItem.product_id === product.product_id
            )?.amount || setButtonType("buy")}
          </Text>
          <ButtonAdd onClick={() => handleUpdateAmountProduct(product)}>
            +
          </ButtonAdd>
        </Content>
      )}
    </Wrapper>
  );
}
