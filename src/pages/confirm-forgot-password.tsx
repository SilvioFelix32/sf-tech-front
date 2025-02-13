import { NavHeader, Header, ConfirmForgotPasswordForm } from "../components";
import { Theme } from "../styles/components";
import { Content, Wrapper } from "../styles/pages/login";

export default function ConfirmForgotPassword() {
  return (
    <Theme height="84vh">
      <NavHeader />
      <Header
        showSignInButton={false}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={false}
        showSearchBar={false}
      />
      <Wrapper>
        <Content>
          <ConfirmForgotPasswordForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
