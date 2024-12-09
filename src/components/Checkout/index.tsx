import { formatNumber } from "../../utils/functions";
import { HighlightedProduct } from "../HighlightedProduct";
import { ProductCard } from "./ProductCard";
import { PriceDetail } from "./PriceDetail";
import { CartItemType } from "../../context/Cart/types";
import { useRouter } from "next/router";
import { useCart } from "../../context";
import {
  SectionTitle,
  Wrapper,
  MainSection,
  ProductsWrapper,
  PaymentWrapper,
  SubTotalWrapper,
  Totals,
  ButtonPay,
  Card,
  InfoText,
  Section,
  AddGiftButton,
} from "./styles";

export function Checkout() {
  const {
    cartItems,
    deleteItemFromCart,
    cartTotalPrice,
    cartTotalPriceWithoutDiscount,
  } = useCart();
  const router = useRouter();

  return (
    <Wrapper>
      <MainSection>
        <ProductsWrapper>
          <SectionTitle>Seu carrinho de compras</SectionTitle>
          {cartItems.length === 0 && <InfoText>Carrinho Vazio!</InfoText>}
          {cartItems.map((item: CartItemType) => (
            <ProductCard
              key={item.product_id}
              item={item}
              onRemove={deleteItemFromCart}
            />
          ))}
        </ProductsWrapper>
        <PaymentWrapper>
          <SubTotalWrapper
            style={{
              height: "15rem",
              justifyContent: "space-around",
              borderTop: "none",
            }}
          >
            <InfoText
              weight={600}
              size="1.2rem"
              style={{ alignSelf: "flex-start" }}
            >
              Está comprando de presente?
            </InfoText>
            <Card>
              Adicione uma embalagem de presente e <br />
              uma mensagem personalizada, por apenas R$ 5,00
              <AddGiftButton>Adicionar uma embalagem</AddGiftButton>
            </Card>
          </SubTotalWrapper>
          <SubTotalWrapper>
            <InfoText
              weight={600}
              size="1.2rem"
              style={{ alignSelf: "flex-start" }}
            >
              Detalhes da sua compra:
            </InfoText>
            <PriceDetail
              label="Valor total do carrinho:"
              value={`R$ ${formatNumber(cartTotalPriceWithoutDiscount)}`}
            />
            <PriceDetail
              label="Taxa de entrega:"
              value={`R$ ${formatNumber(10)}`}
              strikeThrough
            />
            <PriceDetail
              label="Desconto:"
              value={`R$ ${formatNumber(
                String(
                  Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice)
                )
              )}`}
            />
          </SubTotalWrapper>
          <Totals>
            <InfoText weight={600}>Total:</InfoText>
            <InfoText weight={600}>R$ {formatNumber(cartTotalPrice)}</InfoText>
          </Totals>
          <ButtonPay
            onClick={() => router.push("/payment")}
            disabled={Number(cartTotalPrice) <= 0}
          >
            Confirmar Compra
          </ButtonPay>
        </PaymentWrapper>
      </MainSection>
      <Section>
        <SectionTitle>Você talvez goste desses produtos!</SectionTitle>
        <HighlightedProduct />
      </Section>
    </Wrapper>
  );
}
