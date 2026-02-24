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

export const TableHead = styled.th<{ $alignRight?: boolean }>`
  text-align: ${({ $alignRight }) => ($alignRight ? "right" : "left")};
  padding: 12px 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`;

export const TableCell = styled.td<{
  $alignRight?: boolean;
  $fontMedium?: boolean;
  $muted?: boolean;
  $mono?: boolean;
}>`
  text-align: ${({ $alignRight }) => ($alignRight ? "right" : "left")};
  padding: 12px 16px;
  color: ${({ theme, $muted }) =>
    $muted ? `${theme.colors.text}` : theme.colors.text};
  opacity: ${({ $muted }) => ($muted ? 0.85 : 1)};
  font-weight: ${({ $fontMedium }) => ($fontMedium ? 600 : 400)};
  font-family: ${({ $mono }) => ($mono ? "monospace" : "inherit")};
  font-size: ${({ $mono }) => ($mono ? "0.85em" : "inherit")};
`;

export const TableEmptyRow = styled.tr``;

export const TableEmptyCell = styled.td`
  text-align: center;
  padding: 48px 16px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;
