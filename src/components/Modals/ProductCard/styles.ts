import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 1.2rem;;
    margin: 3px;
  }

  div {
    display: flex;
    width: 100%;

    .itemTitle {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 30%;
      text-transform: capitalize;
    }

    .itemValue {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 70%;
    }
  }

  button {
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
  }
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
