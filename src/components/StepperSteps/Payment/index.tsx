import { useContext, useState, useEffect } from "react";
import { AuthContext, CompanyContext, useCart } from "../../../context";
import { DeliveryMethod } from "./ClientDelivery";
import { PaymentInformation } from "./ClientInfo";
import { userService } from "../../../services";
import { CardForm } from "./Card";
import { IProduct, IUser } from "../../../types";
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
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  const [myUser, setMyUser] = useState<IUser>();
  const company_id = useContext(CompanyContext);
  const user_id = user?.user_id;

  useEffect(() => {
    if (company_id && user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setMyUser(data);
      });
    }
  }, [company_id, user_id]);

  const cartSubtotal = [].concat(...cartItems.map((item: IProduct) => item));
  console.log("cartSubtotal", cartSubtotal);
  console.log("cartItems", cartItems);

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
            <div className="paymentTypes">Cartão de Cŕedito</div>
            <div className="paymentTypes">Cartão de Débito</div>
            <div className="paymentTypes">Boleto Bancário</div>
            <div className="paymentTypes">Pix</div>
          </CardSelect>
        </PaymentOptions>
      </Content>
      <Card>
        <CardForm />
        <ShopTotals>
          <Text style={{ fontSize: "2rem" }}>{cartItems.length} Itens</Text>
          {cartItems.map((item: IProduct) => (
            <>
              <Text style={{ fontSize: "1.2rem" }}>
                Subtotal R$ {item.value.toFixed(2).replace(".", ",")}
              </Text>
              <Text style={{ fontSize: "1.2rem" }}>
                Desconto R$ {item.discount.toFixed(2).replace(".", ",")}
              </Text>
            </>
          ))}
          <Text style={{ fontSize: "1.2rem" }}>
            Total R$ {cartTotalPrice.replace(".", ",")}
          </Text>
        </ShopTotals>
      </Card>
    </Wrapper>
  ) : (
    <Wrapper>Faça Login Primeiro</Wrapper>
  );
}
