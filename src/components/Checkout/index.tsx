import { HighlightedProduct } from "../HighlightedProduct";
import { CartProductCardComponent } from "./CartProductCard";
import { GiftCard } from "./GiftCard";
import { OrderSummary } from "./OrderSummary";
import { CartItemType } from "../../services/cart";
import { useCart } from "../../hooks/useCart";
import {
  CheckoutWrapper,
  CheckoutTitle,
  MainContent,
  CartSection,
  SidebarSection,
  EmptyCartMessage,
  RecommendedSection,
  RecommendedTitle,
} from "./styles";

export function Checkout() {
  const { cartItems, deleteItemFromCart } = useCart();

  return (
    <CheckoutWrapper>
      <CheckoutTitle>Seu carrinho de compras</CheckoutTitle>

      <MainContent>
        <CartSection>
          {cartItems.length === 0 ? (
            <EmptyCartMessage>Carrinho Vazio!</EmptyCartMessage>
          ) : (
            cartItems.map((item: CartItemType) => (
              <CartProductCardComponent
                key={item.product_id}
                item={item}
                onRemove={deleteItemFromCart}
              />
            ))
          )}
        </CartSection>

        <SidebarSection>
          <GiftCard />
          <OrderSummary />
        </SidebarSection>
      </MainContent>

      <RecommendedSection>
        <RecommendedTitle>Você talvez goste desses produtos!</RecommendedTitle>
        <HighlightedProduct />
      </RecommendedSection>
    </CheckoutWrapper>
  );
}
