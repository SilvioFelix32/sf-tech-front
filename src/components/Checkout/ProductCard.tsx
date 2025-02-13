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
import { formatPrice } from "../../utils/formatPrice";

interface ProductCardProps {
  item: CartItemType;
  onRemove?: (id: string) => void;
  addButton?: boolean;
  removeButton?: boolean;
  style?: React.CSSProperties;
}

export const ProductCard = ({
  style,
  item,
  onRemove,
  addButton = true,
  removeButton = true,
}: ProductCardProps) => (
  <Product>
    <Image
      src={item.urlBanner}
      alt={item.urlBanner}
      width={100}
      height={100}
      className="image"
    />
    <ProductContent style={style}>
      <InfoText>{item.title}</InfoText>
      <InfoText size="0.6rem">{item.subtitle}</InfoText>
    </ProductContent>
    {addButton && (
      <ProductQuantity>
        <BtnAddOrRemove product={item} />
      </ProductQuantity>
    )}
    <ProductValue>
      <InfoText>
        R$ {formatPrice(item.amount * item.price - item.discount)}
      </InfoText>
      {removeButton && (
        <Button onClick={() => onRemove(item.product_id)}>
          <BsXLg />
        </Button>
      )}
    </ProductValue>
  </Product>
);
