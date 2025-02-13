import { NavHeader, Header, SignInForm } from "../components";
import { Content, Wrapper } from "../styles/pages/login";
import { Theme } from "../styles/components";

export default function Login() {
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
          <SignInForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
