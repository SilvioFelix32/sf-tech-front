import styled from "styled-components";

export const Wrapper = styled.div`
  height: 280px;
  width: 45%;
  margin: 10px;
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scaleY(1.05);
    cursor: pointer;
  }
`;

export const Picture = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  span {
    border-radius: 18px 0 0 18px;
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
  margin: 12px;
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
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  border-radius: 50%;
  z-index: 2;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  border: solid 1px ${({ theme }) => theme.colors.quinary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin: 5px;
    height: 32px;
    width: 32px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0 5px;
`;
