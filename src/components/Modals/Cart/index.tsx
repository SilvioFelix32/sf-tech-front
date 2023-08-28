import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "../../../context";
import { Modal as ModalComponent } from "react-responsive-modal";
import { CartItemType } from "../../../context/Cart/types";
import { BtnAddOrRemove } from "../../Buttons";
import { BsXLg } from "react-icons/bs";
//styles
import "react-responsive-modal/styles.css";
import {
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
  BtnGroup,
} from "./styles";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export function CartModal({ openModal, setOpenModal }: ModalProps) {
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  const router = useRouter();

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
        <ProductCard>
          <Title>Detalhes da Compra</Title>
          {cartItems.length === 0 ? <p>Carrinho Vazio!</p> : null}
          {cartItems.map((item: CartItemType) => (
            <Product key={item.product_id}>
              <Image
                src={item.url_banner}
                alt={item.url_banner}
                width={60}
                height={60}
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
                <Text>R$ {(item.amount * item.value).toFixed(2)}</Text>
              </ProductValue>
              <Button onClick={() => deleteItemFromCart(item.product_id)}>
                <BsXLg />
              </Button>
            </Product>
          ))}
          <Totals>
            <Text>Total: R$ {cartTotalPrice.replace(".", ",")} </Text>
          </Totals>
        </ProductCard>
        <BtnGroup>
          <Button onClick={() => router.push("/shop-cart")}>
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
