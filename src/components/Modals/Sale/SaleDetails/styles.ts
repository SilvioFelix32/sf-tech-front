import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const ItemTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
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

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
      theme.title === "light"
        ? "rgba(148,163,184,0.5)"
        : "rgba(148,163,184,0.6)"};
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#ffffff" : theme.colors.background};
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const InfoLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const InfoValue = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  word-break: break-all;
`;

export const AddressCard = styled.div`
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
      theme.title === "light"
        ? "rgba(148,163,184,0.5)"
        : "rgba(148,163,184,0.6)"};
  padding: 12px 14px;
  margin-bottom: 20px;
`;

export const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const AddressBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: ${({ theme }) => `${theme.colors.tertiary}25`};
  color: ${({ theme }) => theme.colors.title};
`;

