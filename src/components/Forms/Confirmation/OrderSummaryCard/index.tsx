import { ISale } from "../../../../interfaces";
import { formatPrice } from "../../../../utils";
import { OrderItem } from "../OrderItem";
import { CardContainer, CardHeader, CardTitle, TotalPrice, ItemsList } from "./styles";

interface OrderSummaryCardProps {
  sale: ISale;
}

export function OrderSummaryCard({ sale }: OrderSummaryCardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Resumo da Compra:</CardTitle>
        <TotalPrice>Total: R$ {formatPrice(sale.total)}</TotalPrice>
      </CardHeader>
      <ItemsList>
        {sale.items.map((item, index) => (
          <OrderItem key={`${item.product_id}-${index}`} item={item} />
        ))}
      </ItemsList>
    </CardContainer>
  );
}

