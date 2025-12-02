import React, { useState } from "react";
import { useFavorite } from "../../../hooks/useFavorite";
//components
import { FavoriteModal } from "../..";
import { BsHeart } from "react-icons/bs";
//styles
import { FavoriteItems, Content, Wrapper } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FavoritesButton: React.FC<ButtonProps> = ({ ...rest }) => {
  const { totalItemsCount } = useFavorite();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Wrapper {...rest} onClick={() => setIsOpenModal(true)}>
        <Content>
          <BsHeart />
          <FavoriteItems>{totalItemsCount}</FavoriteItems>
        </Content>
      </Wrapper>
      <FavoriteModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};
