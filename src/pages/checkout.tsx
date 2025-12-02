import { PageLayout } from "../components";
import { Checkout } from "../components/Checkout";

export default function ShopCart() {
  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={false}
      showFavoritesButton={true}
      showAdminButton={false}
      showSearchBar={false}
      wrapperWidth="75%"
      contentProps={{
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
        minHeight: "75vh",
        padding: "20px",
      }}
    >
      <Checkout />
    </PageLayout>
  );
}
