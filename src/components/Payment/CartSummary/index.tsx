import Image from "next/image";
import { CartItemType } from "../../../services/cart";
import { formatPrice } from "../../../utils/formatPrice";
import {
  SidebarCard,
  CartItemWrapper,
  CartItemImage,
  CartItemContent,
  CartItemName,
  CartItemPrice,
  SummaryTitle,
  PurchaseDetailsCard,
  SummarySection,
  DetailRow,
  DetailLabel,
  DetailValue,
  Divider,
  TotalSection,
  TotalLabel,
  TotalValue,
} from "./styles";
import { Button, ButtonWrapper } from "../styles";

interface CartSummaryProps {
  cartItems: CartItemType[];
  cartTotalPriceWithoutDiscount: string;
  cartTotalPrice: string;
  isLoading: boolean;
  onBackToCart: () => void;
  onConfirmPayment: () => void;
}

export function CartSummary({
  cartItems,
  cartTotalPriceWithoutDiscount,
  cartTotalPrice,
  isLoading,
  onBackToCart,
  onConfirmPayment,
}: CartSummaryProps) {
  return (
    <>
      <SidebarCard>
        <SummaryTitle>Itens do seu carrinho</SummaryTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {cartItems.map((item: CartItemType) => (
            <CartItemWrapper key={item.product_id}>
              <CartItemImage>
                <Image
                  alt={item.title || "Produto"}
                  src={item.urlBanner || "/placeholder.svg"}
                  fill
                  style={{ objectFit: "contain", padding: "4px" }}
                />
              </CartItemImage>
              <CartItemContent>
                <CartItemName>{item.title || "Produto sem nome"}</CartItemName>
                <CartItemPrice>
                  R$ {formatPrice(item.price || 0)}
                </CartItemPrice>
              </CartItemContent>
            </CartItemWrapper>
          ))}
        </div>
      </SidebarCard>

      <PurchaseDetailsCard>
        <SummaryTitle>Detalhes da sua compra:</SummaryTitle>
        <SummarySection>
          <DetailRow>
            <DetailLabel>Valor total do carrinho:</DetailLabel>
            <DetailValue $isBold>
              R$ {formatPrice(Number(cartTotalPriceWithoutDiscount))}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Taxa de entrega:</DetailLabel>
            <DetailValue $isBold>
              R$ {formatPrice(10)}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel $isTeal>Desconto:</DetailLabel>
            <DetailValue $isTeal $isBold>
              R$ {formatPrice(
                Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice)
              )}
            </DetailValue>
          </DetailRow>
        </SummarySection>
        <Divider />
        <TotalSection>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue>
            R$ {formatPrice(Number(cartTotalPrice))}
          </TotalValue>
        </TotalSection>
        <ButtonWrapper>
          <Button onClick={onBackToCart}>Voltar para o carrinho</Button>
          <Button
            onClick={onConfirmPayment}
            disabled={Number(cartTotalPrice) <= 0 || isLoading}
          >
            {isLoading ? "Processando..." : "Confirmar Pagamento"}
          </Button>
        </ButtonWrapper>
      </PurchaseDetailsCard>
    </>
  );
}

