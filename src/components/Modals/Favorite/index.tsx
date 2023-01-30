import React from "react";
import { useFavorite } from "../../../context";
import { IFavoriteItem } from "../../../types/IFavorite";
import { Modal as ModalComponent } from "react-responsive-modal";
import { BiTrash } from "react-icons/bi";
//styles
import "react-responsive-modal/styles.css";
import { Button, Wrapper, FavoriteItems } from "./styles";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export function FavoriteModal({ openModal, setOpenModal }: ModalProps) {
  const { favoriteItems, removeItemFromFavorites } = useFavorite();

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
        <FavoriteItems>
          <p>Seus Favoritos</p>
          {favoriteItems.length === 0 ? (
            <p>Sem favoritos, vamos adicionar!</p>
          ) : null}
          {favoriteItems.map((item: IFavoriteItem) => (
            <div key={item.product_id}>
              <div className="itemTitle">
                <p>{item.title}</p>,
                <p style={{ fontSize: "12px", fontWeight: "300" }}>
                  {item.description}
                </p>
              </div>
              <div className="itemValue">
                <p>R$ {(item.amount * item.value).toFixed(2)}</p>
                <button
                  onClick={() => removeItemFromFavorites(item.product_id)}
                >
                  <BiTrash />
                </button>
              </div>
            </div>
          ))}
        </FavoriteItems>
        <Button type="button" onClick={() => setOpenModal(false)}>
          Fechar
        </Button>
      </Wrapper>
    </ModalComponent>
  );
}
