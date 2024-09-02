import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  height: 280px;
  width: 100%;
  margin: 10px;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 0;
  text-align: start;
`;

export const ProductDescription = styled.div``;

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
  font-size: 1.5rem;
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
