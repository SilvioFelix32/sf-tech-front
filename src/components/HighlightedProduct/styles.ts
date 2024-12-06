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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 12rem;
`;

export const SectionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 100%;
  margin: 0 10px;
  border-radius: 6px;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition-duration: 0.3s;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 12px rgba(255, 255, 255, 0.2),
      0 8px 12px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const Picture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .image {
    outline: solid 1px ${({ theme }) => theme.colors.tertiary};
    border-radius: 6px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 2px;
  text-transform: capitalize;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  padding-top: 40px;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 1.8rem;
  }
`;
