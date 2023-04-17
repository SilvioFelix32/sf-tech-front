import { NavHeader, Header, RegistrationForm, Footer } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  return (
    <Theme>
      <Wrapper>
        <NavHeader />
        <Header />
        <Content>
          <RegistrationForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
