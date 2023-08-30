import { useContext, useState } from "react";
import { AuthContext, CompanyContext, useCart } from "../../../context";
import { DeliveryMethod } from "./ClientDelivery";
import { PaymentInformation } from "./ClientInfo";
import { CardForm } from "./Card";
import { BilletForm } from "./Billet";
import { PixForm } from "./Pix";
import { useUser, calculateCartTotals } from "../../../shared/functions";
import {
  Wrapper,
  Title,
  Content,
  PaymentOptions,
  Card,
  CardSelect,
  Text,
  ShopTotals,
} from "./styles";

export function Payment() {
  const { user } = useContext(AuthContext);
  const [paymentType, setPaymentType] = useState("");
  const { cartItems } = useCart();
  const company_id = useContext(CompanyContext);
  const user_id = user?.user_id;
  const myUser = useUser(company_id, user_id);

  const { cartSubtotal, cartDiscount, cartTotal } =
    calculateCartTotals(cartItems);

  //https://www.behance.net/gallery/168878609/Ecommerce-Website-Checkout-Page?tracking_source=search_projects_recommended|payment+checkout
  return myUser ? (
    <Wrapper>
      <Content>
        <Title>Pagamento</Title>
        <PaymentInformation myUser={myUser} company_id={company_id} />
        <DeliveryMethod myUser={myUser} />
        <PaymentOptions>
          <Title>3.Forma de Pagamento:</Title>
          <CardSelect>
            <div
              className="paymentTypes"
              onClick={() => setPaymentType("creditCard")}
            >
              Cartão de Cŕedito
            </div>
            <div
              className="paymentTypes"
              onClick={() => setPaymentType("debitCard")}
            >
              Cartão de Débito
            </div>
            <div
              className="paymentTypes"
              onClick={() => setPaymentType("billet")}
            >
              Boleto Bancário
            </div>
            <div className="paymentTypes" onClick={() => setPaymentType("pix")}>
              Pix
            </div>
          </CardSelect>
        </PaymentOptions>
      </Content>
      <Card>
        {paymentType === "creditCard" && <CardForm />}
        {paymentType === "debitCard" && <CardForm />}
        {paymentType === "billet" && <BilletForm />}
        {paymentType === "pix" && <PixForm />}
        <Text
          style={{ fontSize: "2rem", alignSelf: "center", fontWeight: "bold" }}
        >
          {cartItems.length} Itens
        </Text>
        <ShopTotals>
          <div className="totals">
            <Text style={{ fontSize: "1rem" }}>Subtotal</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {cartSubtotal.toFixed(2).replace(".", ",")}
            </Text>
          </div>
          <div className="totals">
            <Text style={{ fontSize: "1rem" }}>Disconto</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {cartDiscount.toFixed(2).replace(".", ",")}
            </Text>
          </div>
          <div className="total">
            <Text style={{ fontSize: "1rem" }}>Total</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {cartTotal.toFixed(2).replace(".", ",")}
            </Text>
          </div>
        </ShopTotals>
      </Card>
    </Wrapper>
  ) : (
    <Wrapper>Faça Login Primeiro</Wrapper>
  );
}
