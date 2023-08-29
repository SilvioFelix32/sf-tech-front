import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin: 2px;
`;

export const PaymentOptions = styled.select`
  height: 36px;
  width: 95%;
  border: none;
  border-radius: 8px;
  outline: solid 1px ${({ theme }) => theme.colors.quaternary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 10px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.2rem;
  margin: 5px;
  align-self: center;
`;
