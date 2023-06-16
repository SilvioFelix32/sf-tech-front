import React, { useEffect, useState } from "react";
import { Modal as ModalComponent } from "react-responsive-modal";
//styles
import "react-responsive-modal/styles.css";
import { Button, Wrapper, CartItems } from "./styles";
import { productsService } from "../../../services";
import { IProduct } from "../../../types";

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
    productsService.getById(productId).then((res) => setProduct(res));
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
          <div>{product?.title}</div>
          <div>{product?.subtitle}</div>
          <div>{product?.description}</div>
        </CartItems>
        <Button type="button" onClick={() => setOpenModal(false)}>
          Fechar
        </Button>
      </Wrapper>
    </ModalComponent>
  );
}
