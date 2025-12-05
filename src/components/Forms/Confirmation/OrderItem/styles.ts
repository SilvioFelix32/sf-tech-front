import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const ItemImage = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const ItemSpecs = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const ItemQuantity = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const ItemPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: right;
  margin: 0;
`;

