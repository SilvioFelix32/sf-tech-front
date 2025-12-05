import styled from "styled-components";

export const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  gap: 1.5rem;
`;

export const OrderTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  height: 48px;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

