import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const DeliveryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
`;

