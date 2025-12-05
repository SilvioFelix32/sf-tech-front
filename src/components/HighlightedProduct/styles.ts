import { styled } from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 12px;
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1201px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SectionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }
`;

export const Picture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;
