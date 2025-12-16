import { useQuery } from "react-query";
import { Modal } from "react-responsive-modal";
import { saleService } from "../../../../services/sale-service";
import { ISale, PaymentMethod, SaleStatus } from "../../../../interfaces";
import { formatPrice } from "../../../../utils/formatPrice";
import Image from "next/image";
import {
  Wrapper,
  Content,
  Text,
  Title,
  ItemsList,
  ItemCard,
  ItemInfo,
  ItemImage,
  Divider,
  TotalSection,
} from "./styles";
import "react-responsive-modal/styles.css";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  saleId: string;
  company_id: string;
}

export function ModalSaleDetails({
  isOpen,
  setIsOpen,
  saleId,
  company_id,
}: ModalProps) {
  const { data: sale, isLoading } = useQuery<ISale>(
    ["sale", saleId, company_id],
    () => saleService.getById(company_id, saleId),
    {
      enabled: !!saleId && !!company_id && isOpen,
    }
  );

  if (isLoading) {
    return (
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
      >
        <Wrapper>
          <Text>Carregando detalhes da venda...</Text>
        </Wrapper>
      </Modal>
    );
  }

  if (!sale) {
    return (
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
      >
        <Wrapper>
          <Text>Venda não encontrada</Text>
        </Wrapper>
      </Modal>
    );
  }

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
    <Modal
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      center
    >
      <Wrapper>
        <Title>Detalhes da Venda</Title>
        
        <Content>
          <Text>
            <strong>ID da Venda:</strong> {sale.sale_id}
          </Text>
          <Text>
            <strong>ID do Usuário:</strong> {sale.user_id}
          </Text>
          <Text>
            <strong>Status:</strong> {getSaleStatusLabel(sale.status)}
          </Text>
          {sale.payment_method && (
            <Text>
              <strong>Forma de Pagamento:</strong> {getPaymentMethodLabel(sale.payment_method)}
            </Text>
          )}
          {sale.deliver_address && (
            <Text style={{ whiteSpace: "pre-line" }}>
              <strong>Endereço de Entrega:</strong>
              <br />
              {sale.deliver_address}
            </Text>
          )}
          <Text>
            <strong>Data de Criação:</strong>{" "}
            {new Date(sale.created_at).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Content>

        <Divider />

        <Title>Itens da Venda</Title>
        <ItemsList>
          {sale.items.map((item, index) => (
            <ItemCard key={`${item.product_id}-${index}`}>
              <ItemImage>
                <Image
                  src={item.url_banner || "https://i.imgur.com/2HFGvvT.png"}
                  alt={item.title}
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </ItemImage>
              <ItemInfo>
                <Text>
                  <strong>Produto:</strong> {item.title}
                </Text>
                {item.subtitle && (
                  <Text>
                    <strong>Subtítulo:</strong> {item.subtitle}
                  </Text>
                )}
                <Text>
                  <strong>SKU:</strong> {item.sku}
                </Text>
                <Text>
                  <strong>Quantidade:</strong> {item.quantity}
                </Text>
                <Text>
                  <strong>Valor Unitário:</strong> R$ {formatPrice(item.total_value / item.quantity)}
                </Text>
                <Text>
                  <strong>Valor Total do Item:</strong> R$ {formatPrice(item.total_value)}
                </Text>
                {item.description && (
                  <Text>
                    <strong>Descrição:</strong> {item.description}
                  </Text>
                )}
              </ItemInfo>
            </ItemCard>
          ))}
        </ItemsList>

        <Divider />

        <TotalSection>
          <Text>
            <strong>Total da Venda:</strong> R$ {formatPrice(sale.total)}
          </Text>
        </TotalSection>
      </Wrapper>
    </Modal>
  );
}

