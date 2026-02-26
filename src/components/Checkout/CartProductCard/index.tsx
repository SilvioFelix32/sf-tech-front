import React from "react";
import Image from "next/image";
import { BsXLg, BsPlus, BsDash } from "react-icons/bs";
import { CartItemType } from "../../../interfaces/ICart";
import { formatPrice } from "../../../utils/formatPrice";
import { useCart } from "../../../hooks/useCart";
import {
  CartProductCard,
  ProductImageWrapper,
  ProductInfo,
  ProductTitle,
  ProductSubtitle,
  ProductPrice,
  RemoveButton,
  QuantitySection,
  QuantityControls,
  QuantityButton,
  QuantityValue,
} from "./styles";

interface CartProductCardProps {
  item: CartItemType;
  onRemove?: (id: string) => void;
}

export function CartProductCardComponent({
  item,
  onRemove,
}: CartProductCardProps) {
  const { handleUpdateAmountProduct, handleRemoveFromCart } = useCart();

  const itemPrice = item.price || 0;
  const itemDiscount = item.discount || 0;
  const finalPrice = itemPrice - itemDiscount;
  const totalPrice = (item.amount || 1) * finalPrice;

  const handleIncrease = () => {
    handleUpdateAmountProduct({ ...item, amount: (item.amount || 1) + 1 });
  };

  const handleDecrease = () => {
    if ((item.amount || 1) > 1) {
      handleUpdateAmountProduct({ ...item, amount: (item.amount || 1) - 1 });
    } else {
      handleRemoveFromCart(item.product_id);
    }
  };

  return (
    <CartProductCard>
      <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
        <ProductImageWrapper>
          <Image
            src={item.urlBanner || "https://i.imgur.com/2HFGvvT.png"}
            alt={item.title || "Produto"}
            fill
            style={{ objectFit: "contain" }}
          />
        </ProductImageWrapper>

        <ProductInfo>
          <ProductTitle>{item.title}</ProductTitle>
          {item.subtitle && <ProductSubtitle>{item.subtitle}</ProductSubtitle>}
        </ProductInfo>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
          <RemoveButton onClick={() => onRemove?.(item.product_id)}>
            <BsXLg />
          </RemoveButton>
          <ProductPrice>R$ {formatPrice(totalPrice)}</ProductPrice>
        </div>
      </div>

      <QuantitySection>
        <QuantityControls>
          <QuantityButton onClick={handleDecrease}>
            <BsDash />
          </QuantityButton>
          <QuantityValue>{item.amount}</QuantityValue>
          <QuantityButton onClick={handleIncrease}>
            <BsPlus />
          </QuantityButton>
        </QuantityControls>
      </QuantitySection>
    </CartProductCard>
  );
}

