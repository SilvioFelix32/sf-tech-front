import { Header, NavHeader, RegistrationForm } from "../components";
//styles
import { Theme, Wrapper, Content } from "../styles/pages/create-acount";

export default function CreateAcount() {
  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={false}
      />
      <Wrapper>
        <Content>
          <RegistrationForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
