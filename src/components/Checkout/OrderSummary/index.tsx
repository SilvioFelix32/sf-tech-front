import { useRouter } from "next/router";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../utils/formatPrice";
import { PriceDetail } from "../PriceDetail";
import {
  OrderSummaryWrapper,
  OrderTitle,
  OrderDetails,
  OrderTotal,
  ConfirmButton,
} from "./styles";

export function OrderSummary() {
  const router = useRouter();
  const { cartTotalPrice, cartTotalPriceWithoutDiscount } = useCart();

  const deliveryFee = 10;
  const discount =
    Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice);

  return (
    <OrderSummaryWrapper>
      <OrderTitle>Detalhes da sua compra:</OrderTitle>

      <OrderDetails>
        <PriceDetail
          label="Valor total do carrinho:"
          value={`R$ ${formatPrice(cartTotalPriceWithoutDiscount)}`}
        />
        <PriceDetail
          label="Taxa de entrega:"
          value={`R$ ${formatPrice(deliveryFee)}`}
          strikeThrough
        />
        <PriceDetail label="Desconto:" value={`R$ ${formatPrice(discount)}`} />
      </OrderDetails>

      <OrderTotal>
        <span>Total:</span>
        <span>R$ {formatPrice(cartTotalPrice)}</span>
      </OrderTotal>

      <ConfirmButton
        onClick={() => router.push("/payment")}
        disabled={Number(cartTotalPrice) <= 0}
      >
        Confirmar Compra
      </ConfirmButton>
    </OrderSummaryWrapper>
  );
}

