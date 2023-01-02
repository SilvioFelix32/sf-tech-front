import React from "react";
import { useRouter } from "next/router";
import { useCart } from "../../../context";
import { Modal as ModalComponent } from "react-responsive-modal";
import { BiTrash } from "react-icons/bi";
//styles
import "react-responsive-modal/styles.css";
import { Button, BtnGroup, Wrapper, Totals, CartItems } from "./styles";
import { CartItemType } from "../../../context/Cart/types";
import { BtnAddOrRemove } from "../../Buttons";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export function CartModal({ openModal, setOpenModal }: ModalProps) {
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  const router = useRouter();
  const {
    query: { company_id },
  } = useRouter();

  return (
    <ModalComponent
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
      center
    >
      <Wrapper>
        <CartItems>
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
        </CartItems>
        <Totals>
          <p>Total: </p> <p> R$ {cartTotalPrice.replace(".", ",")} </p>
        </Totals>
        <BtnGroup>
          <Button
            onClick={() =>
              router.push({
                pathname: "/",
                query: { query: company_id },
              })
            }
          >
            Confirmar Compra
          </Button>
          <Button type="button" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </BtnGroup>
      </Wrapper>
    </ModalComponent>
  );
}
