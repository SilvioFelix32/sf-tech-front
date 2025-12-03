import { PageLayout, ConfirmationForm } from "../components";

export default function Confirmation() {
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
      themeHeight="84vh"
    >
      <ConfirmationForm />
    </PageLayout>
  );
}
