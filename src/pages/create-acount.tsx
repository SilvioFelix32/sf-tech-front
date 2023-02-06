import React, { useState } from "react";
import { Header, RegistrationForm, Footer } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  const [filter, setFilter] = useState("");

  return (
    <Theme>
      <Wrapper>
        <Header filter={filter} setFilter={setFilter} />
        <Content>
          <RegistrationForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
