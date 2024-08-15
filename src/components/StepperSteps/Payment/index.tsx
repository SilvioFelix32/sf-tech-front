import { useContext, useState } from "react";
import { AuthContext, useCart } from "../../../context";
import { DeliveryMethod } from "./ClientDelivery";
import { environment } from "../../../utils/environment";
import { PaymentInformation } from "./ClientInfo";
import { CardForm } from "./Card";
import { PixForm } from "./Pix";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import {
  useUser,
  calculateCartTotals,
  formatNumber,
} from "../../../utils/functions";
import { IProduct } from "../../../types";

import {
  Wrapper,
  Title,
  Content,
  PaymentOptions,
  Card,
  Text,
  ShopTotals,
} from "./styles";

export function Payment() {
  const { user } = useContext(AuthContext);
  const [paymentType, setPaymentType] = useState("");
  const { cartItems } = useCart();
  const company_id = environment.companyId;
  const user_id = user?.user_id;
  const myUser = useUser(company_id, user_id);

  const { cartSubtotal, cartDiscount, cartTotal } =
    calculateCartTotals(cartItems);

  return myUser ? (
    <Wrapper>
      <Content>
        <Title>Pagamento</Title>
        <PaymentInformation myUser={myUser} company_id={company_id} />
        <DeliveryMethod />
        <PaymentOptions>
          <Title>3.Forma de Pagamento:</Title>
          <CAccordion>
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>Cartão de Crédito</CAccordionHeader>
              <CAccordionBody>
                <CardForm />
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>Cartão de Débito</CAccordionHeader>
              <CAccordionBody>
                <CardForm />
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>Pix</CAccordionHeader>
              <CAccordionBody>
                <PixForm />
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </PaymentOptions>
      </Content>
      <Card>
        <Text
          style={{ fontSize: "2rem", alignSelf: "center", fontWeight: "bold" }}
        >
          {cartItems.length} Itens
        </Text>
        <ShopTotals>
          {cartItems.map((item: IProduct) => (
            <div className="totals">
              <Text>{item.title}</Text>
              <Text style={{ fontSize: "1rem" }}>
                R$ {formatNumber(item.price)}
              </Text>
            </div>
          ))}
          <div className="total">
            <Text style={{ fontSize: "1rem" }}>Subtotal</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {formatNumber(cartSubtotal)}
            </Text>
          </div>
          <div className="totals">
            <Text style={{ fontSize: "1rem" }}>Desconto</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {formatNumber(cartDiscount)}
            </Text>
          </div>
          <div className="total">
            <Text style={{ fontSize: "1rem" }}>Total</Text>
            <Text style={{ fontSize: "1.2rem" }}>
              R$ {formatNumber(cartTotal)}
            </Text>
          </div>
        </ShopTotals>
      </Card>
    </Wrapper>
  ) : (
    <Wrapper>Faça Login Primeiro</Wrapper>
  );
}
