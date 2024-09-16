import { useContext } from "react";
import { AuthContext } from "../context";
//components
//styles
import { Content, Title, Wrapper, Text } from "../styles/pages/shopping";

export default function MyShopping() {
  const { user } = useContext(AuthContext);

  return user ? (
    <Wrapper>
      <Title style={{ fontSize: "22px" }}>MInhas compras:</Title>

      <Content>
        <Title>Nome:</Title>
        <Text>Página em desenvolvimento</Text>
      </Content>
      <Content>
        <Title>Email:</Title>
        <Text>{user?.email ?? ""}</Text>
      </Content>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title style={{ fontSize: "20px" }}>Nenhum dado disponível</Title>
    </Wrapper>
  );
}
