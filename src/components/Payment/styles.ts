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
  width: 83%;
  padding: 10px;
  height: 100%;

  .accordion {
    background-color: ${({ theme }) => theme.colors.background};
    --cui-accordion-border-width: 0;
    --cui-accordion-bg: ${({ theme }) => theme.colors.background};
    --cui-accordion-border-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
    border-radius: 8px;
  }

  .accordion-item {
    background-color: ${({ theme }) => theme.colors.background};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
  }

  .header {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    --cui-header-border-color: ${({ theme }) => theme.colors.background};
  }

  .accordion-button {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  .accordion-flush .accordion-collapse {
    background-color: ${({ theme }) => theme.colors.background};
    border: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
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
  font-weight: 500;
  margin: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
  font-weight: 300;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.3rem;
  transition-duration: 0.3s;
  border-bottom-left-radius: 6px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
