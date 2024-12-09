import { Footer, Header, NavHeader } from "../components";
import { ConfirmationForm } from "../components/ConfirmationForm";
import { Wrapper, Theme, Content } from "../styles/pages/checkout";

export default function Confirmation() {
  return (
    <Theme>
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
