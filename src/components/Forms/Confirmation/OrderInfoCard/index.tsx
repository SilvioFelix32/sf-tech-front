import { ISale } from "../../../../interfaces";
import { CardContainer, CardTitle, InfoRow, InfoLabel, InfoValue } from "./styles";

interface OrderInfoCardProps {
  sale: ISale;
}

export function OrderInfoCard({ sale }: OrderInfoCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <CardContainer>
      <CardTitle>Informações da Compra:</CardTitle>
      <InfoRow>
        <InfoLabel>ID da Venda:</InfoLabel>
        <InfoValue>{sale.sale_id}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Data da Compra:</InfoLabel>
        <InfoValue>{formatDate(sale.created_at)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Método de Pagamento:</InfoLabel>
        <InfoValue>Cartão</InfoValue>
      </InfoRow>
    </CardContainer>
  );
}

