import { useQuery } from "react-query";
import { Modal } from "react-responsive-modal";
import { saleService } from "../../../../services/sale-service";
import {
  ISale,
  ModalSaleDetailsProps,
  PaymentMethod,
  SaleStatus,
} from "../../../../interfaces";
import { formatPrice } from "../../../../utils/formatPrice";
import Image from "next/image";
import {
  LuBanknote,
  LuCalendarDays,
  LuCreditCard,
  LuHash,
  LuMapPin,
  LuUser,
} from "react-icons/lu";
import {
  Wrapper,
  Header,
  HeaderTop,
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
  InfoIconWrapper,
  TotalLeft,
  TotalValue,
  ActionsRow,
  SecondaryButton,
  PrimaryButton,
  StatusBadge,
  AddressContent,
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
import { MdModeEditOutline } from "react-icons/md";

export function ModalSaleDetails({
  isOpen,
  setIsOpen,
  saleId,
  company_id,
}: ModalSaleDetailsProps) {
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

  const getSaleStatusVariant = (status?: SaleStatus) => {
    switch (status) {
      case SaleStatus.APPROVED:
        return "approved" as const;
      case SaleStatus.DELIVERED:
        return "delivered" as const;
      case SaleStatus.IN_TRANSIT:
        return "in_transit" as const;
      case SaleStatus.UNDER_REVIEW:
        return "under_review" as const;
      default:
        return "default" as const;
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
      styles={{ modal: { width: "720px", maxHeight: "90vh", padding: 0 } }}
      center
    >
      <Wrapper>
        <Header>
          <HeaderTop>
            <Title>Detalhes da Venda</Title>
            <StatusBadge variant={getSaleStatusVariant(sale.status)}>
              {getSaleStatusLabel(sale.status)}
            </StatusBadge>
          </HeaderTop>
          <InfoGrid>
            <InfoCard>
              <InfoIconWrapper>
                <LuHash size={16} />
              </InfoIconWrapper>
              <InfoText>
                <InfoLabel>ID da Venda</InfoLabel>
                <InfoValue>{sale.sale_id}</InfoValue>
              </InfoText>
            </InfoCard>
            <InfoCard>
              <InfoIconWrapper>
                <LuUser size={16} />
              </InfoIconWrapper>
              <InfoText>
                <InfoLabel>ID do Usuário</InfoLabel>
                <InfoValue>{sale.user_id}</InfoValue>
              </InfoText>
            </InfoCard>
            {sale.payment_method && (
              <InfoCard>
                <InfoIconWrapper>
                  <LuCreditCard size={16} />
                </InfoIconWrapper>
                <InfoText>
                  <InfoLabel>Forma de Pagamento</InfoLabel>
                  <InfoValue>
                    {getPaymentMethodLabel(sale.payment_method)}
                  </InfoValue>
                </InfoText>
              </InfoCard>
            )}
            <InfoCard>
              <InfoIconWrapper>
                <LuCalendarDays size={16} />
              </InfoIconWrapper>
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
        </Header>

        <AddressCard>
          <AddressHeader>
            <InfoIconWrapper>
              <LuMapPin size={16} />
            </InfoIconWrapper>
            <Text>
              <strong>Endereço de Entrega</strong>
            </Text>
            {sale.deliver_address && <AddressBadge>Entrega</AddressBadge>}
          </AddressHeader>
          <AddressContent>
            {sale.deliver_address && (
              <Text style={{ whiteSpace: "pre-line", marginTop: 0 }}>
                {sale.deliver_address}
              </Text>
            )}
          </AddressContent>
        </AddressCard>

        <Divider />

        <Content>
          <Title>Itens da Venda ({sale.items.length})</Title>
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
                            src={
                              item.url_banner || "https://i.imgur.com/2HFGvvT.png"
                            }
                            alt={item.title ?? "Produto"}
                            width={48}
                            height={48}
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <ItemTitle>{item.title}</ItemTitle>
                            <span
                              style={{
                                fontSize: "0.75rem",
                                opacity: 0.7,
                                fontFamily: "monospace",
                              }}
                            >
                              SKU: {item.sku}
                            </span>
                          </div>
                        </ItemCard>
                      </TableCell>
                      <TableCell alignCenter>{item.quantity}</TableCell>
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

        </Content>
        <Divider />

        <TotalSection>
          <TotalLeft>
            <LuBanknote size={20} />
            <Text>
              <strong>Total da Venda</strong>
            </Text>
          </TotalLeft>
          <TotalValue>R$ {formatPrice(sale.total)}</TotalValue>
        </TotalSection>

        <ActionsRow>
          <SecondaryButton onClick={() => setIsOpen(false)}>
            Fechar
          </SecondaryButton>
          <PrimaryButton>
            <MdModeEditOutline size={16} />
            Atualizar Status
          </PrimaryButton>
        </ActionsRow>
      </Wrapper>
    </Modal>
  );
}

