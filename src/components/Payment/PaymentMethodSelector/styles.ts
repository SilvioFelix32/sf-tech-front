import styled from "styled-components";

export const PaymentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
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
    transition: all 0.2s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondary};
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
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .accordion-flush .accordion-collapse {
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
  }
`;

export const SelectedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: auto;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

