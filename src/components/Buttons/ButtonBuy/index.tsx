import React, { CSSProperties, useEffect, useState } from "react";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
//styles
import {
  Button,
  ButtonAdd,
  ButtonRemove,
  Content,
  Wrapper,
  Text,
} from "./styles";

interface ButtonProps {
  product: CartItemType;
  styles?: CSSProperties;
}

export function BuyButton({ product, styles }: ButtonProps) {
  const [buttonType, setButtonType] = useState("buy");
  const {
    cartItems,
    handleRemoveFromCart,
    handleAddToCart,
    handleUpdateAmountProduct,
  } = useCart();

  useEffect(() => {
    const isInCart = cartItems.some(
      (cartItem: CartItemType) => cartItem.product_id === product.product_id
    );
    if (isInCart) {
      setButtonType("howMany");
    } else {
      setButtonType("buy");
    }
  }, [cartItems, product.product_id]);

  function handleReset() {
    if (
      cartItems.length === 0 ||
      !cartItems.some(
        (cartItem: CartItemType) => cartItem.product_id === product.product_id
      )
    ) {
      setButtonType("buy");
    }
  }

  return (
    <Wrapper style={styles}>
      {buttonType === "buy" && (
        <Button
          onClick={() => {
            handleAddToCart(product);
            setButtonType("howMany");
          }}
        >
          Comprar
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
            )?.amount || 0}
          </Text>
          <ButtonAdd onClick={() => handleUpdateAmountProduct(product)}>
            +
          </ButtonAdd>
        </Content>
      )}
    </Wrapper>
  );
}
