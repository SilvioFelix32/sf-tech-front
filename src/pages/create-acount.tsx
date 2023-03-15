import React, { useState } from "react";
import { NavHeader, Header, RegistrationForm, Footer } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  const [filter, setFilter] = useState("");

  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header filter={filter} setFilter={setFilter} />
        <Content>
          <RegistrationForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
