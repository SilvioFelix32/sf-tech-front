import { User } from "../../../services/auth";
import { DeliveryRecipient, DeliveryText, DeliveryInfo } from "../styles";

interface DeliveryMethodProps {
  user: User;
}
export function DeliveryMethod({ user }: DeliveryMethodProps) {
  return (
    <DeliveryInfo>
      <DeliveryRecipient>
        Destinatário: {user?.name} {user?.lastName} (Padrão)
      </DeliveryRecipient>
      <DeliveryText>
        Rua Qualquer nº 1234, Lugar Nenhum, UF, CEP 12345678
      </DeliveryText>
      <DeliveryText>
        Telefone de contato: 1234567890
      </DeliveryText>
    </DeliveryInfo>
  );
}
