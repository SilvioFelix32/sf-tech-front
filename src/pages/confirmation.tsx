import { ConfirmationForm, Footer, Header, NavHeader } from "../components";
import { Theme } from "../styles/components";
import { Wrapper, Content } from "../styles/pages/checkout";

export default function Confirmation() {
  return (
    <Theme height="84vh">
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={true}
        showAdminButton={false}
        showSearchBar={false}
      />
      <Wrapper>
        <Content>
          <ConfirmationForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
