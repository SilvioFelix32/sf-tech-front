import {
  AccountContent,
  AccountSecurityCard,
  AccountSecurityCardContent,
  AccountSecurityCardDescription,
  AccountSecurityCardHeader,
  AccountSecurityCardInfo,
  AccountSecurityCardStatus,
} from "@/styles/components/Account/styles";
import { PageTitle, PageText } from "../../../styles/pages/shared";
import { Button } from "../../../styles/components";

export function Security() {
  return (
    <AccountContent
      direction="column"
      align="flex-start"
      justify="flex-start"
      padding="0"
    >
      <AccountSecurityCard>
        <AccountSecurityCardHeader>
          <PageTitle fontSize="1.2rem" margin="0 0 0.5rem 0">
            Autenticação em Dois Fatores
          </PageTitle>
          <PageText fontSize="0.9rem" margin="0" color="text">
            Adicione uma camada extra de segurança à sua conta
          </PageText>
        </AccountSecurityCardHeader>

        <AccountSecurityCardContent>
          <AccountSecurityCardInfo>
            <AccountSecurityCardStatus>Status: Desativado</AccountSecurityCardStatus>
            <AccountSecurityCardDescription>
              Proteja sua conta com 2FA
            </AccountSecurityCardDescription>
          </AccountSecurityCardInfo>
          <Button width="120px" height="40px">
            Ativar 2FA
          </Button>
        </AccountSecurityCardContent>
      </AccountSecurityCard>
    </AccountContent>
  );
}

