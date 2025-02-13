import { Footer, Header, NavHeader } from "../components";
import { Checkout } from "../components/Checkout";
import { Theme } from "../styles/components";
import { Wrapper, Content } from "../styles/pages/checkout";

export default function ShopCart() {
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
          <Checkout />
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
