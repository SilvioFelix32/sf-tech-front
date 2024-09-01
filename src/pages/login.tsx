import { NavHeader, HeaderClean } from "../components";
import { SignInForm } from "../components/SignInForm";
import { Content, Theme, Wrapper } from "../styles/pages/login";

export default function Login() {
  return (
    <Theme>
      <NavHeader />
      <HeaderClean />
      <Wrapper>
        <Content>
          <SignInForm />
        </Content>
      </Wrapper>
    </Theme>
  );
}
