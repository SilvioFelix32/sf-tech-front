import { NavHeader, Header, ForgotPasswordForm } from "../components";
import { Content, Wrapper } from "../styles/pages/login";
import { Theme } from "../styles/components";

export default function ForgotPassword() {
  return (
    <Theme height="84vh">
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={false}
        showSearchBar={false}
      />
      <Wrapper>
        <Content>
          <ForgotPasswordForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
