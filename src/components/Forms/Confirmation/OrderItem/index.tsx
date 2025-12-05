import Image from "next/image";
import { ISaleItem } from "../../../../interfaces";
import { formatPrice } from "../../../../utils";
import { ItemContainer, ItemImage, ItemContent, ItemName, ItemSpecs, ItemQuantity, ItemPrice } from "./styles";

interface OrderItemProps {
  item: ISaleItem;
}

export function OrderItem({ item }: OrderItemProps) {
  return (
    <ItemContainer>
      <ItemImage>
        <Image
          src={item.url_banner || "https://i.imgur.com/2HFGvvT.png"}
          alt={item.title}
          width={80}
          height={80}
          style={{ objectFit: "contain" }}
        />
      </ItemImage>
      <ItemContent>
        <ItemName>{item.title}</ItemName>
        {item.subtitle && <ItemSpecs>{item.subtitle}</ItemSpecs>}
        <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
      </ItemContent>
      <ItemPrice>R$ {formatPrice(item.total_value)}</ItemPrice>
    </ItemContainer>
  );
}

