import { NavHeader, Header } from "../components";
import { SignUpConfirmForm } from "../components/SignUpConfirmForm";
import { Content, Theme, Wrapper } from "../styles/pages/login";

export default function ConfirmSignUp() {
  return (
    <Theme>
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
          <SignUpConfirmForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
