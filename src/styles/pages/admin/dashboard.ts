import styled from "styled-components";

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
`;

export const StatCard = styled.div`
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#FFFFFF" : theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) =>
    theme.title === "light" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"};
`;

export const StatCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

export const StatLabel = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  margin: 0;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px 0;
`;

export const StatChange = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin: 0;
`;

export const StatIconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.colors.tertiary}30`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  > svg {
    color: ${({ theme }) => theme.colors.tertiary};
    width: 20px;
    height: 20px;
  }
`;

