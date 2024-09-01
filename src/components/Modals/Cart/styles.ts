import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 800px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProductCard = styled.div`
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
  max-width: 180px;

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

export const Totals = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 15px;
  margin-right: 15px;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
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

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin: 15px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
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
  padding: 0 5px;
  text-transform: capitalize;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 8px;
`;
