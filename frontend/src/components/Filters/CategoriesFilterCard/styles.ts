import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 18px;
  margin: 5px 0;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 16px;
  margin: 5px 0;
  padding: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
