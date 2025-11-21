import { AuthContext, useCart } from "../../context";
import Image from "next/image";
import { IProduct, ISaleItem, ICreateSaleRequest } from "../../interfaces";
import { CartItemType } from "../../context/Cart/types";
import { formatPrice } from "../../utils/formatPrice";
import { useContext, useState } from "react";
import { DeliveryMethod } from "./ClientDelivery";
import { CardForm } from "./Card";
import router from "next/router";
import { PriceDetail } from "../Checkout/PriceDetail";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import {
  Wrapper,
  Title,
  Content,
  PaymentOptions,
  Button,
  ButtonWrapper,
} from "./styles";
import {
  ButtonPay,
  InfoText,
  PaymentWrapper,
  SubTotalWrapper,
  Totals,
} from "../Checkout/styles";
import { saleService } from "../../services";
import { environment } from "../../config/environment";
import { GetSwallAlert } from "../../utils";

export function PaymentForm() {
  const { user } = useContext(AuthContext);
  const { cartItems, cartTotalPriceWithoutDiscount, cartTotalPrice, clearCart } =
    useCart();
  const [isLoading, setIsLoading] = useState(false);

  const mapCartItemsToSaleItems = (items: CartItemType[]): ISaleItem[] => {
    return items.map((item) => {
      const quantity = item.amount || 1;
      const itemPrice = item.price || 0;
      const itemDiscount = item.discount || 0;
      const totalValue = quantity * (itemPrice - itemDiscount);

      return {
        category_id: item.category_id || "",
        product_id: item.product_id,
        sku: item.sku || "",
        title: item.title || "",
        subtitle: item.subtitle || "",
        description: item.description || "",
        url_banner: item.urlBanner || "",
        quantity,
        total_value: Math.round(totalValue * 100) / 100,
      };
    });
  };

  const handleConfirmPayment = async () => {
    if (!user?.user_id) {
      GetSwallAlert("center", "error", "Usuário não autenticado", 3000);
      return;
    }

    if (cartItems.length === 0) {
      GetSwallAlert("center", "error", "Carrinho vazio", 3000);
      return;
    }

    setIsLoading(true);

    try {
      const saleItems = mapCartItemsToSaleItems(cartItems);
      
      const missingCategoryId = saleItems.some(item => !item.category_id);
      if (missingCategoryId) {
        GetSwallAlert(
          "center",
          "error",
          "Alguns produtos não possuem categoria. Por favor, recarregue a página e tente novamente.",
          4000
        );
        setIsLoading(false);
        return;
      }

      const total = Math.round(Number(cartTotalPrice) * 100) / 100;

      const saleData: ICreateSaleRequest = {
        items: saleItems,
        total,
      };

      const createdSale = await saleService.create(
        environment.companyId,
        user.user_id,
        saleData
      );

      clearCart();
      GetSwallAlert("center", "success", "Compra realizada com sucesso!", 2000);
      
      setTimeout(() => {
        router.push(`/confirmation?sale_id=${createdSale.sale_id}`);
      }, 2000);
    } catch (error) {
      console.error("Erro ao criar venda:", error);
      GetSwallAlert(
        "center",
        "error",
        "Erro ao processar pagamento. Tente novamente.",
        3000
      );
    } finally {
      setIsLoading(false);
    }
  };

  return user ? (
    <Wrapper>
      <Content>
        <Title>Endereço de entrega:</Title>
        <DeliveryMethod user={user} />
        <PaymentOptions>
          <Title>Forma de pagamento:</Title>
          <CAccordion>
            <CAccordionItem itemKey={1} onClick={() => {}}>
              <CAccordionHeader>Cartão de Crédito</CAccordionHeader>
              <CAccordionBody>
                <CardForm user={user} />
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>Cartão de Débito</CAccordionHeader>
              <CAccordionBody>
                <CardForm user={user} />
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </PaymentOptions>
      </Content>
      <PaymentWrapper>
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
            Itens do seu carrinho
          </InfoText>
          {cartItems.map((item: IProduct) => (
            <div
              key={item.product_id}
              style={{ display: "flex", width: "100%" }}
            >
              <Image
                key={item.product_id}
                alt="item"
                src={item.urlBanner}
                width={60}
                height={60}
              />
              <PriceDetail
                label={item.title}
                value={`R$ ${formatPrice(item.price)}`}
              />
            </div>
          ))}
        </SubTotalWrapper>
        <SubTotalWrapper>
          <InfoText
            weight={600}
            size="1.2rem"
            style={{ alignSelf: "flex-start" }}
          >
            Detalhes da sua compra:
          </InfoText>
          <PriceDetail
            label="Valor total do carrinho:"
            value={`R$ ${formatPrice(Number(cartTotalPriceWithoutDiscount))}`}
          />
          <PriceDetail
            label="Taxa de entrega:"
            value={`R$ ${formatPrice(10)}`}
            strikeThrough
          />
          <PriceDetail
            label="Desconto:"
            value={`R$ ${formatPrice(
              Number(cartTotalPriceWithoutDiscount) - Number(cartTotalPrice)
            )}`}
          />
        </SubTotalWrapper>
        <Totals>
          <InfoText weight={600}>Total:</InfoText>
          <InfoText weight={600}>
            R$ {formatPrice(Number(cartTotalPrice))}
          </InfoText>
        </Totals>
        <ButtonWrapper>
          <Button onClick={() => router.push("/checkout")}>
            Voltar para o carrinho
          </Button>
          <ButtonPay
            style={{ borderBottomLeftRadius: "0" }}
            onClick={handleConfirmPayment}
            disabled={Number(cartTotalPrice) <= 0 || isLoading}
          >
            {isLoading ? "Processando..." : "Confirmar Pagamento"}
          </ButtonPay>
        </ButtonWrapper>
      </PaymentWrapper>
    </Wrapper>
  ) : (
    <Wrapper style={{ flexDirection: "column", alignItems: "center" }}>
      <Title>Faça login primeiro para poder continuar com a compra:</Title>
      <Button
        style={{ width: "30%", marginTop: "15px", borderRadius: "6px" }}
        onClick={() => router.push("/signIn")}
      >
        Login
      </Button>
    </Wrapper>
  );
}
