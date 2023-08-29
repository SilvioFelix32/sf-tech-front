import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Aside = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  //outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
  }
`;

export const MainSection = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 5px;
  margin-top: 30px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  .image {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    //background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 30px 0px rgba(0, 1, 1, 0.3);
  border-radius: 6px;
`;

export const ProductQuantity = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductContent = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductValue = styled.div`
  height: 100%;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: ${({ theme }) => theme.colors.tertiary};
    height: 24px;
    width: 24px;
  }
`;

export const Totals = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 40px;
  margin-top: 30px;
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
