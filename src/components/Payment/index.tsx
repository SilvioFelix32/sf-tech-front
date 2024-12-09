import { AuthContext, useCart } from "../../context";
import Image from "next/image";
import { IProduct } from "../../types";
import { formatNumber } from "../../utils/functions";
import { useContext } from "react";
import { DeliveryMethod } from "./ClientDelivery";
import { CardForm } from "./Card";
import router from "next/router";
import { PriceDetail } from "../Checkout/PriceDetail";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import {
  Wrapper,
  Title,
  Content,
  PaymentOptions,
  Button,
  ButtonWrapper,
} from "./styles";
import {
  ButtonPay,
  InfoText,
  PaymentWrapper,
  SubTotalWrapper,
  Totals,
} from "../Checkout/styles";

export function PaymentForm() {
  const { user } = useContext(AuthContext);
  const { cartItems, cartTotalPriceWithoutDiscount, cartTotalPrice } =
    useCart();

  return user ? (
    <Wrapper>
      <Content>
        <Title>Endereço de entrega:</Title>
        <DeliveryMethod user={user} />
        <PaymentOptions>
          <Title>Forma de pagamento:</Title>
          <CAccordion>
            <CAccordionItem itemKey={1} onClick={() => {}}>
              <CAccordionHeader>Cartão de Crédito</CAccordionHeader>
              <CAccordionBody>
                <CardForm user={user} />
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>Cartão de Débito</CAccordionHeader>
              <CAccordionBody>
                <CardForm user={user} />
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </PaymentOptions>
      </Content>
      <PaymentWrapper>
        <SubTotalWrapper
          style={{
            justifyContent: "space-around",
            borderTop: "none",
          }}
        >
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start" }}
          >
            Itens do seu carrinho
          </InfoText>
          {cartItems.map((item: IProduct) => (
            <div
              key={item.product_id}
              style={{ display: "flex", width: "100%" }}
            >
              <Image
                key={item.product_id}
                alt="item"
                src={item.urlBanner}
                width={60}
                height={60}
              />
              <PriceDetail
                label={item.title}
                value={`R$ ${formatNumber(item.price)}`}
              />
            </div>
          ))}
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
            value={`R$ ${formatNumber(Number(cartTotalPriceWithoutDiscount))}`}
          />
          <PriceDetail
            label="Taxa de entrega:"
            value={`R$ ${formatNumber(10)}`}
            strikeThrough
          />
          <PriceDetail
            label="Desconto:"
            value={`R$ ${formatNumber(
              Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice)
            )}`}
          />
        </SubTotalWrapper>
        <Totals>
          <InfoText weight={600}>Total:</InfoText>
          <InfoText weight={600}>
            R$ {formatNumber(Number(cartTotalPrice))}
          </InfoText>
        </Totals>
        <ButtonWrapper>
          <Button onClick={() => router.push("/checkout")}>
            Voltar para o carrinho
          </Button>
          <ButtonPay
            style={{ borderBottomLeftRadius: "0" }}
            onClick={() => router.push("/confirmation")}
            disabled={Number(cartTotalPrice) <= 0}
          >
            Confirmar Pagamento
          </ButtonPay>
        </ButtonWrapper>
      </PaymentWrapper>
    </Wrapper>
  ) : (
    <Wrapper style={{ flexDirection: "column", alignItems: "center" }}>
      <Title>Faça login primeiro para poder continuar com a compra:</Title>
      <Button
        style={{ width: "30%", marginTop: "15px", borderRadius: "6px" }}
        onClick={() => router.push("/signIn")}
      >
        Login
      </Button>
    </Wrapper>
  );
}
