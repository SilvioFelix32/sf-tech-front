import React from "react";
import { useRouter } from "next/router";
import { useCart } from "../../../context";
import { Modal as ModalComponent } from "react-responsive-modal";
import { BiTrash } from "react-icons/bi";
//styles
import "react-responsive-modal/styles.css";
import { Button, BtnGroup, Wrapper, Totals, CartItems } from "./styles";

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
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>
                <p>{item.title}:</p>
              </div>
              <div>
                <p> {item.amount}x</p>
                <p>R$ {(item.amount * item.sale_value).toFixed(2)}</p>
                <button onClick={() => deleteItemFromCart(item.id)}>
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
