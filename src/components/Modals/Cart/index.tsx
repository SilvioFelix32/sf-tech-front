import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "../../../hooks/useCart";
import { Modal as ModalComponent } from "react-responsive-modal";
import { CartItemType } from "../../../services/cart";
import { BtnAddOrRemove } from "../../Buttons";
import { BsXLg } from "react-icons/bs";
import { formatPrice } from "../../../utils/formatPrice";
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
  ConfirmButton,
} from "./styles";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export function CartModal({ openModal, setOpenModal }: ModalProps) {
  const { cartItems, deleteItemFromCart, cartTotalPrice, totalItemsCount } =
    useCart();
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
          {cartItems.length === 0 ? <Text>Carrinho Vazio!</Text> : null}
          {cartItems.map((item: CartItemType) => (
            <Product key={item.product_id}>
              <Image
                src={item.urlBanner}
                alt={item.urlBanner}
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
                <Text>R$ {formatPrice(item.amount * item.price)}</Text>
              </ProductValue>
              <Button onClick={() => deleteItemFromCart(item.product_id)}>
                <BsXLg />
              </Button>
            </Product>
          ))}
          <Totals>
            <Text>Total: R$ {formatPrice(cartTotalPrice)} </Text>
          </Totals>
        </ProductCard>
        <BtnGroup>
          <ConfirmButton
            onClick={() => totalItemsCount > 0 && router.push("/checkout")}
            disabled={totalItemsCount <= 0}
          >
            Confirmar Compra
          </ConfirmButton>
          <ConfirmButton type="button" onClick={() => setOpenModal(false)}>
            Cancelar
          </ConfirmButton>
        </BtnGroup>
      </Wrapper>
    </ModalComponent>
  );
}
