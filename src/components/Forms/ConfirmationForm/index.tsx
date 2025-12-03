import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Image from "next/image";
import { useAuth } from "../../../hooks/useAuth";
import { ISale } from "../../../interfaces";
import { formatPrice } from "../../../utils";
import { saleService } from "../../../services";
import { environment } from "../../../config/environment";
import { PriceDetail } from "../../Checkout/PriceDetail";
import { SubTotalWrapper, InfoText } from "../../Checkout/styles";
import { DeliveryMethod } from "../../Payment/ClientDelivery";
import { Button, Wrapper, Title, Text, Content } from "./styles";

export function ConfirmationForm() {
  const { user } = useAuth();
  const router = useRouter();
  const { sale_id } = router.query;
  const company_id = environment.companyId;

  const { data: sale, isLoading } = useQuery<ISale>(
    ["sale", sale_id, company_id],
    () => saleService.getById(company_id, String(sale_id)),
    {
      enabled: !!sale_id && !!company_id,
      retry: 1,
    }
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Title>Carregando detalhes da compra...</Title>
      </Wrapper>
    );
  }

  if (!sale) {
    return (
      <Wrapper>
        <Title>Compra não encontrada</Title>
        <Button onClick={() => router.push("/")}>Voltar para o início</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Seu pedido foi realizado com sucesso!</Title>
      <Title style={{ fontSize: "1.3rem" }}>Obrigado pela compra</Title>

      <Content
        style={{
          width: "100%",
          flexDirection: "row",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <SubTotalWrapper
          style={{
            width: "50%",
            padding: "20px",
            outline: "1px solid #33C1B3",
            borderRadius: "6px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start", marginBottom: "15px" }}
          >
            Informações da Compra:
          </InfoText>
          <PriceDetail label="ID da Venda:" value={sale.sale_id} />
          <PriceDetail
            label="Data da Compra:"
            value={formatDate(sale.created_at)}
          />
          <PriceDetail label="Método de Pagamento:" value="Cartão" />
        </SubTotalWrapper>

        <SubTotalWrapper
          style={{
            width: "50%",
            padding: "20px",
            outline: "1px solid #33C1B3",
            borderRadius: "6px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start", marginBottom: "15px" }}
          >
            Endereço de Entrega:
          </InfoText>
          <DeliveryMethod user={user} />
        </SubTotalWrapper>
      </Content>

      <Content
        style={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        <SubTotalWrapper
          style={{
            width: "100%",
            padding: "20px",
            outline: "1px solid #33C1B3",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start", marginBottom: "20px" }}
          >
            Resumo da Compra:
          </InfoText>
          
          {sale.items.map((item, index) => (
            <div
              key={`${item.product_id}-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                outline: "1px solid #33C1B3",
                borderRadius: "6px",
              }}
            >
              <Image
                src={
                  item.url_banner || "https://i.imgur.com/2HFGvvT.png"
                }
                alt={item.title}
                width={80}
                height={80}
                style={{ objectFit: "contain", marginRight: "15px" }}
              />
              <div style={{ flex: 1 }}>
                <Text style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {item.title}
                </Text>
                {item.subtitle && (
                  <Text style={{ fontSize: "0.9rem", color: "#666" }}>
                    {item.subtitle}
                  </Text>
                )}
                <Text style={{ fontSize: "0.85rem", marginTop: "5px" }}>
                  Quantidade: {item.quantity}
                </Text>
              </div>
              <Text style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                R$ {formatPrice(item.total_value)}
              </Text>
            </div>
          ))}

          <PriceDetail
            style={{ borderTop: "1px solid #33C1B3", marginTop: "20px", paddingTop: "10px" }}
            label="Total:"
            value={`R$ ${formatPrice(sale.total)}`}
          />
        </SubTotalWrapper>
      </Content>
      <Button onClick={() => router.push("/")}>Voltar para o início</Button>
    </Wrapper>
  );
}
