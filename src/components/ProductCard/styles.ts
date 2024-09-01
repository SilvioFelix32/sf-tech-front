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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  flex-shrink: 0;
  height: 100%;
  min-height: 560px;
  width: 350px;
  margin: 10px;
  border-radius: 6px;
  transition-property: transform;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(0, 1, 1, 0.3);
    cursor: pointer;

    .favorite {
      display: block;
    }
  }
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: visible;
  border-radius: 6px 0 0 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  width: 100%;
  height: 100%;
`;

export const ProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const FavoritedButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  z-index: 2;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  background: none;
  transition: filter 0.2s;

  svg {
    margin: 8px;
    height: 35px;
    width: 35px;
  }

  @media (max-width: 760px) {
    display: flex;

    svg {
      margin: 4px;
      height: 14px;
      width: 14px;
    }
  }
`;

export const NotFavoriteButton = styled.button`
  display: none;
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 0;
  z-index: 2;
  outline: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.tertiary};
  transition: filter 0.2s;

  svg {
    margin: 8px;
    height: 35px;
    width: 35px;
  }

  @media (max-width: 760px) {
    display: flex;

    svg {
      margin: 4px;
      height: 14px;
      width: 14px;
    }
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
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 0 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;
  font-size: 0.8rem;
  margin: 2px;
  padding: 0 5px;
  text-transform: capitalize;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  margin-top: auto;
  padding: 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.text};
  }
`;
