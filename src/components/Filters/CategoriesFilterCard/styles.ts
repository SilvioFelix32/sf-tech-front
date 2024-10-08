import styled from "styled-components";

interface ButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

export const Wrapper = styled.div`
  width: 100%;
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
  font-size: 1rem;
  margin: 5px 0;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) =>
    isSelected
      ? ({ theme }) => theme.colors.tertiary
      : ({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  text-transform: capitalize;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 1rem;
  margin: 5px 0;
  padding: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
