import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const FavoritesHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const FavoriteCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px 20px;
  width: 500px;
  margin-bottom: 20px;
`;

export const FavoriteTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const FavoriteButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
