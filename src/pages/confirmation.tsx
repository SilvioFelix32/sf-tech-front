import { PageLayout, ConfirmationForm } from "../components";

export default function Confirmation() {
  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={false}
      showFavoritesButton={false}
      showAdminButton={false}
      showSearchBar={false}
      wrapperWidth="80%"
      contentProps={{
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
      }}
    >
      <ConfirmationForm />
    </PageLayout>
  );
}
