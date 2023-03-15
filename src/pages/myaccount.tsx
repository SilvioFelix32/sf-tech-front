import { useContext, useEffect, useState } from "react";
import { userService } from "../services";
//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
//styles
import { Wrapper, Content, Theme } from "../styles/pages/filters";
import { IUser } from "../types";
import { AuthContext, CompanyContext } from "../context";

export default function MyAccount() {
  const [filter, setFilter] = useState("");
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

  return myUser ? (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header filter={filter} setFilter={setFilter} />
        <Content>
          Meus dados:
          {myUser.name}
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  ) : (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header filter={filter} setFilter={setFilter} />
        <Content>Nenhum usuário encontrado</Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
