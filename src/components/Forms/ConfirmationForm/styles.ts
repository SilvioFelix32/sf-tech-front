import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3rem;
  width: 30%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.3rem;
  margin-top: 15px;
  transition-duration: 0.3s;
  border-radius: 6px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

export const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 60%;
  height: 100%;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  margin: 5px;
  width: 100%;
  height: 8rem;
`;
