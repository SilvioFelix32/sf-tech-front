import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { userService } from "../services";
import { environment } from "../utils/environment";
import { IUser } from "../types";
//components
//styles
import { Wrapper, Title, Text, Content } from "../styles/pages/myaccount";

export default function MyAccount() {
  const { user } = useContext(AuthContext);
  const [myUser, setMyUser] = useState<IUser>();
  const company_id = environment.companyId;
  const user_id = user?.user_id;

  useEffect(() => {
    if (company_id && user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setMyUser(data);
      });
    }
  }, [company_id, user_id]);

  return myUser ? (
    <Wrapper>
      <Title style={{ fontSize: "22px" }}>Meus dados:</Title>

      <Title style={{ fontSize: "18px" }}>Dados pessoais:</Title>
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
      <Title style={{ fontSize: "20px" }}>Carregando seus dados</Title>
    </Wrapper>
  );
}
