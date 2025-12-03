import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProductGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ProductListPagination = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: flex-end;
  margin-right: 30px;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  width: 20rem;
  height: 30rem;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    cursor: pointer;

    .favorite {
      display: block;
    }

    img {
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 18rem;
    height: 28rem;
    margin: 8px;
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  width: 100%;
`;

export const ProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  left: 8px;
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

export const NotFavoriteIconButton = styled.button`
  display: none;
  position: absolute;
  left: 8px;
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

export const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

export const ProductDescription = styled.div``;

export const ProductTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  margin: 0;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.8rem;
  }
`;

export const ProductDescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  min-height: 2.5rem;
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

export const ProductPriceText = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 2px;
  text-transform: capitalize;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
`;

export const ProductCardFooter = styled.div`
  width: 100%;
  padding: 0 16px 16px;

  button {
    width: 100%;
    font-weight: 600;
  }
`;

export const DiscountBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.75rem;
  font-weight: 600;
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
