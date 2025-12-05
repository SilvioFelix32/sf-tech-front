import styled from "styled-components";

export const GiftCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  gap: 1rem;
`;

export const GiftTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 0;
`;

export const GiftDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
`;

export const GiftButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

