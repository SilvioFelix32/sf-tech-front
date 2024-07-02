import React, { useEffect, useState } from "react";
import { Modal as ModalComponent } from "react-responsive-modal";
import { IProduct } from "../../../types";
import { productsService } from "../../../services";
//styles
import "react-responsive-modal/styles.css";
import { Button, Wrapper, CartItems } from "./styles";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  productId: string;
}

export function ProductModal({
  openModal,
  setOpenModal,
  productId,
}: ModalProps) {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (productId) {
      productsService.getById(productId).then((res) => setProduct(res));
    }
  }, [productId]);

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
          <p>Detalhes do Produto</p>
          <div>Nome do produto: {product?.title}</div>
          <div>Subtitulo: {product?.subtitle}</div>
          <div>Descrição: {product?.description}</div>
        </CartItems>
        <Button type="button" onClick={() => setOpenModal(false)}>
          Fechar
        </Button>
      </Wrapper>
    </ModalComponent>
  );
}
