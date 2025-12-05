import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useAuth } from "../../../hooks/useAuth";
import { ISale } from "../../../interfaces";
import { saleService } from "../../../services";
import { environment } from "../../../config/environment";
import { ConfirmationHeader } from "./ConfirmationHeader";
import { OrderInfoCard } from "./OrderInfoCard";
import { DeliveryAddressCard } from "./DeliveryAddressCard";
import { OrderSummaryCard } from "./OrderSummaryCard";
import { Wrapper, CardsGrid, ButtonsContainer, Button, LoadingMessage, ErrorMessage } from "./styles";

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

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingMessage>Carregando detalhes da compra...</LoadingMessage>
      </Wrapper>
    );
  }

  if (!sale) {
    return (
      <Wrapper>
        <ErrorMessage>Compra não encontrada</ErrorMessage>
        <ButtonsContainer>
          <Button onClick={() => router.push("/")}>Voltar para o início</Button>
          <Button onClick={() => router.push("/account?page=shopping")}>
            Minhas compras
          </Button>
        </ButtonsContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ConfirmationHeader />

      <CardsGrid>
        <OrderInfoCard sale={sale} />
        <DeliveryAddressCard user={user} />
      </CardsGrid>

      <OrderSummaryCard sale={sale} />

      <ButtonsContainer>
        <Button onClick={() => router.push("/")}>
          Voltar para o início
        </Button>
        <Button onClick={() => router.push("/account?page=shopping")}>
          Minhas compras
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
}
