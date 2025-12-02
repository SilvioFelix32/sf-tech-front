import { NavHeader, Header, SignInForm } from "../../components";
import { AuthContent, AuthWrapper } from "../../styles/pages/auth";
import { Theme } from "../../styles/components";

export default function SignIn() {
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
      <AuthWrapper>
        <AuthContent>
          <SignInForm />
        </AuthContent>
      </AuthWrapper>
    </Theme>
  );
}

