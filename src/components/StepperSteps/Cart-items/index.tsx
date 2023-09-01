import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import { BtnAddOrRemove } from "../../Buttons";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
import { HighlightedProductCard } from "../../HighlightedProduct";
import { formatNumber } from "../../../shared/functions";

import {
  Aside,
  MainSection,
  Totals,
  Wrapper,
  Text,
  ProductContent,
  ProductValue,
  Title,
  ProductCard,
  Button,
  Product,
  ProductQuantity,
} from "./styles";

export function CartItems() {
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  return (
    <Wrapper>
      <MainSection>
        <Title>Seu carrinho de compras</Title>
        {cartItems.length === 0 && <Text>Carrinho Vazio!</Text>}
        {cartItems.map((item: CartItemType) => (
          <ProductCard key={item.product_id}>
            <Product>
              <Image
                src={item.url_banner}
                alt={item.url_banner}
                width={100}
                height={100}
                className="image"
              />
              <ProductContent>
                <Text>{item.title}</Text>
                <Text style={{ fontSize: "0.6rem" }}>{item.subtitle}</Text>
              </ProductContent>
              <ProductQuantity>
                <BtnAddOrRemove product={item} />
              </ProductQuantity>
              <ProductValue>
                <Text>R$ {formatNumber(item.amount * item.value)}</Text>
              </ProductValue>
              <Button onClick={() => deleteItemFromCart(item.product_id)}>
                <BsXLg />
              </Button>
            </Product>
          </ProductCard>
        ))}
        <Totals>
          <Text style={{ fontWeight: 600 }}>Total: </Text>{" "}
          <Text style={{ fontWeight: 600 }}>
            R$
            {formatNumber(cartTotalPrice)}
          </Text>
        </Totals>
      </MainSection>
      <Aside>
        <Title>Você talvez goste desses produtos!</Title>
        <HighlightedProductCard />
      </Aside>
    </Wrapper>
  );
}
