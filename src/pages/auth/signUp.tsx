import { Header, NavHeader, SignUpForm } from "../../components";
import { AuthWrapper, AuthContent } from "../../styles/pages/auth";
import { Theme } from "../../styles/components";

export default function SignUp() {
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
      <AuthWrapper>
        <AuthContent>
          <SignUpForm />
        </AuthContent>
      </AuthWrapper>
    </Theme>
  );
}

