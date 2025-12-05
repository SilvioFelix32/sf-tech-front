import { User } from "../../../../services/auth";
import { CardContainer, CardTitle, RecipientName, AddressText } from "./styles";

interface DeliveryAddressCardProps {
  user: User;
}

export function DeliveryAddressCard({ user }: DeliveryAddressCardProps) {
  return (
    <CardContainer>
      <CardTitle>Endereço de Entrega:</CardTitle>
      <RecipientName>
        Destinatário: {user?.name} {user?.lastName} (Padrão)
      </RecipientName>
      <AddressText>Rua Qualquer nº 1234, Lugar Nenhum, UF, CEP 12345678</AddressText>
      <AddressText>Telefone de contato: 1234567890</AddressText>
    </CardContainer>
  );
}

