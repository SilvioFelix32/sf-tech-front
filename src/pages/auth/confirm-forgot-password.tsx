import { NavHeader, Header, ConfirmForgotPasswordForm } from "../../components";
import { Theme } from "../../styles/components";
import { AuthContent, AuthWrapper } from "../../styles/pages/auth";

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
      <AuthWrapper>
        <AuthContent>
          <ConfirmForgotPasswordForm />
        </AuthContent>
      </AuthWrapper>
    </Theme>
  );
}

