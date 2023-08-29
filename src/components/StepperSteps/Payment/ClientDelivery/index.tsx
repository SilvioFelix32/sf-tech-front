import { HiOutlineHome } from "react-icons/hi";
import { GiModernCity } from "react-icons/gi";
import { IUser } from "../../../../types";
import { Card, Divisory, MainData, Wrapper } from "./styles";

import { Column, Content, Input, Title, Text } from "./styles";

interface ComponentProps {
  myUser: IUser;
}

export function DeliveryMethod({ myUser }: ComponentProps) {
  //https://www.behance.net/gallery/168878609/Ecommerce-Website-Checkout-Page?tracking_source=search_projects_recommended|payment+checkout
  return (
    <Wrapper>
      <Content>
        <Title>2.Local de Entrega:</Title>
        <Column>
          <Card>
            <Divisory>
              <HiOutlineHome />
              <MainData>
                <Text>Bairro:</Text>
                <Input
                  defaultValue={myUser.cep ? myUser.cep : "Não informado"}
                />
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <HiOutlineHome />
              <MainData>
                <Text>Numero:</Text>
                <Input
                  defaultValue={
                    myUser.address ? myUser.address : "Não informado"
                  }
                />
              </MainData>
            </Divisory>
          </Card>
        </Column>
        <Column>
          <Card>
            <Divisory>
              <GiModernCity />
              <MainData>
                <Text>Cidade:</Text>
                <Input
                  defaultValue={myUser.city ? myUser.city : "Não informado"}
                />
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <GiModernCity />
              <MainData>
                <Text>Estado:</Text>
                <Input
                  defaultValue={myUser.state ? myUser.state : "Não informado"}
                />
              </MainData>
            </Divisory>
          </Card>
        </Column>
        <Column>
          <Card>
            <Divisory>
              <HiOutlineHome />
              <MainData>
                <Text>Bairro:</Text>
                <Input
                  defaultValue={
                    myUser.neighborhood ? myUser.neighborhood : "Não informado"
                  }
                />
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <HiOutlineHome />
              <MainData>
                <Text>Numero:</Text>
                <Input
                  defaultValue={
                    myUser.address_number
                      ? myUser.address_number
                      : "Não informado"
                  }
                />
              </MainData>
            </Divisory>
          </Card>
        </Column>
      </Content>
    </Wrapper>
  );
}
