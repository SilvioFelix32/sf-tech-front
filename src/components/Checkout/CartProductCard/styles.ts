import styled from "styled-components";

export const CartProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 1rem;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 0.5rem;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
  line-height: 1.4;
`;

export const ProductSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
  line-height: 1.4;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    color: #ef4444;
    background-color: rgba(239, 68, 68, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const QuantityValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

