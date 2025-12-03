import { useState } from "react";
import { PageLayout } from "../../components";
import { AccountSidebar, MyAccount, MyFavorites, MyShopping } from "../../components/Account";
import { AccountContainer, AccountSection } from "../../styles/pages/account";
import { useAuth } from "../../hooks/useAuth";

export default function Account() {
  const [actualPage, setActualPage] = useState("myaccount");
  const { user } = useAuth();

  const displayUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };

  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={true}
      showFavoritesButton={false}
      showAdminButton={true}
      showSearchBar={false}
      wrapperWidth="80%"
      wrapperShadow="vertical"
      contentProps={{
        direction: "row",
        align: "stretch",
        justify: "flex-start",
        minHeight: "100%",
        height: "100%",
        padding: "0",
        fullWidth: true,
      }}
    >
      <AccountContainer>
        <AccountSidebar
          actualPage={actualPage}
          setActualPage={setActualPage}
          name={displayUser.name}
          email={displayUser.email}
          role={displayUser.role}
        />
        <AccountSection>
          {actualPage === "myaccount" && <MyAccount />}
          {actualPage === "favorites" && <MyFavorites />}
          {actualPage === "shopping" && <MyShopping />}
        </AccountSection>
      </AccountContainer>
    </PageLayout>
  );
}

