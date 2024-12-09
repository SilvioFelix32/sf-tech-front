import { useContext } from "react";
import { AuthContext } from "../context";
//components
//styles
import { Content, Title, Wrapper, Text } from "../styles/pages/shopping";

export default function MyShopping() {
  const { user } = useContext(AuthContext);

  return user ? (
    <Wrapper>
      <Title style={{ fontSize: "22px" }}>Minhas compras:</Title>

      <Content
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Página em desenvolvimento</Text>
      </Content>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title style={{ fontSize: "20px" }}>Nenhum dado disponível</Title>
    </Wrapper>
  );
}
