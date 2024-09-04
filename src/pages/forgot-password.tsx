import { NavHeader, Header } from "../components";
import { Content, Theme, Wrapper } from "../styles/pages/login";
import { SignInForm } from "../components/SignInForm";

export default function ForgotPassword() {
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
