import styled from "styled-components";

export const Wrapper = styled.div`
  height: 300px;
  width: 95%;
  margin: 10px;
  border-radius: 18px;
  display: flex;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const Picture = styled.div`
  display: flex;
  width: 125%;
  height: 100%;

  span {
    border-radius: 12px 0 0 12px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 15px;
  width: 100%;
  height: 100%;
`;

export const ProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 15px;
  width: 100%;
  height: 100%;
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 45px;
  width: 150px;
  margin: auto 0 15px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  border: solid 1px ${({ theme }) => theme.colors.quinary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  height: 45px;
  width: 150px;
  margin-bottom: 15px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  border: solid 1px ${({ theme }) => theme.colors.quinary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0 5px;
`;
