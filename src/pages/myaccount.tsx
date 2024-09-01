import { useContext } from "react";
import { AuthContext } from "../context";
import { userService } from "../services";
import { environment } from "../utils/environment";
import { IUser } from "../types";
//components
import { Wrapper, Title, Text, Content } from "../styles/pages/myaccount";
import { useQuery } from "react-query";

export default function MyAccount() {
  const { user } = useContext(AuthContext);
  const company_id = environment.companyId;
  const user_id = user?.user_id;

  const {
    data: myUser,
    isLoading,
    isError,
    error,
  } = useQuery<IUser>(
    ["user", company_id, user_id],
    () => userService.getById(company_id, user_id),
    {
      enabled: !!company_id && !!user_id,
    }
  );

  if (isLoading)
    return (
      <Wrapper>
        <Title style={{ fontSize: "20px" }}>Carregando seus dados...</Title>
      </Wrapper>
    );

  if (isError)
    return (
      <Wrapper>
        <Title style={{ fontSize: "20px", color: "red" }}>
          {error instanceof Error
            ? error.message
            : "Erro ao carregar seus dados."}
        </Title>
      </Wrapper>
    );

  return myUser ? (
    <Wrapper>
      <Title style={{ fontSize: "22px", color: "#333" }}>Meus dados:</Title>

      <Content>
        <Title>Nome:</Title>
        <Text>{myUser.name}</Text>
      </Content>
      <Content>
        <Title>Sobrenome:</Title>
        <Text>{myUser.lastName}</Text>
      </Content>
      <Content>
        <Title>Email:</Title>
        <Text>{myUser.email}</Text>
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
