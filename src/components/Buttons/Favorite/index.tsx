import React, { useState } from "react";
import { useFavorite } from "../../../context";
//components
import { FavoriteModal } from "../..";
import { BsHeart } from "react-icons/bs";
//styles
import { FavoriteItems, Content, Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FavoritesButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { totalItemsCount } = useFavorite();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Wrapper {...rest} onClick={() => setOpenModal(true)}>
        <Content>
          <BsHeart />
          <FavoriteItems>{totalItemsCount}</FavoriteItems>
        </Content>
      </Wrapper>
      <FavoriteModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};
