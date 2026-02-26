import { User } from "../../../interfaces/IUser";
import { DeliveryMethod } from "../ClientDelivery";
import { Title, DeliveryCard } from "./styles";

interface DeliverySectionProps {
  user: User;
}

export function DeliverySection({ user }: DeliverySectionProps) {
  return (
    <>
      <DeliveryCard>
        <Title>Endereço de entrega:</Title>
        <DeliveryMethod user={user} />
      </DeliveryCard>
    </>
  );
}

