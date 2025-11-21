import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { AuthContext } from "../context";
import { saleService } from "../services/sale-service";
import { environment } from "../config/environment";
import { ISale } from "../interfaces";
import { formatPrice } from "../utils/formatPrice";
import { PriceDetail } from "../components/Checkout/PriceDetail";
import { SubTotalWrapper, InfoText } from "../components/Checkout/styles";
//styles
import {
  Wrapper,
  SaleContainer,
  SaleHeader,
  SaleDate,
  SaleTotal,
  Title,
} from "../styles/pages/shopping";

export default function MyShopping() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
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
      <Wrapper>
        <Title style={{ fontSize: "20px" }}>Nenhum dado disponível</Title>
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <Title style={{ fontSize: "22px" }}>Carregando suas compras...</Title>
      </Wrapper>
    );
  }

  const sortedSales = [...sales].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });

  if (sortedSales.length === 0) {
    return (
      <Wrapper>
        <Title
          style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "3rem" }}
        >
          Nenhuma compra realizada ainda
        </Title>
      </Wrapper>
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
    <Wrapper>
      <Title style={{ fontSize: "22px", marginBottom: "2rem" }}>
        Minhas compras:
      </Title>

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
    </Wrapper>
  );
}
