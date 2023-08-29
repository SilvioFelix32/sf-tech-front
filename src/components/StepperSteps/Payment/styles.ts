import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;
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
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 300;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  padding: 3px;
  border-bottom: solid 0.5px lightgrey;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  margin: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
  font-weight: 300;
`;

export const CardSelect = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;

  .paymentTypes {
    width: 100px;
    margin: 5px;
    padding: 10px;
    font-size: 0.7rem;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  outline: solid 1px lightgreen;
`;

export const ShopTotals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 10px;
`;
