import { Header, NavHeader, SignUpForm } from "../components";
//styles
import { Wrapper, Content } from "../styles/pages/create-acount";
import { Theme } from "../styles/components";

export default function CreateAcount() {
  return (
    <Theme height="84vh">
      <NavHeader />
      <Header
        showSignInButton={true}
        showCartButton={false}
        showFavoritesButton={false}
        showAdminButton={false}
        showSearchBar={false}
      />
      <Wrapper>
        <Content>
          <SignUpForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
