import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { AccountSidebar, MyAccount, MyFavorites, MyShopping } from "../../components/Admin/Account";
import { AccountContainer, AccountSection } from "../../styles/pages/account";
import { useAuth } from "../../hooks/useAuth";

export default function Account() {
  const router = useRouter();
  const { page } = router.query;
  const [actualPage, setActualPage] = useState("myaccount");
  const { user } = useAuth();

  useEffect(() => {
    if (page === "shopping" || page === "favorites") {
      setActualPage(String(page));
    }
  }, [page]);

  const displayUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };

  return (
    <PageLayout
      showSignInButton={true}
      showCartButton={false}
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

