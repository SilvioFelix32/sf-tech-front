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
  ItemTitle,
  Divider,
  TotalSection,
  InfoGrid,
  InfoCard,
  InfoText,
  InfoLabel,
  InfoValue,
  AddressCard,
  AddressHeader,
  AddressBadge,
} from "./styles";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
} from "../../../AdminTable";
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
      styles={{ modal: { width: "1800px" } }}
      center
    >
      <Wrapper>
        <Title>Detalhes da Venda</Title>

        <Content>
          <InfoGrid>
            <InfoCard>
              <InfoText>
                <InfoLabel>ID da Venda</InfoLabel>
                <InfoValue>{sale.sale_id}</InfoValue>
              </InfoText>
            </InfoCard>
            <InfoCard>
              <InfoText>
                <InfoLabel>ID do Usuário</InfoLabel>
                <InfoValue>{sale.user_id}</InfoValue>
              </InfoText>
            </InfoCard>
            <InfoCard>
              <InfoText>
                <InfoLabel>Status</InfoLabel>
                <InfoValue>{getSaleStatusLabel(sale.status)}</InfoValue>
              </InfoText>
            </InfoCard>
            {sale.payment_method && (
              <InfoCard>
                <InfoText>
                  <InfoLabel>Forma de Pagamento</InfoLabel>
                  <InfoValue>
                    {getPaymentMethodLabel(sale.payment_method)}
                  </InfoValue>
                </InfoText>
              </InfoCard>
            )}
            <InfoCard>
              <InfoText>
                <InfoLabel>Data da Venda</InfoLabel>
                <InfoValue>
                  {new Date(sale.created_at).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </InfoValue>
              </InfoText>
            </InfoCard>
          </InfoGrid>

          <AddressCard>
            <AddressHeader>
              <Text>
                <strong>Endereço de Entrega</strong>
              </Text>
              {sale.deliver_address && (
                <AddressBadge>Entrega</AddressBadge>
              )}
            </AddressHeader>
            {sale.deliver_address && (
              <Text style={{ whiteSpace: "pre-line", marginTop: 0 }}>
                {sale.deliver_address}
              </Text>
            )}
          </AddressCard>
        </Content>

        <Divider />

        <Title>Itens da Venda</Title>
        <ItemsList>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead alignCenter>Qtd.</TableHead>
                <TableHead alignRight>Unitário</TableHead>
                <TableHead alignRight>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sale.items.length > 0 ? (
                sale.items.map((item, index) => (
                  <TableRow key={`${item.product_id}-${index}`}>
                    <TableCell>
                      <ItemCard>
                        <Image
                          src={item.url_banner || "https://i.imgur.com/2HFGvvT.png"}
                          alt={item.title ?? "Produto"}
                          width={48}
                          height={48}
                          style={{ objectFit: "cover" }}
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <ItemTitle>{item.title}</ItemTitle>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              opacity: 0.7,
                              fontFamily: "monospace",
                            }}
                          >
                            {item.sku}
                          </span>
                        </div>
                      </ItemCard>
                    </TableCell>
                    <TableCell alignCenter>
                      {item.quantity}
                    </TableCell>
                    <TableCell alignRight>
                      R$ {formatPrice(item.total_value / item.quantity)}
                    </TableCell>
                    <TableCell alignRight fontMedium>
                      R$ {formatPrice(item.total_value)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <AdminTableEmpty
                  colSpan={5}
                  message="Nenhum item encontrado"
                />
              )}
            </TableBody>
          </Table>
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

