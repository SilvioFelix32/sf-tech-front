import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";
import { userService } from "../services";
import { environment } from "../utils/environment";
import { IUser } from "../types";
//components
//styles
import { Content, Title, Wrapper, Text } from "../styles/pages/shopping";

export default function MyShopping() {
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

  //substiruir essa seção pela seção de minhas compras
  return myUser ? (
    <Wrapper>
      <Title style={{ fontSize: "20px" }}>Minhas compras:</Title>
      <Content>
        <Title>Nome:</Title>
        <Text>{myUser.name}</Text>
      </Content>
    </Wrapper>
  ) : (
    <Wrapper>
      <Title style={{ fontSize: "20px" }}>Nenhuma compra feita ainda</Title>
    </Wrapper>
  );
}
