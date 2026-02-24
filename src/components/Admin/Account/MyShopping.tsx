import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { BiChevronDown } from "react-icons/bi";
import { useAuth } from "../../../hooks/useAuth";
import { saleService } from "../../../services/sale-service";
import { environment } from "../../../config/environment";
import { ISale, PaymentMethod, SaleStatus } from "../../../interfaces";
import { formatPrice } from "../../../utils/formatPrice";
import { Button } from "../../../styles/components";
import {
  SaleActions,
  SaleContainer,
  SaleHeader,
  SaleHeaderLeft,
  SaleHeaderRight,
  SaleDate,
  SaleStatusBadge,
  SaleTotal,
  SaleExpandIcon,
  SaleContent,
  SaleItemsTitle,
  SaleItemsList,
  SaleItem,
  SaleItemImage,
  SaleItemInfo,
  SaleItemTitle,
  SaleItemSubtitle,
  SaleItemPrice,
} from "../../../styles/pages/shopping";
import { PageWrapper, PageTitle } from "../../../styles/pages/shared";

export default function MyShopping() {
  const { user } = useAuth();
  const company_id = environment.companyId;
  const user_id = user?.user_id;
  const [expandedSales, setExpandedSales] = useState<Set<string>>(new Set());

  const toggleSale = (saleId: string) => {
    setExpandedSales((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(saleId)) {
        newSet.delete(saleId);
      } else {
        newSet.add(saleId);
      }
      return newSet;
    });
  };

  const { data: sales = [], isLoading } = useQuery<ISale[]>(
    ["sales", company_id, user_id],
    () => saleService.getAll(company_id, user_id),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      enabled: !!company_id && !!user_id,
      onSuccess: (data) => {
        console.log("Sales loaded:", data);
      },
    }
  );

  if (!user) {
    return (
      <PageWrapper width="100%" padding="20px">
        <PageTitle fontSize="20px">Nenhum dado disponível</PageTitle>
      </PageWrapper>
    );
  }

  if (isLoading) {
    return (
      <PageWrapper width="100%" padding="20px">
        <PageTitle fontSize="22px">Carregando suas compras...</PageTitle>
      </PageWrapper>
    );
  }

  const sortedSales = [...sales].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });

  if (sortedSales.length === 0) {
    return (
      <PageWrapper width="100%" padding="20px">
        <PageTitle fontSize="1.5rem" textAlign="center" margin="3rem 0 0 0">
          Nenhuma compra realizada ainda
        </PageTitle>
      </PageWrapper>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
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
        return "Em Análise";
    }
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

  return (
    <PageWrapper width="100%" padding="24px">
      <PageTitle fontSize="28px" margin="0 0 1.5rem 0">
        Minhas Compras
      </PageTitle>

      {sortedSales.map((sale: ISale) => {
        const isExpanded = expandedSales.has(sale.sale_id || "");

        return (
          <SaleContainer key={sale.sale_id}>
            <SaleHeader onClick={() => toggleSale(sale.sale_id || "")}>
              <SaleHeaderLeft>
                <SaleDate>Compra realizada em: {formatDate(sale.created_at)}</SaleDate>
                <SaleStatusBadge $status={sale.status}>
                  {getSaleStatusLabel(sale.status)}
                </SaleStatusBadge>
              </SaleHeaderLeft>
              <SaleHeaderRight>
                <SaleTotal>Total R$ {formatPrice(sale.total)}</SaleTotal>
                <SaleExpandIcon $isExpanded={isExpanded}>
                  <BiChevronDown />
                </SaleExpandIcon>
              </SaleHeaderRight>
            </SaleHeader>

            <SaleContent $isExpanded={isExpanded}>
              {sale.payment_method && (
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Forma de pagamento:</strong> {getPaymentMethodLabel(sale.payment_method)}
                </div>
              )}
              {sale.deliver_address && (
                <div style={{ marginBottom: "1rem", whiteSpace: "pre-line" }}>
                  <strong>Endereço de entrega:</strong>
                  <br />
                  {sale.deliver_address}
                </div>
              )}
              <SaleItemsTitle>Itens da compra:</SaleItemsTitle>
              <SaleItemsList>
                {sale.items.map((item, index) => (
                  <SaleItem key={`${item.product_id}-${index}`}>
                    <SaleItemImage>
                      <Image
                        alt={item.title}
                        src={item.url_banner || "https://i.imgur.com/2HFGvvT.png"}
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                      />
                    </SaleItemImage>
                    <SaleItemInfo>
                      <SaleItemTitle>{item.title}</SaleItemTitle>
                      <SaleItemSubtitle>
                        {item.subtitle || item.description}
                      </SaleItemSubtitle>
                    </SaleItemInfo>
                    <SaleItemPrice>R$ {formatPrice(item.total_value)}</SaleItemPrice>
                  </SaleItem>
                ))}
              </SaleItemsList>

              <SaleActions>
                <Button
                  width="100%"
                  height="40px"
                  backgroundColor="background"
                  textColor="text"
                >
                  Ver Detalhes
                </Button>
                <Button
                  width="100%"
                  height="40px"
                  backgroundColor="background"
                  textColor="text"
                >
                  Avaliar Produtos
                </Button>
                <Button width="100%" height="40px">
                  Comprar Novamente
                </Button>
              </SaleActions>
            </SaleContent>
          </SaleContainer>
        );
      })}
    </PageWrapper>
  );
}

