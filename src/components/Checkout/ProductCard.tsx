import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import {
  Product,
  ProductContent,
  ProductQuantity,
  ProductValue,
  Button,
  InfoText,
} from "./styles";
import { BtnAddOrRemove } from "../Buttons";
import { CartItemType } from "../../context/Cart/types";
import { formatNumber } from "../../utils/functions";

interface ProductCardProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export const ProductCard = ({ item, onRemove }: ProductCardProps) => (
  <Product>
    <Image
      src={item.urlBanner}
      alt={item.urlBanner}
      width={100}
      height={100}
      className="image"
    />
    <ProductContent>
      <InfoText>{item.title}</InfoText>
      <InfoText size="0.6rem">{item.subtitle}</InfoText>
    </ProductContent>
    <ProductQuantity>
      <BtnAddOrRemove product={item} />
    </ProductQuantity>
    <ProductValue>
      <InfoText>
        R$ {formatNumber(item.amount * item.price - item.discount)}
      </InfoText>
    </ProductValue>
    <Button onClick={() => onRemove(item.product_id)}>
      <BsXLg />
    </Button>
  </Product>
);
