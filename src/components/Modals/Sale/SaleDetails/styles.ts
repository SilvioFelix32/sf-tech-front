import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 80vh; */
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 15px;
  font-size: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.5;

  strong {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  margin: 20px 0;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ItemImage = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  margin-top: 10px;

  ${Text} {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

