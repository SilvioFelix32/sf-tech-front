import styled from "styled-components";

export const SidebarCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;

export const SummaryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

export const PurchaseDetailsCard = styled(SidebarCard)`
  margin-top: 24px;
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

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const DetailLabel = styled.span<{ $isTeal?: boolean }>`
  color: ${({ $isTeal, theme }) => 
    $isTeal ? theme.colors.tertiary : "#4A5568"};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const DetailValue = styled.span<{ $isTeal?: boolean; $isBold?: boolean }>`
  color: ${({ $isTeal, theme }) => 
    $isTeal ? theme.colors.tertiary : "#2D3748"};
  font-size: 0.875rem;
  font-weight: ${({ $isBold }) => $isBold ? 700 : 600};
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #E2E8F0;
  margin: 16px 0;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 24px;
`;

export const TotalLabel = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.125rem;
  font-weight: 700;
`;

export const TotalValue = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.125rem;
  font-weight: 700;
`;

