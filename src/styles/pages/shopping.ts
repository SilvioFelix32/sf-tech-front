import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SaleContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const SaleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const SaleDate = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
`;

export const SaleTotal = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  height: 32rem;
  width: 20rem;
  padding: 10px;
  border-radius: 6px;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  transition-duration: 0.3s;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    box-shadow: 0 8px 12px rgba(255, 255, 255, 0.2),
      0 8px 12px rgba(0, 0, 0, 0.4);
  }
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: visible;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProductValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 0;
  text-align: center;
`;

export const Title = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  margin: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 0.8rem;
  margin: 2px;
  text-transform: capitalize;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  margin: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;

  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 0.7rem;
  }
`;

export const QuantityBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 1;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin: 10px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px white;
`;
