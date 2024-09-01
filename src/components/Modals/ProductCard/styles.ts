import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;

  p {
    margin: 3px;
    font-size: 2rem;
  }

  div {
    display: flex;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin: auto 0 10px;
  padding: 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
