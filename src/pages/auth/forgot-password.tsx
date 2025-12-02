import { NavHeader, Header, ForgotPasswordForm } from "../../components";
import { AuthContent, AuthWrapper } from "../../styles/pages/auth";
import { Theme } from "../../styles/components";

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
      <AuthWrapper>
        <AuthContent>
          <ForgotPasswordForm />
        </AuthContent>
      </AuthWrapper>
    </Theme>
  );
}

