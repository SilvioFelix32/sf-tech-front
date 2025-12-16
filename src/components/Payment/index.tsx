import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { ISaleItem, ICreateSaleRequest, PaymentMethod } from "../../interfaces";
import { CartItemType } from "../../services/cart";
import { useState } from "react";
import router from "next/router";
import {
  Wrapper,
  LoginWrapper,
  MainContent,
  Sidebar,
  LoginTitle,
  LoginButton,
} from "./styles";
import { DeliverySection } from "./DeliverySection";
import { PaymentMethodSelector, PaymentMethodType } from "./PaymentMethodSelector";
import { CartSummary } from "./CartSummary";
import { saleService } from "../../services";
import { environment } from "../../config/environment";
import { GetSwallAlert } from "../../utils";

export function PaymentForm() {
  const { user } = useAuth();
  const { cartItems, cartTotalPriceWithoutDiscount, cartTotalPrice, clearCart } =
    useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethodType>(null);

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

      if (!selectedPaymentMethod) {
        GetSwallAlert(
          "center",
          "warning",
          "Por favor, selecione uma forma de pagamento",
          3000
        );
        setIsLoading(false);
        return;
      }

      const total = Math.round(Number(cartTotalPrice) * 100) / 100;

      const formattedAddress = `Destinatário: ${user.name} ${user.lastName} (Padrão)\nRua Qualquer nº 1234, Lugar Nenhum, UF, CEP 12345678\nTelefone de contato: 1234567890`;

      const convertPaymentMethodToEnum = (method: PaymentMethodType): PaymentMethod | undefined => {
        if (!method) return undefined;
        switch (method) {
          case "credit":
            return PaymentMethod.CREDIT_CARD;
          case "debit":
            return PaymentMethod.DEBIT_CARD;
          case "pix":
            return PaymentMethod.PIX;
          default:
            return undefined;
        }
      };

      const saleData: ICreateSaleRequest = {
        items: saleItems,
        total,
        payment_method: convertPaymentMethodToEnum(selectedPaymentMethod),
        deliver_address: formattedAddress,
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

  const handleBackToCart = () => {
    router.push("/checkout");
  };

  return user ? (
    <Wrapper>
      <MainContent>
        <DeliverySection user={user} />
        <PaymentMethodSelector
          user={user}
          selectedMethod={selectedPaymentMethod}
          onMethodSelect={setSelectedPaymentMethod}
        />
      </MainContent>

      <Sidebar>
        <CartSummary
          cartItems={cartItems}
          cartTotalPriceWithoutDiscount={cartTotalPriceWithoutDiscount}
          cartTotalPrice={cartTotalPrice}
          isLoading={isLoading}
          onBackToCart={handleBackToCart}
          onConfirmPayment={handleConfirmPayment}
        />
      </Sidebar>
    </Wrapper>
  ) : (
    <LoginWrapper>
      <LoginTitle>
        Faça login primeiro para poder continuar com a compra
      </LoginTitle>
      <LoginButton onClick={() => router.push("/auth/signIn")}>
        Fazer Login
      </LoginButton>
    </LoginWrapper>
  );
}
