import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.8rem;;
  margin: 5px 0;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  text-transform: uppercase;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 12px;
  margin: 5px 0;
  padding: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  svg {
    height: 18px;
    width: 18px;
    margin-left: 8px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;
