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
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(15, 23, 42, 0.12);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

export const SaleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.title === "light" ? "rgba(15, 23, 42, 0.02)" : "rgba(255, 255, 255, 0.02)"};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const SaleHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SaleDate = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

export const SaleStatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: white;
  width: fit-content;
`;

export const SaleHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    justify-content: space-between;
  }
`;

export const SaleTotal = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SaleItemsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 16px 0;
`;

export const SaleItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SaleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px 16px 12px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background-color: ${({ theme }) => theme.colors.background};

  &:last-child {
    border-bottom: none;
  }
`;

export const SaleItemImage = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

export const SaleItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const SaleItemTitle = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
`;

export const SaleItemSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.8;
`;

export const SaleItemPrice = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  margin-left: auto;
`;

export const SaleActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 16px;
  width: 100%;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

export const SaleExpandIcon = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: rotate(${({ $isExpanded }) => ($isExpanded ? "180deg" : "0deg")});
  cursor: pointer;
  flex-shrink: 0;
`;

export const SaleContent = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? "5000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};
  padding-top: ${({ $isExpanded }) => ($isExpanded ? "20px" : "0")};
  margin-top: ${({ $isExpanded }) => ($isExpanded ? "0" : "0")};
`;
