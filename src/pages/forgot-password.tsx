import { NavHeader, Header } from "../components";
import { Content, Theme, Wrapper } from "../styles/pages/login";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

export default function ForgotPassword() {
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
          <ForgotPasswordForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
