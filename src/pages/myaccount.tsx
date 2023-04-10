import { useContext, useEffect, useState } from "react";
import { AuthContext, CompanyContext } from "../context";
import { userService } from "../services";
import { IUser } from "../types";
//components
//styles
import { Wrapper, Title, Text, Content } from "../styles/pages/myaccount";

export default function MyAccount() {
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

  const documentHiden = myUser?.document.slice(0, -2);
  const documentLastTwoNumbers = myUser?.document.slice(-2);
  const userdocument =
    documentHiden?.replace(/\d/g, "#") + documentLastTwoNumbers;

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
        <Text>{myUser.last_name}</Text>
      </Content>
      <Content>
        <Title>Email:</Title>
        <Text>{myUser.email}</Text>
      </Content>
      <Content>
        <Title>Nascimento:</Title>
        <Text>{myUser.birth_date ? myUser.birth_date : "Não informado"}</Text>
      </Content>
      <Content>
        <Title>Telefone:</Title>
        <Text>{myUser.celphone ? myUser.celphone : "Não informado"}</Text>
      </Content>
      <Content>
        <Title>Documento:</Title>
        <Text>{userdocument}</Text>
      </Content>

      <Title style={{ fontSize: "18px" }}>Endereço:</Title>
      <Content>
        <Text>{myUser.address ? myUser.address : "Não informado"},</Text>
        <Text>- {myUser.address_complement},</Text>
        <Text>
          - Nº {myUser.address_number ? myUser.address_number : "S/N"},
        </Text>
        <Text>- {myUser.city ? myUser.city : "Não informado"},</Text>
        <Text>- {myUser.cep ? myUser.cep : "Não informado"}</Text>
      </Content>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title style={{ fontSize: "20px" }}>Carregando seus dados</Title>
    </Wrapper>
  );
}
