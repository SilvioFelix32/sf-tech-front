import {
  AccountActions,
  AccountContent,
  AccountDivider,
  AccountField,
  AccountFormGrid,
  AccountFormHeader,
  AccountInput,
  AccountLabel,
} from "@/styles/components/Account/styles";
import { PageTitle, PageText } from "../../../styles/pages/shared";
import { Button } from "../../../styles/components";

interface PersonalDataProps {
  name: string;
  lastName: string;
  email: string;
}

export function PersonalData({ name, lastName, email }: PersonalDataProps) {
  return (
    <AccountContent
      direction="column"
      align="flex-start"
      justify="flex-start"
      padding="0"
    >
      <AccountFormHeader>
        <PageTitle fontSize="1.2rem" margin="0 0 0.5rem 0">
          Informações Pessoais
        </PageTitle>
        <PageText fontSize="0.9rem" margin="0" color="text">
          Atualize seus dados pessoais e informações de contato
        </PageText>
      </AccountFormHeader>

      <AccountFormGrid>
        <AccountField>
          <AccountLabel htmlFor="nome">Nome</AccountLabel>
          <AccountInput id="nome" defaultValue={name} />
        </AccountField>

        <AccountField>
          <AccountLabel htmlFor="sobrenome">Sobrenome</AccountLabel>
          <AccountInput id="sobrenome" defaultValue={lastName} />
        </AccountField>
      </AccountFormGrid>

      <AccountField style={{ width: "49%" }}>
        <AccountLabel htmlFor="email">E-mail</AccountLabel>
        <AccountInput id="email" type="email" defaultValue={email} />
      </AccountField>

      <AccountFormGrid>
        <AccountField>
          <AccountLabel htmlFor="cpf">CPF</AccountLabel>
          <AccountInput
            id="cpf"
            placeholder="000.000.000-00"
            defaultValue="000.000.000-00"
          />
        </AccountField>

        <AccountField>
          <AccountLabel htmlFor="telefone">Telefone</AccountLabel>
          <AccountInput
            id="telefone"
            placeholder="(11) 99999-9999"
            defaultValue="(11) 99999-9999"
          />
        </AccountField>
      </AccountFormGrid>

      <AccountFormGrid>
        <AccountField>
          <AccountLabel htmlFor="dataNascimento">Data de Nascimento</AccountLabel>
          <AccountInput
            id="dataNascimento"
            type="date"
            defaultValue="1990-01-01"
          />
        </AccountField>

        <AccountField>
          <AccountLabel htmlFor="genero">Gênero</AccountLabel>
          <AccountInput
            id="genero"
            placeholder="Selecione"
            defaultValue="Masculino"
          />
        </AccountField>
      </AccountFormGrid>

      <AccountDivider />

      <AccountActions>
        <Button width="140px" height="40px" backgroundColor="background" textColor="text">
          Cancelar
        </Button>
        <Button width="160px" height="40px">
          Salvar Alterações
        </Button>
      </AccountActions>
    </AccountContent>
  );
}

