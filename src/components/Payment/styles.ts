import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 75vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    align-items: start;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const DeliveryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PaymentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  .accordion {
    background-color: ${({ theme }) => theme.colors.background};
    --cui-accordion-border-width: 0;
    --cui-accordion-bg: ${({ theme }) => theme.colors.background};
    --cui-accordion-border-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 8px;
  }

  .accordion-item {
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-radius: 8px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
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
    padding: 16px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .accordion-flush .accordion-collapse {
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
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

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 16px 0;
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
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.tertiary};
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  transition-duration: 0.3s;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-top: 10px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: 1024px) {
    flex: 1;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const SidebarCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartItemImage = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  overflow: hidden;
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const CartItemName = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 4px 0;
  line-height: 1.4;
`;

export const CartItemPrice = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DeliveryRecipient = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const DeliveryText = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 500px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginTitle = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 24px 0;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin-top: 8px;
  padding: 14px 24px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(51, 193, 179, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    max-width: 350px;
    padding: 16px 32px;
    font-size: 1.125rem;
  }
`;
