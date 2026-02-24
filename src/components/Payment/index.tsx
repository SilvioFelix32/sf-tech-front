import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { ISaleItem, ICreateSaleRequest, PaymentMethod } from "../../interfaces";
import { CartItemType } from "../../services/cart";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import router from "next/router";
import {
  Wrapper,
  LoginWrapper,
  MainContent,
  Sidebar,
  LoginTitle,
  LoginButton,
  DeliveryCard,
  Title,
  Button,
} from "./styles";
import { DeliverySection } from "./DeliverySection";
import { PaymentMethodSelector, PaymentMethodType } from "./PaymentMethodSelector";
import { CartSummary } from "./CartSummary";
import { saleService } from "../../services";
import { environment } from "../../config/environment";
import { GetSwallAlert } from "../../utils";
import { addressService } from "../../services/address-service";
import { IAddress } from "../../interfaces/IDbUser";
import { ModalCreateAddress } from "../Modals";

export function PaymentForm() {
  const { user } = useAuth();
  const { cartItems, cartTotalPriceWithoutDiscount, cartTotalPrice, clearCart } =
    useCart();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethodType>(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const { data: addresses = [], isLoading: isLoadingAddresses } = useQuery<IAddress[]>(
    ["addresses", user?.user_id],
    () => {
      if (!user?.user_id) throw new Error("user_id não disponível");
      return addressService.findAll(user.user_id);
    },
    {
      enabled: !!user?.user_id,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

  function getPrimaryAddress(): IAddress | null {
    if (addresses.length === 0) return null;
    
    const primaryAddress = addresses.find(
      (addr) => addr.address_preference === addr.address_type
    );
    
    return primaryAddress || addresses[0] || null;
  }

  function formatAddress(address: IAddress | null, user: any): string {
    if (!address) {
      return `Destinatário: ${user.name} ${user.lastName}\nEndereço não cadastrado`;
    }

    const addressTypeLabel = address.address_type === "House" 
      ? "Residencial" 
      : address.address_type === "Work" 
      ? "Trabalho" 
      : "Temporário";

    return `Destinatário: ${user.name} ${user.lastName} (${addressTypeLabel})\n${address.street}, ${address.number}\n${address.neighborhood} - ${address.city}\nCEP: ${address.cep}`;
  }

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

      const primaryAddress = getPrimaryAddress();
      const formattedAddress = formatAddress(primaryAddress, user);

      if (!primaryAddress) {
        GetSwallAlert(
          "center",
          "warning",
          "Por favor, cadastre um endereço antes de finalizar a compra",
          3000
        );
        setIsLoading(false);
        return;
      }

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

  const handleAddressModalSuccess = () => {
    queryClient.invalidateQueries(["addresses", user?.user_id]);
    setIsAddressModalOpen(false);
  };

  const hasAddress = addresses.length > 0;

  return user ? (
    <Wrapper>
      <MainContent>
        <DeliveryCard>
          <Title>Endereço de entrega:</Title>
          {isLoadingAddresses ? (
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Carregando endereços...</p>
          ) : !hasAddress ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#d33", fontSize: "0.95rem", fontWeight: 500 }}>
                Você precisa cadastrar um endereço para continuar com a compra.
              </p>
              <Button onClick={() => setIsAddressModalOpen(true)}>
                Cadastrar Endereço
              </Button>
            </div>
          ) : (
            <DeliverySection user={user} />
          )}
        </DeliveryCard>

        {hasAddress && (
          <PaymentMethodSelector
            user={user}
            selectedMethod={selectedPaymentMethod}
            onMethodSelect={setSelectedPaymentMethod}
          />
        )}
      </MainContent>

      <Sidebar>
        <CartSummary
          cartItems={cartItems}
          cartTotalPriceWithoutDiscount={cartTotalPriceWithoutDiscount}
          cartTotalPrice={cartTotalPrice}
          isLoading={isLoading}
          onBackToCart={handleBackToCart}
          onConfirmPayment={handleConfirmPayment}
          disabled={!hasAddress}
        />
      </Sidebar>

      {user?.user_id && (
        <ModalCreateAddress
          isOpen={isAddressModalOpen}
          setIsOpen={setIsAddressModalOpen}
          user_id={user.user_id}
          address={undefined}
          onSuccess={handleAddressModalSuccess}
        />
      )}
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
