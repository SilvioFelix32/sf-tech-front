import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#F7F8FA" : theme.colors.background};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.title === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255,255,255,0.06)"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.title === "light" ? "rgba(0, 0, 0, 0.02)" : "rgba(255,255,255,0.02)"};
  }
`;

export const TableHead = styled.th<{ $alignRight?: boolean; $alignCenter?: boolean }>`
  text-align: ${({ $alignRight, $alignCenter }) =>
    $alignCenter ? "center" : $alignRight ? "right" : "left"};
  padding: 12px 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`;

export const TableCell = styled.td<{
  $alignRight?: boolean;
  $alignCenter?: boolean;
  $fontMedium?: boolean;
  $muted?: boolean;
  $mono?: boolean;
}>`
  text-align: ${({ $alignRight, $alignCenter }) =>
    $alignCenter ? "center" : $alignRight ? "right" : "left"};
  padding: 12px 16px;
  color: ${({ theme, $muted }) =>
    $muted ? `${theme.colors.text}` : theme.colors.text};
  opacity: ${({ $muted }) => ($muted ? 0.85 : 1)};
  font-weight: ${({ $fontMedium }) => ($fontMedium ? 600 : 400)};
  font-family: ${({ $mono }) => ($mono ? "monospace" : "inherit")};
  font-size: ${({ $mono }) => ($mono ? "0.85em" : "inherit")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableEmptyRow = styled.tr``;

export const TableEmptyCell = styled.td`
  text-align: center;
  padding: 48px 16px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid
    ${({ theme }) =>
      theme.title === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.1)"};

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaginationInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  height: 28px;
  width: 28px;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.tertiary : "rgba(15, 23, 42, 0.16)"};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.tertiary : theme.colors.background};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PaginationSelect = styled.select`
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(15, 23, 42, 0.16);
  padding: 0 8px;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;
