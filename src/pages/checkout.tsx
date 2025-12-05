import { NavHeader, Header, Footer } from "../components";
import { Checkout } from "../components/Checkout";
import { Theme } from "../styles/components";

export default function ShopCart() {
  return (
    <Theme height="auto">
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={true}
        showAdminButton={false}
        showSearchBar={true}
      />
      <Checkout />
      <Footer />
    </Theme>
  );
}
