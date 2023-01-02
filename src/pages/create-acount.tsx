import React from "react";
import { Header, RegistrationForm, Footer } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  return (
    <Theme>
      <Wrapper>
        <Header />
        <Content>
          <RegistrationForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
