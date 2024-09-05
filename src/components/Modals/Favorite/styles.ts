import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 800px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FavoriteItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;
export const Product = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.tertiary};

  .image {
    width: 90px;
    height: 90px;
    border-radius: 100%;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-width: 120px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 250px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 15px;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 1rem;
  margin: 2px;
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: capitalize;
  margin: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  height: 100%;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 8px;
`;
