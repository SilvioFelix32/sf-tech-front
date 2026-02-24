import styled from "styled-components";
import { PageWrapper, PageContent, PageTitle, PageButton } from "../shared";

export const AdminWrapper = styled(PageWrapper)`
  width: 100%;
  padding: 24px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AdminContent = styled(PageContent)`
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

export const AdminTitle = styled(PageTitle)`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const AdminSubtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 2rem 0;
  opacity: 0.85;
`;

export const AdminCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#FFFFFF" : theme.colors.background};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AdminCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AdminCardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const AdminCardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    color: ${({ theme }) => theme.colors.tertiary};
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const AdminCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: left;
`;

export const AdminCardCount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const AdminCardHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminSearchWrap = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 6px;
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#F7F8FA" : theme.colors.background};
  border: 1px solid rgba(0, 0, 0, 0.08);
  min-width: 220px;

  > svg {
    color: ${({ theme }) => theme.colors.text};
    width: 18px;
    height: 18px;
    margin-right: 8px;
    opacity: 0.7;
  }
`;

export const AdminSearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`;

type StatusVariant =
  | "approved"
  | "delivered"
  | "under_review"
  | "in_transit"
  | "canceled"
  | "default";

export const StatusPill = styled.span<{ $active?: boolean; $variant?: StatusVariant }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  ${({ theme, $active, $variant }) => {
    if ($variant) {
      switch ($variant) {
        case "delivered":
          return `
            background-color: ${theme.colors.tertiary}30;
            color: ${theme.colors.quaternary};
          `;
        case "approved":
          return `
            background-color: rgba(59, 130, 246, 0.18);
            color: #1d4ed8;
          `;
        case "under_review":
          return `
            background-color: rgba(249, 115, 22, 0.18);
            color: #c2410c;
          `;
        case "in_transit":
          return `
            background-color: rgba(234, 179, 8, 0.2);
            color: #854d0e;
          `;
        case "canceled":
          return `
            background-color: rgba(248, 113, 113, 0.22);
            color: #b91c1c;
          `;
        default:
          return `
            background-color: rgba(148, 163, 184, 0.25);
            color: ${theme.colors.text};
          `;
      }
    }

    return `
      background-color: ${$active ? `${theme.colors.tertiary}30` : "rgba(254, 202, 202, 0.6)"};
      color: ${$active ? theme.colors.quaternary : "#b91c1c"};
    `;
  }}
`;

export const CountBadge = styled.span<{ $highlight?: boolean }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${({ theme, $highlight }) =>
    $highlight
      ? `${theme.colors.tertiary}30`
      : theme.title === "light"
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(255, 255, 255, 0.1)"};
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.quaternary : theme.colors.text};
`;

export const AdminButton = styled(PageButton).attrs({
  variant: "primary",
})`
  margin: 0;
`;

export const AdminProductText = styled.span`
  font-weight: 500;
  margin-left: 12px;
  font-size: 1rem;
  line-height: 1.3;
  text-align: left;
`;

export const AdminContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
  margin-top: 20px;
`;

export const AdminSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
`;

