import { useRouter } from "next/router";
import { useCart } from "../../../hooks/useCart";
import { useFavorite } from "../../../hooks/useFavorite";
import { BuyButton } from "../../Buttons";
import { IProduct } from "../../../interfaces/IProducts";
import { BsHeart, BsHeartFill, BsShare } from "react-icons/bs";
import {
  ActionButtons,
  SecondaryButton,
  IconButtons,
  IconButton,
} from "../../../styles/pages/product";

interface ProductActionButtonsProps {
  product: IProduct;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function ProductActionButtons({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductActionButtonsProps) {
  const router = useRouter();
  const { totalItemsCount } = useCart();

  return (
    <ActionButtons>
      <BuyButton product={product} styles={{ height: "48px" }} />
      <SecondaryButton
        onClick={() => totalItemsCount > 0 && router.push("/checkout")}
        disabled={totalItemsCount <= 0}
      >
        CONFIRMAR COMPRA
      </SecondaryButton>
      <IconButtons>
        <IconButton onClick={onToggleFavorite}>
          {isFavorite ? <BsHeartFill /> : <BsHeart />}
        </IconButton>
        <IconButton>
          <BsShare />
        </IconButton>
      </IconButtons>
    </ActionButtons>
  );
}

