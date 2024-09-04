import { NavHeader, Header, SignInForm } from "../components";
import { Content, Theme, Wrapper } from "../styles/pages/login";

export default function Login() {
  return (
    <Theme>
      <NavHeader />
      <Header
        showSignInButton={false}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={false}
      />
      <Wrapper>
        <Content>
          <SignInForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
