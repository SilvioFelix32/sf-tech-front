import { useContext, useState, useEffect } from "react";
import { HiOutlineMail, HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { AuthContext, CompanyContext } from "../../../context";
import { userService } from "../../../services";
import { IUser } from "../../../types";
import {
  Wrapper,
  Text,
  Title,
  Content,
  PaymentOptions,
  PaymentInformation,
  Input,
  Column,
  Delivery,
  Card,
  CardSelect,
} from "./styles";

export function Payment() {
  const { user } = useContext(AuthContext);
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
  //https://www.behance.net/gallery/168878609/Ecommerce-Website-Checkout-Page?tracking_source=search_projects_recommended|payment+checkout
  return myUser ? (
    <Wrapper>
      <Content>
        <Title>Pagamento</Title>

        <PaymentInformation>
          <Title>1.Informações de contato:</Title>
          <Column>
            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUser />
                <div className="userData">
                  <Text>Nome:</Text>
                  <Input defaultValue={myUser.name} />
                </div>
              </div>
            </div>

            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUsers />
                <div className="userData">
                  <Text>Sobrenome:</Text>
                  <Input defaultValue={myUser.last_name} />
                </div>
              </div>
            </div>
          </Column>
          <Column>
            <div className="userInfo">
              <div className="divisory">
                <GiSmartphone />
                <div className="userData">
                  <Text>Telefone:</Text>
                  <Input
                    defaultValue={
                      myUser.celphone ? myUser.celphone : "Não informado"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="userInfo">
              <div className="divisory">
                <HiOutlineMail />
                <div className="userData">
                  <Text>Email:</Text>
                  <Input defaultValue={myUser.email} />
                </div>
              </div>
            </div>
          </Column>
        </PaymentInformation>
        <Delivery>
          <Title>2.Local de Entrega:</Title>
          <Column>
            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUser />
                <div className="userData">
                  <Text>Bairro:</Text>
                  <Input
                    defaultValue={myUser.cep ? myUser.cep : "Não informado"}
                  />
                </div>
              </div>
            </div>

            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUsers />
                <div className="userData">
                  <Text>Numero:</Text>
                  <Input
                    defaultValue={
                      myUser.address ? myUser.address : "Não informado"
                    }
                  />
                </div>
              </div>
            </div>
          </Column>
          <Column>
            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUser />
                <div className="userData">
                  <Text>Cidade:</Text>
                  <Input
                    defaultValue={myUser.city ? myUser.city : "Não informado"}
                  />
                </div>
              </div>
            </div>

            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUsers />
                <div className="userData">
                  <Text>Estado:</Text>
                  <Input
                    defaultValue={myUser.state ? myUser.state : "Não informado"}
                  />
                </div>
              </div>
            </div>
          </Column>
          <Column>
            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUser />
                <div className="userData">
                  <Text>Bairro:</Text>
                  <Input
                    defaultValue={
                      myUser.neighborhood
                        ? myUser.neighborhood
                        : "Não informado"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="userInfo">
              <div className="divisory">
                <HiOutlineUsers />
                <div className="userData">
                  <Text>Numero:</Text>
                  <Input
                    defaultValue={
                      myUser.address_number
                        ? myUser.address_number
                        : "Não informado"
                    }
                  />
                </div>
              </div>
            </div>
          </Column>
        </Delivery>
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
      <Card></Card>
    </Wrapper>
  ) : (
    <Wrapper>Faça Login Primeiro</Wrapper>
  );
}
