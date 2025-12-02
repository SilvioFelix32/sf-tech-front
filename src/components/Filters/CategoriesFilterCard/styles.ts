import styled from "styled-components";

interface ButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 0;
  margin-bottom: 20px;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 4px;
  margin-bottom: 15px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 15px 15px 15px;
  gap: 8px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
`;

export const CategoryItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize !important;
  user-select: none;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  
  &:checked {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-color: ${({ theme }) => theme.colors.tertiary};
    
    &::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.background};
      font-size: 12px;
      font-weight: bold;
    }
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Button = styled.button<ButtonProps>`
  display: none;
`;
