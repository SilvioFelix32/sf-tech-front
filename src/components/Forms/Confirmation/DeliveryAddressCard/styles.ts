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

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 1rem;
`;

export const RecipientName = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

export const AddressText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

