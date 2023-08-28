import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { useCart } from "../../../context";
import { CartItemType } from "../../../context/Cart/types";
import { HighlightedProductCard } from "../../HighlightedProduct";

import {
  Aside,
  MainSection,
  Totals,
  Wrapper,
  Text,
  ProductContent,
  ProductValue,
  Title,
} from "./styles";

export function CartItems() {
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();

  return (
    <Wrapper>
      <MainSection>
        <Title>Detalhes da Compra</Title>
        {cartItems.length === 0 && <Text>Carrinho Vazio!</Text>}
        {cartItems.map((item: CartItemType) => (
          <div key={item.product_id}>
            <ProductContent>
              <Image
                src={item.url_banner}
                alt={item.url_banner}
                width={100}
                height={100}
              />
              <Text>{item.title}:</Text>
            </ProductContent>
            <ProductValue>
              <Text> {item.amount}x</Text>
              <Text>R$ {(item.amount * item.value).toFixed(2)}</Text>
              <button onClick={() => deleteItemFromCart(item.product_id)}>
                <BiTrash />
              </button>
            </ProductValue>
          </div>
        ))}
        <Totals>
          <Text>Total: </Text>{" "}
          <Text> R$ {cartTotalPrice.replace(".", ",")} </Text>
        </Totals>
      </MainSection>
      <Aside>
        <Title>Você talvez goste desses produtos!</Title>
        <HighlightedProductCard />
      </Aside>
    </Wrapper>
  );
}
