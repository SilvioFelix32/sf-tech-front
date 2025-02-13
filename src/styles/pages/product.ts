import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductInfo = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

export const ProductValue = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
`;

export const ProductPrices = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 20px;
  width: 100%;
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

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
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

export const Button = styled.button`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.tertiary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.tertiary};
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
    outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 12rem;
`;

export const SectionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 5px;
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
