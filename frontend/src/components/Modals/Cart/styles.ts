import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 22px;
    margin: 2px;
  }
`;

export const Totals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    margin: 2px;
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
