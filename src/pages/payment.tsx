import { Footer, Header, NavHeader } from "../components";
import { Wrapper, Content, Theme } from "../styles/pages/checkout";

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
        <Content
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            fontSize: "2rem",
          }}
        >
          Página de pagamento em desenvolvimento volte em breve
        </Content>
        <Footer />
      </Wrapper>
    </Theme>
  );
}
