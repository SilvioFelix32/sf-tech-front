import { NavHeader, Header } from "../components";
import { Content, Theme, Wrapper } from "../styles/pages/login";
import { ConfirmForgotPasswordForm } from "../components/ConfirmForgotPasswordForm";

export default function ConfirmForgotPassword() {
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
          <ConfirmForgotPasswordForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
