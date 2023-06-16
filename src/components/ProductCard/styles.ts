import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
`;


export const CardWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  height: 280px;
  width: 45%;
  margin: 10px;
  border-radius: 18px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 1, 1, 0.3);
    cursor: pointer;

    .favorite {
      display: block;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
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
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  width: 80%;
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

export const FavoritedButton = styled.button`
  display: none;
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  border-radius: 50%;
  z-index: 2;
  outline: none;
  color: ${({ theme }) => theme.colors.background};
  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin: 8px;
    height: 26px;
    width: 26px;
  }
`;

export const NotFavoriteButton = styled.button`
  display: none;
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  border-radius: 50%;
  z-index: 2;
  outline: none;
  color: ${({ theme }) => theme.colors.tertiary};
  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    margin: 8px;
    height: 26px;
    width: 26px;
  }
`;

export const ProductValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 0;
  text-align: center;
`;

export const ProductDescription = styled.div``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  padding: 0 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;
  font-size: 12px;
  margin: 2px;
  padding: 0 5px;
  text-transform: capitalize;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: auto;
  padding: 10px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;