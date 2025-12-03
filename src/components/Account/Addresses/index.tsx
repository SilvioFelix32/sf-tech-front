import {
  AccountAddressActions,
  AccountAddressBadge,
  AccountAddressCard,
  AccountAddressHeader,
  AccountAddressHeaderText,
  AccountAddressInfo,
  AccountAddressList,
  AccountAddressName,
  AccountAddressText,
  AccountAddressTitle,
  AccountContent,
} from "@/styles/components/Account/styles";
import { PageTitle, PageText } from "../../../styles/pages/shared";
import { Button } from "../../../styles/components";

export function Addresses() {
  return (
    <AccountContent
      direction="column"
      align="flex-start"
      justify="flex-start"
      padding="0"
    >
      <AccountAddressHeader>
        <AccountAddressHeaderText>
          <PageTitle fontSize="1.4rem" margin="0 0 0.5rem 0">
            Meus Endereços
          </PageTitle>
          <PageText fontSize="1rem" margin="0" color="text">
            Gerencie seus endereços de entrega
          </PageText>
        </AccountAddressHeaderText>
        <Button width="160px" height="40px">Adicionar Endereço</Button>
      </AccountAddressHeader>

      <AccountAddressList>
        <AccountAddressCard $isPrimary={true}>
          <AccountAddressInfo>
            <AccountAddressTitle>
              <AccountAddressName>Casa</AccountAddressName>
              <AccountAddressBadge>Principal</AccountAddressBadge>
            </AccountAddressTitle>
            <AccountAddressText>Rua das Flores, 123</AccountAddressText>
            <AccountAddressText>Centro - São Paulo, SP</AccountAddressText>
            <AccountAddressText>CEP: 01234-567</AccountAddressText>
          </AccountAddressInfo>
          <AccountAddressActions>
            <Button
              width="80px"
              height="32px"
              backgroundColor="background"
              textColor="text"
            >
              Editar
            </Button>
            <Button
              width="90px"
              height="32px"
              backgroundColor="background"
              textColor="text"
            >
              Remover
            </Button>
          </AccountAddressActions>
        </AccountAddressCard>

        <AccountAddressCard $isPrimary={false}>
          <AccountAddressInfo>
            <AccountAddressTitle>
              <AccountAddressName>Trabalho</AccountAddressName>
            </AccountAddressTitle>
            <AccountAddressText>Av. Paulista, 1000</AccountAddressText>
            <AccountAddressText>Bela Vista - São Paulo, SP</AccountAddressText>
            <AccountAddressText>CEP: 01310-100</AccountAddressText>
          </AccountAddressInfo>
          <AccountAddressActions>
            <Button
              width="80px"
              height="32px"
              backgroundColor="background"
              textColor="text"
            >
              Editar
            </Button>
            <Button
              width="90px"
              height="32px"
              backgroundColor="background"
              textColor="text"
            >
              Remover
            </Button>
          </AccountAddressActions>
        </AccountAddressCard>
      </AccountAddressList>
    </AccountContent>
  );
}

