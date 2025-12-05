import { PageLayout } from "../components";
import { PaymentForm } from "../components/Payment";

export default function Payment() {
  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={false}
      showFavoritesButton={true}
      showAdminButton={false}
      showSearchBar={false}
      wrapperWidth="80%"
      contentProps={{
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
        padding: "20px",
      }}
    >
      <PaymentForm />
    </PageLayout>
  );
}
