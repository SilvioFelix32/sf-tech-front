import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

