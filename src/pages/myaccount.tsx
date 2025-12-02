import { useAuth } from "../hooks/useAuth";
import { PageWrapper, PageTitle, PageText } from "../styles/pages/shared";
import { AccountContent } from "../styles/pages/myaccount";

export default function MyAccount() {
  const { user } = useAuth();

  return user ? (
    <PageWrapper width="80%" padding="20px">
      <PageTitle fontSize="22px" margin="0 0 1rem 0">Meus dados:</PageTitle>

      <AccountContent direction="row" align="center" justify="flex-start" padding="5px">
        <PageTitle fontSize="1rem" margin="0" padding="0 5px">Nome:</PageTitle>
        <PageText fontSize="1rem" capitalize>{user?.name ?? ""}</PageText>
      </AccountContent>
      <AccountContent direction="row" align="center" justify="flex-start" padding="5px">
        <PageTitle fontSize="1rem" margin="0" padding="0 5px">Sobrenome:</PageTitle>
        <PageText fontSize="1rem" capitalize>{user?.lastName ?? ""}</PageText>
      </AccountContent>
      <AccountContent direction="row" align="center" justify="flex-start" padding="5px">
        <PageTitle fontSize="1rem" margin="0" padding="0 5px">Email:</PageTitle>
        <PageText fontSize="1rem">{user?.email ?? ""}</PageText>
      </AccountContent>
    </PageWrapper>
  ) : (
    <PageWrapper width="80%" padding="20px">
      <PageTitle fontSize="20px">Nenhum dado disponível</PageTitle>
    </PageWrapper>
  );
}
