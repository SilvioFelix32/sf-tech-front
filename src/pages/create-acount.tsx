import { HeaderClean, NavHeader, RegistrationForm } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  return (
    <Theme>
      <NavHeader />
      <HeaderClean />
      <Wrapper>
        <Content>
          <RegistrationForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
