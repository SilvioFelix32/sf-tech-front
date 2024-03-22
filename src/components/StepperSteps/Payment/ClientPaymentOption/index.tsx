import { HiOutlineHome } from "react-icons/hi";
import { Card, Divisory, MainData, Wrapper } from "./styles";

import { Column, Content, Title, Text } from "./styles";

export function DeliveryMethod() {
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
              </MainData>
            </Divisory>
          </Card>

          <Card>
            <Divisory>
              <HiOutlineHome />
              <MainData>
                <Text>Numero:</Text>
              </MainData>
            </Divisory>
          </Card>
        </Column>
      </Content>
    </Wrapper>
  );
}
