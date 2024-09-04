import { useContext } from "react";
import { AuthContext } from "../context";
//components
import { Wrapper, Title, Text, Content } from "../styles/pages/myaccount";

export default function MyAccount() {
  const { user } = useContext(AuthContext);

  return user ? (
    <Wrapper>
      <Title style={{ fontSize: "22px", color: "#333" }}>Meus dados:</Title>

      <Content>
        <Title>Nome:</Title>
        <Text>{user?.name ?? ""}</Text>
      </Content>
      <Content>
        <Title>Sobrenome:</Title>
        <Text>{user?.lastName ?? ""}</Text>
      </Content>
      <Content>
        <Title>Email:</Title>
        <Text>{user?.email ?? ""}</Text>
      </Content>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title style={{ fontSize: "20px", color: "#333" }}>
        Nenhum dado disponível
      </Title>
    </Wrapper>
  );
}
