import { User } from "../../../context/Authentication/types";
import { Text, Wrapper } from "./styles";
import { Content, Title } from "./styles";

interface DeliveryMethodProps {
  user: User;
}
export function DeliveryMethod({ user }: DeliveryMethodProps) {
  return (
    <Wrapper>
      <Content>
        <Title>
          Destinatário: {user?.name} {user?.lastName} (Padrão)
        </Title>
        <Text>
          Rua Qualquer nº 1234, Lugar Nenhum, UF, CEP 12345678 <br />
          Telefone de contato: 1234567890
        </Text>
      </Content>
    </Wrapper>
  );
}
