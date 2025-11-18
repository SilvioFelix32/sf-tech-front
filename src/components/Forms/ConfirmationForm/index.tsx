import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext, useCart } from "../../../context";
import { IProduct } from "../../../interfaces";
import { formatPrice } from "../../../utils";
import { PriceDetail } from "../../Checkout/PriceDetail";
import { SubTotalWrapper, InfoText } from "../../Checkout/styles";
import { DeliveryMethod } from "../../Payment/ClientDelivery";
import { ProductCard } from "../../Checkout/ProductCard";
import { Button, Wrapper, Title, Text, Content, ShoppingCart } from "./styles";

export function ConfirmationForm() {
  const { user } = useContext(AuthContext);
  const { cartItems, cartTotalPrice, cartTotalPriceWithoutDiscount } =
    useCart();
  const router = useRouter();

  return (
    <Wrapper>
      <Title>Seu pedido foi realizado com sucesso!</Title>
      <Title style={{ fontSize: "1.3rem" }}>Obrigado pela compra</Title>

      <Content
        style={{
          width: "50%",
        }}
      >
        <DeliveryMethod user={user} />
      </Content>

      <Content style={{ marginTop: "20px" }}>
        <ShoppingCart>
          <Text style={{ fontSize: "1.3rem", fontWeight: 500 }}>
            Itens da compra:
          </Text>
          {cartItems.map((item: IProduct) => (
            <ProductCard
              key={item.product_id}
              item={item}
              addButton={false}
              removeButton={false}
              style={{ width: "60%" }}
            />
          ))}
        </ShoppingCart>
        <SubTotalWrapper
          style={{
            width: "40%",
            padding: "20px",
            outline: "1px solid #33C1B3",
            borderRadius: "6px",
            borderTop: "none",
            marginTop: "30px",
          }}
        >
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start" }}
          >
            Detalhes da sua compra:
          </InfoText>
          <PriceDetail
            style={{ borderTop: "1px solid #33C1B3", marginTop: "10px" }}
            label="Valor total do carrinho:"
            value={`R$ ${formatPrice(Number(cartTotalPriceWithoutDiscount))}`}
          />
          <PriceDetail
            label="Taxa de entrega:"
            value={`R$ ${formatPrice(10)}`}
            strikeThrough
          />
          <PriceDetail
            label="Desconto:"
            value={`R$ ${formatPrice(
              Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice)
            )}`}
          />
          <PriceDetail
            style={{ borderTop: "1px solid #33C1B3", marginTop: "10px" }}
            label="Total:"
            value={`R$ ${formatPrice(Number(cartTotalPrice))}`}
          />
        </SubTotalWrapper>
      </Content>
      <Button onClick={() => router.push("/")}>Voltar para o incio</Button>
    </Wrapper>
  );
}
