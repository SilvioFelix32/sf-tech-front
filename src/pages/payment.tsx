import { Footer, Header, NavHeader } from "../components";
import { PaymentForm } from "../components/Payment";
import { Wrapper, Theme, Content } from "../styles/pages/checkout";

export default function Payment() {
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
          <PaymentForm />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
