import { ISale, PaymentMethod, SaleStatus } from "../../../../interfaces";
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

  const getPaymentMethodLabel = (method?: PaymentMethod): string => {
    if (!method) return "-";
    switch (method) {
      case PaymentMethod.CREDIT_CARD:
        return "Cartão de Crédito";
      case PaymentMethod.DEBIT_CARD:
        return "Cartão de Débito";
      case PaymentMethod.PIX:
        return "PIX";
      case PaymentMethod.BANK_SLIP:
        return "Boleto Bancário";
      default:
        return method;
    }
  };

  const getSaleStatusLabel = (status?: SaleStatus): string => {
    if (!status) return "Em Análise";
    switch (status) {
      case SaleStatus.APPROVED:
        return "Aprovada";
      case SaleStatus.DELIVERED:
        return "Entregue";
      case SaleStatus.UNDER_REVIEW:
        return "Em Análise";
      case SaleStatus.IN_TRANSIT:
        return "Em Trânsito";
      default:
        return status;
    }
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
        <InfoLabel>Status:</InfoLabel>
        <InfoValue>{getSaleStatusLabel(sale.status)}</InfoValue>
      </InfoRow>
      {sale.payment_method && (
        <InfoRow>
          <InfoLabel>Método de Pagamento:</InfoLabel>
          <InfoValue>{getPaymentMethodLabel(sale.payment_method)}</InfoValue>
        </InfoRow>
      )}
    </CardContainer>
  );
}

