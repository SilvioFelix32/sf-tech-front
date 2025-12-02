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
      wrapperWidth="75%"
      contentProps={{
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
        minHeight: "75vh",
        padding: "20px",
      }}
    >
      <PaymentForm />
    </PageLayout>
  );
}
