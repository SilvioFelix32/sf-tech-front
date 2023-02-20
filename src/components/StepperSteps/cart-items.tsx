import { BiTrash } from "react-icons/bi";
import { useCart } from "../../context";
import { CartItemType } from "../../context/Cart/types";

import { LeftContent, MainSection, Totals } from "./styles";

export function CartItems() {
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  return (
    <>
      <LeftContent>Você talvez goste desses produtos!</LeftContent>
      <MainSection>
        <p>Detalhes da Compra</p>
        {cartItems.length === 0 ? <p>Carrinho Vazio!</p> : null}
        {cartItems.map((item: CartItemType) => (
          <div key={item.product_id}>
            <div className="itemTitle">
              <p>{item.title}:</p>
            </div>
            <div className="itemValue">
              <p> {item.amount}x</p>
              <p>R$ {(item.amount * item.value).toFixed(2)}</p>
              {/* <BtnAddOrRemove product={item} /> */}
              <button onClick={() => deleteItemFromCart(item.product_id)}>
                <BiTrash />
              </button>
            </div>
          </div>
        ))}
        <Totals>
          <p>Total: </p> <p> R$ {cartTotalPrice.replace(".", ",")} </p>
        </Totals>
      </MainSection>
    </>
  );
}
