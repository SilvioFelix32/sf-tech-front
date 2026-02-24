import styled from "styled-components";

type StatusVariant = "approved" | "delivered" | "under_review" | "in_transit" | "default";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
`;

export const Header = styled.div`
  padding: 20px 24px 14px;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  border-bottom: 1px solid
    ${({ theme }) =>
    theme.title === "light"
      ? "rgba(148,163,184,0.4)"
      : "rgba(148,163,184,0.5)"};
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 20px;
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
  margin: 10px 0;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.tertiary}10;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
   background-color: ${({ theme }) => theme.colors.tertiary}10;
`;

export const ItemTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border-radius: 8px;
  margin-top: 10px;
  border: 1px solid
    ${({ theme }) =>
    theme.title === "light"
      ? "rgba(56,189,248,0.3)"
      : "rgba(56,189,248,0.4)"};

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

export const InfoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
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
  margin: 10px 20px;
`;

export const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const AddressContent = styled.div`
  margin-left: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
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

interface StatusBadgeProps {
  variant: StatusVariant;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-width: 1px;
  border-style: solid;

  ${({ variant, theme }) => {
    switch (variant) {
      case "approved":
        return `
          background-color: rgba(22, 163, 74, 0.08);
          color: #16a34a;
          border-color: rgba(22, 163, 74, 0.3);
        `;
      case "delivered":
        return `
          background-color: rgba(59, 130, 246, 0.08);
          color: #2563eb;
          border-color: rgba(59, 130, 246, 0.3);
        `;
      case "in_transit":
        return `
          background-color: rgba(234, 179, 8, 0.08);
          color: #eab308;
          border-color: rgba(234, 179, 8, 0.35);
        `;
      case "under_review":
        return `
          background-color: rgba(234, 179, 8, 0.1);
          color: #854d0e;
          border-color: rgba(234, 179, 8, 0.4);
        `;
      default:
        return `
          background-color: ${theme.colors.tertiary}25;
          color: ${theme.colors.title};
          border-color: ${theme.colors.tertiary};
        `;
    }
  }}
`;

export const TotalLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TotalValue = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-left: 16px;
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

export const SecondaryButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
    theme.title === "light"
      ? "rgba(148,163,184,0.7)"
      : "rgba(148,163,184,0.8)"};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
    theme.title === "light" ? "rgba(148,163,184,0.07)" : "rgba(30,64,175,0.3)"};
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`;

