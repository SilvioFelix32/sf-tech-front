import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.title === "light" ? "#f9fafb" : theme.colors.background};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.125rem;
  font-weight: 600;
  transition-duration: 0.3s;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LoadingMessage = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ErrorMessage = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;
`;
