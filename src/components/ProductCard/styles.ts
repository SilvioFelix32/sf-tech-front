import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
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
  height: 32rem;
  width: 20rem;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition-duration: 0.3s;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 12px rgba(255, 255, 255, 0.2),
      0 8px 12px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    .favorite {
      display: block;
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 28rem;
    width: 18rem;
    margin: 8px;
    padding: 8px;
  }
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: visible;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
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
  font-size: 1rem;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  margin: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 2px;
  text-transform: capitalize;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
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
