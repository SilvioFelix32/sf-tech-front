import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks/useAuth";
import { saleService } from "../../services/sale-service";
import { environment } from "../../config/environment";
import { ISale } from "../../interfaces";
import { formatPrice } from "../../utils/formatPrice";
import { PriceDetail } from "../Checkout/PriceDetail";
import { SubTotalWrapper, InfoText } from "../Checkout/styles";
import {
  SaleContainer,
  SaleHeader,
  SaleDate,
  SaleTotal,
} from "../../styles/pages/shopping";
import { PageWrapper, PageTitle } from "../../styles/pages/shared";

export default function MyShopping() {
  const router = useRouter();
  const { user } = useAuth();
  const company_id = environment.companyId;
  const user_id = user?.user_id;

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
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <PageWrapper width="100%" padding="20px">
      <PageTitle fontSize="22px" margin="0 0 2rem 0">
        Minhas compras:
      </PageTitle>

      {sortedSales.map((sale: ISale) => (
        <SaleContainer key={sale.sale_id}>
          <SaleHeader>
            <SaleDate>Compra realizada em: {formatDate(sale.created_at)}</SaleDate>
            <SaleTotal>Total: R$ {formatPrice(sale.total)}</SaleTotal>
          </SaleHeader>

          <SubTotalWrapper
            style={{
              justifyContent: "space-around",
              borderTop: "none",
            }}
          >
            <InfoText
              weight={600}
              size="1.2rem"
              style={{ alignSelf: "flex-start" }}
            >
              Itens da compra:
            </InfoText>
            {sale.items.map((item, index) => (
              <div
                key={`${item.product_id}-${index}`}
                style={{ display: "flex", width: "100%" }}
              >
                <Image
                  key={item.product_id}
                  alt="item"
                  src={item.url_banner || "https://i.imgur.com/2HFGvvT.png"}
                  width={60}
                  height={60}
                />
                <PriceDetail
                  label={`${item.title}${item.quantity > 1 ? ` (Qtd: ${item.quantity})` : ""}`}
                  value={`R$ ${formatPrice(item.total_value)}`}
                />
              </div>
            ))}
          </SubTotalWrapper>
        </SaleContainer>
      ))}
    </PageWrapper>
  );
}

