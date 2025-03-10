import React from "react";
import Image from "next/image";
import { useFavorite } from "../../../context";
import { IFavoriteItem } from "../../../types/IFavorite";
import { Modal as ModalComponent } from "react-responsive-modal";
import { formatPrice } from "../../../utils/formatPrice";
import { BsXLg } from "react-icons/bs";
//styles
import "react-responsive-modal/styles.css";
import {
  Button,
  Wrapper,
  FavoriteItems,
  Product,
  ProductContent,
  ProductValue,
  Title,
  Text,
  ProductDescription,
  Description,
} from "./styles";

interface ModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
}

export function FavoriteModal({ isOpenModal, setIsOpenModal }: ModalProps) {
  const { favoriteItems, removeItemFromFavorites } = useFavorite();

  return (
    <ModalComponent
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpenModal}
      onClose={() => {
        setIsOpenModal(false);
      }}
      center
    >
      <Wrapper>
        <FavoriteItems>
          <Title>Seus Favoritos</Title>
          {favoriteItems.length === 0 ? (
            <Text>Sem favoritos, vamos adicionar!</Text>
          ) : null}
          {favoriteItems.map((item: IFavoriteItem) => (
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
              </ProductContent>
              <ProductDescription>
                <Description style={{ fontSize: "12px", fontWeight: "300" }}>
                  {item.description}
                </Description>
              </ProductDescription>

              <ProductValue className="itemValue">
                <Text>R$ {formatPrice(item.amount * item.price)}</Text>
              </ProductValue>
              <Button onClick={() => removeItemFromFavorites(item.product_id)}>
                <BsXLg />
              </Button>
            </Product>
          ))}
        </FavoriteItems>
        <Button type="button" onClick={() => setIsOpenModal(false)}>
          Fechar
        </Button>
      </Wrapper>
    </ModalComponent>
  );
}
